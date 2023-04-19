import {ERC20AssetOptions, printERC20, printERC20Asset} from "./erc20";
import {ERC20API} from "./litogenApi";

function main() {
  console.log(ERC20API.print(
  {
    name: "TestToken",
    symbol: 'Test',
    profileName: "TestProfile",
    version: "1.0.0",
    burnable: true,
    pausable: true,
    mintable: true,
    taxable: true,
    lockable: true,
    permitable: true,
    extra: true,
    taxRate: 3,
    totalSupply: 1000,
    decimal: 9,
    license: 'MIT',
    distribute: {
      unit: "PERCENT",
      assets: [
        { assetName: 'publicSales',  amount: 50 },
        { assetName: 'privateSales', amount: 30 },
        { assetName: 'fundingTeam', amount: 20 },
      ]
    }
  }
  ));

  // console.log(printERC20Asset({
  //   lockable: true,
  //   extra: true,
  // } as ERC20AssetOptions));
}

main()