//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./MOCK.sol";

contract WMOCK is ERC20 {
	event Deposit(address indexed account, uint256 amount);
	event Withdraw(address indexed account, uint256 amount);

	MOCK public mock;

	constructor(address _mockAddress) ERC20("Wrappped Mock", "WMOCK") {
		mock = MOCK(_mockAddress);
	}

	function deposit(uint256 amount) public {
		mock.transferFrom(msg.sender, address(this), amount);
		_mint(msg.sender, amount);
		emit Deposit(msg.sender, amount);
	}

	function withdraw(uint256 amount) external {
		_burn(msg.sender, amount);
		mock.transfer(msg.sender, amount);
		emit Withdraw(msg.sender, amount);
	}
}
