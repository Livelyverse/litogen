// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../token/ERC20/assets/ERC20Asset.sol";
import "../token/ERC20/assets/ERC20AssetExtra.sol";
import "../token/ERC20/assets/ERC20AssetLockable.sol";

contract FundingTeam is ERC20Asset, ERC20AssetExtra, ERC20AssetLockable {
  constructor(address erc20Token_)
    ERC20Asset("fundingTeam", "TestProfile", erc20Token_)
  {}

  // The following functions are overrides required by Solidity.

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC20Asset, ERC20AssetExtra, ERC20AssetLockable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
