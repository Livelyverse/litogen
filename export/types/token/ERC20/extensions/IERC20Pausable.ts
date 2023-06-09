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
} from "../../../common";

export interface IERC20PausableInterface extends utils.Interface {
  functions: {
    "isPaused(address)": FunctionFragment;
    "isPausedAll()": FunctionFragment;
    "pause(address)": FunctionFragment;
    "pauseAll()": FunctionFragment;
    "pausedAccounts(uint256)": FunctionFragment;
    "unpause(address)": FunctionFragment;
    "unpauseAll()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isPaused"
      | "isPaused(address)"
      | "isPausedAll"
      | "isPausedAll()"
      | "pause"
      | "pause(address)"
      | "pauseAll"
      | "pauseAll()"
      | "pausedAccounts"
      | "pausedAccounts(uint256)"
      | "unpause"
      | "unpause(address)"
      | "unpauseAll"
      | "unpauseAll()"
  ): FunctionFragment;

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
  encodeFunctionData(
    functionFragment: "pausedAccounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "pausedAccounts(uint256)",
    values: [PromiseOrValue<BigNumberish>]
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
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pause(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pauseAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pauseAll()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pausedAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pausedAccounts(uint256)",
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

  events: {
    "Paused(address,address)": EventFragment;
    "PausedAll(address)": EventFragment;
    "Unpaused(address,address)": EventFragment;
    "UnpausedAll(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused(address,address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausedAll(address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused(address,address)"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausedAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausedAll(address)"): EventFragment;
}

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

export interface IERC20Pausable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC20PausableInterface;

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

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

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
  };

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

  pausedAccounts(
    offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  "pausedAccounts(uint256)"(
    offset: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

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

  callStatic: {
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

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

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
  };

  filters: {
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

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
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
  };

  populateTransaction: {
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

    pausedAccounts(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pausedAccounts(uint256)"(
      offset: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
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
  };
}
