// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.1.0)

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
    string profile;
    string name;
    string version;
    address token;
    address accessControl;
    address owner;
    AssetType atype;
    AssetSafeModeStatus status;
  }

  event AssetSafeModeUpdated(address indexed sender, address indexed assetId, AssetSafeModeStatus status);

  event AssetProfileUpdated(address indexed sender, string indexed oldProfile, string indexed newProfile);
      
  function assetSetSafeMode(AssetSafeModeStatus status) external returns (bool);

  function assetSafeMode() external view returns (AssetSafeModeStatus);

  function assetType() external view returns (AssetType);

  function assetToken() external view returns (address);

  function assetName() external view returns (string memory);

  function assetVersion() external view returns (string memory);

  function assetAccessControl() external view returns (address);

  function assetProfile() external view returns (string memory);

  function assetInfo() external view returns (AssetInfo memory);

  function assetSetProfile(string memory profile) external;
}
