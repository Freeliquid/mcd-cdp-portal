import {
  USDTUSDC,
  USDTDAI,
  USDCDAI,
  USDTUSDN,
  USDNDAI,
  USDCUSDN,
  TUSDUSDC

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
  },
  {
    slug: 'usdndai-a', // URL param
    symbol: 'USDNDAI-A', // how it's displayed in the UI
    key: 'USDNDAI-A', // the actual ilk name used in the vat
    gem: 'USDNDAI', // the actual asset that's being locked
    currency: USDNDAI, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  {
    slug: 'usdtusdn-a', // URL param
    symbol: 'USDTUSDN-A', // how it's displayed in the UI
    key: 'USDTUSDN-A', // the actual ilk name used in the vat
    gem: 'USDTUSDN', // the actual asset that's being locked
    currency: USDTUSDN, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  {
    slug: 'usdcusdn-a', // URL param
    symbol: 'USDCUSDN-A', // how it's displayed in the UI
    key: 'USDCUSDN-A', // the actual ilk name used in the vat
    gem: 'USDCUSDN', // the actual asset that's being locked
    currency: USDCUSDN, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  },
  {
    slug: 'tusdusdc-a', // URL param
    symbol: 'TUSDUSDC-A', // how it's displayed in the UI
    key: 'TUSDUSDC-A', // the actual ilk name used in the vat
    gem: 'TUSDUSDC', // the actual asset that's being locked
    currency: TUSDUSDC, // the associated dai.js currency type
    networks: ['kovan', 'mainnet', 'testnet', 'rinkeby', 'ropsten', 'goerli']
  }
];
