// SPDX-License-Identifier: MIT
// Litogen Contracts (last updated v1.0.1)

pragma solidity 0.8.19;

import "./IERC20Lockable.sol";
import "../ERC20.sol";
import "hardhat/console.sol";

/**
 * @dev Extension of {ERC20} that allows admin to lock tokens in the period of time for specific account
 */
abstract contract ERC20Lockable is ERC20, IERC20Lockable {
  
  mapping(address => uint256) internal _lockBalances;
  mapping(address => mapping(bytes32 => AssetLock)) internal _locks;

  /**
   * @dev lock number of tokens for specific account in the period of time
   */
  function lockToken(LockTokenRequest[] calldata lockRequest) external {
    _tokenPolicyInterceptor(this.lockToken.selector);
    for (uint256 i = 0; i < lockRequest.length; i++) {
      _lockToken(lockRequest[i]);
    }
  }

  /**
   * @dev deposite number of tokens by lock ID to specified account in lock info 
   */
  function claimToken(bytes32[] calldata lockIds) external {
    _tokenPolicyInterceptor(this.claimToken.selector);
    for (uint256 i = 0; i < lockIds.length; i++) {
      _claimToken(lockIds[i]);
    }
  }

  /**
   * @dev unlock number of tokens by lock ID and deposite those to source account
   */
  function unlockToken(UnLockTokenRequest[] calldata unlockRequest) external {
    _tokenPolicyInterceptor(this.unlockToken.selector);
    for (uint256 i = 0; i < unlockRequest.length; i++) {      
      _unlockToken(unlockRequest[i]);
    }
  }

  /**
   * @dev get lock balance of account
   */
  function lockBalanceOf(address account) external view returns (uint256) {
    return _lockBalances[account];
  }

  /**
   * @dev get lock information by account and lock ID
   */
  function lockInfo(bytes32 lockId, address account) external view returns (LockInfo memory) {
    AssetLock storage lock = _locks[account][lockId];
    return
      LockInfo({
        amount: lock.amount,
        lockedAt: lock.lockedAt,
        claimedAt: lock.claimedAt,
        source: lock.source,
        stat: lock.status
      });
  }
  
  /**
   * @dev Returns true if this contract implements the interface defined by
   * `interfaceId`. See the corresponding
   * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
   * to learn more about how these ids are created.
   *
   * This function call must use less than 30 000 gas.
   */
  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
      return interfaceId == type(IERC20Lockable).interfaceId || super.supportsInterface(interfaceId);
  }

  function _lockToken(LockTokenRequest memory lockRequest) internal {
    require(
      lockRequest.source != address(0) && 
      lockRequest.dest != address(0) && 
      lockRequest.source != lockRequest.dest,
      "Invalid Source/Dest Address"
    );
    require(lockRequest.claimAt > block.timestamp + 1 days, "Illegal Timestamp");
    require(lockRequest.amount > 0, "Invalid Amount");

    bytes32 lockId = keccak256(
      abi.encodePacked(lockRequest.source, lockRequest.dest, lockRequest.claimAt, lockRequest.amount)
    );
    require(_locks[lockRequest.dest][lockId].source == address(0), "Already Exists");

    uint256 srcBalance = _balances[lockRequest.source];
    // console.log("src Balance address: %s, balance: %d, amount: %d", lockRequest.source, srcBalance, lockRequest.amount);
    require(srcBalance >= lockRequest.amount, "Illegal Balance");
    unchecked {
      _balances[lockRequest.source] = srcBalance - lockRequest.amount;
    }
    _lockBalances[lockRequest.dest] += lockRequest.amount;

    AssetLock storage assetLock = _locks[lockRequest.dest][lockId];
    assetLock.lockedAt = uint128(block.timestamp);
    assetLock.claimedAt = uint128(lockRequest.claimAt);
    assetLock.source = lockRequest.source;
    assetLock.amount = lockRequest.amount;
    assetLock.status = LockState.LOCKED;

    emit TokenLocked(
      lockId,
      _msgSender(),
      lockRequest.source,
      lockRequest.dest,
      lockRequest.claimAt,
      lockRequest.amount
    );
  }

  function _claimToken(bytes32 lockId) internal {
    require(lockId != bytes32(0), "Invalid LockId");
    require(_locks[_msgSender()][lockId].source != address(0), "Not Found");
    require(_locks[_msgSender()][lockId].claimedAt < uint128(block.timestamp), "Illegal Claim");

    uint256 lockAmount = _locks[_msgSender()][lockId].amount;
    uint256 lockBalance = _lockBalances[_msgSender()];
    require(lockBalance >= lockAmount, "Illegal Lock Balance");
    unchecked {
      _lockBalances[_msgSender()] = lockBalance - lockAmount;
    }
    _balances[_msgSender()] += lockAmount;
    _locks[_msgSender()][lockId].status = LockState.CLAIMED;
    emit TokenClaimed(lockId, _msgSender(), _locks[_msgSender()][lockId].source, lockAmount);
  }

  function _unlockToken(UnLockTokenRequest calldata unlockRequest) internal {
    require(unlockRequest.lockId != bytes32(0), "Invalid LockId");
    require(_locks[unlockRequest.account][unlockRequest.lockId].source != address(0), "LockId Not Found");
    require(
      _locks[unlockRequest.account][unlockRequest.lockId].status == LockState.LOCKED,
      "Illegal Lock State"
    );

    uint256 lockAmount = _locks[unlockRequest.account][unlockRequest.lockId].amount;
    uint256 lockBalance = _lockBalances[unlockRequest.account];
    address srcAccount = _locks[unlockRequest.account][unlockRequest.lockId].source;
    require(lockBalance >= lockAmount, "Illegal Lock Balance");
    unchecked {
      _lockBalances[unlockRequest.account] = lockBalance - lockAmount;
    }
    _balances[srcAccount] += lockAmount;
    _locks[unlockRequest.account][unlockRequest.lockId].status = LockState.UNLOCKED;
    
    emit TokenUnlocked(
      unlockRequest.lockId,
      _msgSender(),
      unlockRequest.account,
      srcAccount,
      lockAmount,
      unlockRequest.reason
    );    
  }
}