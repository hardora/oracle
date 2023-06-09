import { expect } from "chai";
import { Address, Contract, Signer } from "locklift";
import { FactorySource } from "../build/factorySource";

let oracle: Contract<FactorySource["Oracle"]>;
let signer: Signer;
let user: Address;

describe("Test Oracle contract", async function () {
  before(async () => {
    signer = (await locklift.keystore.getSigner("0"))!;
  });
  describe("Contracts", async function () {
    it("Load contract factory", async function () {
      const sampleData = await locklift.factory.getContractArtifacts("Oracle");

      expect(sampleData.code).not.to.equal(undefined, "Code should be available");
      expect(sampleData.abi).not.to.equal(undefined, "ABI should be available");
      expect(sampleData.tvc).not.to.equal(undefined, "tvc should be available");
    });

    it("Deploy contract", async function () {
      const INIT_STATE = 0;
      const { contract } = await locklift.factory.deployContract({
        contract: "Oracle",
        publicKey: signer.publicKey,
        initParams: {
          _nonce: locklift.utils.getRandomNonce(),
        },
        constructorParams: {
          _state: INIT_STATE,
        },
        value: locklift.utils.toNano(1),
      });
      oracle = contract;

      expect(await locklift.provider.getBalance(oracle.address).then(balance => Number(balance))).to.be.above(0);
      console.log("Oracle contract deployed to: ", oracle.address);
    });

    it("Interact with contract", async function () {
      const NEW_STATE = 1;

      await oracle.methods.setState({ _state: NEW_STATE }).sendExternal({ publicKey: signer.publicKey });

      const response = await oracle.methods.getDetails({}).call();

      const random = await oracle.methods.generateRandomNumber();
      console.log("Random Number Generated: ", await String(await random));

      // const validator = oracle.methods.addValidator(user);
      const list = await oracle.methods.validatorsList();
      console.log("Validators list: ", list);

      expect(Number(response._state)).to.be.equal(NEW_STATE, "Wrong state");
    });
  });
});
