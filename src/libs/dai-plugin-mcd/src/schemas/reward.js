import { toHex, fromRay, fromWei } from '../utils';
import BigNumber from 'bignumber.js';
import { WAD } from '../constants';

import { validateAddress } from './_validators';

import {
  REWARD_AMOUNT
} from './_constants';


export const rewardAmount = {
  generate: address => ({
    id: `FL_REWARDER.amnt`,
    contract: 'FL_REWARDER',
    call: ['earned(address)(uint256)', address]
  }),
  validate: {
    args: validateAddress`Invalid address: ${'address'}`
  },
  returns: [[REWARD_AMOUNT, fromWei]]
};

export default {
  rewardAmount
};
