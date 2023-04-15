// SPDX-License-Identifier: MIT
// LivelyVerse Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "../extensions/IERC20Extra.sol";

/**
 * @title ERC20 Asset Extra Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20AssetExtra {
  
  function tokenBatchTransfer(IERC20Extra.BatchTransferRequest[] calldata request) external;
  
  function tokenBatchTransferFrom(IERC20Extra.BatchTransferFromRequest[] calldata request) external;

  function tokenIncreaseAllowance(address spender, uint256 amount) external;

  function tokenDecreaseAllowance(address spender, uint256 amount) external;
}
