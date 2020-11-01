import {
  USDTUSDC,
  USDTDAI,
  USDCDAI,
  USDTUSDN,
  USDNDAI,
  USDCUSDN

} from '../libs/dai-plugin-mcd/src/index.js';

export default [
  {
    slug: 'usdtusdc-a', // URL param
    symbol: 'USDTUSDC-A', // how it's displayed in the UI
    key: 'USDTUSDC-A', // the actual ilk name used in the vat
    gem: 'USDTUSDC', // the actual asset that's being locked
    currency: USDTUSDC, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  {
    slug: 'usdtdai-a', // URL param
    symbol: 'USDTDAI-A', // how it's displayed in the UI
    key: 'USDTDAI-A', // the actual ilk name used in the vat
    gem: 'USDTDAI', // the actual asset that's being locked
    currency: USDTDAI, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  {
    slug: 'usdcdai-a', // URL param
    symbol: 'USDCDAI-A', // how it's displayed in the UI
    key: 'USDCDAI-A', // the actual ilk name used in the vat
    gem: 'USDCDAI', // the actual asset that's being locked
    currency: USDCDAI, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  }
];
