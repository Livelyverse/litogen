import {ERC20Options, buildERC20, ERC20AssetOptions, buildERC20Asset} from './erc20';

export interface KindedOptions {
  ERC20:         { kind: 'ERC20' }         & ERC20Options;
  ERC20Asset:    { kind: 'ERC20Asset' }    & ERC20AssetOptions;
}

export type GenericOptions = KindedOptions[keyof KindedOptions];

export function buildGeneric(opts: GenericOptions) {
  switch (opts.kind) {
    case 'ERC20':
      return buildERC20(opts);

    case 'ERC20Asset':
      return buildERC20Asset(opts);
  }
}
