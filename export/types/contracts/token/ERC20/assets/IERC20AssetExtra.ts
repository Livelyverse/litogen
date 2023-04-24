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
} from "../../../../common";

export declare namespace IERC20Extra {
  export type BatchTransferRequestStruct = {
    to: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type BatchTransferRequestStructOutput = [string, BigNumber] & {
    to: string;
    amount: BigNumber;
  };

  export type BatchTransferFromRequestStruct = {
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
  };

  export type BatchTransferFromRequestStructOutput = [
    string,
    string,
    BigNumber
  ] & { from: string; to: string; amount: BigNumber };
}

export interface IERC20AssetExtraInterface extends utils.Interface {
  functions: {
    "tokenBatchTransfer((address,uint256)[])": FunctionFragment;
    "tokenBatchTransferFrom((address,address,uint256)[])": FunctionFragment;
    "tokenDecreaseAllowance(address,uint256)": FunctionFragment;
    "tokenIncreaseAllowance(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "tokenBatchTransfer"
      | "tokenBatchTransfer((address,uint256)[])"
      | "tokenBatchTransferFrom"
      | "tokenBatchTransferFrom((address,address,uint256)[])"
      | "tokenDecreaseAllowance"
      | "tokenDecreaseAllowance(address,uint256)"
      | "tokenIncreaseAllowance"
      | "tokenIncreaseAllowance(address,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokenBatchTransfer",
    values: [IERC20Extra.BatchTransferRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBatchTransfer((address,uint256)[])",
    values: [IERC20Extra.BatchTransferRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBatchTransferFrom",
    values: [IERC20Extra.BatchTransferFromRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBatchTransferFrom((address,address,uint256)[])",
    values: [IERC20Extra.BatchTransferFromRequestStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenDecreaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenDecreaseAllowance(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIncreaseAllowance",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenIncreaseAllowance(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "tokenBatchTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBatchTransfer((address,uint256)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBatchTransferFrom((address,address,uint256)[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenDecreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenDecreaseAllowance(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIncreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenIncreaseAllowance(address,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC20AssetExtra extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC20AssetExtraInterface;

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
    tokenBatchTransfer(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenBatchTransfer((address,uint256)[])"(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenBatchTransferFrom(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenBatchTransferFrom((address,address,uint256)[])"(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenDecreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenDecreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenIncreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenIncreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  tokenBatchTransfer(
    request: IERC20Extra.BatchTransferRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenBatchTransfer((address,uint256)[])"(
    request: IERC20Extra.BatchTransferRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenBatchTransferFrom(
    request: IERC20Extra.BatchTransferFromRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenBatchTransferFrom((address,address,uint256)[])"(
    request: IERC20Extra.BatchTransferFromRequestStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenDecreaseAllowance(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenDecreaseAllowance(address,uint256)"(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenIncreaseAllowance(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenIncreaseAllowance(address,uint256)"(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    tokenBatchTransfer(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenBatchTransfer((address,uint256)[])"(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    tokenBatchTransferFrom(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenBatchTransferFrom((address,address,uint256)[])"(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    tokenDecreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenDecreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenIncreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "tokenIncreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    tokenBatchTransfer(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenBatchTransfer((address,uint256)[])"(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenBatchTransferFrom(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenBatchTransferFrom((address,address,uint256)[])"(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenDecreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenDecreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenIncreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenIncreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    tokenBatchTransfer(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenBatchTransfer((address,uint256)[])"(
      request: IERC20Extra.BatchTransferRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenBatchTransferFrom(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenBatchTransferFrom((address,address,uint256)[])"(
      request: IERC20Extra.BatchTransferFromRequestStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenDecreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenDecreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenIncreaseAllowance(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenIncreaseAllowance(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
