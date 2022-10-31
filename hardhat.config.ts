/*
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 16:07:23
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 19:35:40
 * @FilePath: /solib/hardhat.config.ts
 * @Description: Supper Man Day Day Up!
 */
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-abi-exporter';
import 'hardhat-spdx-license-identifier';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  abiExporter: {
    path: './abis',
    runOnCompile: true,
    clear: true,
    flat: true,
    except: ['.*Mock$'],
    spacing: 2,
    format: "json",
  },
  gasReporter: {
    enabled: false,
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },
  typechain: {
    outDir: 'typechain-types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ['artifacts/*.json'], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false // defaults to false
  },
};

export default config;
