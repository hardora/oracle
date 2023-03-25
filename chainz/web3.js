var Tx = require('ethereumjs-tx');
var Web3 = require('web3')
var web3 = new Web3('https://bsc-dataseed1.binance.org');


// f1c1bdd9ed0880bc132cccd7bbe09cbbda227fa08e72fb000988e233c1b29eb4
const sender = '0xd99b7e930Ad611fC5EF27fa01987aE0469C09D56';
// const receiver = '0x58933e70c0449fa2a9af784c100048e8142b816f'; // Bundle Bep20 Busd address
const receiver = '0x0af4e05b88ebb40916883a3b173839fea688032c'; // Binance Bep20 Usdt address

// var contractAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; // BUSD Bep20 ContractAddress
var contractAddress = "0x55d398326f99059fF775485246999027B3197955"; // USDT Bep20 ContractAddress

var abi = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "_upgradedAddress", type: "address" }],
        name: "deprecate",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { name: "_spender", type: "address" },
            { name: "_value", type: "uint256" },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "deprecated",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "_evilUser", type: "address" }],
        name: "addBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "upgradedAddress",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "balances",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "maximumFee",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "_totalSupply",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ name: "_maker", type: "address" }],
        name: "getBlackListStatus",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            { name: "", type: "address" },
            { name: "", type: "address" },
        ],
        name: "allowed",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ name: "who", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getOwner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [{ name: "", type: "address" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [{ name: "", type: "string" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { name: "_to", type: "address" },
            { name: "_value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { name: "newBasisPoints", type: "uint256" },
            { name: "newMaxFee", type: "uint256" },
        ],
        name: "setParams",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "amount", type: "uint256" }],
        name: "issue",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "amount", type: "uint256" }],
        name: "redeem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ name: "remaining", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "basisPointsRate",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "isBlackListed",
        outputs: [{ name: "", type: "bool" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "_clearedUser", type: "address" }],
        name: "removeBlackList",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "MAX_UINT",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [{ name: "_blackListedUser", type: "address" }],
        name: "destroyBlackFunds",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { name: "_initialSupply", type: "uint256" },
            { name: "_name", type: "string" },
            { name: "_symbol", type: "string" },
            { name: "_decimals", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "amount", type: "uint256" }],
        name: "Issue",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "amount", type: "uint256" }],
        name: "Redeem",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "newAddress", type: "address" }],
        name: "Deprecate",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "feeBasisPoints", type: "uint256" },
            { indexed: false, name: "maxFee", type: "uint256" },
        ],
        name: "Params",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, name: "_blackListedUser", type: "address" },
            { indexed: false, name: "_balance", type: "uint256" },
        ],
        name: "DestroyedBlackFunds",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "_user", type: "address" }],
        name: "AddedBlackList",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: "_user", type: "address" }],
        name: "RemovedBlackList",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "owner", type: "address" },
            { indexed: true, name: "spender", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    { anonymous: false, inputs: [], name: "Pause", type: "event" },
    { anonymous: false, inputs: [], name: "Unpause", type: "event" },
];

var contract = new web3.eth.Contract(abi, contractAddress);
contract.methods.balanceOf(sender).call((err, result) => {
    let bal = web3.utils.fromWei(result, "ether");

    // console.log('BUSD : ', bal)

    contract.methods.name().call((err, tokenName) => {
        console.log(`${tokenName} : ${bal}`);
    })

});


const main = async () => {
    // This code was written and tested using web3 version 1.0.0-beta.26
    console.log(`web3 version: ${web3.version}`)

    // Who holds the token now?
    var myAddress = "0xd99b7e930Ad611fC5EF27fa01987aE0469C09D56";

    // Who are we trying to send this token to?
    var destAddress = "0x58933e70c0449fa2a9af784c100048e8142b816f";

    // If your token is divisible to 8 decimal places, 42 = 0.00000042 of your token
    // var transferAmount = 1;
    var transferAmount = 20;

    // Determine the nonce
    var count = await web3.eth.getTransactionCount(myAddress);
    console.log(`num transactions so far: ${count}`);

    // This file is just JSON stolen from the contract page on etherscan.io under "Contract ABI"
    // var abiArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, './tt3.json'), 'utf-8'));

    // This is the address of the contract which created the ERC20 token
    // var contractAddress = "0xe6...";
    var contract = new web3.eth.Contract(abi, contractAddress, { from: myAddress });

    // How many tokens do I have before sending?
    var balance = await contract.methods.balanceOf(myAddress).call();
    console.log(`Balance before send: ${balance}`);

    // I chose gas price and gas limit based on what ethereum wallet was recommending for a similar transaction. You may need to change the gas price!
    var rawTransaction = {
        "from": myAddress,
        "nonce": "0x" + count.toString(16),
        "gasPrice": "0x003B9ACA00",
        "gasLimit": "0x250CA",
        "to": contractAddress,
        "value": "0x0",
        "data": contract.methods.transfer(destAddress, transferAmount).encodeABI(),
        "chainId": 0x01
    };

    // Example private key (do not use): 'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109'
    // The private key must be for myAddress
    var privKey = new Buffer.from('', 'hex');
    var tx = new Tx(rawTransaction);
    tx.sign(privKey);
    var serializedTx = tx.serialize();

    // Comment out these three lines if you don't really want to send the TX right now
    console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}`);
    var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
    console.log(`Receipt info:  ${JSON.stringify(receipt, null, '\t')}`);

    // The balance may not be updated yet, but let's check
    balance = await contract.methods.balanceOf(myAddress).call();
    console.log(`Balance after send: ${balance}`);
}

//   main();

const secondMain = async () => {

    // const contractAddress = '0x000000'; //Yor token contract address
    const privateKey = '';         //The private key of your contract Owner  
    const ownerAddress = '0xd99b7e930Ad611fC5EF27fa01987aE0469C09D56';
    const toAddress = '0x58933e70c0449fa2a9af784c100048e8142b816f'; //The address to transfer the tokens    
    // const value = 15;
    const value = web3.utils.toWei('15.9', 'ether');

    //creating Contract Object
    var contract = new web3.eth.Contract(abi, contractAddress, { from: ownerAddress });

    var data = contract.methods.transfer(toAddress, value).encodeABI(); // Create the data for token transaction.
    var rawTransaction = { "to": contractAddress, "gas": 100000, "data": data };

    web3.eth.accounts.signTransaction(rawTransaction, privateKey)
        .then(signedTx => web3.eth.sendSignedTransaction(signedTx.rawTransaction))
        .then(function (receipt) { console.log("Transaction receipt: ", receipt); getETHBalanceOf(); })
        .then(req => {
            /* The trx was done. Write your acctions here. For example getBalance */
            getTOKENBalanceOf(toAddress).then(balance => { console.log(toAddress + " Token Balance: " + balance); })
                .catch((err) => console.log(err));
            return true;
        })


    //GET TOKEN BALANCE FUNCTION ////////////////////////////////
    async function getTOKENBalanceOf(address) {
        return await contract.methods.balanceOf(address).call();
    }
}

// secondMain()


// web3.eth.getBalance(sender, (err, bal)=>{
//     console.log('BNB  : ', web3.utils.fromWei(bal, 'ether'))
// })