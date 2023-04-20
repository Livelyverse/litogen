// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./token/ERC20/ERC20.sol";
import "./token/ERC20/extensions/ERC20Burnable.sol";
import "./token/ERC20/extensions/ERC20Mintable.sol";
import "./token/ERC20/extensions/ERC20Pausable.sol";
import "./token/ERC20/extensions/ERC20Extra.sol";
import "./token/ERC20/extensions/ERC20Lockable.sol";
import "./token/ERC20/extensions/ERC20Permitable.sol";
import "./token/ERC20/extensions/ERC20Taxable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./utils/BasisPointsMath.sol";
import "./token/ERC20/assets/IAsset.sol";

contract TestToken is ERC20, ERC20Burnable, ERC20Mintable, ERC20Pausable, ERC20Extra, ERC20Lockable, ERC20Permitable, ERC20Taxable {
  using SafeMath for uint256;
  using BasisPointsMath for uint256;

  mapping(string => uint256) internal _distributes;

  constructor(address acl_)
    ERC20("TestToken", "Test", "1.0.0", "TestToken", acl_, 9)
    ERC20Permitable("TestToken", "1.0.0")
    ERC20Taxable(3)
  {
    _totalSupply = 1000 * 10 ** 9;
    _balances[_msgSender()] = _totalSupply;
    _distributes["publicSales"] = 500 * 10 ** 9;
    _distributes["privateSales"] = 300 * 10 ** 9;
    _distributes["fundingTeam"] = 200 * 10 ** 9;
  }

  function _beforeTokenTransfer(address from, address to, uint256 amount)
    internal
    override
  {
    require(!_isPaused, "Token Paused");
    require(!_isAccountPaused(from), "Account Paused");
    super._beforeTokenTransfer(from, to, amount);
  }

  function _transfer(address from, address to, uint256 amount) internal override {
    if (_taxRate > 0 && !_isAccountWhitelist(_msgSender())) {
      uint256 tax = amount.mulBP(_taxRate);
      uint256 amountMinesTax = amount.sub(tax, "Illegal Amount");
      super._transfer(from, _taxTreasury, tax);
      super._transfer(from, to, amountMinesTax);
    } else {
      super._transfer(_msgSender(), to, amount);
    }
  }

  function distributeToken(address[] calldata assets, address taxTreasury) public {
    _tokenPolicyInterceptor(this.distributeToken.selector);
    _taxTreasury = taxTreasury;
    for (uint256 i = 0; i < assets.length; i++) {
      if (!IERC165(assets[i]).supportsInterface(type(IAsset).interfaceId)) revert("Illegal IAsset");
      _transfer(_msgSender(), assets[i], _distributes[IAsset(assets[i]).assetName()]);
    }
  }

  // The following functions are overrides required by Solidity.

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC20, ERC20Burnable, ERC20Mintable, ERC20Pausable, ERC20Extra, ERC20Lockable, ERC20Permitable, ERC20Taxable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
