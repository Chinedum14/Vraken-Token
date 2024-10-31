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
import type { NonPayableOverrides } from "../common";
import type { MyToken, MyTokenInterface } from "../MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowances",
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
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280600781526020017f4d79566f6b656e00000000000000000000000000000000000000000000000000815250600090816100489190610409565b506040518060400160405280600381526020017f4d545600000000000000000000000000000000000000000000000000000000008152506001908161008d9190610409565b506012600260006101000a81548160ff021916908360ff1602179055503480156100b657600080fd5b5060405161154a38038061154a83398181016040528101906100d8919061050c565b600260009054906101000a900460ff16600a6100f491906106a8565b816100ff91906106f3565b600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6003546040516101ab9190610744565b60405180910390a35061075f565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061023a57607f821691505b60208210810361024d5761024c6101f3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026102b57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610278565b6102bf8683610278565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006103066103016102fc846102d7565b6102e1565b6102d7565b9050919050565b6000819050919050565b610320836102eb565b61033461032c8261030d565b848454610285565b825550505050565b600090565b61034961033c565b610354818484610317565b505050565b5b818110156103785761036d600082610341565b60018101905061035a565b5050565b601f8211156103bd5761038e81610253565b61039784610268565b810160208510156103a6578190505b6103ba6103b285610268565b830182610359565b50505b505050565b600082821c905092915050565b60006103e0600019846008026103c2565b1980831691505092915050565b60006103f983836103cf565b9150826002028217905092915050565b610412826101b9565b67ffffffffffffffff81111561042b5761042a6101c4565b5b6104358254610222565b61044082828561037c565b600060209050601f8311600181146104735760008415610461578287015190505b61046b85826103ed565b8655506104d3565b601f19841661048186610253565b60005b828110156104a957848901518255600182019150602085019450602081019050610484565b868310156104c657848901516104c2601f8916826103cf565b8355505b6001600288020188555050505b505050505050565b600080fd5b6104e9816102d7565b81146104f457600080fd5b50565b600081519050610506816104e0565b92915050565b600060208284031215610522576105216104db565b5b6000610530848285016104f7565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156105bf5780860481111561059b5761059a610539565b5b60018516156105aa5780820291505b80810290506105b885610568565b945061057f565b94509492505050565b6000826105d85760019050610694565b816105e65760009050610694565b81600181146105fc576002811461060657610635565b6001915050610694565b60ff84111561061857610617610539565b5b8360020a91508482111561062f5761062e610539565b5b50610694565b5060208310610133831016604e8410600b841016171561066a5782820a90508381111561066557610664610539565b5b610694565b6106778484846001610575565b9250905081840481111561068e5761068d610539565b5b81810290505b9392505050565b600060ff82169050919050565b60006106b3826102d7565b91506106be8361069b565b92506106eb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846105c8565b905092915050565b60006106fe826102d7565b9150610709836102d7565b9250828202610717816102d7565b9150828204841483151761072e5761072d610539565b5b5092915050565b61073e816102d7565b82525050565b60006020820190506107596000830184610735565b92915050565b610ddc8061076e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806355b6ed5c1461015257806370a082311461018257806395d89b41146101b2578063a9059cbb146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610985565b60405180910390f35b6100d060048036038101906100cb9190610a40565b61028e565b6040516100dd9190610a9b565b60405180910390f35b6100ee610380565b6040516100fb9190610ac5565b60405180910390f35b61011e60048036038101906101199190610ae0565b610386565b60405161012b9190610a9b565b60405180910390f35b61013c610678565b6040516101499190610b4f565b60405180910390f35b61016c60048036038101906101679190610b6a565b61068b565b6040516101799190610ac5565b60405180910390f35b61019c60048036038101906101979190610baa565b6106b0565b6040516101a99190610ac5565b60405180910390f35b6101ba6106c8565b6040516101c79190610985565b60405180910390f35b6101ea60048036038101906101e59190610a40565b610756565b6040516101f79190610a9b565b60405180910390f35b6000805461020d90610c06565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610c06565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161036e9190610ac5565b60405180910390a36001905092915050565b60035481565b600081600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561040a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161040190610c83565b60405180910390fd5b81600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156104c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c090610cef565b60405180910390fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105189190610d3e565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461056e9190610d72565b9250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106019190610d3e565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106659190610ac5565b60405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b6005602052816000526040600020602052806000526040600020600091509150505481565b60046020528060005260406000206000915090505481565b600180546106d590610c06565b80601f016020809104026020016040519081016040528092919081815260200182805461070190610c06565b801561074e5780601f106107235761010080835404028352916020019161074e565b820191906000526020600020905b81548152906001019060200180831161073157829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d190610c83565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108299190610d3e565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461087f9190610d72565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108e39190610ac5565b60405180910390a36001905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561092f578082015181840152602081019050610914565b60008484015250505050565b6000601f19601f8301169050919050565b6000610957826108f5565b6109618185610900565b9350610971818560208601610911565b61097a8161093b565b840191505092915050565b6000602082019050818103600083015261099f818461094c565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109d7826109ac565b9050919050565b6109e7816109cc565b81146109f257600080fd5b50565b600081359050610a04816109de565b92915050565b6000819050919050565b610a1d81610a0a565b8114610a2857600080fd5b50565b600081359050610a3a81610a14565b92915050565b60008060408385031215610a5757610a566109a7565b5b6000610a65858286016109f5565b9250506020610a7685828601610a2b565b9150509250929050565b60008115159050919050565b610a9581610a80565b82525050565b6000602082019050610ab06000830184610a8c565b92915050565b610abf81610a0a565b82525050565b6000602082019050610ada6000830184610ab6565b92915050565b600080600060608486031215610af957610af86109a7565b5b6000610b07868287016109f5565b9350506020610b18868287016109f5565b9250506040610b2986828701610a2b565b9150509250925092565b600060ff82169050919050565b610b4981610b33565b82525050565b6000602082019050610b646000830184610b40565b92915050565b60008060408385031215610b8157610b806109a7565b5b6000610b8f858286016109f5565b9250506020610ba0858286016109f5565b9150509250929050565b600060208284031215610bc057610bbf6109a7565b5b6000610bce848285016109f5565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610c1e57607f821691505b602082108103610c3157610c30610bd7565b5b50919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b6000610c6d601483610900565b9150610c7882610c37565b602082019050919050565b60006020820190508181036000830152610c9c81610c60565b9050919050565b7f416c6c6f77616e63652065786365656465640000000000000000000000000000600082015250565b6000610cd9601283610900565b9150610ce482610ca3565b602082019050919050565b60006020820190508181036000830152610d0881610ccc565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d4982610a0a565b9150610d5483610a0a565b9250828203905081811115610d6c57610d6b610d0f565b5b92915050565b6000610d7d82610a0a565b9150610d8883610a0a565b9250828201905080821115610da057610d9f610d0f565b5b9291505056fea2646970667358221220b7737714ae559cbdfe07e4853f3aa0e3adc080d348d254be76471cc1bbc8af4964736f6c634300081b0033";

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
    _initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  override deploy(
    _initialSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_initialSupply, overrides || {}) as Promise<
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
