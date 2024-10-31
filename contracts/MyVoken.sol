// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyVoken {
    // Defining token properties and events start here.

    // state variables
    string public name = "MyVoken";
    string public symbol = "MTV";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    // Mapping to track balances and allowances.
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowances;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );

    // Constructor. Only called once when the contract is deployed.
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;

        emit Transfer(address(0), msg.sender, totalSupply);
    }

    // We now begin creation of functions.

    // transfer function allows users to send tokens to other addresses.
    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        // Check if Sender account has sufficient funds. Cancel transaction if not.
        require(balanceOf[msg.sender] >= _value, "Insufficient balance");

        // Remove from the senders account.
        balanceOf[msg.sender] -= _value;

        // Fund the recipient account.
        balanceOf[_to] += _value;

        // Emit transfer event.
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    // approve function allows users to authorize another account to spend on their behalf.
    function approve(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowances[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    // transferFrom function allows a spender or third-party application to spend funds from
    // owners account with the owners permission.
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        // Check balance of owners account and check how much the spender/third-party can spend on the owners
        // behalf.
        require(balanceOf[_from] >= _value, "Insufficient balance");
        require(allowances[_from][msg.sender] >= _value, "Allowance exceeded");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowances[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }
}
