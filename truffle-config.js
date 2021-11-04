require(`dotenv`).config();
const path = require("path");
const HDWalletProvider = require(`truffle-hdwallet-provider`);

const mnemonic = process.env.MNEMONIC;
const bscScanApi = process.env.BSCSCANAPIKEY;
const etherscanApiKey = process.env.ETHERSCAN_API_KEY;
const infuraProjectId = process.env.ENDPOINT_KEY;
const alch = process.env.ALCHEMYRPC;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`,
          0,
          3
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://eth-rinkeby.alchemyapi.io/v2/${alch}`,
          0,
          3
        ),
      network_id: 4,
      gas: 3000000,
      gasPrice: 10e9,
      skipDryRun: true,
      networkCheckTimeout: 120000,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraProjectId}`,
          0,
          3
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.5",
      // docker: true,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
        //  evmVersion: "byzantium"
      },
    },
  },
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    bscscan: bscScanApi,
    etherscan: etherscanApiKey,
  },
};
