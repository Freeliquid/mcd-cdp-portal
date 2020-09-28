import {
  USDTUSDC
} from '../libs/dai-plugin-mcd/src/index.js';

export default [
  {
    slug: 'usdtusdc-a', // URL param
    symbol: 'USDTUSDC-A', // how it's displayed in the UI
    key: 'USDTUSDC-A', // the actual ilk name used in the vat
    gem: 'USDTUSDC', // the actual asset that's being locked
    currency: USDTUSDC, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  }
];
