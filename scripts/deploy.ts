import { ethers } from "hardhat";

async function main() {

  // Get a single signer or test account to be used for the deploying
  // of our test tokens.
  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contract with account:", deployer.address);

  // Create token factory. This is essentially an instance of our smart contract.
  const Token = await ethers.getContractFactory("Vraken");

  const initialSupply = 1000000; // Initial supply of token.
  const feesRecipient = "0x5ac41Dd0Ee7CE562Df0efDdFa1aaEcd1D23c37a1"; // Account to recieve all fees.

  // Deploy our token using the .deploy() method. And get the returned object which contains 
  // properties and functions for interacting with the deployed contract.
  const token = await Token.deploy(initialSupply, feesRecipient);
  console.log("Token deployed to(target):", token.target);
}



main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})