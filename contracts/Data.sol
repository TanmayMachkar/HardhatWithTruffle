// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Data {
    string private data;

    constructor(string memory _data){
        data = _data;
    }

    function requestdata() public view returns(string memory){
        return data;
    }

    function setdata(string memory _data) public{
        data = _data;
    }
}