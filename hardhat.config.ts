import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-contract-sizer";
import "hardhat-abi-exporter";

dotenv.config();

const mnemonic = process.env.MNEMONIC;
const ownerKey = process.env.OWNER_KEY;

const netAccounts = ownerKey ? [ownerKey] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: mnemonic ? { accounts: { mnemonic } } : {},
    localhost: {
      url: "http://127.0.0.1:8545",
      // accounts: netAccounts,
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: netAccounts,
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: netAccounts,
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      accounts: netAccounts,
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: netAccounts,
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },

  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: [],
  },

  abiExporter: {
    path: "./export/abi",
    runOnCompile: false,
    clear: true,
    flat: true,
    spacing: 2,
    pretty: false,
  },

  typechain: {
    outDir: "./typechain/types",
    target: "ethers-v5",
    alwaysGenerateOverloads: true, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json", "artifacts/@openzeppelin/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
  },

  paths: {
    cache: "build/cache",
    sources: "src/contracts",
    tests: "src/test",
    artifacts: "build/artifacts",
    deploy: "src/deploy",
    deployments: "deployments",
    imports: "src/imports",
    root: ".",
  },
};

export default config;
