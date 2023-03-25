// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Oracle {
    address public owner;
    uint256 public currentSessionId;
    uint256 public oracleResponse;

    struct Session {
        address userAddress;
        address deviceAddress;
        string data;
        bytes32 requestId;
    }

    struct UserInfo {
        string name;
        string email;
    }

    struct DeviceInfo {
        string deviceType;
    }

    mapping(address => UserInfo) public userInformation;
    mapping(address => DeviceInfo) public trustedDeviceInfo;
    mapping(uint256 => Session) public sessionData;

    constructor() {
        owner = msg.sender;
        currentSessionId = 0;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the contract owner can call this function."
        );
        _;
    }
    modifier onlyTrustedDevice() {
        require(
            bytes(trustedDeviceInfo[msg.sender].deviceType).length != 0,
            "Only trusted devices can call this function."
        );
        _;
    }

    function addUserInformation(
        string memory _name,
        string memory _email
    ) public {
        userInformation[msg.sender].name = _name;
        userInformation[msg.sender].email = _email;
    }

    function addTrustedDeviceInfo(string memory _deviceType) public {
        trustedDeviceInfo[msg.sender].deviceType = _deviceType;
    }

    function storeSessionData(
        address _userAddress,
        address _deviceAddress,
        string memory _data,
        bytes32 _requestId
    ) public onlyOwner {
        sessionData[currentSessionId].userAddress = _userAddress;
        sessionData[currentSessionId].deviceAddress = _deviceAddress;
        sessionData[currentSessionId].data = _data;
        sessionData[currentSessionId].requestId = _requestId;
        currentSessionId++;
    }

    function validateDataRequestAndOracleResponse(
        uint256 _sessionId,
        uint256 _response
    ) private view returns (bool) {
        // Check that the session exists
        require(_sessionId < currentSessionId, "Session does not exist.");
        // Check that the oracle response matches the data request
        require(
            sessionData[_sessionId].requestId == bytes32(_response),
            "Invalid oracle response."
        );
        return true;
    }

    function fulfill(uint256 _sessionId, uint256 _response) public onlyOwner {
        // Validate the data request and oracle response
        require(
            validateDataRequestAndOracleResponse(_sessionId, _response),
            "Invalid data request or oracle response."
        );
        // Store the session data
        storeSessionData(
            sessionData[_sessionId].userAddress,
            sessionData[_sessionId].deviceAddress,
            sessionData[_sessionId].data,
            sessionData[_sessionId].requestId
        );
        // Store the oracle response
        oracleResponse = _response;
    }

    function requestDataFromDevice() public onlyTrustedDevice {
        string memory data = "Sample data from trusted device.";
        bytes32 requestId = keccak256(
            abi.encodePacked(block.timestamp, msg.sender, data)
        );
        sessionData[currentSessionId].deviceAddress = msg.sender;
        sessionData[currentSessionId].requestId = requestId;
        sessionData[currentSessionId].data = data;
        currentSessionId++;
    }

    function getSessionData(
        uint256 _sessionId
    ) public view returns (address, address, string memory, bytes32) {
        require(_sessionId < currentSessionId, "Session does not exist.");
        Session memory session = sessionData[_sessionId];
        return (
            session.userAddress,
            session.deviceAddress,
            session.data,
            session.requestId
        );
    }

    function getOracleResponse() public view returns (uint256) {
        return oracleResponse;
    }

    function getUserInformation()
        public
        view
        returns (string memory, string memory)
    {
        return (
            userInformation[msg.sender].name,
            userInformation[msg.sender].email
        );
    }

    function getTrustedDeviceInfo() public view returns (string memory) {
        return trustedDeviceInfo[msg.sender].deviceType;
    }
}
