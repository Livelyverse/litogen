// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.2)

pragma solidity 0.8.19;

/**
 * @title ERC20 Token Tax Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20Taxable {
  struct TaxWhitelistUpdateRequest {
    address account;
    bool isDeleted;
  }

  event TaxRateUpdated(address indexed sender, uint256 rate);

  event TaxTreasuryUpdated(address indexed sender, address account);

  event TaxWhitelistUpdated(address indexed sender, address indexed account, bool isDeleted);

  function taxUpdateRate(uint256 taxRate) external returns (bool);

  function taxUpdateTreasury(address treasury) external returns (bool);

  function taxUpdateWhitelist(TaxWhitelistUpdateRequest[] calldata request) external returns (bool);

  function taxRate() external view returns (uint256);

  function taxTreasury() external view returns (address);

  function taxWhitelist(uint256 offset) external view returns (address[] memory);
}
