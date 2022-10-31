<!--
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 22:27:25
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-11-01 00:01:36
 * @FilePath: /solib/contracts/README.md
 * @Description: Supper Man Day Day Up!
-->

## @wagmifan/solib Contracts

@wagmifan/solib contract library. Part of the @wagmifan/solib Solidity monorepo.

## Contracts

@wagmifan/solib core contracts

```ml
mocks — "*MOCK of Solidity contracts for test"
tests — ".t.sol scripts for Foundry test"
auth
├─ Owned — "Simple single owner authorization"
├─ RolesAuthority — "Role based Authority that supports up to 256 roles"
defi
├─ ERC4626 — "Minimal ERC4626 tokenized Vault implementation"
token
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
