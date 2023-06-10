export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <div className="container p-6 mx-auto">
          <div className="w-full md:items-center justify-between gap-4 text-sm flex flex-col md:flex-row py-8 px-2">
            <p className="border-neutral-800  lg:static rounded-xl border p-2 bg-zinc-800/30">
              <img src="./images/app-logo.png" alt="" className="w-8" />
            </p>
            <div>
              <ul className="flex flex-row flex-wrap items-center gap-y-4 gap-x-8">
                <li>Data</li>
                <li>Documentation</li>
                <li>Community</li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style={{ msFilter: "" }}
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="hero relative">
          <div className="container mx-auto p-6">
            <div className="flex flex-col md:flex-row w-full justify-between gap-x-8">
              <div className="max-w-2xl flex-1 flex-col gap-y-1 mt-10 py-4 px-3">
                <div>
                  <h1 className="text-5xl">
                    Access Quality{" "}
                    <span className="text-primary font-bold">Data</span>{" "}
                    Leveraging <br />{" "}
                    <span className="text-primary font-bold">
                      software and hardware
                    </span>{" "}
                    Oracle
                  </h1>
                </div>
                <div>
                  <div className="w-full h-[200px] absolute"></div>
                  <p className="mb-5 text-sm leading-7">
                    The Hardora Oracle is a decentralized mobile-first hardware
                    compute-enabled oracle for off-chain data computation, such
                    as verifiable true random number generation. The emphasis is
                    on a decentralized, hardware-based, and mobile-first oracle
                    for any DApps on the Venom Workchain to access offchain
                    data.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 py-5">
                  <div className="text-sm">
                    <a href="https://drive.google.com/file/d/1eI0PT5YkeA3eslY1-e6CkKdfVgGc0UNP/view?usp=drivesdk">
                      <button className="w-full md:w-auto bg-primary px-4 py-3 rounded hover:bg-transparent hover:border hover:border-gray-800">
                        Download App
                      </button>
                    </a>
                  </div>
                  <div className="text-sm">
                    <button className="w-full md:w-auto px-4 py-3 rounded border border-neutral-800 hover:border-0 hover:bg-primary">
                      Read Documentation
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[450px] overflow-hidden">
                <img
                  src="./images/platform illustration.png"
                  className="object-cover opacity-60"
                  alt="hadera"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="data_section">
          <div className="container mx-auto p-6">
            <div className="flex flex-col">
              <div className="py-6">
                <h2 className="text-3xl font-bold">Available Data</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-8 rounded bg-secondarydark gap-y-3 flex flex-col">
                  <h3 className="text-lg">Sport Data</h3>
                  <p className="text-sm">
                    Access sport data from various sport leagues such as Premeir
                    leagues scores for your DApp
                  </p>
                </div>
                <div className="p-8 rounded bg-secondarydark gap-y-3 flex flex-col">
                  <h3 className="text-lg">Price Feed</h3>
                  <p className="text-sm">
                    Access price data from various price feeds like Coingecko,
                    Binance among many others
                  </p>
                </div>
                <div className="p-8 rounded bg-secondarydark gap-y-3 flex flex-col">
                  <h3 className="text-lg">Random Number</h3>
                  <p className="text-sm">
                    Access our verifiable true random number function powered by
                    hardware technology
                  </p>
                </div>
                <div className="p-8 rounded bg-secondarydark gap-y-3 flex flex-col">
                  <h3 className="text-lg">Offchain Computation</h3>
                  <p className="text-sm">
                    Calculate file hash, database data, compression and any
                    off-chain calculation cheaply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="facuet">
          <div className="container mx-auto p-6 py-24">
            <div className="bg-gradient px-12 py-16 rounded-xl relative overflow-hidden">
              <div className="absolute right-0 w-[500px]">
                <img
                  src="./images/platform illustration.png"
                  className="z-0 opacity-10 absolute top-[-200px]"
                  alt="hadera"
                />
              </div>
              <div className="max-w-3xl flex flex-col gap-y-4 z-50">
                <h2 className="text-3xl font-bold z-50">Hadora Faucet</h2>
                <p className="text-sm mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis consequuntur esse porro culpa deleniti vitae
                  reprehenderit, doloremque velit, ullam aspernatur nostrum fit
                  amet consectetur adipisicing elit. Facilis consequuntur esse
                  porro
                </p>
                <div className="z-50">
                  <a href="https://hardora.vercel.app">
                    <button className="px-4 py-3 rounded border border-gray-700 flex flex-row items-center gap-x-2">
                      Request faucet
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        style={{ msFilter: "" }}
                        fill="currentColor"
                      >
                        <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container mx-auto p-6">
          <div className="bg-transparent py-4">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="text-sm">
                <ul className="flex flex-row items-center gap-x-8">
                  <li>Documentation</li>
                  <li>Community</li>
                </ul>
              </div>
              <div className="flex flex-row items-center gap-x-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ msFilter: "" }}
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ msFilter: "" }}
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ msFilter: "" }}
                  fill="currentColor"
                >
                  <path d="M14.82 4.26a10.14 10.14 0 00-.53 1.1 14.66 14.66 0 00-4.58 0 10.14 10.14 0 00-.53-1.1 16 16 0 00-4.13 1.3 17.33 17.33 0 00-3 11.59 16.6 16.6 0 005.07 2.59A12.89 12.89 0 008.23 18a9.65 9.65 0 01-1.71-.83 3.39 3.39 0 00.42-.33 11.66 11.66 0 0010.12 0q.21.18.42.33a10.84 10.84 0 01-1.71.84 12.41 12.41 0 001.08 1.78 16.44 16.44 0 005.06-2.59 17.22 17.22 0 00-3-11.59 16.09 16.09 0 00-4.09-1.35zM8.68 14.81a1.94 1.94 0 01-1.8-2 1.93 1.93 0 011.8-2 1.93 1.93 0 011.8 2 1.93 1.93 0 01-1.8 2zm6.64 0a1.94 1.94 0 01-1.8-2 1.93 1.93 0 011.8-2 1.92 1.92 0 011.8 2 1.92 1.92 0 01-1.8 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style={{ msFilter: "" }}
                  fill="currentColor"
                >
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
