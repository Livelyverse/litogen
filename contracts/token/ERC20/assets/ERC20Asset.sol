// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v2.2.0)

pragma solidity 0.8.19;

import "./IAsset.sol";
import "./IERC20Asset.sol";
import "../IERC20.sol";
import "../extensions/IERC20Metadata.sol";
import "../../../access/IProfileACL.sol";
import "../../../access/Ownable.sol";
import "../../../utils/Address.sol";
import "../../../utils/ERC165.sol";


/**
 * @title Asset ERC20 Contract
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
contract ERC20Asset is Ownable, ERC165, IERC20Asset, IAsset {
  using Address for address;

  string constant internal _LITOGEN_ASSET_VERSION = "v2.2.0-Litogen";

  address internal _acl;
  string internal _profileName;
  address internal _erc20TokenId;
  string internal _assetName;
  AssetSafeModeStatus internal _assetSafeModeStatus;  

  constructor(string memory assetName_, string memory profileName_, address erc20Token_) {
    require(bytes(assetName_).length >= 4, "Invalid Name");
    require(Address.isContract(erc20Token_), "Invalid ERC20Token");
    if (
      !IERC165(erc20Token_).supportsInterface(type(IERC20).interfaceId) &&
      !IERC165(erc20Token_).supportsInterface(type(IERC20Metadata).interfaceId)
    ) revert("Illegal ERC20Token");

    _assetName = assetName_;
    _erc20TokenId = erc20Token_;
    _assetSafeModeStatus = AssetSafeModeStatus.DISABLED;

    _profileName = profileName_;
  }

  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return
      interfaceId == type(IAsset).interfaceId ||
      interfaceId == type(IERC20Asset).interfaceId ||
      super.supportsInterface(interfaceId);
  }

  function assetSetProfile(string memory profileName) external {
    _policyInterceptor(this.assetSetProfile.selector);
    emit AssetProfileUpdated(_msgSender(), _profileName, profileName);
    _profileName = profileName;
  }

  /**
   * @dev Moves `amount` tokens from the caller's account to `to`.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   */
  function tokenTransfer(address to, uint256 amount) external returns (bool) {
    _policyInterceptor(this.tokenTransfer.selector);
    return IERC20(_erc20TokenId).transfer(to, amount);
  }

  /**
   * @dev Moves `amount` tokens from `from` to `to` using the
   * allowance mechanism. `amount` is then deducted from the caller's
   * allowance.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   */
  function tokenTransferFrom(
    address from,
    address to,
    uint256 amount
  ) external returns (bool) {
    _policyInterceptor(this.tokenTransferFrom.selector);
    return IERC20(_erc20TokenId).transferFrom(from, to, amount);
  }


  /**
   * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
   *
   * Returns a boolean value indicating whether the operation succeeded.
   *
   */
  function tokenApprove(address spender, uint256 amount) external returns (bool) {
    _policyInterceptor(this.tokenApprove.selector);
    return IERC20(_erc20TokenId).approve(spender, amount);
  }

  /**
   * @dev Returns the amount of tokens owned by `account`.
   */
  function tokenBalance() external view returns (uint256) {
    return IERC20(_erc20TokenId).balanceOf(address(this));
  }

  function assetSetSafeMode(AssetSafeModeStatus status) public override returns (bool) {
    IProfileACL.ProfileAuthorizationStatus aclStatus = IProfileACL(_acl).profileHasAccountAccess(
      keccak256(abi.encodePacked(_profileName)),
      address(this),
      this.assetSetSafeMode.selector,
      _msgSender()
    );
    if (aclStatus != IProfileACL.ProfileAuthorizationStatus.PERMITTED) revert IProfileACL.ProfileACLActionForbidden(aclStatus);
    _assetSafeModeStatus = status;
    emit AssetSafeModeUpdated(_msgSender(), address(this), status);
    return true;
  }

  function assetSafeMode() external view returns (AssetSafeModeStatus) {
    return _assetSafeModeStatus;
  }

  function assetType() external pure returns (AssetType) {
    return AssetType.ERC20;
  }

  function assetToken() external view returns (address) {
    return _erc20TokenId;
  }

  function assetName() external view returns (string memory) {
    return _assetName;
  }

  function assetVersion() external pure returns (string memory) {
    return _LITOGEN_ASSET_VERSION;
  }

  function assetAccessControl() external view returns (address) {
    return _acl;
  }

  function assetProfile() external view returns (string memory) {
    return _profileName;
  }

  function assetInfo() external view returns (AssetInfo memory) {
    return
      AssetInfo({
        profile: _profileName,
        name: _assetName,
        version: _LITOGEN_ASSET_VERSION,
        token: _erc20TokenId,
        accessControl: _acl,
        owner: _owner,
        atype: AssetType.ERC20,
        status: _assetSafeModeStatus
      });
  }

  // solhint-disable-next-line
  receive() external payable {}

  // solhint-disable-next-line
  fallback() external payable {}

  function balance() public view returns (uint256) {
    return address(this).balance;
  }

  function withdrawBalance(address recepient) public {
    _policyInterceptor(this.withdrawBalance.selector);
    payable(recepient).transfer(address(this).balance);
  }


  /**
   * @dev Hook that is called before any transactional function of token.
   * it authoriaze transaction sender by Liguard or by ownable 
   */
  function _policyInterceptor(bytes4 funcSelector) internal virtual {
    if(_acl != address(0)) { 
      IProfileACL.ProfileAuthorizationStatus status = IProfileACL(_acl).profileHasAccountAccess(keccak256(abi.encodePacked(_profileName)), address(this), funcSelector, _msgSender());
      if (status != IProfileACL.ProfileAuthorizationStatus.PERMITTED) revert IProfileACL.ProfileACLActionForbidden(status);
    } else if(funcSelector == this.transferOwnership.selector){
      _checkOwner();
    }
  }

  /**
   * @dev Transfers ownership of the contract to a new account (`newOwner`).
   * Internal function without access restriction.
   */
  function _transferOwnership(address newOwner) internal override virtual {        
     _policyInterceptor(this.transferOwnership.selector);
    address oldOwner = _owner;
    address oldAcl = _acl;
    if (Address.isContract(newOwner)) {
      if (!IERC165(newOwner).supportsInterface(type(IProfileACL).interfaceId)) {
        revert("Illegal ACL");                    
      }
      _acl = newOwner;
      _owner = address(0);  
    } else {        
      _owner = newOwner;
      _acl = address(0);
    }         
    
    emit OwnershipTransferred(oldOwner != address(0) ? oldOwner : oldAcl, newOwner);
  }
}
