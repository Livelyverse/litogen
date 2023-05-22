/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { ERC20, ERC20Interface } from "../../../token/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "profileName_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimal_",
        type: "uint8",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    name: "ProfileUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "acl",
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
    name: "name",
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
    name: "profile",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setProfile",
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
    inputs: [],
    name: "version",
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
  "0x60806040523480156200001157600080fd5b50604051620014bf380380620014bf8339810160408190526200003491620001dd565b600080546001600160a01b031916331790558351600411156200008d5760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964204e616d6560a01b60448201526064015b60405180910390fd5b600383511015620000d25760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a590814de5b589bdb60921b604482015260640162000084565b6006620000e0858262000317565b506007620000ef848262000317565b506008805460ff191660ff831617905560056200010d838262000317565b5050505050620003e3565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014057600080fd5b81516001600160401b03808211156200015d576200015d62000118565b604051601f8301601f19908116603f0116810190828211818310171562000188576200018862000118565b81604052838152602092508683858801011115620001a557600080fd5b600091505b83821015620001c95785820183015181830184015290820190620001aa565b600093810190920192909252949350505050565b60008060008060808587031215620001f457600080fd5b84516001600160401b03808211156200020c57600080fd5b6200021a888389016200012e565b955060208701519150808211156200023157600080fd5b6200023f888389016200012e565b945060408701519150808211156200025657600080fd5b5062000265878288016200012e565b925050606085015160ff811681146200027d57600080fd5b939692955090935050565b600181811c908216806200029d57607f821691505b602082108103620002be57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200031257600081815260208120601f850160051c81016020861015620002ed5750805b601f850160051c820191505b818110156200030e57828155600101620002f9565b5050505b505050565b81516001600160401b0381111562000333576200033362000118565b6200034b8162000344845462000288565b84620002c4565b602080601f8311600181146200038357600084156200036a5750858301515b600019600386901b1c1916600185901b1785556200030e565b600085815260208120601f198616915b82811015620003b45788860151825594840194600190910190840162000393565b5085821015620003d35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6110cc80620003f36000396000f3fe60806040526004361061010c5760003560e01c8063715018a61161009a578063ab60636c11610061578063ab60636c14610316578063b69ef8a81461032b578063dd62ed3e1461033e578063de28735914610384578063f2fde38b146103a257005b8063715018a61461027a578063756af45f1461028f5780638da5cb5b146102af57806395d89b41146102e1578063a9059cbb146102f657005b8063235b37b1116100de578063235b37b1146101ab57806323b872dd146101cb578063313ce567146101eb57806354fd4d501461020d57806370a082311461024457005b806301ffc9a71461011557806306fdde031461014a578063095ea7b31461016c57806318160ddd1461018c57005b3661011357005b005b34801561012157600080fd5b50610135610130366004610c1c565b6103c2565b60405190151581526020015b60405180910390f35b34801561015657600080fd5b5061015f6103f9565b6040516101419190610c71565b34801561017857600080fd5b50610135610187366004610cc0565b61048b565b34801561019857600080fd5b506003545b604051908152602001610141565b3480156101b757600080fd5b506101136101c6366004610d00565b6104b3565b3480156101d757600080fd5b506101356101e6366004610db1565b61053c565b3480156101f757600080fd5b5060085460405160ff9091168152602001610141565b34801561021957600080fd5b5060408051808201909152600e81526d3b191719171816a634ba37b3b2b760911b602082015261015f565b34801561025057600080fd5b5061019d61025f366004610ded565b6001600160a01b031660009081526001602052604090205490565b34801561028657600080fd5b50610113610570565b34801561029b57600080fd5b506101136102aa366004610ded565b610584565b3480156102bb57600080fd5b506000546001600160a01b03165b6040516001600160a01b039091168152602001610141565b3480156102ed57600080fd5b5061015f6105c9565b34801561030257600080fd5b50610135610311366004610cc0565b6105d8565b34801561032257600080fd5b5061015f6105f6565b34801561033757600080fd5b504761019d565b34801561034a57600080fd5b5061019d610359366004610e08565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b34801561039057600080fd5b506004546001600160a01b03166102c9565b3480156103ae57600080fd5b506101136103bd366004610ded565b610605565b60006001600160e01b031982166336372b0760e01b14806103f357506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606006805461040890610e3b565b80601f016020809104026020016040519081016040528092919081815260200182805461043490610e3b565b80156104815780601f1061045657610100808354040283529160200191610481565b820191906000526020600020905b81548152906001019060200180831161046457829003601f168201915b5050505050905090565b600061049d63095ea7b360e01b610665565b336104a98185856107b2565b5060019392505050565b6104c363235b37b160e01b610665565b806040516104d19190610e75565b604051809103902060056040516104e89190610e91565b60405180910390206104f73390565b6001600160a01b03167f6eb3a1c6a4675ba92d44e090515b1ceea358f26565d2854df0c99c3f5eaf985060405160405180910390a460056105388282610f55565b5050565b600061054e6323b872dd60e01b610665565b3361055a85828561087f565b610565858585610905565b506001949350505050565b610578610a38565b6105826000610a8b565b565b61059463756af45f60e01b610665565b6040516001600160a01b038216904780156108fc02916000818181858888f19350505050158015610538573d6000803e3d6000fd5b60606007805461040890610e3b565b60006105ea63a9059cbb60e01b610665565b336104a9818585610905565b60606005805461040890610e3b565b6001600160a01b0381166106595760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b60448201526064015b60405180910390fd5b61066281610a8b565b50565b6004546001600160a01b031615610776576004546040516000916001600160a01b0316906305e0be309061069e90600590602001610e91565b6040516020818303038152906040528051906020012030856106bd3390565b6040516001600160e01b031960e087901b8116825260048201959095526001600160a01b039384166024820152919093166044820152911660648201526084016020604051808303816000875af115801561071c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107409190611015565b9050600081601581111561075657610756611036565b14610538578060405163d8f7573d60e01b8152600401610650919061104c565b6001600160e01b0319811663235b37b160e01b14806107a557506001600160e01b0319811663f2fde38b60e01b145b1561066257610662610a38565b6001600160a01b038316158015906107d257506001600160a01b03821615155b61081e5760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964204f776e65722f5370656e64657220416464726573730000006044820152606401610650565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383811660009081526002602090815260408083209386168352929052205460001981146108ff57818110156108f25760405162461bcd60e51b8152602060048201526011602482015270496c6c6567616c20416c6c6f77616e636560781b6044820152606401610650565b6108ff84848484036107b2565b50505050565b6001600160a01b0383161580159061092557506001600160a01b03821615155b6109715760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642046726f6d2f546f20416464726573730000000000000000006044820152606401610650565b6001600160a01b038316600090815260016020526040902054818110156109cb5760405162461bcd60e51b815260206004820152600e60248201526d125b1b1959d85b08105b5bdd5b9d60921b6044820152606401610650565b6001600160a01b0380851660008181526001602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a2b9086815260200190565b60405180910390a36108ff565b6000546001600160a01b031633146105825760405162461bcd60e51b815260206004820152601660248201527513dddb98589b194e881058d8d95cdcc811195b9a595960521b6044820152606401610650565b610a9b63f2fde38b60e01b610665565b6000546004546001600160a01b039182169116610ac1836001600160a01b03163b151590565b15610b9b576040516301ffc9a760e01b815263047d056160e11b60048201526001600160a01b038416906301ffc9a790602401602060405180830381865afa158015610b11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b359190611074565b610b6f5760405162461bcd60e51b815260206004820152600b60248201526a125b1b1959d85b081050d360aa1b6044820152606401610650565b600480546001600160a01b0385166001600160a01b031991821617909155600080549091169055610bc3565b600080546001600160a01b0385166001600160a01b0319918216179091556004805490911690555b6001600160a01b03808416908316610bdb5781610bdd565b825b6001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3505050565b505050565b600060208284031215610c2e57600080fd5b81356001600160e01b031981168114610c4657600080fd5b9392505050565b60005b83811015610c68578181015183820152602001610c50565b50506000910152565b6020815260008251806020840152610c90816040850160208701610c4d565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610cbb57600080fd5b919050565b60008060408385031215610cd357600080fd5b610cdc83610ca4565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610d1257600080fd5b813567ffffffffffffffff80821115610d2a57600080fd5b818401915084601f830112610d3e57600080fd5b813581811115610d5057610d50610cea565b604051601f8201601f19908116603f01168101908382118183101715610d7857610d78610cea565b81604052828152876020848701011115610d9157600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080600060608486031215610dc657600080fd5b610dcf84610ca4565b9250610ddd60208501610ca4565b9150604084013590509250925092565b600060208284031215610dff57600080fd5b610c4682610ca4565b60008060408385031215610e1b57600080fd5b610e2483610ca4565b9150610e3260208401610ca4565b90509250929050565b600181811c90821680610e4f57607f821691505b602082108103610e6f57634e487b7160e01b600052602260045260246000fd5b50919050565b60008251610e87818460208701610c4d565b9190910192915050565b6000808354610e9f81610e3b565b60018281168015610eb75760018114610ecc57610efb565b60ff1984168752821515830287019450610efb565b8760005260208060002060005b85811015610ef25781548a820152908401908201610ed9565b50505082870194505b50929695505050505050565b601f821115610c1757600081815260208120601f850160051c81016020861015610f2e5750805b601f850160051c820191505b81811015610f4d57828155600101610f3a565b505050505050565b815167ffffffffffffffff811115610f6f57610f6f610cea565b610f8381610f7d8454610e3b565b84610f07565b602080601f831160018114610fb85760008415610fa05750858301515b600019600386901b1c1916600185901b178555610f4d565b600085815260208120601f198616915b82811015610fe757888601518255948401946001909101908401610fc8565b50858210156110055787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561102757600080fd5b815160168110610c4657600080fd5b634e487b7160e01b600052602160045260246000fd5b602081016016831061106e57634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561108657600080fd5b81518015158114610c4657600080fdfea264697066735822122012ac1077291284ea25b9e61aa0337cd5472827fb35ba315b7ce2c22de6a85bdf64736f6c63430008130033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    profileName_: PromiseOrValue<string>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      profileName_,
      decimal_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    profileName_: PromiseOrValue<string>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      profileName_,
      decimal_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}