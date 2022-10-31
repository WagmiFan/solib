<!--
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 22:28:12
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 22:32:06
 * @FilePath: /solib/packages/typechain-types/README.md
 * @Description: Supper Man Day Day Up!
-->

# @wagmifan/typechain

TypeScript bindings types(typechain-types)for smart contracts

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
