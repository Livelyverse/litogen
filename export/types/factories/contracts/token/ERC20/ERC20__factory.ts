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
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../contracts/token/ERC20/ERC20";

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
        internalType: "address",
        name: "acl_",
        type: "address",
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
    name: "profileId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e2438038062000e248339810160408190526200003491620002b9565b6001600160a01b038216156200015e576001600160a01b0382163b6200008f5760405162461bcd60e51b815260206004820152600b60248201526a125b9d985b1a59081050d360aa1b60448201526064015b60405180910390fd5b6040516301ffc9a760e01b815263047d056160e11b60048201526001600160a01b038316906301ffc9a790602401602060405180830381865afa158015620000db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000101919062000389565b6200013d5760405162461bcd60e51b815260206004820152600b60248201526a125b1b1959d85b081050d360aa1b604482015260640162000086565b600480546001600160a01b0319166001600160a01b03841617905562000185565b600480546001600160a01b03191673f5a6fefbe1a23653fb8a72b1730ba447c73fb9931790555b600562000193868262000443565b506006620001a2858262000443565b506007805460ff191660ff8316179055604051620001c59084906020016200050f565b6040516020818303038152906040528051906020012060038190555050505050506200052d565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200021f57818101518382015260200162000205565b50506000910152565b600082601f8301126200023a57600080fd5b81516001600160401b0380821115620002575762000257620001ec565b604051601f8301601f19908116603f01168101908282118183101715620002825762000282620001ec565b816040528381528660208588010111156200029c57600080fd5b620002af84602083016020890162000202565b9695505050505050565b600080600080600060a08688031215620002d257600080fd5b85516001600160401b0380821115620002ea57600080fd5b620002f889838a0162000228565b965060208801519150808211156200030f57600080fd5b6200031d89838a0162000228565b955060408801519150808211156200033457600080fd5b50620003438882890162000228565b606088015190945090506001600160a01b03811681146200036357600080fd5b608087015190925060ff811681146200037b57600080fd5b809150509295509295909350565b6000602082840312156200039c57600080fd5b81518015158114620003ad57600080fd5b9392505050565b600181811c90821680620003c957607f821691505b602082108103620003ea57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200043e57600081815260208120601f850160051c81016020861015620004195750805b601f850160051c820191505b818110156200043a5782815560010162000425565b5050505b505050565b81516001600160401b038111156200045f576200045f620001ec565b6200047781620004708454620003b4565b84620003f0565b602080601f831160018114620004af5760008415620004965750858301515b600019600386901b1c1916600185901b1785556200043a565b600085815260208120601f198616915b82811015620004e057888601518255948401946001909101908401620004bf565b5085821015620004ff5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600082516200052381846020870162000202565b9190910192915050565b6108e7806200053d6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063313ce5671161008c57806395d89b411161006657806395d89b41146101b0578063a9059cbb146101b8578063dd62ed3e146101cb578063de2873591461020457600080fd5b8063313ce5671461015157806354fd4d501461016657806370a082311461018757600080fd5b806301ffc9a7146100d457806306fdde03146100fc57806308386eba14610111578063095ea7b31461012357806318160ddd1461013657806323b872dd1461013e575b600080fd5b6100e76100e23660046106c9565b61021f565b60405190151581526020015b60405180910390f35b610104610256565b6040516100f391906106fa565b6003545b6040519081526020016100f3565b6100e7610131366004610764565b6102e8565b600254610115565b6100e761014c36600461078e565b610310565b60075460405160ff90911681526020016100f3565b604080518082019091526005815264312e302e3360d81b6020820152610104565b6101156101953660046107ca565b6001600160a01b031660009081526020819052604090205490565b610104610344565b6100e76101c6366004610764565b610353565b6101156101d93660046107e5565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6004546040516001600160a01b0390911681526020016100f3565b60006001600160e01b031982166336372b0760e01b148061025057506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606005805461026590610818565b80601f016020809104026020016040519081016040528092919081815260200182805461029190610818565b80156102de5780601f106102b3576101008083540402835291602001916102de565b820191906000526020600020905b8154815290600101906020018083116102c157829003601f168201915b5050505050905090565b60006102fa63095ea7b360e01b610371565b3361030681858561044a565b5060019392505050565b60006103226323b872dd60e01b610371565b3361032e858285610517565b61033985858561059d565b506001949350505050565b60606006805461026590610818565b600061036563a9059cbb60e01b610371565b3361030681858561059d565b6004805460035460408051625e0be360e41b8152938401919091523060248401526001600160e01b031984166044840152336064840152516000926001600160a01b03909216916305e0be30916084808301926020929190829003018187875af11580156103e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104079190610852565b9050600081601581111561041d5761041d610873565b14610446578060405163d8f7573d60e01b815260040161043d9190610889565b60405180910390fd5b5050565b6001600160a01b0383161580159061046a57506001600160a01b03821615155b6104b65760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964204f776e65722f5370656e6465722041646472657373000000604482015260640161043d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610597578181101561058a5760405162461bcd60e51b8152602060048201526011602482015270496c6c6567616c20416c6c6f77616e636560781b604482015260640161043d565b610597848484840361044a565b50505050565b6001600160a01b038316158015906105bd57506001600160a01b03821615155b6106095760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642046726f6d2f546f2041646472657373000000000000000000604482015260640161043d565b6001600160a01b038316600090815260208190526040902054818110156106635760405162461bcd60e51b815260206004820152600e60248201526d125b1b1959d85b08105b5bdd5b9d60921b604482015260640161043d565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610597565b6000602082840312156106db57600080fd5b81356001600160e01b0319811681146106f357600080fd5b9392505050565b600060208083528351808285015260005b818110156107275785810183015185820160400152820161070b565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461075f57600080fd5b919050565b6000806040838503121561077757600080fd5b61078083610748565b946020939093013593505050565b6000806000606084860312156107a357600080fd5b6107ac84610748565b92506107ba60208501610748565b9150604084013590509250925092565b6000602082840312156107dc57600080fd5b6106f382610748565b600080604083850312156107f857600080fd5b61080183610748565b915061080f60208401610748565b90509250929050565b600181811c9082168061082c57607f821691505b60208210810361084c57634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561086457600080fd5b8151601681106106f357600080fd5b634e487b7160e01b600052602160045260246000fd5b60208101601683106108ab57634e487b7160e01b600052602160045260246000fd5b9190529056fea2646970667358221220e00e3e6f73a58a4dd47026504bda35e42c47363b34e855fcf5b42e1af0a6f7b564736f6c63430008130033";

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
    acl_: PromiseOrValue<string>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(
      name_,
      symbol_,
      profileName_,
      acl_,
      decimal_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    profileName_: PromiseOrValue<string>,
    acl_: PromiseOrValue<string>,
    decimal_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      profileName_,
      acl_,
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
