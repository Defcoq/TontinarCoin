require("dotenv").config({path: "../.env"});

var TontinarToken = artifacts.require("./TontinarToken.sol");
var TontinarTokenSale = artifacts.require("./TontinarTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(KycContract);
    await deployer.deploy(TontinarToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(TontinarTokenSale, 1, addr[0], TontinarToken.address, KycContract.address);
    let tokenInstance = await TontinarToken.deployed();
    // In order for our crowdsale smart contract to work, we must send all the money to the contract. 
    // This is done on the migrations stage in our truffle installation:
    await tokenInstance.transfer(TontinarTokenSale.address, process.env.INITIAL_TOKENS);
    console.log(`Migrations deployed Test Contract: ${TontinarTokenSale.address}`);

};
