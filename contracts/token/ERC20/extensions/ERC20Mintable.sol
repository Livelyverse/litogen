// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./IERC20Mintable.sol";
import "../ERC20.sol";
import "../../../utils/Context.sol";

/**
 * @dev Extension of {ERC20} that allows token holders to mint both their own
 * tokens and others.
 */
abstract contract ERC20Mintable is Context, ERC20, IERC20Mintable {
    /**
     * @dev Creates `amount` tokens and assigns them to `sender`, increasing
     * the total supply.
     */
    function mint(uint256 amount) external virtual {
      _tokenPolicyInterceptor(this.mint.selector);
      _mint(_msgSender(), _msgSender(), amount);
    }

    /**
     * @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function mintTo(address account, uint256 amount) external virtual {
      _tokenPolicyInterceptor(this.mintTo.selector);
      _mint(_msgSender(), account, amount);
    }


    /** 
     * @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Mint} event
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `amount` should be grater than zero
     */
    function _mint(address sender, address account, uint256 amount) internal virtual {
        require(account != address(0), "Mint: Invalid Address");
        require(amount > 0, "Mint: Invalid Amount");

        _totalSupply += amount;
        unchecked {
            // Overflow not possible: balance + amount is at most totalSupply + amount, which is checked above.
            _balances[account] += amount;
        }
        emit Mint(sender, account, amount, _totalSupply);
    }

}