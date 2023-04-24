/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC20AssetExtra,
  IERC20AssetExtraInterface,
} from "../../../../../contracts/token/ERC20/assets/IERC20AssetExtra";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20Extra.BatchTransferRequest[]",
        name: "request",
        type: "tuple[]",
      },
    ],
    name: "tokenBatchTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20Extra.BatchTransferFromRequest[]",
        name: "request",
        type: "tuple[]",
      },
    ],
    name: "tokenBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "tokenDecreaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "tokenIncreaseAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC20AssetExtra__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20AssetExtraInterface {
    return new utils.Interface(_abi) as IERC20AssetExtraInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC20AssetExtra {
    return new Contract(address, _abi, signerOrProvider) as IERC20AssetExtra;
  }
}
