// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.1)

pragma solidity 0.8.19;

import "./ERC20Asset.sol";
import "./IERC20AssetExtra.sol";
import "../extensions/IERC20Extra.sol";

/**
 * @title ERC20 Asset Extra Contract
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
abstract contract ERC20AssetExtra is ERC20Asset, IERC20AssetExtra {

  constructor() {}

  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(IERC20AssetExtra).interfaceId || super.supportsInterface(interfaceId);
  }

  function tokenBatchTransfer(IERC20Extra.BatchTransferRequest[] calldata request) external {
    _policyInterceptor(this.tokenBatchTransfer.selector);
    IERC20Extra(_erc20TokenId).batchTransfer(request);
  }  

  function tokenBatchTransferFrom(IERC20Extra.BatchTransferFromRequest[] calldata request) external {
    _policyInterceptor(this.tokenBatchTransferFrom.selector);
    IERC20Extra(_erc20TokenId).batchTransferFrom(request);
  }

  function tokenIncreaseAllowance(address spender, uint256 amount) external {
    _policyInterceptor(this.tokenIncreaseAllowance.selector);
    IERC20Extra(_erc20TokenId).increaseAllowance(spender, amount);
  }

  function tokenDecreaseAllowance(address spender, uint256 amount) external {
    _policyInterceptor(this.tokenDecreaseAllowance.selector);
    IERC20Extra(_erc20TokenId).decreaseAllowance(spender, amount);
  }
}
