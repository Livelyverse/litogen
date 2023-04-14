// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./IERC20Extra.sol";
import "../ERC20.sol";
import "../../../utils/Context.sol";

/**
 * @dev Extension of {ERC20} that allows extra functionality to token holders
 */
abstract contract ERC20Extra is Context, ERC20, IERC20Extra {

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
  function increaseAllowance(address spender, uint256 amount) external returns (uint256) {
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
  function decreaseAllowance(address spender, uint256 amount) external returns (uint256) {
    _tokenPolicyInterceptor(this.decreaseAllowance.selector);
    address owner = _msgSender();
    _spendAllowance(owner, spender, amount);
    return _allowances[owner][spender];
  }


  function batchTransfer(BatchTransferRequest[] calldata request) external returns (bool) {
    _tokenPolicyInterceptor(this.batchTransfer.selector);
    uint256 totalAmount = 0;
    for (uint256 i = 0; i < request.length; i++) {
      totalAmount += request[i].amount;
      _transfer(_msgSender(), request[i].to, request[i].amount);
    }

    return true;
  }

  function batchTransferFrom(BatchTransferFromRequest[] calldata request) external returns (bool) {
    _tokenPolicyInterceptor(this.batchTransferFrom.selector);
    uint256 totalAmount = 0;
    for (uint256 i = 0; i < request.length; i++) {    
      totalAmount += request[i].amount;
      _transfer(request[i].from, request[i].to, request[i].amount);
    }

    return true;
  }

}