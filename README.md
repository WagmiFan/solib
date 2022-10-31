<!--
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 16:07:23
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 22:46:57
 * @FilePath: /solib/README.md
 * @Description: Supper Man Day Day Up!
-->

# <img src="https://wagmi.fan/logo.svg" alt="wagmi.fan" height="40px">

**Modular**, **Interoperable**, and **gas optimized** library for **secure EVM smart contract development**.

- tokens : ERC20/ERC721.
- role-based permissioning

## Overview

@wagmifan/solib is an interoperable-first Solidity smart contract development library.

It consists of the following packages:

| package               | description                                                                           | 📕                                         |
| --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------ |
| `@wagmifan/abis`      | contract ABIs                                                                         | [📖](./packages/abis/README.md)            |
| `@wagmifan/solib`     | core contracts                                                                        | [📖](./contracts/README.md)                |
| `@wagmifan/typechain` | TypeScript bindings types(typechain-types)for smart contracts                         | [📖](./packages/typechain-types/README.md) |
| `@wagmifan/spec`      | portable tests which may be run against third-party implementations of core contracts | [📖](./packages/spec/README.md)            |
| `@wagmifan/utils`     | utils functions for interacting with and validating contracts                         | [📖](./packages/utils/README.md)           |

## Contracts

## ABI

export ABI to ./abis dir with `hardhat-abi-exporter` :
[hardhat-abi-exporter](https://www.npmjs.com/package/hardhat-abi-exporter) : Export Ethereum smart contract ABIs on compilation via Hardhat.

## typechain

export types to ./typechain-types dir with `@typechain/hardhat`:

[@typechain/hardhat](https://www.npmjs.com/package/@typechain/hardhat) : Automatically generate TypeScript bindings for smart contracts while using Hardhat.

## spec

Automated behavior tests are designed to make use of the special contracts ,such as EIP(ERC).

## Safety

This is **experimental software** and is provided on an "as is" and "as available" basis.

these contracts are **not designed with user safety** in mind.

We **do not give any warranties** and **will not be liable for any loss** incurred through any use of this codebase.

## development

### npm workspace with lerna

init workspace:

```shell
sudo npm i -g lerna
cd solib
lerna init
```

init package:

```shell
mkdir -p packages/newpack
cd packages/newpack
npm init
cd -
lerna bootstrap
```

list local public packages: `lerna ls`
view packages graph: `npx nx graph`
packages changed : `lerna changed`

### hardhat

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat compile
npx hardhat test
npx hardhat coverage
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
npx hardhat clean
npx hardhat test --typecheck
```

### foundry

## Contribute

@wagmifan/solib Contracts exists thanks to its contributors. There are many ways you can participate and help build high quality software. Check out the [contribution guide](CONTRIBUTING.md)!

## License

@wagmifan/solib Contracts is released under the [GPL-3.0 License](LICENSE).

## Acknowledgements

These contracts were inspired by or directly modified from many sources, primarily:

- [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [solmate](https://github.com/transmissions11/solmate)
- [solidstate](https://github.com/solidstate-network/solidstate-solidity)
- [synapse](https://github.com/synapsecns/synapse-contracts)
- [Gnosis](https://github.com/gnosis/gp-v2-contracts)
- [Uniswap](https://github.com/Uniswap/uniswap-lib)
- [Dappsys](https://github.com/dapphub/dappsys)
- [Dappsys V2](https://github.com/dapp-org/dappsys-v2)
- [0xSequence](https://github.com/0xSequence)
-
