// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import {IConnext} from "@connext/smart-contracts/contracts/core/connext/interfaces/IConnext.sol";
import './Hardora.sol';

Hardora token = new Hardora(address);
contract Bridge{
 IConnext public immutable connext;
  constructor(address _connext) {
    connext = IConnext(_connext);
  }
  /**
   * @notice Transfers non-native assets from one chain to another.
   * @dev User should approve a spending allowance before calling this.
   * @param token Address of the token on this domain.
   * @param amount The amount to transfer.
   * @param recipient The destination address (e.g. a wallet).
   * @param destinationDomain The destination domain ID.
   * @param slippage The maximum amount of slippage the user will accept in BPS.
   * @param relayerFee The fee offered to relayers.
   */
  function xTransfer(
    address token,
    uint256 amount,
    address recipient,
    uint32 destinationDomain,
    uint256 slippage,
    uint256 relayerFee
  ) external payable {
    Hardora _token = Hardora(token);
    require(
      _token.allowance(msg.sender, address(this)) >= amount,
      "User must approve amount"
    );
    // User sends funds to this contract
    _token.transferFrom(msg.sender, address(this), amount);
    // This contract approves transfer to Connext
    _token.approve(address(connext), amount);
    connext.xcall{value: relayerFee}(
      destinationDomain, // _destination: Domain ID of the destination chain
      recipient,         // _to: address receiving the funds on the destination
      token,             // _asset: address of the token contract
      msg.sender,        // _delegate: address that can revert or forceLocal on destination
      amount,            // _amount: amount of tokens to transfer
      slippage,          // _slippage: the maximum amount of slippage the user will accept in BPS (e.g. 30 = 0.3%)
      bytes("")          // _callData: empty bytes because we're only sending funds
    );  
  }

  // function xTransferEth(
  //   address destinationUnwrapper,
  //   address weth,
  //   uint256 amount,
  //   address recipient,
  //   uint32 destinationDomain,
  //   uint256 slippage,
  //   uint256 relayerFee
  // ) external payable {
  //   // Wrap ETH into WETH to send with the xcall
  //   IWETH(weth).deposit{value: amount}();
  //   // This contract approves transfer to Connext
  //   IWETH(weth).approve(address(connext), amount);
  //   // Encode the recipient address for calldata
  //   bytes memory callData = abi.encode(recipient);
  //   // xcall the Unwrapper contract to unwrap WETH into ETH on destination
  //   connext.xcall{value: relayerFee}(
  //     destinationDomain,    // _destination: Domain ID of the destination chain
  //     destinationUnwrapper, // _to: Unwrapper contract
  //     weth,                 // _asset: address of the WETH contract
  //     msg.sender,           // _delegate: address that can revert or forceLocal on destination
  //     amount,               // _amount: amount of tokens to transfer
  //     slippage,             // _slippage: the maximum amount of slippage the user will accept in BPS (e.g. 30 = 0.3%)
  //     callData              // _callData: calldata with encoded recipient address
  //   );  
  // }

}

