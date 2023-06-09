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
      _state: 1,
    },
    value: locklift.utils.toNano(5),
  });
  console.log("two");

  console.log(`Oracle deployed at: ${oracle.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
