// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

/**
 * @title ERC20 Token Extra Interface
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
interface IERC20Extra {
  struct BatchTransferRequest {
    address to;
    uint256 amount;
  }

  struct BatchTransferFromRequest {
    address from;
    address to;
    uint256 amount;
  }

  event ApprovalIncreased(address indexed owner, address indexed spender, uint256 amount);

  event ApprovalDecreased(address indexed owner, address indexed spender, uint256 amount);

  event TransferFrom(address indexed sender, address indexed from, address indexed to, uint256 amount);

  event BatchTransfer(address indexed sender, uint256 totalAmount);

  event BatchTransferFrom(address indexed sender, uint256 totalAmount);

  function increaseAllowance(address spender, uint256 amount) external returns (uint256);

  function decreaseAllowance(address spender, uint256 amount) external returns (uint256);

  function batchTransfer(BatchTransferRequest[] calldata request) external returns (bool);

  function batchTransferFrom(BatchTransferFromRequest[] calldata request) external returns (bool);
}
