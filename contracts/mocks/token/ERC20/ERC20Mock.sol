// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.9;

import {ERC20} from "../../../token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20("ERC20 Mock", "ERCM", 18) {
    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }
}
