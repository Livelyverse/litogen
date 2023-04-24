// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "../token/ERC20/ERC20.sol";

contract TestToken is ERC20 {
  constructor(address acl_) ERC20("TestToken", "Test", "TestProfile", acl_, 9) {
    _totalSupply = 10000 * 10 ** 9;
    _balances[_msgSender()] = _totalSupply;
  }
}

