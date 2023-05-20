// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v2.1.0)

pragma solidity 0.8.19;

import "./IERC20Taxable.sol";
import "../ERC20.sol";
import "../../../utils/math/BasisPointsMath.sol";
import "../../../utils/structs/EnumerableSet.sol";

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

  constructor(uint256 taxRate_) {
    _taxRate = taxRate_;
    _taxTreasury = _msgSender();
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
    uint length = _taxWhitelist.length();
    address[] memory result = new address[](length > 100 ? 100 : length);
    for(uint256 i = 0; i + offset < result.length && i < 100; i++) {
      result[i] = _taxWhitelist.at(i + offset);
    }
    return result;
  }

  /**
   * @dev update tax rate
   */
  function taxUpdateRate(uint256 rate) external returns (bool) {
    _policyInterceptor(this.taxUpdateRate.selector);
    _taxRate = rate;
    emit TaxRateUpdated(_msgSender(), rate);
    return true;
  }

  /**
   * @dev update tax treasury
   */
  function taxUpdateTreasury(address treasury) external returns (bool) {
    _policyInterceptor(this.taxUpdateRate.selector);
    require(treasury != address(0), "Invalid Address");
    _taxTreasury = treasury;
    emit TaxTreasuryUpdated(_msgSender(), _taxTreasury);
    return true;
  }

  /**
   * @dev update tax whitelist accounts
   */
  function taxUpdateWhitelist(TaxWhitelistUpdateRequest[] calldata request) external returns (bool) {
    _policyInterceptor(this.taxUpdateWhitelist.selector);
    for (uint256 i = 0; i < request.length; i++) {
      _taxUpdateWhitelist(request[i].account, request[i].isDeleted);
    }
    return true;
  }

  /**
   * @dev Returns true if this contract implements the interface defined by
   * `interfaceId`. See the corresponding
   * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
   * to learn more about how these ids are created.
   *
   * This function call must use less than 30 000 gas.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
      return interfaceId == type(IERC20Taxable).interfaceId || super.supportsInterface(interfaceId);
  }

  function _isAccountWhitelist(address account) internal view returns (bool) {
    return _taxWhitelist.contains(account);
  }
 
  /**
   * @dev Internal function to implement tax update whitelist.
   */
  function _taxUpdateWhitelist(address account, bool isDeleted) internal returns (bool) {
    require(account != address(0), "Invalid Address");
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

  /**
   * @dev Hook that is called before any transactional function of token.
   * it authoriaze transaction sender by Liguard
   */
  function _policyInterceptor(bytes4 funcSelector) internal override virtual {
    super._policyInterceptor(funcSelector);
    if(_owner != address(0) &&
      (funcSelector == this.taxUpdateRate.selector || 
      funcSelector == this.taxUpdateTreasury.selector || 
      funcSelector == this.taxUpdateWhitelist.selector)
    ) {
       _checkOwner();
    }
  }

}