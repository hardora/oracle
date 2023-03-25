// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Hardora is ERC20 {
    address connext;
    string public namee;
    string public symboll;
    uint8 public decimalss;
    uint256 public totalSupplyy;
    mapping(address => uint256) public balanceOff;
    mapping(address => mapping(address => uint256)) public allowancee;
    mapping(address => bool) public isValidator;
    mapping(address => bool) public hasRequested;
    address[] public validators;
    event Transferr(address indexed from, address indexed to, uint256 value);
    event Approvall(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    event ValidatorAdded(address indexed validator);
    event Requested(address indexed validator);

    constructor(
        string memory _namee,
        string memory _symboll,
        uint8 _decimalss,
        uint256 _totalSupplyy,
        address _connext
    ) ERC20("Hardora", "HAR") {
        namee = _namee;
        symboll = _symboll;
        decimalss = _decimalss;
        totalSupplyy = _totalSupplyy * 10 ** decimalss;
        balanceOff[msg.sender] = totalSupplyy;
        connext = _connext;
    }

    function addValidator(address _validator) public {
        require(!isValidator[_validator], "Validator already exists.");
        isValidator[_validator] = true;
        validators.push(_validator);
        emit ValidatorAdded(_validator);
    }

    function requestTokens() public {
        require(isValidator[msg.sender], "Only validators can request tokens.");
        require(!hasRequested[msg.sender], "Tokens already requested.");

        hasRequested[msg.sender] = true;
        uint256 tokenAmount = totalSupplyy / validators.length;
        balanceOff[msg.sender] += tokenAmount;
        emit Transferr(address(this), msg.sender, tokenAmount);
        emit Requested(msg.sender);
    }

    function transferr(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(balanceOff[msg.sender] >= _value, "Not enough balance.");
        balanceOff[msg.sender] -= _value;
        balanceOff[_to] += _value;
        emit Transferr(msg.sender, _to, _value);
        return true;
    }

    function approvee(
        address _spender,
        uint256 _value
    ) public returns (bool success) {
        allowancee[msg.sender][_spender] = _value;
        emit Approvall(msg.sender, _spender, _value);
        return true;
    }

    function transferFromm(
        address _from,
        address _to,
        uint256 _value
    ) public returns (bool success) {
        require(balanceOff[_from] >= _value, "Not enough balance.");
        require(
            allowancee[_from][msg.sender] >= _value,
            "Not enough allowancee."
        );
        balanceOff[_from] -= _value;
        balanceOff[_to] += _value;
        allowancee[_from][msg.sender] -= _value;
        emit Transferr(_from, _to, _value);
        return true;
    }

    function increaseallowanceee(
        address _spender,
        uint256 _addedValue
    ) public returns (bool success) {
        allowancee[msg.sender][_spender] += _addedValue;
        emit Approvall(msg.sender, _spender, allowancee[msg.sender][_spender]);
        return true;
    }

    function decreaseallowancee(
        address _spender,
        uint256 _subtractedValue
    ) public returns (bool success) {
        uint256 oldValue = allowancee[msg.sender][_spender];
        if (_subtractedValue >= oldValue) {
            allowancee[msg.sender][_spender] = 0;
        } else {
            allowancee[msg.sender][_spender] = oldValue - _subtractedValue;
        }
        emit Approvall(msg.sender, _spender, allowancee[msg.sender][_spender]);
        return true;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == connext);
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public {
        require(msg.sender == connext);
        _burn(from, amount);
    }
}
