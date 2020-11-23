// SPDX-License-Identifier: MIT
pragma solidity 0.4.26;

import "./TTTToken.sol";
import "openzeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";

contract TTTCrowdsale is TimedCrowdsale {
  constructor
  (
    uint256 _openingTime,
    uint256 _closingTime,
    uint256 _rate,
    address _wallet,
    ERC20 _token
  )
    Crowdsale(_rate, _wallet, _token)
    TimedCrowdsale(_openingTime, _closingTime)
    public
  {}
}