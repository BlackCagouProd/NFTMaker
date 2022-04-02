require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten: {
            url: process.env.ROPSTEN_URL || "",
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config(); //all the key value pairs are being made available due to this lib
require('@nomiclabs/hardhat-ethers');

const { API_URL_KEY, PRIVATE_KEY } = process.env; //environment variables are being loaded here.

module.exports = {
    solidity: "0.8.1",
    defaultNetwork: 'rinkeby',
    networks: {
        hardhat: {},
        rinkeby: {
            url: API_URL_KEY,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
};