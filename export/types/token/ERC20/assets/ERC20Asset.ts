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

export declare namespace IAsset {
  export type AssetInfoStruct = {
    profile: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    version: PromiseOrValue<string>;
    token: PromiseOrValue<string>;
    accessControl: PromiseOrValue<string>;
    owner: PromiseOrValue<string>;
    atype: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
  };

  export type AssetInfoStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    number,
    number
  ] & {
    profile: string;
    name: string;
    version: string;
    token: string;
    accessControl: string;
    owner: string;
    atype: number;
    status: number;
  };
}

export interface ERC20AssetInterface extends utils.Interface {
  functions: {
    "assetAccessControl()": FunctionFragment;
    "assetInfo()": FunctionFragment;
    "assetName()": FunctionFragment;
    "assetProfile()": FunctionFragment;
    "assetSafeMode()": FunctionFragment;
    "assetSetProfile(string)": FunctionFragment;
    "assetSetSafeMode(uint8)": FunctionFragment;
    "assetToken()": FunctionFragment;
    "assetType()": FunctionFragment;
    "assetVersion()": FunctionFragment;
    "balance()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "tokenApprove(address,uint256)": FunctionFragment;
    "tokenBalance()": FunctionFragment;
    "tokenTransfer(address,uint256)": FunctionFragment;
    "tokenTransferFrom(address,address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawBalance(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assetAccessControl"
      | "assetAccessControl()"
      | "assetInfo"
      | "assetInfo()"
      | "assetName"
      | "assetName()"
      | "assetProfile"
      | "assetProfile()"
      | "assetSafeMode"
      | "assetSafeMode()"
      | "assetSetProfile"
      | "assetSetProfile(string)"
      | "assetSetSafeMode"
      | "assetSetSafeMode(uint8)"
      | "assetToken"
      | "assetToken()"
      | "assetType"
      | "assetType()"
      | "assetVersion"
      | "assetVersion()"
      | "balance"
      | "balance()"
      | "owner"
      | "owner()"
      | "renounceOwnership"
      | "renounceOwnership()"
      | "supportsInterface"
      | "supportsInterface(bytes4)"
      | "tokenApprove"
      | "tokenApprove(address,uint256)"
      | "tokenBalance"
      | "tokenBalance()"
      | "tokenTransfer"
      | "tokenTransfer(address,uint256)"
      | "tokenTransferFrom"
      | "tokenTransferFrom(address,address,uint256)"
      | "transferOwnership"
      | "transferOwnership(address)"
      | "withdrawBalance"
      | "withdrawBalance(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetAccessControl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetAccessControl()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "assetInfo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assetInfo()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "assetName", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assetName()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetProfile()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetSafeMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetSafeMode()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetSetProfile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetSetProfile(string)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetSetSafeMode",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetSetSafeMode(uint8)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "assetToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetToken()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "assetType", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "assetType()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetVersion()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(functionFragment: "balance()", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership()",
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
  encodeFunctionData(
    functionFragment: "tokenApprove",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenApprove(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenBalance()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTransfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTransfer(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTransferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenTransferFrom(address,address,uint256)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBalance(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetAccessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetAccessControl()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetInfo()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetName()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetProfile()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSafeMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSafeMode()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSetProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSetProfile(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSetSafeMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetSetSafeMode(uint8)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetToken()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetType", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "assetType()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetVersion()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balance()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership()",
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
  decodeFunctionResult(
    functionFragment: "tokenApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenApprove(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenBalance()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTransfer(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenTransferFrom(address,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBalance(address)",
    data: BytesLike
  ): Result;

  events: {
    "AssetProfileUpdated(address,string,string)": EventFragment;
    "AssetSafeModeUpdated(address,address,uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetProfileUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AssetProfileUpdated(address,string,string)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetSafeModeUpdated"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AssetSafeModeUpdated(address,address,uint8)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred(address,address)"
  ): EventFragment;
}

export interface AssetProfileUpdatedEventObject {
  sender: string;
  oldProfile: string;
  newProfile: string;
}
export type AssetProfileUpdatedEvent = TypedEvent<
  [string, string, string],
  AssetProfileUpdatedEventObject
>;

export type AssetProfileUpdatedEventFilter =
  TypedEventFilter<AssetProfileUpdatedEvent>;

export interface AssetSafeModeUpdatedEventObject {
  sender: string;
  assetId: string;
  status: number;
}
export type AssetSafeModeUpdatedEvent = TypedEvent<
  [string, string, number],
  AssetSafeModeUpdatedEventObject
>;

export type AssetSafeModeUpdatedEventFilter =
  TypedEventFilter<AssetSafeModeUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ERC20Asset extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20AssetInterface;

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
    assetAccessControl(overrides?: CallOverrides): Promise<[string]>;

    "assetAccessControl()"(overrides?: CallOverrides): Promise<[string]>;

    assetInfo(
      overrides?: CallOverrides
    ): Promise<[IAsset.AssetInfoStructOutput]>;

    "assetInfo()"(
      overrides?: CallOverrides
    ): Promise<[IAsset.AssetInfoStructOutput]>;

    assetName(overrides?: CallOverrides): Promise<[string]>;

    "assetName()"(overrides?: CallOverrides): Promise<[string]>;

    assetProfile(overrides?: CallOverrides): Promise<[string]>;

    "assetProfile()"(overrides?: CallOverrides): Promise<[string]>;

    assetSafeMode(overrides?: CallOverrides): Promise<[number]>;

    "assetSafeMode()"(overrides?: CallOverrides): Promise<[number]>;

    assetSetProfile(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "assetSetProfile(string)"(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assetSetSafeMode(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "assetSetSafeMode(uint8)"(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assetToken(overrides?: CallOverrides): Promise<[string]>;

    "assetToken()"(overrides?: CallOverrides): Promise<[string]>;

    assetType(overrides?: CallOverrides): Promise<[number]>;

    "assetType()"(overrides?: CallOverrides): Promise<[number]>;

    assetVersion(overrides?: CallOverrides): Promise<[string]>;

    "assetVersion()"(overrides?: CallOverrides): Promise<[string]>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "balance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokenApprove(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenApprove(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tokenBalance()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenTransfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "tokenTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawBalance(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "withdrawBalance(address)"(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  assetAccessControl(overrides?: CallOverrides): Promise<string>;

  "assetAccessControl()"(overrides?: CallOverrides): Promise<string>;

  assetInfo(overrides?: CallOverrides): Promise<IAsset.AssetInfoStructOutput>;

  "assetInfo()"(
    overrides?: CallOverrides
  ): Promise<IAsset.AssetInfoStructOutput>;

  assetName(overrides?: CallOverrides): Promise<string>;

  "assetName()"(overrides?: CallOverrides): Promise<string>;

  assetProfile(overrides?: CallOverrides): Promise<string>;

  "assetProfile()"(overrides?: CallOverrides): Promise<string>;

  assetSafeMode(overrides?: CallOverrides): Promise<number>;

  "assetSafeMode()"(overrides?: CallOverrides): Promise<number>;

  assetSetProfile(
    profileName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "assetSetProfile(string)"(
    profileName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assetSetSafeMode(
    status: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "assetSetSafeMode(uint8)"(
    status: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assetToken(overrides?: CallOverrides): Promise<string>;

  "assetToken()"(overrides?: CallOverrides): Promise<string>;

  assetType(overrides?: CallOverrides): Promise<number>;

  "assetType()"(overrides?: CallOverrides): Promise<number>;

  assetVersion(overrides?: CallOverrides): Promise<string>;

  "assetVersion()"(overrides?: CallOverrides): Promise<string>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  "balance()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "supportsInterface(bytes4)"(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokenApprove(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenApprove(address,uint256)"(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokenTransfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenTransfer(address,uint256)"(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenTransferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "tokenTransferFrom(address,address,uint256)"(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawBalance(
    recepient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "withdrawBalance(address)"(
    recepient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assetAccessControl(overrides?: CallOverrides): Promise<string>;

    "assetAccessControl()"(overrides?: CallOverrides): Promise<string>;

    assetInfo(overrides?: CallOverrides): Promise<IAsset.AssetInfoStructOutput>;

    "assetInfo()"(
      overrides?: CallOverrides
    ): Promise<IAsset.AssetInfoStructOutput>;

    assetName(overrides?: CallOverrides): Promise<string>;

    "assetName()"(overrides?: CallOverrides): Promise<string>;

    assetProfile(overrides?: CallOverrides): Promise<string>;

    "assetProfile()"(overrides?: CallOverrides): Promise<string>;

    assetSafeMode(overrides?: CallOverrides): Promise<number>;

    "assetSafeMode()"(overrides?: CallOverrides): Promise<number>;

    assetSetProfile(
      profileName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "assetSetProfile(string)"(
      profileName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    assetSetSafeMode(
      status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "assetSetSafeMode(uint8)"(
      status: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    assetToken(overrides?: CallOverrides): Promise<string>;

    "assetToken()"(overrides?: CallOverrides): Promise<string>;

    assetType(overrides?: CallOverrides): Promise<number>;

    "assetType()"(overrides?: CallOverrides): Promise<number>;

    assetVersion(overrides?: CallOverrides): Promise<string>;

    "assetVersion()"(overrides?: CallOverrides): Promise<string>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    "balance()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenApprove(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "tokenApprove(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "tokenTransfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokenTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "tokenTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawBalance(
      recepient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawBalance(address)"(
      recepient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetProfileUpdated(address,string,string)"(
      sender?: PromiseOrValue<string> | null,
      oldProfile?: PromiseOrValue<string> | null,
      newProfile?: PromiseOrValue<string> | null
    ): AssetProfileUpdatedEventFilter;
    AssetProfileUpdated(
      sender?: PromiseOrValue<string> | null,
      oldProfile?: PromiseOrValue<string> | null,
      newProfile?: PromiseOrValue<string> | null
    ): AssetProfileUpdatedEventFilter;

    "AssetSafeModeUpdated(address,address,uint8)"(
      sender?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<string> | null,
      status?: null
    ): AssetSafeModeUpdatedEventFilter;
    AssetSafeModeUpdated(
      sender?: PromiseOrValue<string> | null,
      assetId?: PromiseOrValue<string> | null,
      status?: null
    ): AssetSafeModeUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    assetAccessControl(overrides?: CallOverrides): Promise<BigNumber>;

    "assetAccessControl()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetInfo(overrides?: CallOverrides): Promise<BigNumber>;

    "assetInfo()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetName(overrides?: CallOverrides): Promise<BigNumber>;

    "assetName()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetProfile(overrides?: CallOverrides): Promise<BigNumber>;

    "assetProfile()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetSafeMode(overrides?: CallOverrides): Promise<BigNumber>;

    "assetSafeMode()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetSetProfile(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "assetSetProfile(string)"(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assetSetSafeMode(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "assetSetSafeMode(uint8)"(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assetToken(overrides?: CallOverrides): Promise<BigNumber>;

    "assetToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetType(overrides?: CallOverrides): Promise<BigNumber>;

    "assetType()"(overrides?: CallOverrides): Promise<BigNumber>;

    assetVersion(overrides?: CallOverrides): Promise<BigNumber>;

    "assetVersion()"(overrides?: CallOverrides): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    "balance()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenApprove(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenApprove(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenBalance(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenBalance()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenTransfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "tokenTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawBalance(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "withdrawBalance(address)"(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetAccessControl(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "assetAccessControl()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    assetInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetInfo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetProfile()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetSafeMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetSafeMode()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetSetProfile(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "assetSetProfile(string)"(
      profileName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assetSetSafeMode(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "assetSetSafeMode(uint8)"(
      status: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assetToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetType()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "assetVersion()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "balance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "supportsInterface(bytes4)"(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenApprove(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenApprove(address,uint256)"(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenBalance()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenTransfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenTransfer(address,uint256)"(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenTransferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "tokenTransferFrom(address,address,uint256)"(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawBalance(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawBalance(address)"(
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
