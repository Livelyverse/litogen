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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface ERC20PausableInterface extends utils.Interface {
  functions: {
    "acl()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "isPaused(address)": FunctionFragment;
    "isPausedAll()": FunctionFragment;
    "name()": FunctionFragment;
    "pause(address)": FunctionFragment;
    "pauseAll()": FunctionFragment;
    "paused()": FunctionFragment;
    "pausedAccounts(uint256)": FunctionFragment;
    "profileId()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "unpause(address)": FunctionFragment;
    "unpauseAll()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acl"
      | "acl()"
      | "allowance"
      | "allowance(address,address)"
      | "approve"
      | "approve(address,uint256)"
      | "balanceOf"
      | "balanceOf(address)"
      | "decimals"
      | "decimals()"
      | "isPaused"
      | "isPaused(address)"
      | "isPausedAll"
      | "isPausedAll()"
      | "name"
      | "name()"
      | "pause"
      | "pause(address)"
      | "pauseAll"
      | "pauseAll()"
      | "paused"
      | "paused()"
      | "pausedAccounts"
      | "pausedAccounts(uint256)"
      | "profileId"
      | "profileId()"
      | "supportsInterface"
      | "supportsInterface(bytes4)"
      | "symbol"
      | "symbol()"
      | "totalSupply"
      | "totalSupply()"
      | "transfer"
      | "transfer(address,uint256)"
      | "transferFrom"
      | "transferFrom(address,address,uint256)"
      | "unpause"
      | "unpause(address)"
      | "unpauseAll"
      | "unpauseAll()"
      | "version"
      | "version()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "acl", values?: undefined): string;
  encodeFunctionData(functionFragment: "acl()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decimals()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPaused",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPaused(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPausedAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPausedAll()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "name()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pause",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "pause(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "pauseAll", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pauseAll()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pausedAccounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pausedAccounts(uint256)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "profileId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "profileId()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface(bytes4)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unpause",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unpause(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unpauseAll()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "version()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "acl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "acl()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowance(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approve(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOf(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isPaused(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPausedAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPausedAll()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pause(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pauseAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pauseAll()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pausedAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pausedAccounts(uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "profileId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profileId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transfer(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unpause(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpauseAll", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unpauseAll()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version()", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Paused(address,address)": EventFragment;
    "PausedAll(address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
    "Unpaused(address,address)": EventFragment;
    "UnpausedAll(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Approval(address,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused(address,address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedAll(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "Transfer(address,address,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused(address,address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausedAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausedAll(address)"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface PausedEventObject {
  sender: string;
  account: string;
}
export type PausedEvent = TypedEvent<[string, string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PausedAllEventObject {
  sender: string;
}
export type PausedAllEvent = TypedEvent<[string], PausedAllEventObject>;

export type PausedAllEventFilter = TypedEventFilter<PausedAllEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface UnpausedEventObject {
  sender: string;
  account: string;
}
export type UnpausedEvent = TypedEvent<[string, string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UnpausedAllEventObject {
  sender: string;
}
export type UnpausedAllEvent = TypedEvent<[string], UnpausedAllEventObject>;

export type UnpausedAllEventFilter = TypedEventFilter<UnpausedAllEvent>;

export interface ERC20Pausable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20PausableInterface;

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
    acl(overrides?: CallOverrides): Promise<[string]>;

    "acl()"(overrides?: CallOverrides): Promise<[string]>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    isPaused(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPaused(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPausedAll(overrides?: CallOverrides): Promise<[boolean]>;

    "isPausedAll()"(overrides?: CallOverrides): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    "name()"(overrides?: CallOverrides): Promise<[string]>;

    pause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "pause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    pauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "pauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    "paused()"(overrides?: CallOverrides): Promise<[boolean]>;

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    profileId(overrides?: CallOverrides): Promise<[string]>;

    "profileId()"(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    "symbol()"(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "unpause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "unpauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;

    "version()"(overrides?: CallOverrides): Promise<[string]>;
  };

  acl(overrides?: CallOverrides): Promise<string>;

  "acl()"(overrides?: CallOverrides): Promise<string>;

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  isPaused(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isPaused(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPausedAll(overrides?: CallOverrides): Promise<boolean>;

  "isPausedAll()"(overrides?: CallOverrides): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  pause(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "pause(address)"(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  pauseAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "pauseAll()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  "paused()"(overrides?: CallOverrides): Promise<boolean>;

  pausedAccounts(
    offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "pausedAccounts(uint256)"(
    offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  profileId(overrides?: CallOverrides): Promise<string>;

  "profileId()"(overrides?: CallOverrides): Promise<string>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "unpause(address)"(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpauseAll(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "unpauseAll()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acl(overrides?: CallOverrides): Promise<string>;

    "acl()"(overrides?: CallOverrides): Promise<string>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    isPaused(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPaused(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPausedAll(overrides?: CallOverrides): Promise<boolean>;

    "isPausedAll()"(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    pause(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "pause(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    pauseAll(overrides?: CallOverrides): Promise<void>;

    "pauseAll()"(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    "paused()"(overrides?: CallOverrides): Promise<boolean>;

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    profileId(overrides?: CallOverrides): Promise<string>;

    "profileId()"(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    unpause(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "unpause(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpauseAll(overrides?: CallOverrides): Promise<void>;

    "unpauseAll()"(overrides?: CallOverrides): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    "Paused(address,address)"(
      sender?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PausedEventFilter;
    Paused(
      sender?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PausedEventFilter;

    "PausedAll(address)"(
      sender?: PromiseOrValue<string> | null
    ): PausedAllEventFilter;
    PausedAll(sender?: PromiseOrValue<string> | null): PausedAllEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;

    "Unpaused(address,address)"(
      sender?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): UnpausedEventFilter;
    Unpaused(
      sender?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): UnpausedEventFilter;

    "UnpausedAll(address)"(
      sender?: PromiseOrValue<string> | null
    ): UnpausedAllEventFilter;
    UnpausedAll(sender?: PromiseOrValue<string> | null): UnpausedAllEventFilter;
  };

  estimateGas: {
    acl(overrides?: CallOverrides): Promise<BigNumber>;

    "acl()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPaused(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPausedAll(overrides?: CallOverrides): Promise<BigNumber>;

    "isPausedAll()"(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "pause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    pauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "pauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    profileId(overrides?: CallOverrides): Promise<BigNumber>;

    "profileId()"(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "unpause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "unpauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "acl()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPaused(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPaused(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPausedAll(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPausedAll()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "pause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    pauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "pauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    profileId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "profileId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "unpause(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpauseAll(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "unpauseAll()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}