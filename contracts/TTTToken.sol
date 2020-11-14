// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract TTTToken is ERC20 {
    constructor() ERC20("TTT Token", "TTT") public {
    }
}