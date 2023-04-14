// SPDX-License-Identifier: MIT
// LivelyVerse Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "../extensions/IERC20Lockable.sol";

/**
 * @title ERC20 asset lock able interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20AssetLockable {
  function tokenLock(IERC20Lockable.LockTokenRequest[] calldata lockRequests) external;

  function unlockToken(IERC20Lockable.UnLockTokenRequest[] calldata unlockRequests) external;
}
