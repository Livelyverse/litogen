// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.1)

pragma solidity 0.8.19;

/**
 * @title Base Asset Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IAsset {
  enum AssetSafeModeStatus {
    NONE,
    DISABLED,
    ENABLED
  }

  enum AssetType {
    NONE,
    ERC20,
    ERC721,
    ERC1155
  }

  struct AssetInfo {
    bytes32 profileId;
    uint256 balance;
    string name;
    string version;
    address token;
    address accessControl;
    AssetType atype;
    AssetSafeModeStatus status;
  }

  event AssetSafeModeUpdated(address indexed sender, address indexed assetId, AssetSafeModeStatus status);

  function assetSetSafeMode(AssetSafeModeStatus status) external returns (bool);

  function assetSafeMode() external view returns (AssetSafeModeStatus);

  function assetType() external view returns (AssetType);

  function assetToken() external view returns (address);

  function assetName() external view returns (string memory);

  function assetVersion() external view returns (string memory);

  function assetAccessControl() external view returns (address);

  function assetProfileId() external view returns (bytes32);

  function assetBalance() external view returns (uint256);

  function assetInfo() external view returns (AssetInfo memory);
}
