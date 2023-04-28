import {Contract, ContractBuilder, ContractFunction} from './contract';
import { defineFunctions } from './utils/defineFunctions';
import { printContract } from './print';
import {supportsInterface} from "./commonFunctions";

export type DistributeUnit = 'PERCENT' | 'NUMBER'

export interface BaseOptions {
  name: string;
  profileName: string;
  license: string;
}

export interface DistributeAssets {
  assetName: string;
  amount: number;
}

export interface DistributeOptions {
  assets: DistributeAssets[];
  unit: DistributeUnit;
}

export interface ERC20Options extends BaseOptions{
  symbol: string;
  decimal: number;
  distribute?: DistributeOptions | null;
  taxRate?: number;
  totalSupply?: number;
  extra?: boolean;
  burnable?: boolean;
  mintable?: boolean;
  pausable?: boolean;
  lockable?: boolean;
  taxable?: boolean;
  permitable?: boolean;
}

export interface ERC20AssetOptions extends BaseOptions {
  extra?: boolean;
  lockable?: boolean;
}

export const defaults: Required<ERC20Options> = {
  name: 'MyTestToken',
  symbol: 'MTT',
  profileName: 'MyTestProfile',
  decimal: 18,
  distribute: null,
  taxRate: 0,
  totalSupply: 0,
  extra: false,
  burnable: false,
  mintable: false,
  pausable: false,
  lockable: false,
  taxable: false,
  permitable: false,
  license: 'MIT',
} as const;

export const assetDefaults: Required<ERC20AssetOptions> = {
  name: 'MyTestAsset',
  profileName: 'MyTestProfile',
  extra: false,
  lockable: false,
  license: 'MIT',
} as const;

function withDefaults(opts: ERC20Options): Required<ERC20Options> {
  return {
    ...opts,
    name: opts.name ?? defaults.name,
    symbol: opts.symbol ?? defaults.symbol,
    profileName: opts.profileName ?? defaults.profileName,
    license: opts.license ?? defaults.license,
    decimal: opts?.decimal && opts.decimal >= 0 ? opts.decimal : defaults.decimal,
    totalSupply: opts.totalSupply ?? defaults.totalSupply,
    taxRate: opts.taxRate ?? defaults.taxRate,
    distribute: opts.distribute ?? defaults.distribute,
    extra: opts.extra ?? defaults.extra,
    burnable: opts.burnable ?? defaults.burnable,
    mintable: opts.mintable ?? defaults.mintable,
    pausable: opts.pausable ?? defaults.pausable,
    lockable: opts.lockable ?? defaults.lockable,
    taxable: opts.taxable ?? defaults.taxable,
    permitable: opts.permitable ?? defaults.permitable,
  };
}

function withAssetDefaults(opts: ERC20AssetOptions): Required<ERC20AssetOptions> {
  return {
    ...opts,
    name: opts.name ?? assetDefaults.name,
    profileName: opts.profileName ?? assetDefaults.profileName,
    license: opts.license ?? assetDefaults.license,
    extra: opts.extra ?? assetDefaults.extra,
    lockable: opts.lockable ?? assetDefaults.lockable,
  };
}

export function printERC20(opts: ERC20Options = defaults): string {
  return printContract(buildERC20(opts));
}

export function printERC20Asset(opts: ERC20AssetOptions = assetDefaults): string {
  return printContract(buildERC20Asset(opts));
}

export function buildERC20Asset(opts: ERC20AssetOptions): Contract {
  const allOpts = withAssetDefaults(opts);

  const c = new ContractBuilder(allOpts.name, allOpts.license);

  assetAddBase(c, allOpts.name, allOpts.profileName);

  if (allOpts.extra) {
    assetAddExtra(c);
    c.addOverride("ERC20AssetExtra", supportsInterface);
  }

  if (allOpts.lockable) {
    assetAddLockable(c);
    c.addOverride("ERC20AssetLockable", supportsInterface);
  }

  return c;
}

export function buildERC20(opts: ERC20Options): Contract {
  const allOpts = withDefaults(opts);

  const c = new ContractBuilder(allOpts.name, allOpts.license);

  addBase(c, allOpts.name, allOpts.symbol, allOpts.profileName, allOpts.decimal);

  if (allOpts.burnable) {
    addBurnable(c);
  }

  if (allOpts.mintable) {
    addMintable(c);
  }

  if (allOpts.pausable) {
    addPausable(c);
  }

  if (allOpts.totalSupply > 0) {
    addTotalSupply(c, allOpts.totalSupply, allOpts.decimal);
  }

  if (allOpts.extra) {
    addExtra(c);
  }

  if (allOpts.lockable) {
    addLockable(c);
  }

  if (allOpts.permitable) {
    addPermitalble(c, allOpts.name);
  }

  if (allOpts.taxable) {
    addTaxable(c, allOpts.taxRate);
  }

  if(allOpts.distribute) {
    addDistribution(c, allOpts.taxable, allOpts.totalSupply, allOpts.decimal, allOpts.distribute)
  }

  return c;
}

function addBase(c: ContractBuilder, name: string, symbol: string, profileName: string, decimal: number) {
  c.addParent(
    {
      name: 'ERC20',
      path: '@livelyversenpm/litogen/contracts/token/ERC20/ERC20.sol',
    },
    [name, symbol, profileName, { lit: 'acl_' }, decimal],
  );

  c.addConstructorArgument({
    name: 'acl_',
    type: 'address'
  })

  c.addOverride('ERC20', functions._beforeTokenTransfer);
  c.addOverride('ERC20', functions._transfer);
  c.addOverride('ERC20', supportsInterface);

}

function addBurnable(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20Burnable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Burnable.sol',
  });

  c.addOverride("ERC20Burnable", supportsInterface);
}

function addMintable(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20Mintable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Mintable.sol',
  });

  c.addOverride("ERC20Mintable", supportsInterface);
}

function addPausable(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20Pausable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Pausable.sol',
  });

  c.addOverride("ERC20Pausable", supportsInterface);

  c.setFunctionBody([
    'require(!_isPaused, "Token Paused");',
    'require(!_isAccountPaused(from), "Account Paused");',
    'super._beforeTokenTransfer(from, to, amount);'
  ], functions._beforeTokenTransfer)
}

function addExtra(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20Extra',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Extra.sol',
  });
  c.addOverride("ERC20Extra", supportsInterface);
}

function addLockable(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20Lockable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Lockable.sol',
  });
  c.addOverride("ERC20Lockable", supportsInterface);
}

function addPermitalble(c: ContractBuilder, name: string) {
  c.addParent({
    name: 'ERC20Permitable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Permitable.sol',
  }, [name]);
  c.addOverride("ERC20Permitable", supportsInterface);
}


function addTaxable(c: ContractBuilder, taxRate: number) {
  c.addParent({
    name: 'ERC20Taxable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/extensions/ERC20Taxable.sol',
  }, [taxRate]);

  c.addOverride("ERC20Taxable", supportsInterface);

  c.addUsing({
    name: 'SafeMath',
    path: '@openzeppelin/contracts/utils/math/SafeMath.sol'
  }, 'uint256')

  c.addUsing({
    name: 'BasisPointsMath',
    path: '@livelyversenpm/litogen/contracts/utils/BasisPointsMath.sol'
  }, 'uint256')

  c.setFunctionBody([
    'if (_taxRate > 0 && !_isAccountWhitelist(_msgSender())) {',
    '  uint256 tax = amount.mulBP(_taxRate);',
    '  uint256 amountMinesTax = amount.sub(tax, "Illegal Amount");',
    '  super._transfer(from, _taxTreasury, tax);',
    '  super._transfer(from, to, amountMinesTax);',
    '} else {',
    '  super._transfer(from, to, amount);',
    '}'
  ], functions._transfer)
}

function addTotalSupply(c: ContractBuilder, amount: number, decimal: number) {
  if(decimal > 0) {
    c.addConstructorCode(`_totalSupply = ${amount} * 10 ** ${decimal};`);
  } else {
    c.addConstructorCode(`_totalSupply = ${amount};`);
  }
  c.addConstructorCode(`_balances[_msgSender()] = _totalSupply;`);
}

function addDistribution(c: ContractBuilder, taxable: boolean, totalSupply: number, decimal: number, distribute: DistributeOptions) {
  let distributeFn: ContractFunction

  c.addImportInterface('@livelyversenpm/litogen/contracts/token/ERC20/assets/IAsset.sol');
  c.addVariable('mapping(string => uint256) internal _distributes;');
  c.addVariable('bool public isDistributed;');
  c.addConstructorCode('isDistributed = false;');

  if(taxable) {
    distributeFn = c.addFunction(functions.distributeTokenAndTaxTreasury);
    c.setFunctionBody([
      '_tokenPolicyInterceptor(this.distributeToken.selector);',
      'require(!isDistributed, "Already Distributed");',
      'isDistributed = true;',
      '_taxTreasury = taxTreasury;',
      'for (uint256 i = 0; i < assets.length; i++) {',
      '  if (!IERC165(assets[i]).supportsInterface(type(IAsset).interfaceId)) revert("Illegal IAsset");',
      '  super._transfer(_msgSender(), assets[i], _distributes[IAsset(assets[i]).assetName()]);',
      '}'
    ], distributeFn);

  } else {
    distributeFn = c.addFunction(functions.distributeToken);
    c.setFunctionBody([
      '_tokenPolicyInterceptor(this.distributeToken.selector);',
      'require(!isDistributed, "Already Distributed");',
      'isDistributed = true;',
      'for (uint256 i = 0; i < assets.length; i++) {',
      '  if (!IERC165(assets[i]).supportsInterface(type(IAsset).interfaceId)) revert("Illegal IAsset");',
      '  super._transfer(_msgSender(), assets[i], _distributes[IAsset(assets[i]).assetName()]);',
      '}'
    ], distributeFn);

  }

  let totalDistribute = 0;
  if(distribute.unit === 'PERCENT') {
    let acc = 0;
    for (let i = 0; i < distribute.assets.length - 1; i++) {
      let amount = Math.round(totalSupply * distribute.assets[i].amount / 100);
      c.addConstructorCode(`_distributes["${distribute.assets[i].assetName}"] = ${amount} * 10 ** ${decimal};`);
      totalDistribute += distribute.assets[i].amount;
      acc += amount;
    }
    c.addConstructorCode(`_distributes["${distribute.assets[distribute.assets.length - 1].assetName}"] = ${totalSupply - acc} * 10 ** ${decimal};`);
    totalDistribute += distribute.assets[distribute.assets.length - 1].amount;
    if(totalDistribute != 100) throw new Error("Illegal Token Percentage Distribution");

  } else if(distribute.unit === 'NUMBER') {
    for (const asset of distribute.assets) {
      c.addConstructorCode(`_distributes["${asset.assetName}"] = ${asset.amount} * 10 ** ${decimal};`)
      totalDistribute += asset.amount;
    }
    if(totalDistribute != totalSupply) throw new Error("Illegal Token Amount Distribution");
  }
}

const functions = defineFunctions({
  distributeToken: {
    kind: 'public' as const,
    args: [
      { name: 'assets', type: 'address[] calldata' },
    ],
  },

  distributeTokenAndTaxTreasury: {
    kind: 'public' as const,
    args: [
      { name: 'assets', type: 'address[] calldata' },
      { name: 'taxTreasury', type: 'address' },
    ],
    fnName: "distributeToken"
  },

  _beforeTokenTransfer: {
    kind: 'internal' as const,
    args: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
  },

  _transfer: {
    kind: 'internal' as const,
    args: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
  },
});

/////////////////////////////////////////////////////////////////////////
function assetAddBase(c: ContractBuilder, name: string, profileName: string) {
  c.addParent(
    {
      name: 'ERC20Asset',
      path: '@livelyversenpm/litogen/contracts/token/ERC20/assets/ERC20Asset.sol',
    },
    [name, profileName, { lit: 'erc20Token_' }, { lit: 'acl_' } ],
  );

  c.addConstructorArgument({
    name: 'erc20Token_',
    type: 'address'
  })

  c.addConstructorArgument({
    name: 'acl_',
    type: 'address'
  })

  c.addOverride('ERC20Asset', supportsInterface)
}

function assetAddExtra(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20AssetExtra',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/assets/ERC20AssetExtra.sol',
  });
}

function assetAddLockable(c: ContractBuilder) {
  c.addParent({
    name: 'ERC20AssetLockable',
    path: '@livelyversenpm/litogen/contracts/token/ERC20/assets/ERC20AssetLockable.sol',
  });
}
