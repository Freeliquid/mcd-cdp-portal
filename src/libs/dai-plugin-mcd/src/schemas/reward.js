import { toHex, fromRay, fromWei } from '../utils';
import BigNumber from 'bignumber.js';
import { WAD } from '../constants';

import { validateAddress } from './_validators';

import {
  REWARD_AMOUNT,
  REWARD_PAIRINFO,
  REWARD_PAIRINFO_GEM,
  REWARD_PAIRINFO_AVAIL,
  REWARD_PAIRINFO_LOCKED,
  REWARD_PAIRINFO_LOCKEDVALUE,
  REWARD_PAIRINFO_REWARDPERHOUR
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

export const rewardPairInfo = {
  generate: (name, address, hiRisk) => ({
    id: `FL_REWARD_PAIRINFO.get`,
    contract: hiRisk ? 'FL_REWARDER_GOV_USD' : 'FL_REWARDER_STABLES',
    call: [
      'getPairInfo(bytes32,address)(address,uint,uint,uint,uint)',
      toHex(name),
      address
    ]
  }),
  returns: [
    [REWARD_PAIRINFO_GEM],
    [REWARD_PAIRINFO_AVAIL, fromWei],
    [REWARD_PAIRINFO_LOCKED, fromWei],
    [REWARD_PAIRINFO_LOCKEDVALUE, fromWei],
    [REWARD_PAIRINFO_REWARDPERHOUR, fromWei]
  ]
};

export default {
  rewardAmount,
  rewardPairInfo
};
