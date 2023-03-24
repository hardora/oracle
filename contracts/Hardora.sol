// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Hardora{
    string public name ;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => bool) public isValidator;
    mapping(address => bool) public hasRequested;
    address[] public validators;
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event ValidatorAdded(address indexed validator);
    event Requested(address indexed validator);
    constructor( string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _totalSupply) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply = _totalSupply * 10 ** decimals;
        balanceOf[msg.sender] = totalSupply;
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
        uint256 tokenAmount = totalSupply / validators.length;
        balanceOf[msg.sender] += tokenAmount;
        emit Transfer(address(this), msg.sender, tokenAmount);
        emit Requested(msg.sender);
    }
    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Not enough balance.");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }
    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[_from] >= _value, "Not enough balance.");
        require(allowance[_from][msg.sender] >= _value, "Not enough allowance.");
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }
    function increaseAllowance(address _spender, uint256 _addedValue) public returns (bool success) {
        allowance[msg.sender][_spender] += _addedValue;
        emit Approval(msg.sender, _spender, allowance[msg.sender][_spender]);
        return true;
    }
    function decreaseAllowance(address _spender, uint256 _subtractedValue) public returns (bool success) {
        uint256 oldValue = allowance[msg.sender][_spender];
        if (_subtractedValue >= oldValue) {
            allowance[msg.sender][_spender] = 0;
        } else {
            allowance[msg.sender][_spender] = oldValue - _subtractedValue;
        }
        emit Approval(msg.sender, _spender, allowance[msg.sender][_spender]);
        return true;
    }
function burn(uint256 _value) public returns (bool success) {
    require(balanceOf[msg.sender] >= _value, "Not enough balance.");
    balanceOf[msg.sender] -= _value;
    totalSupply -= _value;
    emit Transfer(msg.sender, address(0), _value);
    return true;
}


}