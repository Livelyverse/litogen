import {erc20} from "./core/api";
import {defaults as commonDefaults} from "./core/common-options";

function main() {
  console.log(erc20.print({
    name: "TestToken",
    symbol: 'Test',
    burnable: true,
    snapshots: false,
    pausable: false,
    premint: '0',
    mintable: false,
    permit: false,
    votes: false,
    flashmint: false,
    access: commonDefaults.access,
    upgradeable: commonDefaults.upgradeable,
    info: commonDefaults.info,
  }));
}

main()