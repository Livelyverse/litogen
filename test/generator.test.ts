import {ERC20AssetOptions, printERC20Asset} from "../generator/erc20";
import {ERC20API} from "../generator/litogenApi";

describe('Litogen Generator Tests', function() {
  it('Should generate ERC20 success', () => {
    console.log(ERC20API.print(
      {
        name: "TestToken",
        symbol: 'Test',
        profileName: "TestProfile",
        burnable: true,
        pausable: true,
        mintable: true,
        taxable: true,
        lockable: true,
        permitable: true,
        extra: true,
        taxRate: 3,
        totalSupply: 10000,
        decimal: 9,
        license: 'APACHE',
        distribute: {
          unit: "NUMBER",
          assets: [
            {assetName: 'publicSales', amount: 5000},
            {assetName: 'fundingTeam', amount: 5000},
          ]
        }
      }
    ))

    // console.log(ERC20API.print(
    //   {
    //     name: "TestToken",
    //     symbol: 'Test',
    //     profileName: "TestProfile",
    //     license: 'MIT',
    //     burnable: false,
    //     pausable: false,
    //     mintable: false,
    //     taxable: false,
    //     lockable: false,
    //     permitable: false,
    //     extra: false,
    //     taxRate: 3,
    //     totalSupply: 10000,
    //     decimal: 9,
    //     distribute: null
    //   }
    // ))
  })

  it('Should generate ERC20 asset success', () => {
    console.log(printERC20Asset({
        name: 'publicSales',
        profileName: 'TestProfile',
        license: 'MIT',
        lockable: true,
        extra: true
      })
    )

    console.log(printERC20Asset({
      name: 'fundingTeam',
      profileName: 'TestProfile',
      license: 'MIT',
      lockable: true,
      extra: true,
    } as ERC20AssetOptions));
  })
})
