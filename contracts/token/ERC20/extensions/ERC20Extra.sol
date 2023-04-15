// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./IERC20Extra.sol";
import "../ERC20.sol";

/**
 * @dev Extension of {ERC20} that allows extra functionality to token holders
 */
abstract contract ERC20Extra is ERC20, IERC20Extra {

  /**
  * @dev Atomically increases the allowance granted to `spender` by the caller.
  *
  * This is an alternative to {approve} that can be used as a mitigation for
  * problems described in {IERC20-approve}.
  *
  * Emits an {Approval} event indicating the updated allowance.
  *
  * Requirements:
  *
  * - `spender` cannot be the zero address.
  */
  function increaseAllowance(
      address spender,
      uint256 amount
  ) external returns (uint256) {
      _tokenPolicyInterceptor(this.increaseAllowance.selector);
      address owner = _msgSender();
      uint256 currentAllowance = _allowances[owner][spender] + amount;
      _approve(owner, spender, currentAllowance);
      return currentAllowance;
  }

  /**
  * @dev Atomically decreases the allowance granted to `spender` by the caller.
  *
  * This is an alternative to {approve} that can be used as a mitigation for
  * problems described in {IERC20-approve}.
  *
  * Emits an {Approval} event indicating the updated allowance.
  *
  * Requirements:
  *
  * - `spender` cannot be the zero address.
  * - `spender` must have allowance for the caller of at least
  * `subtractedValue`.
  */
  function decreaseAllowance(
      address spender,
      uint256 amount
  ) external returns (uint256) {
      _tokenPolicyInterceptor(this.decreaseAllowance.selector);
      address owner = _msgSender();
      _spendAllowance(owner, spender, amount);
      return _allowances[owner][spender];
  }

  /**
  * @dev batch transfer tokens from sender to many recipients.
  *
  */
  function batchTransfer(BatchTransferRequest[] calldata requests) external {
    _tokenPolicyInterceptor(this.batchTransfer.selector);
    for (uint256 i = 0; i < requests.length; i++) {
        _transfer(_msgSender(), requests[i].to, requests[i].amount);
    }
  }

  /**
  * @dev batch transfer tokens from many senders to many recipients.
  *
  */
  function batchTransferFrom(BatchTransferFromRequest[] calldata requests) external {
    _tokenPolicyInterceptor(this.batchTransferFrom.selector);
    for (uint256 i = 0; i < requests.length; i++) {
        _transfer(requests[i].from, requests[i].to, requests[i].amount);
    }
  }
}
