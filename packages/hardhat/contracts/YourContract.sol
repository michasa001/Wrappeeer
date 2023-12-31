//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YourContract is ERC20 {
	event Deposit(address indexed account, uint256 amount);
	event Withdraw(address indexed account, uint256 amount);

	constructor() ERC20("Wrappped Sepolia", "WSEP") {}

	function deposit() public payable {
		_mint(msg.sender, msg.value);
		emit Deposit(msg.sender, msg.value);
	}

	function withdraw(uint256 amount) external {
		_burn(msg.sender, amount);
		(bool sent, ) = (msg.sender).call{ value: amount }("");
		require(sent, "Eth Failed to send");
		emit Withdraw(msg.sender, amount);
	}

	receive() external payable {
		deposit();
	}
}
