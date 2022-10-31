<!--
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 16:07:23
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 17:28:17
 * @FilePath: /solib/README.md
 * @Description: Supper Man Day Day Up!
-->

# <img src="https://wagmi.fan/logo.svg" alt="wagmi.fan" height="40px">

**Modular**, **Interoperable**, and **gas optimized** library for **secure EVM smart contract development**.

- tokens : ERC20/ERC721.
- role-based permissioning

## Overview

## Contracts

```ml
mocks — "*MOCK of Solidity contracts for test"
tests — ".t.sol scripts for Foundry test"
auth
├─ Owned — "Simple single owner authorization"
├─ RolesAuthority — "Role based Authority that supports up to 256 roles"
defi
├─ ERC4626 — "Minimal ERC4626 tokenized Vault implementation"
tokens
├─ WETH — "Minimalist and modern Wrapped Ether implementation"
├─ ERC20 — "Modern and gas efficient ERC20 + EIP-2612 implementation"
├─ ERC721 — "Modern, minimalist, and gas efficient ERC721 implementation"
├─ ERC1155 — "Minimalist and gas efficient standard ERC1155 implementation"
utils
├─ SSTORE2 — "Library for cheaper reads and writes to persistent storage"
├─ CREATE3 — "Deploy to deterministic addresses without an initcode factor"
├─ LibString — "Library for creating string representations of uint values"
├─ SafeCastLib — "Safe unsigned integer casting lib that reverts on overflow"
├─ SignedWadMath — "Signed integer 18 decimal fixed point arithmetic library"
├─ MerkleProofLib — "Efficient merkle tree inclusion proof verification library"
├─ ReentrancyGuard — "Gas optimized reentrancy protection for smart contracts"
├─ FixedPointMathLib — "Arithmetic library with operations for fixed-point numbers"
├─ Bytes32AddressLib — "Library for converting between addresses and bytes32 values"
├─ SafeTransferLib — "Safe ERC20/ETH transfer lib that handles missing return values"
```

## ABI

export ABI to ./abis dir with `hardhat-abi-exporter` :
[hardhat-abi-exporter](https://www.npmjs.com/package/hardhat-abi-exporter) : Export Ethereum smart contract ABIs on compilation via Hardhat.

## typechain

export types to ./typechain-types dir with `@typechain/hardhat`:

[@typechain/hardhat](https://www.npmjs.com/package/@typechain/hardhat) : Automatically generate TypeScript bindings for smartcontracts while using Hardhat.

test sample : ./test/Lock.ts

```ts
import { ethers } from "hardhat";
import LockArtifact from "../artifacts/contracts/Lock.sol/Lock.json";
import { Lock } from "../typechain-types/Lock";

let dLock: Lock = new ethers.Contract(
  LockAddr,
  LockArtifact.abi,
  signer
) as Lock;
```

dApp sample(`$ npm install @wagmifan/solib`) : dapp.ts

```ts
import { ethers, BigNumber } from "ethers";
import {abis,typechain-types} from "@wagmifan/solib";

const { Lock } = typechain-types;
let dLock: Lock = new ethers.Contract(
  LockAddr,
  abis.Lock,
  signer
) as Lock;
```

## spec

## Safety

This is **experimental software** and is provided on an "as is" and "as available" basis.

these contracts are **not designed with user safety** in mind.

We **do not give any warranties** and **will not be liable for any loss** incurred through any use of this codebase.

## Installation

To install with [**Foundry**](https://github.com/gakonst/foundry):

```sh
forge install wagmifan/solib
```

To install with [**Hardhat**](https://github.com/nomiclabs/hardhat) or [**Truffle**](https://github.com/trufflesuite/truffle):

```sh
npm install @wagmifan/solib
```

## Usage

Once installed, you can use the contracts in the library by importing them:

```solidity
pragma solidity ^0.8.0;

import "@wagmifan/solib/contracts/token/ERC721/ERC721.sol";

contract MyNFTs is ERC721 {
    constructor() ERC721("MyNFTs", "MNFT") {
    }
}
```

## development

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
