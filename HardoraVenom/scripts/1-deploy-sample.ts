import { Address } from "locklift";

async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  console.log("one");

  const { contract: oracle, tx } = await locklift.factory.deployContract({
    contract: "Oracle",
    publicKey: signer.publicKey,
    initParams: {
      owner: `0x${signer.publicKey}`,
    },

    constructorParams: {
      _state: 0,
    },
    value: locklift.utils.toNano(1),
  });
  console.log("two");

  console.log(`Oracle deployed at: ${oracle.address}`);

  const random = await oracle.methods.generateRandomNumber();
  console.log("Random Number Generated: ", await String(await random));

  // const validator = oracle.methods.addValidator(user);
  const list = await oracle.methods.validatorsList();
  console.log("Validators list: ", await list);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
