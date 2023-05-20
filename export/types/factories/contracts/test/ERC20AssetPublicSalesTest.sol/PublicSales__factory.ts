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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    name: "approve",
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
    name: "assetInfo",
    outputs: [
      {
        components: [
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
    name: "transfer",
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
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b506040516200246d3803806200246d8339810160408190526200003491620002c9565b6040518060400160405280600b81526020016a7075626c696353616c657360a81b8152506040518060400160405280600b81526020016a5465737450726f66696c6560a81b815250826200008d620002c560201b60201c565b600080546001600160a01b0319166001600160a01b0392909216919091179055825160041115620000f45760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964204e616d6560a01b60448201526064015b60405180910390fd5b6001600160a01b0381163b620001425760405162461bcd60e51b815260206004820152601260248201527124b73b30b634b21022a92199182a37b5b2b760711b6044820152606401620000eb565b6040516301ffc9a760e01b81526336372b0760e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156200018e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b49190620002fb565b1580156200023157506040516301ffc9a760e01b815263a0f7caf160e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa15801562000209573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022f9190620002fb565b155b15620002755760405162461bcd60e51b815260206004820152601260248201527124b63632b3b0b61022a92199182a37b5b2b760711b6044820152606401620000eb565b6004620002838482620003c4565b50600380546001600160a01b0319166001600160a01b0383161790556005805460ff191660011790556002620002ba8382620003c4565b505050505062000490565b3390565b600060208284031215620002dc57600080fd5b81516001600160a01b0381168114620002f457600080fd5b9392505050565b6000602082840312156200030e57600080fd5b81518015158114620002f457600080fd5b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200034a57607f821691505b6020821081036200036b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003bf57600081815260208120601f850160051c810160208610156200039a5750805b601f850160051c820191505b81811015620003bb57828155600101620003a6565b5050505b505050565b81516001600160401b03811115620003e057620003e06200031f565b620003f881620003f1845462000335565b8462000371565b602080601f831160018114620004305760008415620004175750858301515b600019600386901b1c1916600185901b178555620003bb565b600085815260208120601f198616915b82811015620004615788860151825594840194600190910190840162000440565b5085821015620004805787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611fcd80620004a06000396000f3fe6080604052600436106101b95760003560e01c8063953fe942116100eb578063a9059cbb1161008f578063dd62ed3e11610061578063dd62ed3e14610514578063e9dbebbd14610534578063f2fde38b14610554578063fc5240641461057457005b8063a9059cbb146104ac578063b69ef8a8146104cc578063c9230c5d146104df578063cce6d801146104f457005b80639c7597b2116100c85780639c7597b21461042c578063a33b12291461044c578063a40bee501461046a578063a52e8e601461048c57005b8063953fe942146103d757806395d89b41146103f75780639c42c5ec1461040c57005b80633fe3347a1161015d57806370a082311161012f57806370a0823114610364578063715018a614610384578063756af45f146103995780638da5cb5b146103b957005b80633fe3347a146102f35780634cfb99491461030f57806358e9abf21461032f5780635bc213ec1461034457005b806318160ddd1161019657806318160ddd1461024957806323b872dd1461026c578063313ce5671461028c5780633c872e5f146102b357005b806301ffc9a7146101c2578063095ea7b3146101f75780631083f7611461021757005b366101c057005b005b3480156101ce57600080fd5b506101e26101dd3660046114f0565b610594565b60405190151581526020015b60405180910390f35b34801561020357600080fd5b506101e2610212366004611536565b6105a5565b34801561022357600080fd5b506003546001600160a01b03165b6040516001600160a01b0390911681526020016101ee565b34801561025557600080fd5b5061025e610636565b6040519081526020016101ee565b34801561027857600080fd5b506101e2610287366004611560565b6106a9565b34801561029857600080fd5b506102a1610742565b60405160ff90911681526020016101ee565b3480156102bf57600080fd5b5060408051808201909152600e81526d3b191718171816a634ba37b3b2b760911b60208201525b6040516101ee91906115ec565b3480156102ff57600080fd5b5060016040516101ee9190611629565b34801561031b57600080fd5b5060055460ff166040516101ee9190611647565b34801561033b57600080fd5b506102e66107b0565b34801561035057600080fd5b506101c061035f3660046116c4565b610842565b34801561037057600080fd5b5061025e61037f366004611744565b6108cb565b34801561039057600080fd5b506101c061093a565b3480156103a557600080fd5b506101c06103b4366004611744565b61094e565b3480156103c557600080fd5b506000546001600160a01b0316610231565b3480156103e357600080fd5b506101c06103f236600461175f565b610993565b34801561040357600080fd5b506102e6610a5f565b34801561041857600080fd5b506101c06104273660046117d4565b610ad1565b34801561043857600080fd5b506101e2610447366004611837565b610b13565b34801561045857600080fd5b506001546001600160a01b0316610231565b34801561047657600080fd5b5061047f610c6a565b6040516101ee9190611858565b34801561049857600080fd5b506101c06104a7366004611536565b610e5b565b3480156104b857600080fd5b506101e26104c7366004611536565b610ee8565b3480156104d857600080fd5b504761025e565b3480156104eb57600080fd5b506102e6610f33565b34801561050057600080fd5b506101c061050f366004611929565b610f42565b34801561052057600080fd5b5061025e61052f36600461198c565b611013565b34801561054057600080fd5b506101c061054f3660046119bf565b61108a565b34801561056057600080fd5b506101c061056f366004611744565b6110cc565b34801561058057600080fd5b506101c061058f366004611536565b611127565b600061059f82611170565b92915050565b60006105b763095ea7b360e01b611195565b60035460405163095ea7b360e01b81526001600160a01b038581166004830152602482018590529091169063095ea7b3906044015b6020604051808303816000875af115801561060b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062f9190611a22565b9392505050565b600354604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd9160048083019260209291908290030181865afa158015610680573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a49190611a44565b905090565b60006106bb6323b872dd60e01b611195565b6003546040516323b872dd60e01b81526001600160a01b038681166004830152858116602483015260448201859052909116906323b872dd906064016020604051808303816000875af1158015610716573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073a9190611a22565b949350505050565b6003546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa15801561078c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a49190611a5d565b6060600280546107bf90611a80565b80601f01602080910402602001604051908101604052809291908181526020018280546107eb90611a80565b80156108385780601f1061080d57610100808354040283529160200191610838565b820191906000526020600020905b81548152906001019060200180831161081b57829003601f168201915b5050505050905090565b6108526316f084fb60e21b611195565b806040516108609190611aba565b604051809103902060026040516108779190611ad6565b60405180910390206108863390565b6001600160a01b03167fe6fa79c1f2ea3c82570c2be794a3d87196e039c8b4a9aa1bb4cd1130649ec82a60405160405180910390a460026108c78282611b92565b5050565b6003546040516370a0823160e01b81526001600160a01b03838116600483015260009216906370a0823190602401602060405180830381865afa158015610916573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059f9190611a44565b6109426112a1565b61094c60006112f4565b565b61095e63756af45f60e01b611195565b6040516001600160a01b038216904780156108fc02916000818181858888f193505050501580156108c7573d6000803e3d6000fd5b6001546001600160a01b03166109e75760405162461bcd60e51b8152602060048201526014602482015273155b9b1bd8dac8139bdd0814dd5c1c1bdc9d195960621b60448201526064015b60405180910390fd5b6109f763cce6d80160e01b611195565b600354604051634a9ff4a160e11b81526001600160a01b039091169063953fe94290610a299085908590600401611c7b565b600060405180830381600087803b158015610a4357600080fd5b505af1158015610a57573d6000803e3d6000fd5b505050505050565b600354604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa158015610aa9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106a49190810190611d58565b610ae1632710b17b60e21b611195565b60035460405163038d251d60e31b81526001600160a01b0390911690631c6928e890610a299085908590600401611dcf565b60015460405160009182916001600160a01b03909116906305e0be3090610b3f90600290602001611ad6565b60408051808303601f190181529082905280516020909101206001600160e01b031960e084901b168252610b82913090634e3acbd960e11b903390600401611e3b565b6020604051808303816000875af1158015610ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc59190611e6c565b90506000816015811115610bdb57610bdb6115ff565b14610bfb578060405163d8f7573d60e01b81526004016109de9190611e8d565b6005805484919060ff19166001836002811115610c1a57610c1a6115ff565b021790555030336001600160a01b03167f28f96d72c32e5791a0cb87cd75ccd24d30671b1044c06512ab88be89b053b8ca85604051610c599190611647565b60405180910390a350600192915050565b610cb2604080516101008101825260608082526020820181905291810182905260009181018290526080810182905260a081018290529060c082019081526020016000905290565b60405180610100016040528060028054610ccb90611a80565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf790611a80565b8015610d445780601f10610d1957610100808354040283529160200191610d44565b820191906000526020600020905b815481529060010190602001808311610d2757829003601f168201915b5050505050815260200160048054610d5b90611a80565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8790611a80565b8015610dd45780601f10610da957610100808354040283529160200191610dd4565b820191906000526020600020905b815481529060010190602001808311610db757829003601f168201915b5050509183525050604080518082018252600e81526d3b191718171816a634ba37b3b2b760911b6020808301919091528301526003546001600160a01b03908116918301919091526001805482166060840152600054909116608083015260a082015260055460c09091019060ff166002811115610e5457610e546115ff565b9052919050565b610e6b630529747360e51b611195565b60035460405163a457c2d760e01b81526001600160a01b038481166004830152602482018490529091169063a457c2d7906044015b6020604051808303816000875af1158015610ebf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee39190611a44565b505050565b6000610efa63a9059cbb60e01b611195565b60035460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb906044016105ec565b6060600480546107bf90611a80565b610f5263cce6d80160e01b611195565b60005b81811015610fe05730838383818110610f7057610f70611ea7565b610f869260206080909202019081019150611744565b6001600160a01b031614610fce5760405162461bcd60e51b815260206004820152600f60248201526e496c6c6567616c204164647265737360881b60448201526064016109de565b80610fd881611ebd565b915050610f55565b506003546040516374bb18e760e01b81526001600160a01b03909116906374bb18e790610a299085908590600401611ee4565b600354604051636eb1769f60e11b81526001600160a01b0384811660048301528381166024830152600092169063dd62ed3e90604401602060405180830381865afa158015611066573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062f9190611a44565b61109a63e9dbebbd60e01b611195565b600354604051631f54aa5560e31b81526001600160a01b039091169063faa552a890610a299085908590600401611f4d565b6001600160a01b03811661111b5760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b60448201526064016109de565b611124816112f4565b50565b611137633f14901960e21b611195565b600354604051633950935160e01b81526001600160a01b0384811660048301526024820184905290911690633950935190604401610ea0565b60006001600160e01b03198216636a6756a760e01b148061059f575061059f82611480565b6001546001600160a01b031615611285576001546040516000916001600160a01b0316906305e0be30906111ce90600290602001611ad6565b6040516020818303038152906040528051906020012030856111ed3390565b6040518563ffffffff1660e01b815260040161120c9493929190611e3b565b6020604051808303816000875af115801561122b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124f9190611e6c565b90506000816015811115611265576112656115ff565b146108c7578060405163d8f7573d60e01b81526004016109de9190611e8d565b630d021c7560e01b6001600160e01b0319821601611124576111245b6000546001600160a01b0316331461094c5760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b60448201526064016109de565b61130463f2fde38b60e01b611195565b6000546001546001600160a01b03918216911661132a836001600160a01b03163b151590565b15611404576040516301ffc9a760e01b815263047d056160e11b60048201526001600160a01b038416906301ffc9a790602401602060405180830381865afa15801561137a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139e9190611a22565b6113d85760405162461bcd60e51b815260206004820152600b60248201526a125b1b1959d85b081050d360aa1b60448201526064016109de565b600180546001600160a01b0385166001600160a01b03199182161790915560008054909116905561142c565b600080546001600160a01b0385166001600160a01b0319918216179091556001805490911690555b6001600160a01b038084169083166114445781611446565b825b6001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60006001600160e01b03198216632ce5e05560e01b148061059f575061059f8260006001600160e01b03198216630e51ab8560e01b14806114d157506001600160e01b031982166392d3552160e01b145b8061059f57506301ffc9a760e01b6001600160e01b031983161461059f565b60006020828403121561150257600080fd5b81356001600160e01b03198116811461062f57600080fd5b80356001600160a01b038116811461153157600080fd5b919050565b6000806040838503121561154957600080fd5b6115528361151a565b946020939093013593505050565b60008060006060848603121561157557600080fd5b61157e8461151a565b925061158c6020850161151a565b9150604084013590509250925092565b60005b838110156115b757818101518382015260200161159f565b50506000910152565b600081518084526115d881602086016020860161159c565b601f01601f19169290920160200192915050565b60208152600061062f60208301846115c0565b634e487b7160e01b600052602160045260246000fd5b60048110611625576116256115ff565b9052565b6020810161059f8284611615565b60038110611625576116256115ff565b6020810161059f8284611637565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561169457611694611655565b604052919050565b600067ffffffffffffffff8211156116b6576116b6611655565b50601f01601f191660200190565b6000602082840312156116d657600080fd5b813567ffffffffffffffff8111156116ed57600080fd5b8201601f810184136116fe57600080fd5b803561171161170c8261169c565b61166b565b81815285602083850101111561172657600080fd5b81602084016020830137600091810160200191909152949350505050565b60006020828403121561175657600080fd5b61062f8261151a565b6000806020838503121561177257600080fd5b823567ffffffffffffffff8082111561178a57600080fd5b818501915085601f83011261179e57600080fd5b8135818111156117ad57600080fd5b8660208260051b85010111156117c257600080fd5b60209290920196919550909350505050565b600080602083850312156117e757600080fd5b823567ffffffffffffffff808211156117ff57600080fd5b818501915085601f83011261181357600080fd5b81358181111561182257600080fd5b8660206060830285010111156117c257600080fd5b60006020828403121561184957600080fd5b81356003811061062f57600080fd5b60208152600082516101008060208501526118776101208501836115c0565b91506020850151601f198086850301604087015261189584836115c0565b93506040870151915080868503016060870152506118b383826115c0565b92505060608501516118d060808601826001600160a01b03169052565b5060808501516001600160a01b03811660a08601525060a08501516001600160a01b03811660c08601525060c085015161190d60e0860182611615565b5060e085015161191f82860182611637565b5090949350505050565b6000806020838503121561193c57600080fd5b823567ffffffffffffffff8082111561195457600080fd5b818501915085601f83011261196857600080fd5b81358181111561197757600080fd5b8660208260071b85010111156117c257600080fd5b6000806040838503121561199f57600080fd5b6119a88361151a565b91506119b66020840161151a565b90509250929050565b600080602083850312156119d257600080fd5b823567ffffffffffffffff808211156119ea57600080fd5b818501915085601f8301126119fe57600080fd5b813581811115611a0d57600080fd5b8660208260061b85010111156117c257600080fd5b600060208284031215611a3457600080fd5b8151801515811461062f57600080fd5b600060208284031215611a5657600080fd5b5051919050565b600060208284031215611a6f57600080fd5b815160ff8116811461062f57600080fd5b600181811c90821680611a9457607f821691505b602082108103611ab457634e487b7160e01b600052602260045260246000fd5b50919050565b60008251611acc81846020870161159c565b9190910192915050565b6000808354611ae481611a80565b60018281168015611afc5760018114611b1157611b40565b60ff1984168752821515830287019450611b40565b8760005260208060002060005b85811015611b375781548a820152908401908201611b1e565b50505082870194505b50929695505050505050565b601f821115610ee357600081815260208120601f850160051c81016020861015611b735750805b601f850160051c820191505b81811015610a5757828155600101611b7f565b815167ffffffffffffffff811115611bac57611bac611655565b611bc081611bba8454611a80565b84611b4c565b602080601f831160018114611bf55760008415611bdd5750858301515b600019600386901b1c1916600185901b178555610a57565b600085815260208120601f198616915b82811015611c2457888601518255948401946001909101908401611c05565b5085821015611c425787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60208082528181018390526000906040808401600586901b8501820187855b88811015611d4a57878303603f190184528135368b9003605e19018112611cc057600080fd5b8a018035845260606001600160a01b03611cdb89840161151a565b168886015286820135601e19833603018112611cf657600080fd5b90910187810191903567ffffffffffffffff811115611d1457600080fd5b803603831315611d2357600080fd5b8188870152611d358287018285611c52565b96890196955050509186019150600101611c9a565b509098975050505050505050565b600060208284031215611d6a57600080fd5b815167ffffffffffffffff811115611d8157600080fd5b8201601f81018413611d9257600080fd5b8051611da061170c8261169c565b818152856020838501011115611db557600080fd5b611dc682602083016020860161159c565b95945050505050565b6020808252818101839052600090604080840186845b87811015611e2e576001600160a01b0380611dff8461151a565b16845280611e0e87850161151a565b168487015250818401358484015260609283019290910190600101611de5565b5090979650505050505050565b9384526001600160a01b0392831660208501526001600160e01b031991909116604084015216606082015260800190565b600060208284031215611e7e57600080fd5b81516016811061062f57600080fd5b6020810160168310611ea157611ea16115ff565b91905290565b634e487b7160e01b600052603260045260246000fd5b600060018201611edd57634e487b7160e01b600052601160045260246000fd5b5060010190565b6020808252818101839052600090604080840186845b87811015611e2e576001600160a01b0380611f148461151a565b16845280611f2387850161151a565b16848701525081840135848401526060808301359084015260809283019290910190600101611efa565b6020808252818101839052600090604080840186845b87811015611e2e576001600160a01b03611f7c8361151a565b16835281850135858401529183019190830190600101611f6356fea26469706673582212206d25b5301aafcaf158526753850d6d053966cd9a9bb409d50c8cc5556074695564736f6c63430008130033";

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
