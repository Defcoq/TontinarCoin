pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


/**
 * @title TontinarToken
 * @dev TontinarToken is an ERC20 that mints a given initial supply.
 */
contract TontinarToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Tontinar Token ", "TNAR"){
        _mint(msg.sender, initialSupply);
    }
    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}