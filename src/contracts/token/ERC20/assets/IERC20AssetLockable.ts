/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export declare namespace IERC20Lockable {
  export type LockTokenRequestStruct = {
    source: PromiseOrValue<string>;
    dest: PromiseOrValue<string>;
    claimAt: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type LockTokenRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber
  ] & { source: string; dest: string; claimAt: BigNumber; amount: BigNumber };

  export type UnLockTokenRequestStruct = {
    lockId: PromiseOrValue<BytesLike>;
    account: PromiseOrValue<string>;
    reason: PromiseOrValue<string>;
  };

  export type UnLockTokenRequestStructOutput = [string, string, string] & {
    lockId: string;
    account: string;
    reason: string;
  };
}

export interface IERC20AssetLockableInterface extends utils.Interface {
  functions: {
    "tokenLock((address,address,uint256,uint256)[])": FunctionFragment;
    "unlockToken((bytes32,address,string)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "tokenLock" | "unlockToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokenLock",
    values: [IERC20Lockable.LockTokenRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockToken",
    values: [IERC20Lockable.UnLockTokenRequestStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "tokenLock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC20AssetLockable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC20AssetLockableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    tokenLock(
      lockRequests: IERC20Lockable.LockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockToken(
      unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  tokenLock(
    lockRequests: IERC20Lockable.LockTokenRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockToken(
    unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    tokenLock(
      lockRequests: IERC20Lockable.LockTokenRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    unlockToken(
      unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    tokenLock(
      lockRequests: IERC20Lockable.LockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockToken(
      unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenLock(
      lockRequests: IERC20Lockable.LockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockToken(
      unlockRequests: IERC20Lockable.UnLockTokenRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
