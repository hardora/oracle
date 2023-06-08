import "./App.css";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";
import Web3 from "web3";

import Faucet from "../HardoraVenom/faucetAbi";

function faucetPage() {
  const [address, setAddress] = useState("");
  const [deployWalletValue, setDeployWalletValue] = useState(10);
  const [minted, setMinted] = useState(false);
  const [description, setDescription] = useState("");

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isCaptchaVerified) {
      try {
        const venomProvider = new Web3.providers.HttpProvider(
          "https://jrpc-testnet.venom.foundation/rpc"
        );
        const web3 = new Web3(venomProvider);

        const faucet = new web3.eth.Contract(Faucet.abi, Faucet.address);

        await faucet.methods.mint(deployWalletValue).send({
          from: "0:7a04abb7e385f3aaf8c0ca6579949fd7b46ffbd709b533b5cffe7ebe41764db0",
        });

        setMinted(true);
      } catch (error) {
        console.error("Error sending tokens:", error);
        setMinted(false);
      }
    } else {
      alert("Please verify that you are not a robot.");
    }
  };

  const handleCaptchaChange = (res) => {
    setIsCaptchaVerified(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <img
        src="../images/logo2.png"
        className="p-5"
        alt="Hardora logo"
        width={"200px"}
        height={"50px"}
      />
      <div className="w-full h-screen flex flex-col items-center justify-center bg-custom text-white px-0 md:px-0 lg:px-0 md:py-5 lg:py-5">
        <h1 className="font-semibold text-xl md:text-4xl lg:text-4xl pt-5">
          Hardora Faucet for Developers
        </h1>
        <p className="text-gray-400 py-5 text-sm md:text-base lg:text-base">
          feel free to request Test Hardora tokens to your wallet
        </p>

        <form
          onSubmit={handleChange}
          className=" px-5 flex flex-col card rounded-lg"
        >
          <h1 className="text-center font-bold text-2xl md:text-2xl lg:text-2xl pt-4 pb-10">
            Testnet
          </h1>

          <label className="text-gray-400 ">
            Input your Test HARDORA wallet address*
            <div>
              <input
                type="text"
                className=" w-full md:w-100 lg:w-full h-10 px-2 md:px-4 lg:px-4 rounded-lg bg-custom"
                placeholder="address"
                id="account"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
            </div>
          </label>

          <div className="py-6">
            <label className="text-gray-400 pb-5">
              Reason for requesting HARDORA*
            </label>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-3 h-20 px-4 rounded-lg bg-custom"
              placeholder="Describe the idea of the project in as much details as
                possible. This faucet is only for developers."
            ></textarea>
          </div>

          <div className="flex justify-center py-3">
            <ReCAPTCHA
              theme="dark"
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
            />
          </div>

          <div className="py-6">
            {!minted ? (
              <button
                className="w-full h-10 bg-gold rounded-lg "
                type="submit"
                disabled={!address || !description}
                style={
                  !address || !description
                    ? { backgroundColor: "#bb9f01", color: "gray" }
                    : { backgroundColor: "#ffd900", color: "white" }
                }
                onClick={handleFormSubmit}
              >
                Request Testnet HARDORA tokens
              </button>
            ) : (
              alert("Token Sent successfully!")
            )}
          </div>

          <p className="text-gray-400 pb-6 text-center">
            Testnet HARDORA tokens are sent from: {Faucet.address}
          </p>
        </form>

        <div className="flex flex-row space-x-3 py-10">
          <FaTwitter size={22} color="bg-gold" />
          <FaDiscord size={22} color="bg-gold" />
          <FaTelegram size={22} color="bg-gold" />
        </div>

        <div className="flex flex-row space-x-3 font-bold">
          <h2> Privacy Policy</h2>
          <h2> Terms of Use</h2>
        </div>
      </div>
    </>
  );
}

export default faucetPage;
