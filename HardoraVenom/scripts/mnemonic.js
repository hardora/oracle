import {
  wordlists,
  generateMnemonic,
  validateMnemonic,
  isPasswordNeeded,
  mnemonicToSeed,
  mnemonicToKeyPair,
} from "tonweb-mnemonic";

async function example() {
  console.log("one");

  wordlists.EN;
  // -> array of all words

  const mnemonic = await generateMnemonic();
  // -> ["vintage", "nice", "initial", ... ]  24 words by default
  console.log(mnemonic);

  await validateMnemonic(mnemonic);
  // -> true

  await isPasswordNeeded(mnemonic);
  // -> false

  await mnemonicToSeed(mnemonic);
  // -> Uint8Array(32) [183, 90, 187, 181, .. ]

  const keyPair = await mnemonicToKeyPair(mnemonic);
  // -> {publicKey: Uint8Array(32), secretKey: Uint8Array(64)}
  console.log(keyPair);

  const publicK = toHexString(keyPair.publicKey);
  // -> "8c8dfc9f9f58badd76151775ff0699bb2498939f669eaef2de16f95a52888c65"
  console.log(publicK);

  const secret = toHexString(keyPair.secretKey);
  console.log(secret);

  // -> "b75abbb599feed077c8e11cc8cadecfce4945a7869a56d3d38b59cce057a3e0f8c8dfc9f9f58badd76151775ff0699bb2498939f669eaef2de16f95a52888c65"
}

function toHexString(byteArray) {
  return Array.prototype.map
    .call(byteArray, function (byte) {
      return ("0" + (byte & 0xff).toString(16)).slice(-2);
    })
    .join("");
}

example()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
