// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import "../access/IProfileACL.sol";
import "../utils/IERC165.sol";

interface IACLTest is IProfileACL, IERC165 {}