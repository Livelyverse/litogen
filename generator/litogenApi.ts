import {
  printERC20,
  defaults,
  ERC20Options,
  BaseOptions,
  ERC20AssetOptions,
  printERC20Asset,
  assetDefaults
} from './erc20';

export interface LitogenContractAPI<Options extends BaseOptions> {
  /**
   * Returns a string representation of a contract generated using the provided options. If opts is not provided, uses `defaults`.
   */
  print: (opts?: Options) => string,

  /**
   * The default options that are used for `print`.
   */
  defaults: Required<Options>;
}

export type ERC20 = LitogenContractAPI<ERC20Options>;
export type ERC20Asset = LitogenContractAPI<ERC20AssetOptions>;

export const ERC20API: ERC20 = {
  print: printERC20,
  defaults: defaults,
}

export const ERC20AssetAPI: ERC20Asset = {
  print: printERC20Asset,
  defaults: assetDefaults,
}
