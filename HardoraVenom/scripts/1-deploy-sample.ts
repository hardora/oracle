import { Address } from "locklift";

async function main() {
  const signer = (await locklift.keystore.getSigner("0"))!;
  console.log("one");

  const { contract: faucet, tx } = await locklift.factory.deployContract({
    contract: "HardoraFaucet",
    publicKey: signer.publicKey,
    initParams: {
      owner: `0x${signer.publicKey}`,
    },

    constructorParams: {
      _state: 0,
      _distributedTokenRoot: new Address("0:7a04abb7e385f3aaf8c0ca6579949fd7b46ffbd709b533b5cffe7ebe41764db0"),
    },
    value: locklift.utils.toNano(5),
  });
  console.log("two");

  console.log(`Faucet deployed at: ${faucet.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
