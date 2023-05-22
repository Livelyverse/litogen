// SPDX-License-Identifier: MIT
// LivelyVerse Contracts (last updated v2.2.0)

pragma solidity 0.8.19;

/**
 * @title ERC20 Asset Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20Asset {

  function tokenTransfer(address to, uint256 amount) external returns (bool);

  function tokenTransferFrom(
    address from,
    address to,
    uint256 amount
  ) external returns (bool);

  function tokenApprove(address spender, uint256 amount) external returns (bool);

  function tokenBalance() external view returns (uint256);
}
