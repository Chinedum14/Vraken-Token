// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/draft-ERC20Permit.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Vraken is ERC20, Ownable, ERC20Burnable, ERC20Pausable, ERC20Votes {
    uint256 public cap = 100_000_000 * 10 ** decimals(); // Max tokens in circulation.
    uint256 public transactionfee = 1; // 1% fee.
    address public feeRecipient; // Which account gets the transaction fee.
    mapping(address => bool) public isMinter; // Authorized minters.

    constructor(
        uint256 initialSupply,
        address _feeRecipient
    ) ERC20("Vraken", "VRK") ERC20Permit("Vraken") {
        require(initialSupply <= cap, "Initial supply exceeds cap"); // Error if initialSupply exceeds cap.
        _mint(msg.sender, initialSupply * 10 ** decimals()); // Mint initial supply.
        feeRecipient = _feeRecipient;
        isMinter[msg.sender] = true; // Setting owner as initial minter.
    }

    // Minting function with access control and cap. This function gives authorized persons
    // ability to mint more tokens.
    function mint(address to, uint256 amount) public {
        require(isMinter[msg.sender], "Not authorized to mint");
        require(totalSupply() + amount <= cap, "Cap Exceeded");
        _mint(to, amount);
    }

    // Set a transaction fee percentage.
    function setTransactionFeePercentage(uint256 newFee) external onlyOwner {
        require(newFee <= 50, "Fee cannot exceed 50%");
        transactionfee = newFee;
    }

    // Set a new fee recipient.
    function setFeeRecipient(address newRecipient) external onlyOwner {
        require(newRecipient != address(0), "Invalid recipient address");
        feeRecipient = newRecipient;
    }

    // Add or remove minter privilieges.
    function setMinter(address account, bool canMint) external onlyOwner {
        isMinter[account] = canMint;
    }

    // Required overrides for ERC20Votes, ERC20Pausable, and ERC20Burnable
    function _mint(
        address account,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._mint(account, amount);
    }

    function _burn(
        address account,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._burn(account, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Pausable) {
        super._beforeTokenTransfer(from, to, amount);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20, ERC20Votes) {
        super._afterTokenTransfer(from, to, amount);
    }

    // Override behaviour of _transfer() to apply transaction fee.
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override(ERC20) {
        uint256 feeAmount = (amount * transactionfee) / 100;
        uint256 transferAmount = amount - feeAmount;

        super._transfer(sender, recipient, transferAmount); // Send deducted funds to receiver.

        if (feeAmount > 0) {
            super._transfer(sender, feeRecipient, feeAmount); // Send fee amount to feeRecipient
        }
    }

    // Vesting function basic implementation.

    // Vesting schedule structure.
    struct VestingSchedule {
        uint256 totalAmount;
        uint256 amountClaimed;
        uint256 start;
        uint256 duration;
    }

    mapping(address => VestingSchedule) public vestingSchedules;

    // Function for creating vesting schedules.
    function createVestingSchedule(
        address beneficiary,
        uint256 totalAmount,
        uint256 start,
        uint256 duration
    ) external onlyOwner {
        require(
            totalAmount <= balanceOf(msg.sender),
            "Insufficient tokens for vesting"
        );
        require(
            vestingSchedules[beneficiary].totalAmount == 0,
            "Vesting already exists"
        );

        vestingSchedules[beneficiary] = VestingSchedule(
            totalAmount,
            0,
            start,
            duration
        );
    }

    // Function for accounts to claim vested tokens.
    function claimVestedTokens() external {
        VestingSchedule storage schedule = vestingSchedules[msg.sender];
        require(schedule.totalAmount > 0, "No Vesting Schedule");
        require(block.timestamp >= schedule.start, "Vesting not started");

        // Calculating the total number of tokens to be vested based on the time that has passed.
        uint256 vestedAmount = (schedule.totalAmount *
            (block.timestamp - schedule.start)) / schedule.duration;
        uint256 claimableAmount = vestedAmount - schedule.amountClaimed;

        // Release claimed funds.
        require(claimableAmount > 0, "No tokens available to claim");
        schedule.amountClaimed += claimableAmount;
        _transfer(address(this), msg.sender, claimableAmount);
    }
}
