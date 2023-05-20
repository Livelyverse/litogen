/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20Asset,
  ERC20AssetInterface,
} from "../../../../../contracts/token/ERC20/assets/ERC20Asset";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "assetName_",
        type: "string",
      },
      {
        internalType: "string",
        name: "profileName_",
        type: "string",
      },
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
  "0x60806040523480156200001157600080fd5b5060405162001ca338038062001ca3833981016040819052620000349162000322565b600080546001600160a01b031916331790558251600411156200008d5760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964204e616d6560a01b60448201526064015b60405180910390fd5b6001600160a01b0381163b620000db5760405162461bcd60e51b815260206004820152601260248201527124b73b30b634b21022a92199182a37b5b2b760711b604482015260640162000084565b6040516301ffc9a760e01b81526336372b0760e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa15801562000127573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200014d9190620003af565b158015620001ca57506040516301ffc9a760e01b815263a0f7caf160e01b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015620001a2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001c89190620003af565b155b156200020e5760405162461bcd60e51b815260206004820152601260248201527124b63632b3b0b61022a92199182a37b5b2b760711b604482015260640162000084565b60046200021c848262000469565b50600380546001600160a01b0319166001600160a01b0383161790556005805460ff19166001179055600262000253838262000469565b5050505062000535565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200028557600080fd5b81516001600160401b0380821115620002a257620002a26200025d565b604051601f8301601f19908116603f01168101908282118183101715620002cd57620002cd6200025d565b81604052838152602092508683858801011115620002ea57600080fd5b600091505b838210156200030e5785820183015181830184015290820190620002ef565b600093810190920192909252949350505050565b6000806000606084860312156200033857600080fd5b83516001600160401b03808211156200035057600080fd5b6200035e8783880162000273565b945060208601519150808211156200037557600080fd5b50620003848682870162000273565b604086015190935090506001600160a01b0381168114620003a457600080fd5b809150509250925092565b600060208284031215620003c257600080fd5b81518015158114620003d357600080fd5b9392505050565b600181811c90821680620003ef57607f821691505b6020821081036200041057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200046457600081815260208120601f850160051c810160208610156200043f5750805b601f850160051c820191505b8181101562000460578281556001016200044b565b5050505b505050565b81516001600160401b038111156200048557620004856200025d565b6200049d81620004968454620003da565b8462000416565b602080601f831160018114620004d55760008415620004bc5750858301515b600019600386901b1c1916600185901b17855562000460565b600085815260208120601f198616915b828110156200050657888601518255948401946001909101908401620004e5565b5085821015620005255787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61175e80620005456000396000f3fe6080604052600436106101435760003560e01c8063715018a6116100b0578063a40bee501161006c578063a40bee50146103b4578063a9059cbb146103d6578063b69ef8a8146103f6578063c9230c5d14610409578063dd62ed3e1461041e578063f2fde38b1461043e57005b8063715018a61461030e578063756af45f146103235780638da5cb5b1461034357806395d89b41146103615780639c7597b214610376578063a33b12291461039657005b80633c872e5f116100ff5780633c872e5f1461023d5780633fe3347a1461027d5780634cfb99491461029957806358e9abf2146102b95780635bc213ec146102ce57806370a08231146102ee57005b806301ffc9a71461014c578063095ea7b3146101815780631083f761146101a157806318160ddd146101d357806323b872dd146101f6578063313ce5671461021657005b3661014a57005b005b34801561015857600080fd5b5061016c610167366004611078565b61045e565b60405190151581526020015b60405180910390f35b34801561018d57600080fd5b5061016c61019c3660046110be565b6104b0565b3480156101ad57600080fd5b506003546001600160a01b03165b6040516001600160a01b039091168152602001610178565b3480156101df57600080fd5b506101e8610541565b604051908152602001610178565b34801561020257600080fd5b5061016c6102113660046110e8565b6105b4565b34801561022257600080fd5b5061022b61064d565b60405160ff9091168152602001610178565b34801561024957600080fd5b5060408051808201909152600e81526d3b191718171816a634ba37b3b2b760911b60208201525b6040516101789190611174565b34801561028957600080fd5b50600160405161017891906111b1565b3480156102a557600080fd5b5060055460ff1660405161017891906111cf565b3480156102c557600080fd5b506102706106bb565b3480156102da57600080fd5b5061014a6102e936600461124c565b61074d565b3480156102fa57600080fd5b506101e86103093660046112cc565b6107d6565b34801561031a57600080fd5b5061014a610845565b34801561032f57600080fd5b5061014a61033e3660046112cc565b610859565b34801561034f57600080fd5b506000546001600160a01b03166101bb565b34801561036d57600080fd5b5061027061089e565b34801561038257600080fd5b5061016c6103913660046112e7565b610910565b3480156103a257600080fd5b506001546001600160a01b03166101bb565b3480156103c057600080fd5b506103c9610a70565b6040516101789190611308565b3480156103e257600080fd5b5061016c6103f13660046110be565b610c61565b34801561040257600080fd5b50476101e8565b34801561041557600080fd5b50610270610cac565b34801561042a57600080fd5b506101e86104393660046113d9565b610cbb565b34801561044a57600080fd5b5061014a6104593660046112cc565b610d32565b60006001600160e01b03198216630e51ab8560e01b148061048f57506001600160e01b031982166392d3552160e01b145b806104aa57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006104c263095ea7b360e01b610d8d565b60035460405163095ea7b360e01b81526001600160a01b038581166004830152602482018590529091169063095ea7b3906044015b6020604051808303816000875af1158015610516573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053a919061140c565b9392505050565b600354604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd9160048083019260209291908290030181865afa15801561058b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af919061142e565b905090565b60006105c66323b872dd60e01b610d8d565b6003546040516323b872dd60e01b81526001600160a01b038681166004830152858116602483015260448201859052909116906323b872dd906064016020604051808303816000875af1158015610621573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610645919061140c565b949350505050565b6003546040805163313ce56760e01b815290516000926001600160a01b03169163313ce5679160048083019260209291908290030181865afa158015610697573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105af9190611447565b6060600280546106ca9061146a565b80601f01602080910402602001604051908101604052809291908181526020018280546106f69061146a565b80156107435780601f1061071857610100808354040283529160200191610743565b820191906000526020600020905b81548152906001019060200180831161072657829003601f168201915b5050505050905090565b61075d6316f084fb60e21b610d8d565b8060405161076b91906114a4565b6040518091039020600260405161078291906114c0565b60405180910390206107913390565b6001600160a01b03167fe6fa79c1f2ea3c82570c2be794a3d87196e039c8b4a9aa1bb4cd1130649ec82a60405160405180910390a460026107d28282611585565b5050565b6003546040516370a0823160e01b81526001600160a01b03838116600483015260009216906370a0823190602401602060405180830381865afa158015610821573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa919061142e565b61084d610e99565b6108576000610eec565b565b61086963756af45f60e01b610d8d565b6040516001600160a01b038216904780156108fc02916000818181858888f193505050501580156107d2573d6000803e3d6000fd5b600354604080516395d89b4160e01b815290516060926001600160a01b0316916395d89b419160048083019260009291908290030181865afa1580156108e8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105af9190810190611645565b60015460405160009182916001600160a01b03909116906305e0be309061093c906002906020016114c0565b60408051808303601f190181529082905280516020909101206001600160e01b031960e084901b16825261097f913090634e3acbd960e11b9033906004016116bc565b6020604051808303816000875af115801561099e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c291906116ed565b905060008160158111156109d8576109d8611187565b14610a01578060405163d8f7573d60e01b81526004016109f8919061170e565b60405180910390fd5b6005805484919060ff19166001836002811115610a2057610a20611187565b021790555030336001600160a01b03167f28f96d72c32e5791a0cb87cd75ccd24d30671b1044c06512ab88be89b053b8ca85604051610a5f91906111cf565b60405180910390a350600192915050565b610ab8604080516101008101825260608082526020820181905291810182905260009181018290526080810182905260a081018290529060c082019081526020016000905290565b60405180610100016040528060028054610ad19061146a565b80601f0160208091040260200160405190810160405280929190818152602001828054610afd9061146a565b8015610b4a5780601f10610b1f57610100808354040283529160200191610b4a565b820191906000526020600020905b815481529060010190602001808311610b2d57829003601f168201915b5050505050815260200160048054610b619061146a565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8d9061146a565b8015610bda5780601f10610baf57610100808354040283529160200191610bda565b820191906000526020600020905b815481529060010190602001808311610bbd57829003601f168201915b5050509183525050604080518082018252600e81526d3b191718171816a634ba37b3b2b760911b6020808301919091528301526003546001600160a01b03908116918301919091526001805482166060840152600054909116608083015260a082015260055460c09091019060ff166002811115610c5a57610c5a611187565b9052919050565b6000610c7363a9059cbb60e01b610d8d565b60035460405163a9059cbb60e01b81526001600160a01b038581166004830152602482018590529091169063a9059cbb906044016104f7565b6060600480546106ca9061146a565b600354604051636eb1769f60e11b81526001600160a01b0384811660048301528381166024830152600092169063dd62ed3e90604401602060405180830381865afa158015610d0e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053a919061142e565b6001600160a01b038116610d815760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b60448201526064016109f8565b610d8a81610eec565b50565b6001546001600160a01b031615610e7d576001546040516000916001600160a01b0316906305e0be3090610dc6906002906020016114c0565b604051602081830303815290604052805190602001203085610de53390565b6040518563ffffffff1660e01b8152600401610e0494939291906116bc565b6020604051808303816000875af1158015610e23573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4791906116ed565b90506000816015811115610e5d57610e5d611187565b146107d2578060405163d8f7573d60e01b81526004016109f8919061170e565b630d021c7560e01b6001600160e01b0319821601610d8a57610d8a5b6000546001600160a01b031633146108575760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b60448201526064016109f8565b610efc63f2fde38b60e01b610d8d565b6000546001546001600160a01b039182169116610f22836001600160a01b03163b151590565b15610ffc576040516301ffc9a760e01b815263047d056160e11b60048201526001600160a01b038416906301ffc9a790602401602060405180830381865afa158015610f72573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f96919061140c565b610fd05760405162461bcd60e51b815260206004820152600b60248201526a125b1b1959d85b081050d360aa1b60448201526064016109f8565b600180546001600160a01b0385166001600160a01b031991821617909155600080549091169055611024565b600080546001600160a01b0385166001600160a01b0319918216179091556001805490911690555b6001600160a01b0380841690831661103c578161103e565b825b6001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b60006020828403121561108a57600080fd5b81356001600160e01b03198116811461053a57600080fd5b80356001600160a01b03811681146110b957600080fd5b919050565b600080604083850312156110d157600080fd5b6110da836110a2565b946020939093013593505050565b6000806000606084860312156110fd57600080fd5b611106846110a2565b9250611114602085016110a2565b9150604084013590509250925092565b60005b8381101561113f578181015183820152602001611127565b50506000910152565b60008151808452611160816020860160208601611124565b601f01601f19169290920160200192915050565b60208152600061053a6020830184611148565b634e487b7160e01b600052602160045260246000fd5b600481106111ad576111ad611187565b9052565b602081016104aa828461119d565b600381106111ad576111ad611187565b602081016104aa82846111bf565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561121c5761121c6111dd565b604052919050565b600067ffffffffffffffff82111561123e5761123e6111dd565b50601f01601f191660200190565b60006020828403121561125e57600080fd5b813567ffffffffffffffff81111561127557600080fd5b8201601f8101841361128657600080fd5b803561129961129482611224565b6111f3565b8181528560208385010111156112ae57600080fd5b81602084016020830137600091810160200191909152949350505050565b6000602082840312156112de57600080fd5b61053a826110a2565b6000602082840312156112f957600080fd5b81356003811061053a57600080fd5b6020815260008251610100806020850152611327610120850183611148565b91506020850151601f19808685030160408701526113458483611148565b93506040870151915080868503016060870152506113638382611148565b925050606085015161138060808601826001600160a01b03169052565b5060808501516001600160a01b03811660a08601525060a08501516001600160a01b03811660c08601525060c08501516113bd60e086018261119d565b5060e08501516113cf828601826111bf565b5090949350505050565b600080604083850312156113ec57600080fd5b6113f5836110a2565b9150611403602084016110a2565b90509250929050565b60006020828403121561141e57600080fd5b8151801515811461053a57600080fd5b60006020828403121561144057600080fd5b5051919050565b60006020828403121561145957600080fd5b815160ff8116811461053a57600080fd5b600181811c9082168061147e57607f821691505b60208210810361149e57634e487b7160e01b600052602260045260246000fd5b50919050565b600082516114b6818460208701611124565b9190910192915050565b60008083546114ce8161146a565b600182811680156114e657600181146114fb5761152a565b60ff198416875282151583028701945061152a565b8760005260208060002060005b858110156115215781548a820152908401908201611508565b50505082870194505b50929695505050505050565b601f82111561158057600081815260208120601f850160051c8101602086101561155d5750805b601f850160051c820191505b8181101561157c57828155600101611569565b5050505b505050565b815167ffffffffffffffff81111561159f5761159f6111dd565b6115b3816115ad845461146a565b84611536565b602080601f8311600181146115e857600084156115d05750858301515b600019600386901b1c1916600185901b17855561157c565b600085815260208120601f198616915b82811015611617578886015182559484019460019091019084016115f8565b50858210156116355787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561165757600080fd5b815167ffffffffffffffff81111561166e57600080fd5b8201601f8101841361167f57600080fd5b805161168d61129482611224565b8181528560208385010111156116a257600080fd5b6116b3826020830160208601611124565b95945050505050565b9384526001600160a01b0392831660208501526001600160e01b031991909116604084015216606082015260800190565b6000602082840312156116ff57600080fd5b81516016811061053a57600080fd5b602081016016831061172257611722611187565b9190529056fea26469706673582212207497894832315a7142e97018df6a69066af5a063bffc84e1f7cf626e620f086464736f6c63430008130033";

type ERC20AssetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20AssetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Asset__factory extends ContractFactory {
  constructor(...args: ERC20AssetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    assetName_: PromiseOrValue<string>,
    profileName_: PromiseOrValue<string>,
    erc20Token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Asset> {
    return super.deploy(
      assetName_,
      profileName_,
      erc20Token_,
      overrides || {}
    ) as Promise<ERC20Asset>;
  }
  override getDeployTransaction(
    assetName_: PromiseOrValue<string>,
    profileName_: PromiseOrValue<string>,
    erc20Token_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      assetName_,
      profileName_,
      erc20Token_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20Asset {
    return super.attach(address) as ERC20Asset;
  }
  override connect(signer: Signer): ERC20Asset__factory {
    return super.connect(signer) as ERC20Asset__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20AssetInterface {
    return new utils.Interface(_abi) as ERC20AssetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Asset {
    return new Contract(address, _abi, signerOrProvider) as ERC20Asset;
  }
}
