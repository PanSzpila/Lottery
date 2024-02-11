// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Lottery {
    address public manager;
    address payable[] public players;

    constructor () {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value >= .001 ether);
        players.push(payable(msg.sender));
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    function pickWinner() public onlyToManager {

        uint i = random() % players.length;
        players[i].transfer(address(this).balance);
        players = new address payable[](0);
    }

    modifier onlyToManager() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address payable[] memory) {
        return  players;
    }
}