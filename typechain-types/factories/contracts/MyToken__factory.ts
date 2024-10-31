/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { MyToken, MyTokenInterface } from "../../contracts/MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051611bfc380380611bfc833981810160405281019061003291906102b3565b6040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b000000000000000000000000000000000000000000000000000000000081525081600390816100ad9190610526565b5080600490816100bd9190610526565b5050506100f4336100d26100fa60201b60201c565b600a6100de9190610767565b836100e991906107b2565b61010360201b60201c565b506108cf565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610172576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016990610851565b60405180910390fd5b6101846000838361026e60201b60201c565b80600260008282546101969190610871565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101eb9190610871565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161025091906108b4565b60405180910390a361026a6000838361027360201b60201c565b5050565b505050565b505050565b600080fd5b6000819050919050565b6102908161027d565b811461029b57600080fd5b50565b6000815190506102ad81610287565b92915050565b6000602082840312156102c9576102c8610278565b5b60006102d78482850161029e565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061036157607f821691505b6020821081036103745761037361031a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026103dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261039f565b6103e6868361039f565b95508019841693508086168417925050509392505050565b6000819050919050565b600061042361041e6104198461027d565b6103fe565b61027d565b9050919050565b6000819050919050565b61043d83610408565b6104516104498261042a565b8484546103ac565b825550505050565b600090565b610466610459565b610471818484610434565b505050565b5b818110156104955761048a60008261045e565b600181019050610477565b5050565b601f8211156104da576104ab8161037a565b6104b48461038f565b810160208510156104c3578190505b6104d76104cf8561038f565b830182610476565b50505b505050565b600082821c905092915050565b60006104fd600019846008026104df565b1980831691505092915050565b600061051683836104ec565b9150826002028217905092915050565b61052f826102e0565b67ffffffffffffffff811115610548576105476102eb565b5b6105528254610349565b61055d828285610499565b600060209050601f831160018114610590576000841561057e578287015190505b610588858261050a565b8655506105f0565b601f19841661059e8661037a565b60005b828110156105c6578489015182556001820191506020850194506020810190506105a1565b868310156105e357848901516105df601f8916826104ec565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561067e5780860481111561065a576106596105f8565b5b60018516156106695780820291505b808102905061067785610627565b945061063e565b94509492505050565b6000826106975760019050610753565b816106a55760009050610753565b81600181146106bb57600281146106c5576106f4565b6001915050610753565b60ff8411156106d7576106d66105f8565b5b8360020a9150848211156106ee576106ed6105f8565b5b50610753565b5060208310610133831016604e8410600b84101617156107295782820a905083811115610724576107236105f8565b5b610753565b6107368484846001610634565b9250905081840481111561074d5761074c6105f8565b5b81810290505b9392505050565b600060ff82169050919050565b60006107728261027d565b915061077d8361075a565b92506107aa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610687565b905092915050565b60006107bd8261027d565b91506107c88361027d565b92508282026107d68161027d565b915082820484148315176107ed576107ec6105f8565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061083b601f836107f4565b915061084682610805565b602082019050919050565b6000602082019050818103600083015261086a8161082e565b9050919050565b600061087c8261027d565b91506108878361027d565b925082820190508082111561089f5761089e6105f8565b5b92915050565b6108ae8161027d565b82525050565b60006020820190506108c960008301846108a5565b92915050565b61131e806108de6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610bfb565b60405180910390f35b6100e660048036038101906100e19190610cb6565b610308565b6040516100f39190610d11565b60405180910390f35b61010461032b565b6040516101119190610d3b565b60405180910390f35b610134600480360381019061012f9190610d56565b610335565b6040516101419190610d11565b60405180910390f35b610152610364565b60405161015f9190610dc5565b60405180910390f35b610182600480360381019061017d9190610cb6565b61036d565b60405161018f9190610d11565b60405180910390f35b6101b260048036038101906101ad9190610de0565b610417565b6040516101bf9190610d3b565b60405180910390f35b6101d061045f565b6040516101dd9190610bfb565b60405180910390f35b61020060048036038101906101fb9190610cb6565b6104f1565b60405161020d9190610d11565b60405180910390f35b610230600480360381019061022b9190610cb6565b6105db565b60405161023d9190610d11565b60405180910390f35b610260600480360381019061025b9190610e0d565b6105fe565b60405161026d9190610d3b565b60405180910390f35b60606003805461028590610e7c565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610e7c565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600080610313610685565b905061032081858561068d565b600191505092915050565b6000600254905090565b600080610340610685565b905061034d858285610856565b6103588585856108e2565b60019150509392505050565b60006012905090565b600080610378610685565b905061040c818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104079190610edc565b61068d565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461046e90610e7c565b80601f016020809104026020016040519081016040528092919081815260200182805461049a90610e7c565b80156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b5050505050905090565b6000806104fc610685565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156105c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b990610f82565b60405180910390fd5b6105cf828686840361068d565b60019250505092915050565b6000806105e6610685565b90506105f38185856108e2565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f390611014565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906110a6565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108499190610d3b565b60405180910390a3505050565b600061086284846105fe565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108dc57818110156108ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c590611112565b60405180910390fd5b6108db848484840361068d565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610951576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610948906111a4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b790611236565b60405180910390fd5b6109cb838383610b61565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a48906112c8565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610ae49190610edc565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b489190610d3b565b60405180910390a3610b5b848484610b66565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ba5578082015181840152602081019050610b8a565b60008484015250505050565b6000601f19601f8301169050919050565b6000610bcd82610b6b565b610bd78185610b76565b9350610be7818560208601610b87565b610bf081610bb1565b840191505092915050565b60006020820190508181036000830152610c158184610bc2565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c4d82610c22565b9050919050565b610c5d81610c42565b8114610c6857600080fd5b50565b600081359050610c7a81610c54565b92915050565b6000819050919050565b610c9381610c80565b8114610c9e57600080fd5b50565b600081359050610cb081610c8a565b92915050565b60008060408385031215610ccd57610ccc610c1d565b5b6000610cdb85828601610c6b565b9250506020610cec85828601610ca1565b9150509250929050565b60008115159050919050565b610d0b81610cf6565b82525050565b6000602082019050610d266000830184610d02565b92915050565b610d3581610c80565b82525050565b6000602082019050610d506000830184610d2c565b92915050565b600080600060608486031215610d6f57610d6e610c1d565b5b6000610d7d86828701610c6b565b9350506020610d8e86828701610c6b565b9250506040610d9f86828701610ca1565b9150509250925092565b600060ff82169050919050565b610dbf81610da9565b82525050565b6000602082019050610dda6000830184610db6565b92915050565b600060208284031215610df657610df5610c1d565b5b6000610e0484828501610c6b565b91505092915050565b60008060408385031215610e2457610e23610c1d565b5b6000610e3285828601610c6b565b9250506020610e4385828601610c6b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610e9457607f821691505b602082108103610ea757610ea6610e4d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610ee782610c80565b9150610ef283610c80565b9250828201905080821115610f0a57610f09610ead565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610f6c602583610b76565b9150610f7782610f10565b604082019050919050565b60006020820190508181036000830152610f9b81610f5f565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610ffe602483610b76565b915061100982610fa2565b604082019050919050565b6000602082019050818103600083015261102d81610ff1565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611090602283610b76565b915061109b82611034565b604082019050919050565b600060208201905081810360008301526110bf81611083565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006110fc601d83610b76565b9150611107826110c6565b602082019050919050565b6000602082019050818103600083015261112b816110ef565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061118e602583610b76565b915061119982611132565b604082019050919050565b600060208201905081810360008301526111bd81611181565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611220602383610b76565b915061122b826111c4565b604082019050919050565b6000602082019050818103600083015261124f81611213565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006112b2602683610b76565b91506112bd82611256565b604082019050919050565b600060208201905081810360008301526112e1816112a5565b905091905056fea26469706673582212207ae0e097283bac2b83688eb3194a82adafd5090e36326d599703da447ca98b3b64736f6c634300081b0033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  override deploy(
    initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(initialSupply, overrides || {}) as Promise<
      MyToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyToken__factory {
    return super.connect(runner) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new Interface(_abi) as MyTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyToken {
    return new Contract(address, _abi, runner) as unknown as MyToken;
  }
}
