// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.0)

pragma solidity 0.8.19;

import "./ERC20Asset.sol";
import "./IERC20AssetExtra.sol";

/**
 * @title ERC20 Asset Lockable Contract
 * @author Sina Tadayon, https://github.com/SinaTadayon
 * @dev
 *
 */
abstract contract ERCAssetExtra is ERC20Asset, IERC20AssetExtra {

  constructor() {}

  /**
   * @dev See {IERC165-supportsInterface}.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(IERC20AssetExtra).interfaceId || super.supportsInterface(interfaceId);
  }

  function tokenBatchTransfer(IERC20Extra.BatchTransferRequest[] calldata request) external returns (bool) {
    _policyInterceptor(this.tokenBatchTransfer.selector);
    emit AssetERC20Called(_msgSender(), address(this), this.tokenBatchTransfer.selector);
    return IERC20Extra(_erc20TokenId).batchTransfer(request);
  }

  function tokenBatchTransferFrom(IERC20Extra.BatchTransferFromRequest[] calldata request) external returns (bool) {
    _policyInterceptor(this.tokenBatchTransferFrom.selector);
    emit AssetERC20Called(_msgSender(), address(this), this.tokenBatchTransferFrom.selector);
    return IERC20Extra(_erc20TokenId).batchTransferFrom(request);
  }

  function tokenIncreaseAllowance(address spender, uint256 amount) external returns (uint256) {
    _policyInterceptor(this.tokenIncreaseAllowance.selector);
    emit AssetERC20Called(_msgSender(), address(this), this.tokenIncreaseAllowance.selector);
    return IERC20Extra(_erc20TokenId).increaseAllowance(spender, amount);
  }

  function tokenDecreaseAllowance(address spender, uint256 amount) external returns (uint256) {
    _policyInterceptor(this.tokenDecreaseAllowance.selector);
    emit AssetERC20Called(_msgSender(), address(this), this.tokenDecreaseAllowance.selector);
    return IERC20Extra(_erc20TokenId).decreaseAllowance(spender, amount);
  }
}
