// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RandomNumberGenerator {
    

  function generateRandomNumber() external view returns (uint256) {
  uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender)));
  return randomNumber;
}

}