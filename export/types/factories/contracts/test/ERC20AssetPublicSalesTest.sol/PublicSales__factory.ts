/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  PublicSales,
  PublicSalesInterface,
} from "../../../../contracts/test/ERC20AssetPublicSalesTest.sol/PublicSales";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "erc20Token_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "enum IProfileACL.ProfileAuthorizationStatus",
        name: "",
        type: "uint8",
      },
    ],
    name: "ProfileACLActionForbidden",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "oldProfile",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "newProfile",
        type: "string",
      },
    ],
    name: "AssetProfileUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum IAsset.AssetSafeModeStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "AssetSafeModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "assetAccessControl",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "profile",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "version",
            type: "string",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "accessControl",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "enum IAsset.AssetType",
            name: "atype",
            type: "uint8",
          },
          {
            internalType: "enum IAsset.AssetSafeModeStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct IAsset.AssetInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetProfile",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetSafeMode",
    outputs: [
      {
        internalType: "enum IAsset.AssetSafeModeStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "profileName",
        type: "string",
      },
    ],
    name: "assetSetProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IAsset.AssetSafeModeStatus",
        name: "status",
        type: "uint8",
      },
    ],
    name: "assetSetSafeMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "assetToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assetType",
    outputs: [
      {
        internalType: "enum IAsset.AssetType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "assetVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "tokenApprove",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "source",
            type: "address",
          },
          {
            internalType: "address",
            name: "dest",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "claimAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IERC20Lockable.LockTokenRequest[]",
        name: "lockRequests",
        type: "tuple[]",
      },
    ],
    name: "tokenLock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "tokenTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "tokenTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "lockId",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "string",
            name: "reason",
            type: "string",
          },
        ],
        internalType: "struct IERC20Lockable.UnLockTokenRequest[]",
        name: "unlockRequests",
        type: "tuple[]",
      },
    ],
    name: "unlockToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recepient",
        type: "address",
      },
    ],
    name: "withdrawBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200211f3803806200211f83398101604081905262000034916200024b565b6040518060400160405280600b81526020016a7075626c696353616c657360a81b8152506040518060400160405280600b81526020016a5465737450726f66696c6560a81b815250826200008d6200024760201b60201c565b600080546001600160a01b0319166001600160a01b0392909216919091179055825160041115620000f45760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964204e616d6560a01b60448201526064015b60405180910390fd5b6001600160a01b0381163b620001425760405162461bcd60e51b815260206004820152601260248201527124b73b30b634b21022a92199182a37b5b2b760711b6044820152606401620000eb565b6040516301ffc9a760e01b81526336372b0760e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156200018e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b491906200027d565b620001f75760405162461bcd60e51b815260206004820152601260248201527124b63632b3b0b61022a92199182a37b5b2b760711b6044820152606401620000eb565b600462000205848262000346565b50600380546001600160a01b0319166001600160a01b0383161790556005805460ff1916600117905560026200023c838262000346565b505050505062000412565b3390565b6000602082840312156200025e57600080fd5b81516001600160a01b03811681146200027657600080fd5b9392505050565b6000602082840312156200029057600080fd5b815180151581146200027657600080fd5b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002cc57607f821691505b602082108103620002ed57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200034157600081815260208120601f850160051c810160208610156200031c5750805b601f850160051c820191505b818110156200033d5782815560010162000328565b5050505b505050565b81516001600160401b03811115620003625762000362620002a1565b6200037a81620003738454620002b7565b84620002f3565b602080601f831160018114620003b25760008415620003995750858301515b600019600386901b1c1916600185901b1785556200033d565b600085815260208120601f198616915b82811015620003e357888601518255948401946001909101908401620003c2565b5085821015620004025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611cfd80620004226000396000f3fe6080604052600436106101735760003560e01c8063961974ba116100c8578063b69ef8a811610084578063cce6d80111610061578063cce6d8011461044d578063e9dbebbd1461046d578063f2fde38b1461048d578063fc524064146104ad57005b8063b69ef8a814610406578063c66f245514610423578063c9230c5d1461043857005b8063961974ba146103465780639c42c5ec146103665780639c7597b214610386578063a33b1229146103a6578063a40bee50146103c4578063a52e8e60146103e657005b806358e9abf21161012f578063715018a61161010c578063715018a6146102d3578063756af45f146102e85780638da5cb5b14610308578063953fe9421461032657005b806358e9abf21461027e5780635bc213ec1461029357806368cdafe6146102b357005b806301ffc9a71461017c5780630cd689f5146101b15780631083f761146101d15780633c872e5f146102035780633fe3347a146102425780634cfb99491461025e57005b3661017a57005b005b34801561018857600080fd5b5061019c61019736600461130a565b6104cd565b60405190151581526020015b60405180910390f35b3480156101bd57600080fd5b5061019c6101cc366004611350565b6104de565b3480156101dd57600080fd5b506003546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b34801561020f57600080fd5b5060408051808201909152600d81526c189718971896a634ba37b3b2b760991b60208201525b6040516101a891906113ca565b34801561024e57600080fd5b5060016040516101a89190611407565b34801561026a57600080fd5b5060055460ff166040516101a89190611425565b34801561028a57600080fd5b5061023561056f565b34801561029f57600080fd5b5061017a6102ae366004611449565b610601565b3480156102bf57600080fd5b5061019c6102ce366004611350565b61068a565b3480156102df57600080fd5b5061017a6106d5565b3480156102f457600080fd5b5061017a6103033660046114fa565b6106e9565b34801561031457600080fd5b506000546001600160a01b03166101eb565b34801561033257600080fd5b5061017a610341366004611515565b61072e565b34801561035257600080fd5b5061019c61036136600461158a565b6107fa565b34801561037257600080fd5b5061017a6103813660046115c6565b610893565b34801561039257600080fd5b5061019c6103a1366004611629565b6108d5565b3480156103b257600080fd5b506001546001600160a01b03166101eb565b3480156103d057600080fd5b506103d9610a2c565b6040516101a8919061164a565b3480156103f257600080fd5b5061017a610401366004611350565b610c4e565b34801561041257600080fd5b50475b6040519081526020016101a8565b34801561042f57600080fd5b50610415610cdb565b34801561044457600080fd5b50610235610d4d565b34801561045957600080fd5b5061017a610468366004611726565b610d5c565b34801561047957600080fd5b5061017a610488366004611789565b610e2d565b34801561049957600080fd5b5061017a6104a83660046114fa565b610e6f565b3480156104b957600080fd5b5061017a6104c8366004611350565b610eca565b60006104d882610f13565b92915050565b60006104f0630cd689f560e01b610f38565b60035460405163095ea7b360e01b81526001600160a01b038581166004830152602482018590529091169063095ea7b3906044015b6020604051808303816000875af1158015610544573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056891906117ec565b9392505050565b60606002805461057e9061180e565b80601f01602080910402602001604051908101604052809291908181526020018280546105aa9061180e565b80156105f75780601f106105cc576101008083540402835291602001916105f7565b820191906000526020600020905b8154815290600101906020018083116105da57829003601f168201915b5050505050905090565b6106116316f084fb60e21b610f38565b8060405161061f9190611848565b604051809103902060026040516106369190611864565b60405180910390206106453390565b6001600160a01b03167fe6fa79c1f2ea3c82570c2be794a3d87196e039c8b4a9aa1bb4cd1130649ec82a60405160405180910390a460026106868282611920565b5050565b600061069c633466d7f360e11b610f38565b60035460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb90604401610525565b6106dd611044565b6106e76000611097565b565b6106f963756af45f60e01b610f38565b6040516001600160a01b038216904780156108fc02916000818181858888f19350505050158015610686573d6000803e3d6000fd5b6001546001600160a01b03166107825760405162461bcd60e51b8152602060048201526014602482015273155b9b1bd8dac8139bdd0814dd5c1c1bdc9d195960621b60448201526064015b60405180910390fd5b61079263cce6d80160e01b610f38565b600354604051634a9ff4a160e11b81526001600160a01b039091169063953fe942906107c49085908590600401611a09565b600060405180830381600087803b1580156107de57600080fd5b505af11580156107f2573d6000803e3d6000fd5b505050505050565b600061080c634b0cba5d60e11b610f38565b6003546040516323b872dd60e01b81526001600160a01b038681166004830152858116602483015260448201859052909116906323b872dd906064016020604051808303816000875af1158015610867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088b91906117ec565b949350505050565b6108a3632710b17b60e21b610f38565b60035460405163038d251d60e31b81526001600160a01b0390911690631c6928e8906107c49085908590600401611ae6565b60015460405160009182916001600160a01b03909116906305e0be309061090190600290602001611864565b60408051808303601f190181529082905280516020909101206001600160e01b031960e084901b168252610944913090634e3acbd960e11b903390600401611b52565b6020604051808303816000875af1158015610963573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109879190611b83565b9050600081601581111561099d5761099d6113dd565b146109bd578060405163d8f7573d60e01b81526004016107799190611ba4565b6005805484919060ff191660018360028111156109dc576109dc6113dd565b021790555030336001600160a01b03167f28f96d72c32e5791a0cb87cd75ccd24d30671b1044c06512ab88be89b053b8ca85604051610a1b9190611425565b60405180910390a350600192915050565b610a34611293565b604080516101208101918290526003546370a0823160e01b909252306101248201529081906001600160a01b03166370a082316101448301602060405180830381865afa158015610a89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aad9190611bbe565b815260200160028054610abf9061180e565b80601f0160208091040260200160405190810160405280929190818152602001828054610aeb9061180e565b8015610b385780601f10610b0d57610100808354040283529160200191610b38565b820191906000526020600020905b815481529060010190602001808311610b1b57829003601f168201915b5050505050815260200160048054610b4f9061180e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7b9061180e565b8015610bc85780601f10610b9d57610100808354040283529160200191610bc8565b820191906000526020600020905b815481529060010190602001808311610bab57829003601f168201915b5050509183525050604080518082018252600d81526c189718971896a634ba37b3b2b760991b6020808301919091528301526003546001600160a01b03908116918301919091526001805482166060840152600054909116608083015260a082015260055460c09091019060ff166002811115610c4757610c476113dd565b9052919050565b610c5e630529747360e51b610f38565b60035460405163a457c2d760e01b81526001600160a01b038481166004830152602482018490529091169063a457c2d7906044015b6020604051808303816000875af1158015610cb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd69190611bbe565b505050565b6003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d489190611bbe565b905090565b60606004805461057e9061180e565b610d6c63cce6d80160e01b610f38565b60005b81811015610dfa5730838383818110610d8a57610d8a611bd7565b610da092602060809092020190810191506114fa565b6001600160a01b031614610de85760405162461bcd60e51b815260206004820152600f60248201526e496c6c6567616c204164647265737360881b6044820152606401610779565b80610df281611bed565b915050610d6f565b506003546040516374bb18e760e01b81526001600160a01b03909116906374bb18e7906107c49085908590600401611c14565b610e3d63e9dbebbd60e01b610f38565b600354604051631f54aa5560e31b81526001600160a01b039091169063faa552a8906107c49085908590600401611c7d565b6001600160a01b038116610ebe5760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b6044820152606401610779565b610ec781611097565b50565b610eda633f14901960e21b610f38565b600354604051633950935160e01b81526001600160a01b0384811660048301526024820184905290911690633950935190604401610c93565b60006001600160e01b03198216636a6756a760e01b14806104d857506104d882611223565b6001546001600160a01b031615611028576001546040516000916001600160a01b0316906305e0be3090610f7190600290602001611864565b604051602081830303815290604052805190602001203085610f903390565b6040518563ffffffff1660e01b8152600401610faf9493929190611b52565b6020604051808303816000875af1158015610fce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff29190611b83565b90506000816015811115611008576110086113dd565b14610686578060405163d8f7573d60e01b81526004016107799190611ba4565b630d021c7560e01b6001600160e01b0319821601610ec757610ec75b6000546001600160a01b031633146106e75760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b6044820152606401610779565b6110a763f2fde38b60e01b610f38565b6000546001546001600160a01b0391821691166110cd836001600160a01b03163b151590565b156111a7576040516301ffc9a760e01b815263047d056160e11b60048201526001600160a01b038416906301ffc9a790602401602060405180830381865afa15801561111d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114191906117ec565b61117b5760405162461bcd60e51b815260206004820152600b60248201526a125b1b1959d85b081050d360aa1b6044820152606401610779565b600180546001600160a01b0385166001600160a01b0319918216179091556000805490911690556111cf565b600080546001600160a01b0385166001600160a01b0319918216179091556001805490911690555b6001600160a01b038084169083166111e757816111e9565b825b6001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60006001600160e01b03198216632ce5e05560e01b14806104d857506104d88260006001600160e01b03198216630c83e8fd60e41b148061127457506001600160e01b0319821663f20252a960e01b145b806104d857506301ffc9a760e01b6001600160e01b03198316146104d8565b6040518061012001604052806000815260200160608152602001606081526020016060815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600060038111156112fe576112fe6113dd565b81526020016000905290565b60006020828403121561131c57600080fd5b81356001600160e01b03198116811461056857600080fd5b80356001600160a01b038116811461134b57600080fd5b919050565b6000806040838503121561136357600080fd5b61136c83611334565b946020939093013593505050565b60005b8381101561139557818101518382015260200161137d565b50506000910152565b600081518084526113b681602086016020860161137a565b601f01601f19169290920160200192915050565b602081526000610568602083018461139e565b634e487b7160e01b600052602160045260246000fd5b60048110611403576114036113dd565b9052565b602081016104d882846113f3565b60038110611403576114036113dd565b602081016104d88284611415565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561145b57600080fd5b813567ffffffffffffffff8082111561147357600080fd5b818401915084601f83011261148757600080fd5b81358181111561149957611499611433565b604051601f8201601f19908116603f011681019083821181831017156114c1576114c1611433565b816040528281528760208487010111156114da57600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020828403121561150c57600080fd5b61056882611334565b6000806020838503121561152857600080fd5b823567ffffffffffffffff8082111561154057600080fd5b818501915085601f83011261155457600080fd5b81358181111561156357600080fd5b8660208260051b850101111561157857600080fd5b60209290920196919550909350505050565b60008060006060848603121561159f57600080fd5b6115a884611334565b92506115b660208501611334565b9150604084013590509250925092565b600080602083850312156115d957600080fd5b823567ffffffffffffffff808211156115f157600080fd5b818501915085601f83011261160557600080fd5b81358181111561161457600080fd5b86602060608302850101111561157857600080fd5b60006020828403121561163b57600080fd5b81356003811061056857600080fd5b60208152815160208201526000602083015161012080604085015261167361014085018361139e565b91506040850151601f1980868503016060870152611691848361139e565b93506060870151915080868503016080870152506116af838261139e565b92505060808501516116cc60a08601826001600160a01b03169052565b5060a08501516001600160a01b03811660c08601525060c08501516001600160a01b03811660e08601525060e085015161010061170b818701836113f3565b860151905061171c85830182611415565b5090949350505050565b6000806020838503121561173957600080fd5b823567ffffffffffffffff8082111561175157600080fd5b818501915085601f83011261176557600080fd5b81358181111561177457600080fd5b8660208260071b850101111561157857600080fd5b6000806020838503121561179c57600080fd5b823567ffffffffffffffff808211156117b457600080fd5b818501915085601f8301126117c857600080fd5b8135818111156117d757600080fd5b8660208260061b850101111561157857600080fd5b6000602082840312156117fe57600080fd5b8151801515811461056857600080fd5b600181811c9082168061182257607f821691505b60208210810361184257634e487b7160e01b600052602260045260246000fd5b50919050565b6000825161185a81846020870161137a565b9190910192915050565b60008083546118728161180e565b6001828116801561188a576001811461189f576118ce565b60ff19841687528215158302870194506118ce565b8760005260208060002060005b858110156118c55781548a8201529084019082016118ac565b50505082870194505b50929695505050505050565b601f821115610cd657600081815260208120601f850160051c810160208610156119015750805b601f850160051c820191505b818110156107f25782815560010161190d565b815167ffffffffffffffff81111561193a5761193a611433565b61194e81611948845461180e565b846118da565b602080601f831160018114611983576000841561196b5750858301515b600019600386901b1c1916600185901b1785556107f2565b600085815260208120601f198616915b828110156119b257888601518255948401946001909101908401611993565b50858210156119d05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60208082528181018390526000906040808401600586901b8501820187855b88811015611ad857878303603f190184528135368b9003605e19018112611a4e57600080fd5b8a018035845260606001600160a01b03611a69898401611334565b168886015286820135601e19833603018112611a8457600080fd5b90910187810191903567ffffffffffffffff811115611aa257600080fd5b803603831315611ab157600080fd5b8188870152611ac382870182856119e0565b96890196955050509186019150600101611a28565b509098975050505050505050565b6020808252818101839052600090604080840186845b87811015611b45576001600160a01b0380611b1684611334565b16845280611b25878501611334565b168487015250818401358484015260609283019290910190600101611afc565b5090979650505050505050565b9384526001600160a01b0392831660208501526001600160e01b031991909116604084015216606082015260800190565b600060208284031215611b9557600080fd5b81516016811061056857600080fd5b6020810160168310611bb857611bb86113dd565b91905290565b600060208284031215611bd057600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600060018201611c0d57634e487b7160e01b600052601160045260246000fd5b5060010190565b6020808252818101839052600090604080840186845b87811015611b45576001600160a01b0380611c4484611334565b16845280611c53878501611334565b16848701525081840135848401526060808301359084015260809283019290910190600101611c2a565b6020808252818101839052600090604080840186845b87811015611b45576001600160a01b03611cac83611334565b16835281850135858401529183019190830190600101611c9356fea2646970667358221220e5a6297710c6252ecf1ae907080c3ef27b9a9f725276ae44c6b9259fab98cf5c64736f6c63430008130033";

type PublicSalesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PublicSalesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PublicSales__factory extends ContractFactory {
  constructor(...args: PublicSalesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    erc20Token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PublicSales> {
    return super.deploy(erc20Token_, overrides || {}) as Promise<PublicSales>;
  }
  override getDeployTransaction(
    erc20Token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(erc20Token_, overrides || {});
  }
  override attach(address: string): PublicSales {
    return super.attach(address) as PublicSales;
  }
  override connect(signer: Signer): PublicSales__factory {
    return super.connect(signer) as PublicSales__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublicSalesInterface {
    return new utils.Interface(_abi) as PublicSalesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PublicSales {
    return new Contract(address, _abi, signerOrProvider) as PublicSales;
  }
}
