// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./IERC20Pausable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "../ERC20.sol";

/**
 * @dev ERC20 token with pausable token transfers, minting and burning.
 *
 * Useful for scenarios such as preventing trades until the end of an evaluation
 * period, or having an emergency switch for freezing all token transfers in the
 * event of a large bug, or freeze specific account to prevent token transfer
 */
abstract contract ERC20Pausable is ERC20, IERC20Pausable {
  using EnumerableSet for EnumerableSet.AddressSet;
  
  EnumerableSet.AddressSet internal pausedList;
  bool internal _isPaused;

  /**
   * @dev Modifier to make a function callable only when the contract is not paused.
   *
   * Requirements:
   *
   * - The contract must not be paused.
   */
  modifier whenNotPaused() {
    _requireNotPaused();
    _;
  }

  /**
   * @dev Modifier to make a function callable only when the contract is paused.
   *
   * Requirements:
   *
   * - The contract must be paused.
   */
  modifier whenPaused() {
    _requirePaused();
    _;
  }

  /**
   * @dev Returns true if the contract is paused, and false otherwise.
   */
  function paused() public view virtual returns (bool) {
    return _isPaused;
  }

  /**
   * @dev Throws if the contract is paused.
   */
  function _requireNotPaused() internal view virtual {
    require(!paused(), "Pausable: paused");
  }

  /**
   * @dev Throws if the contract is not paused.
   */
  function _requirePaused() internal view virtual {
    require(paused(), "Pausable: not paused");
  }

  /**
   * @dev freeze account which prevents to transfer tokens
   */
  function pause(address account) external {
    _tokenPolicyInterceptor(this.pause.selector);
    require(account != address(0), "Illegal Address");
    require(!pausedList.contains(account), "Already Paused");
    pausedList.add(account);
    emit Paused(_msgSender(), account);
  }

  /**
   * @dev unfreeze account which permits to transfer tokens
   */
  function unpause(address account) external {
    _tokenPolicyInterceptor(this.unpause.selector);
    require(account != address(0), "Illegal Address");
    require(pausedList.contains(account), "Not Found");
    pausedList.remove(account);
    emit Unpaused(_msgSender(), account);
  }

  /**
   * @dev Triggers stopped state.
   */
  function pauseAll() external {
    _tokenPolicyInterceptor(this.pauseAll.selector);
    _isPaused = true;
    emit PausedAll(_msgSender());
  }

  /**
   * @dev Returns to normal state.
   */    
  function unpauseAll() external {
    _tokenPolicyInterceptor(this.unpauseAll.selector);
    _isPaused = false;
    emit UnpausedAll(_msgSender());
  }

  /**
   * @dev See {ERC20-_beforeTokenTransfer}.
   *
   * Requirements:
   *
   * - the contract must not be paused.
   * - `from` must not be paused.
   */
  function _beforeTokenTransfer(
      address from,
      address to,
      uint256 amount
  ) internal virtual override {
      super._beforeTokenTransfer(from, to, amount);

      require(!paused(), "Token Paused");
      require(!pausedList.contains(from), "Account Paused");
  }
}
