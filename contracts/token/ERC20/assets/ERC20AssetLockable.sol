// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.2)

pragma solidity 0.8.19;

import "./ERC20Asset.sol";
import "./IERC20AssetLockable.sol";
import "../extensions/IERC20Lockable.sol";

/**
 * @title ERC20 Asset Lockable Contract
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
abstract contract ERC20AssetLockable is ERC20Asset, IERC20AssetLockable {

  constructor() {}

  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return
      interfaceId == type(IERC20Lockable).interfaceId ||
      super.supportsInterface(interfaceId);
  }

  function tokenLock(IERC20Lockable.LockTokenRequest[] calldata lockRequests) external {
    _policyInterceptor(this.tokenLock.selector);
    for (uint256 i = 0; i < lockRequests.length; i++) {
      require(lockRequests[i].source == address(this), "Illegal Address");
    }

    IERC20Lockable(_erc20TokenId).lockToken(lockRequests);
  }

  function unlockToken(IERC20Lockable.UnLockTokenRequest[] calldata unlockRequests) external {
    require(_acl != address(0), "Unlock Not Supported");
    _policyInterceptor(this.tokenLock.selector);
    IERC20Lockable(_erc20TokenId).unlockToken(unlockRequests);
  }
}
