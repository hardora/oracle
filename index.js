import { TonClient } from "@eversdk/core";
import { libReactNative } from "@eversdk/lib-react-native";

// Application initialization

TonClient.useBinaryLibrary(libReactNative);

const client = new TonClient({
  network: {
    endpoints: ["net.ton.dev"],
    message_retries_count: 3,
  },
  abi: {
    message_expiration_timeout: 120000,
    message_expiration_timeout_grow_factor: 1.3,
  },
});

const keys = await client.crypto.generate_random_sign_keys();

client.close();

const SEED_PHRASE_WORD_COUNT = 12; //Mnemonic word count
const SEED_PHRASE_DICTIONARY_ENGLISH = 1; //Dictionary identifier

const { phrase } = await client.crypto.mnemonic_from_random({
  dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
  word_count: SEED_PHRASE_WORD_COUNT,
});
console.log(`Generated seed phrase "${phrase}"`);

const HD_PATH = "m/44'/396'/0'/0/0";

const keyPair = await client.crypto.mnemonic_derive_sign_keys({
  phrase,
  path: HD_PATH,
  dictionary: SEED_PHRASE_DICTIONARY_ENGLISH,
  word_count: SEED_PHRASE_WORD_COUNT,
});
console.log(`Generated key pair:`);
console.log(keyPair);
