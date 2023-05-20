// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../token/ERC20/assets/ERC20Asset.sol";
import "../token/ERC20/assets/ERC20AssetExtra.sol";
import "../token/ERC20/assets/ERC20AssetLockable.sol";

contract PublicSales is ERC20Asset, ERC20AssetExtra, ERC20AssetLockable {
  constructor(address erc20Token_)
    ERC20Asset("publicSales", "TestProfile", erc20Token_)
  {}

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC20Asset, ERC20AssetExtra, ERC20AssetLockable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
