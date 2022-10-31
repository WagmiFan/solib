<!--
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 21:44:31
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 22:32:57
 * @FilePath: /solib/packages/spec/README.md
 * @Description: Supper Man Day Day Up!
-->

# @wagmifan/solib Spec

Portable specifications for @wagmifan/solib contracts. Part of the @wagmifan/solib Solidity monorepo.

## Installation

Install the package as a development dependency:

```bash
npm install --save-dev @wagmifan/spec
# or
yarn add --dev @wagmifan/spec
```

## Usage

For example, consider a custom `ERC20` implementation:

```solidity
import '@wagmifan/solib/contracts/token/ERC20/ERC20.sol';

contract CustomToken is ERC20 {
  // custom code...
}

```

`ERC20` behavior tests :

```ts
describeSpecOfERC20(
  {
    deploy: () => instance,
  },
  ["#balanceOf"]
);

describe("#balanceOf", function () {
  // custom tests
});
```
