pragma solidity ^0.4.17;

contract Lottery {
    address public manager;
    address[] public players;

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value >= .001 ether);

        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function pickWinner() public onlyToManager {

        uint i = random() % players.length;
        players[i].transfer(this.balance);
        players = new address[](0);
    }

    modifier onlyToManager() {
        require(msg.sender == manager);
        _;
    }

    function getPlayers() public view returns (address[]) {
        return  players;
    }