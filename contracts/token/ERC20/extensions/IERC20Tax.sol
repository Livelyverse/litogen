// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

/**
 * @title ERC20 Token Tax Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20Tax {
  struct TaxWhitelistUpdateRequest {
    address account;
    bool isDeleted;
  }

  event TaxRateUpdated(address indexed sender, uint256 rate);

  event TaxWhitelistUpdated(address indexed sender, address indexed account, bool isDeleted);

  function updateTaxRate(uint256 taxRate) external returns (bool);

  function updateTaxWhitelist(TaxWhitelistUpdateRequest[] calldata request) external returns (bool);

  function taxRate() external view returns (uint256);

  function taxTreasury() external view returns (address);

  function taxWhitelist(uint256 offset) external view returns (address[] memory);
}
