// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./IERC20Taxable.sol";
import "../ERC20.sol";
import "../../../utils/BasisPointsMath.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
 * @dev Extension of {ERC20} that allows get tax rate from each transfer token
 */
abstract contract ERC20Taxable is ERC20, IERC20Taxable {
  using EnumerableSet for EnumerableSet.AddressSet;
  using BasisPointsMath for uint256;
  using SafeMath for uint256;

  EnumerableSet.AddressSet internal _taxWhitelist;
  uint256 internal _taxRate;
  address internal _taxTreasury;

  constructor(uint256 taxRate_, address taxTreasury_) {
    require(taxTreasury_ != address(0), "Invalid Address");
    _taxRate = taxRate_;
    _taxTreasury = taxTreasury_;
  }

  /**
   * @dev get tax rate percentage
   */
  function taxRate() external view returns (uint256) {
    return _taxRate;
  }

  /**
   * @dev get tax treasury account
   */
  function taxTreasury() external view returns (address) {
    return _taxTreasury;
  }

  /**
   * @dev get tax whitelist accounts
   */
  function taxWhitelist(uint256 offset) external view returns (address[] memory) {
    address[] memory result = new address[](100);
    for(uint256 i = 0; i + offset < _taxWhitelist.length() && i < 100; i++) {
      result[i] = _taxWhitelist.at(i + offset);
    }
    return result;
  }

  /**
   * @dev update tax rate
   */
  function taxUpdateRate(uint256 rate) external returns (bool) {
    _tokenPolicyInterceptor(this.taxUpdateRate.selector);
    _taxRate = rate;
    emit TaxRateUpdated(_msgSender(), rate);
    return true;
  }

  /**
   * @dev update tax treasury
   */
  function taxUpdateTreasury(address treasury) external returns (bool) {
    _tokenPolicyInterceptor(this.taxUpdateRate.selector);
    require(treasury != address(0), "Invalid Address");
    _taxTreasury = treasury;
    emit TaxTreasuryUpdated(_msgSender(), _taxTreasury);
    return true;
  }

  /**
   * @dev update tax whitelist accounts
   */
  function taxUpdateWhitelist(TaxWhitelistUpdateRequest[] calldata request) external returns (bool) {
    _tokenPolicyInterceptor(this.taxUpdateWhitelist.selector);
    for (uint256 i = 0; i < request.length; i++) {
      _taxUpdateWhitelist(request[i].account, request[i].isDeleted);
    }
    return true;
  }

  /**
   * @dev Moves `amount` of tokens from `from` to `to`.
   *
   * This function is overrider _trasnfer of token to support take tax
   *
   * Emits a {Transfer} event.
   *
   * Requirements:
   *
   * - `from` cannot be the zero address.
   * - `to` cannot be the zero address.
   * - `from` must have a balance of at least `amount`.
   */
  function _transfer(
      address from,
      address to,
      uint256 amount
  ) internal override {
    if (_taxRate > 0 && !_taxWhitelist.contains(_msgSender())) {
      uint256 tax = amount.mulBP(_taxRate);
      uint256 amountMinesTax = amount.sub(tax, "Illegal Amount");
      super._transfer(from, _taxTreasury, tax);
      super._transfer(from, to, amountMinesTax);
    } else {
      super._transfer(_msgSender(), to, amount);
    }        
  }

  /**
   * @dev Internal function to implement tax update whitelist.
   */
  function _taxUpdateWhitelist(address account, bool isDeleted) internal returns (bool) {
    require(account != address(0), "Illegal Address");
    if (isDeleted) {
      require(_taxWhitelist.contains(account), "Not Found");
      _taxWhitelist.remove(account);
    } else {
      require(!_taxWhitelist.contains(account), "Already Exists");
      _taxWhitelist.add(account);
    }
    emit TaxWhitelistUpdated(_msgSender(), account, isDeleted);
    return true;
  }

}