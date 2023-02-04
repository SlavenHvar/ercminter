// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERCMinter is ERC20 {

    address public contractCreator; 
    bool public isFixed;
    uint8 public _decimals;
    
    constructor(uint256 initialSupply, bool isFixedSupply, string memory name, string memory symbol, uint8 customDecimals) ERC20(name ,symbol) {
        _decimals = customDecimals;
        contractCreator = msg.sender;
        isFixed = isFixedSupply;
        _mint(msg.sender, initialSupply);
    }

    function Mint(address account, uint256 amount) public {
        require(account == contractCreator, "Only Contract creator can Mint");
        require(isFixed == false, "This is a fixed supply contract");
        _mint(account, amount);
    }

    function Burn(address account, uint256 amount) public {
        require(account == contractCreator, "Only Contract creator can Burn");
        require(isFixed == false, "This is a fixed supply contract");
        _burn(account, amount);
    }

    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }
}