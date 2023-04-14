// SPDX-License-Identifier: MIT
// LivelyVerse Contracts (last updated v3.0.0)

pragma solidity 0.8.19;

import "./IAsset.sol";
import "./IERC20Asset.sol";
import "../IERC20.sol";
import "../../../access/IProfileACL.sol";
import "../../../utils/Context.sol";
import "../../../utils/Address.sol";
import "../../../utils/introspection/ERC165.sol";


/**
 * @title Asset ERC20 Contract
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
contract ERC20Asset is Context, ERC165, IERC20Asset, IAsset {
  using Address for address;

  bytes32 internal _profileId;
  address internal _accessControlId;
  address internal _erc20TokenId;
  string internal _assetName;
  string internal _assetVersion;
  AssetSafeModeStatus internal _assetSafeModeStatus;

  constructor(string memory assetName_, string memory assetVersion_, address acl_, address erc20Token_, bytes32 profileId_) {
    require(Address.isContract(acl_), "Invalid LivelyGuard");
    require(Address.isContract(erc20Token_), "Invalid ERC20Token");
    if (!IERC165(erc20Token_).supportsInterface(type(IERC20).interfaceId)) revert("Illegal ERC20Token");
    if (!IERC165(acl_).supportsInterface(type(IProfileACL).interfaceId)) revert("Illegal LivelyGuard");

    _assetName = assetName_;
    _assetVersion = assetVersion_;
    _erc20TokenId = erc20Token_;
    _accessControlId = acl_;
    _profileId = profileId_;
    _assetSafeModeStatus = AssetSafeModeStatus.ENABLED;
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

  function tokenTransfer(address to, uint256 amount) external returns (bool) {
    _policyInterceptor(this.tokenTransfer.selector);
    return IERC20(_erc20TokenId).transfer(to, amount);
  }

  function tokenTransferFrom(
    address from,
    address to,
    uint256 amount
  ) external returns (bool) {
    _policyInterceptor(this.tokenTransferFrom.selector);
    return IERC20(_erc20TokenId).transferFrom(from, to, amount);
  }

  function tokenApprove(address spender, uint256 amount) external returns (bool) {
    _policyInterceptor(this.tokenApprove.selector);
    return IERC20(_erc20TokenId).approve(spender, amount);
  }

  function assetSetSafeMode(AssetSafeModeStatus status) public override returns (bool) {
    IProfileACL.ProfileAuthorizationStatus aclStatus = IProfileACL(_accessControlId).profileHasAccountAccess(
      _profileId,
      address(this),
      this.assetSetSafeMode.selector,
      _msgSender()
    );
    if (aclStatus != IProfileACL.ProfileAuthorizationStatus.PERMITTED) revert IProfileACL.ProfileACLActionForbidden(aclStatus);
    _assetSafeModeStatus = status;
    emit AssetSafeModeUpdated(_msgSender(), address(this), status);
    return true;
  }

  function withdrawBalance(address recepient) public {
    _policyInterceptor(this.withdrawBalance.selector);
    payable(recepient).transfer(address(this).balance);
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

  function assetVersion() external view returns (string memory) {
    return _assetVersion;
  }

  function assetAccessControl() external view returns (address) {
    return _accessControlId;
  }

  function assetProfileId() external view returns (bytes32) {
    return _profileId;
  }

  function assetBalance() external view returns (uint256) {
    return IERC20(_erc20TokenId).balanceOf(address(this));
  }

  function assetInfo() external view returns (AssetInfo memory) {
    return
      AssetInfo({
        profileId: _profileId,
        balance: IERC20(_erc20TokenId).balanceOf(address(this)),
        name: _assetName,
        version: _assetVersion,
        token: _erc20TokenId,
        accessControl: _accessControlId,
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

  function _policyInterceptor(bytes4 funcSelector) internal {
    require(_assetSafeModeStatus == AssetSafeModeStatus.DISABLED, "SafeMode: Rejected");
    IProfileACL.ProfileAuthorizationStatus aclStatus = IProfileACL(_accessControlId).profileHasAccountAccess(
      _profileId,
      address(this),
      funcSelector,
      _msgSender()
    );
    if (aclStatus != IProfileACL.ProfileAuthorizationStatus.PERMITTED) revert IProfileACL.ProfileACLActionForbidden(aclStatus);
  }
}
