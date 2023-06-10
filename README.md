# To Clone this repo and use:
     git clone --branch master https://github.com/hardora/oracle.git
     cd oracle
     npm install
     npm start
   - Download Expo App
   - Scan the QRCODE with your Expo App 
   
 - The smart contracts for both token and oracle can be found here in oracle/HardoraVenom/contracts
 - Frontend: Oracle/frontend/hadera
   
   
   
Hardora Oracle

## Introduction
The Hardora Oracle is a decentralized mobile-first hardware compute-enabled oracle for off-chain data computation, such as verifiable true random number generation. The emphasis is on a decentralized, hardware-based, and mobile-first oracle for any DApps on the Venom Workchain to access offchain data.

## Problems with Existing ORACLES
The following issues were identified with current oracles:
- **Centralization:**
Most current blockchain oracles are centralized, and those that are decentralized are controlled by a few nodes that contribute to sourcing and validating information.
- **Expensive setup:**
Running a node can be expensive to set up, limiting the number of nodes available; thus, most oracles are centralized or partly decentralized.
- **Complex Architecture/consensus:**
Current decentralized oracles operate their own blockchain network, which has its own challenges such as scalability and ease of adoption. The complex architecture of these oracles and the requirement to setup a node make it difficult for easy integration with an existing blockchain network and scalability for future use of blockchain oracles.

## OUR APPROACH
- **Decentralization:**
We are democratizing Oracle service for applications running on any workchain on the Venom blockchain network, which ensures the integrity of the Oracle network and thus the information provided. Any smart contract can query data from the oracle's smart contract. This is achieved by allowing nodes to run on mobile computing devices like Android phones while also allowing thousands of people to join the network and become node operators.
- **Low setup cost and easy setup:**
To ensure low operation and setup costs, the Oracle nodes will operate on mobile computing devices, which offer more efficient power consumption for computation while leveraging the accessibility and availability of mobile devices. There is no need for a complex setup; all that will be required is to download the application, connect a wallet, connect the required hardware device(optional), and stake some tokens to finalize registration. In just a few minutes, a user can set up a node that will be recognized by the entire network.
- **Easy integration:**
The Hardora architecture is designed to allow easy integration with any DApp on any workchain on the Venom network. The Oracle Controller (smart contract) runs on the blockchain itself, while the nodes run off-chain on mobile devices.
- **Scalability:**
Scalability is one big issue that is addressed by our decentralized and mobile approach. The goal is to ensure that as more workchains are created, the nodes can keep generating and validating data for on-chain usage by DApps and even off-chain apps.

![node architecture low.png](https://cdn.dorahacks.io/static/files/188a29971c8c29530d0fba74376985e7.png)

## The Architecture of the Hardora Oracle
Highlighted below are some of the core elements of the Hardora blockchain network, which are:
- A JRPC node that connects the mobile oracle to the Venom Basechain or any workchain specified in the address
- A mobile device (referred to as mobile Oracle in this context) running the Oracle node app
- A hardware device not shown in the general overview

The image below shows how the mobile Oracle communicates with a blockchain node in order to interact with the Oracle smart contracts running on various workchains of the Venom masterchain.

## How the protocol works
The Hardora Oracle Network consists primarily of three core elements: an Oracle controller (smart contract), a mobile device, and a hardware device. In order to create a scalable and decentralized Oracle network, the Hardora Oracle network was designed to run on a mobile device, which is accessible to over 6 billion people worldwide and is connected to the internet almost all the time. This is important in countries where people don’t have access to a robust internet infrastructure to provide the constant service required by an Oracle network.

The blockchain node (RPC/graphql) serves transaction data from the venom validator nodes to the mobile Oracle node app, which is basically a wallet but much more. The mobile device itself is the physical device on which the node app runs, similar to how smart contracts run on workchains on the Venom blockchain. The node app on the device is connected to a dedicated hardware device similar to a hardware wallet, which performs non-deterministic calculations off-chain while the node app itself performs deterministic computations that can be computed by other Oracle nodes. The node app, through an open and trusted API, can query data like price data and sport data, among many others, for use by DApps running on the Venom blockchain.
The essence of the Hardora oracle is to provide off-chain data that would otherwise be expensive to execute or impossible to access by DApps running on blockchain nodes.

Combining a mobile device and a dedicated hardware device ensures we can serve quality data that is either deterministic or not, based on the demand of the DApps requesting those data. The data services provided by the protocol will include generating random numbers, computing the hash of a file, verifying data stored in a decentralized database like Polybase, and many others.
More use cases explaining the kind of data that can be obtained and processed by the Hardora oracle will be highlighted in the next session.

![node architecture low.png](https://cdn.dorahacks.io/static/files/188a02f84016babf13bc33c4ca6a425a.png)

## The Protocol
The Hardora protocol consists of a smart contract element that can run on any Venom workchain. The Hardora smart contract receives requests from a smart contract through an internal inbound message, processes them, and sends them out to the next mobile Oracle validator available. This request is sent to the mobile node as an external outbound message request, similar to how a website interacts with a wallet for sign-in, in order to extract the command data from the request. The data requested by DApps on any workchain can either be deterministic or non-deterministic.

### Deterministic and non-deterministic data
- Deterministic data: Deterministic data can be obtained from different mobile nodes and validated by an entirely different set of nodes. Such data can be computed and validated by any number of random nodes. An example is price data.
- Non-deterministic data: Non-deterministic data are data obtained from mobile nodes that can’t be validated by any random node because the outcome of the request given an input can't be determined before hand or verified by any random nodes. An example of a non-deterministic data request is to generate a random number or get the current carbon level in a particular location.

The smart contract (on-chain oracle) communicates with the mobile nodes through RPC servers connected to the current nodes of the network on which the smart contract runs. The RPC server sends the outbound external message to the mobile node app. The requested data is obtained, computed, and verified before being sent through another inbound external message to the Oracle smart contract through an RPC node.

## Use cases
There are several use cases for the hardora oracle including those highlighted below. The Hardora oracle is highly scalable and can support thousands of DApps at the same time just by allowing more mobile oracle validators. The architecture allows the Hardora oracle to support more data feeds as the need arises and is thus designed to scale with the Venom network. Some of the use cases that can be implemented ahead of the mainnet launch include:
- Verifiable True Random Generation
- Retrieving location-specific carbon data
- Retrieving location-specific temperature data
- Retrieving location-specific pressure data
- Verifying data availability in a database (offchain looping functions)
- File hash computation
- Sport data feed
- Price data feed

Important link and address
- Token address: 0:b7659a80cfcf4cfdb016bfb76134a0276576e5ab6737544b26fdecd62810c1da
- Oracle address: 0:41aa762d3c91dd544d2b20b6d0b68d3d34ccd2903b2c71ac726008c4255fac7a
- Hardora faucet: https://hardora.vercel.app/
- Landing page: https://hadoralandingpage.vercel.app/
