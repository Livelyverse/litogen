// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "../access/IProfileACL.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

interface IACLTest is IProfileACL, IERC165 {}