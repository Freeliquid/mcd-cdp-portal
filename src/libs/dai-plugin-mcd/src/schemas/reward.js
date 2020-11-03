import { toHex, fromRay, fromWei } from '../utils';
import BigNumber from 'bignumber.js';
import { WAD } from '../constants';

import { validateAddress } from './_validators';

import {
  REWARD_AMOUNT,
  REWARD_FIRST_STAGE_DURATION,
  REWARD_START_TIME,
  REWARD_EARNED_EX,
  REWARD_PAIRINFO,
  REWARD_PAIRINFO_GEM,
  REWARD_PAIRINFO_AVAIL,
  REWARD_PAIRINFO_LOCKED,
  REWARD_PAIRINFO_LOCKEDVALUE,
  REWARD_PAIRINFO_AVAILVALUE,
  REWARD_PAIRINFO_REWARDPERHOUR
} from './_constants';

export const rewardAmount = {
  generate: address => ({
    id: `FL_REWARDER(${address})`,
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
    id: `FL_REWARD_PAIRINFO(${name},${hiRisk},${address})`,
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
    [REWARD_PAIRINFO_AVAILVALUE, fromWei]
  ]
};

export const rewardPerHour = {
  generate: hiRisk => ({
    id: `FL_REWARD_PER_HOUR.${hiRisk}`,
    contract: hiRisk ? 'FL_REWARDER_GOV_USD' : 'FL_REWARDER_STABLES',
    call: ['getRewardPerHour()(uint256)']
  }),
  returns: [[REWARD_PAIRINFO_REWARDPERHOUR, fromWei]]
};

export const rewardStartTime = {
  generate: () => ({
    id: `FL_REWARD_STARTTIME`,
    contract: 'FL_REWARDER',
    call: ['starttime()(uint256)']
  }),
  returns: [[REWARD_START_TIME, v => BigNumber(v)]]
};

export const rewardFirstStageDuration = {
  generate: () => ({
    id: `FL_REWARD_FIRST_STAGE_DURATION`,
    contract: 'FL_REWARDER',
    call: ['duration()(uint256)']
  }),
  returns: [[REWARD_FIRST_STAGE_DURATION, v => BigNumber(v)]]
};

export const rewardEarnedEx = {
  generate: (address, hiRisk) => ({
    id: `FL_EARNED_REWARD_EX(${hiRisk},${address})`,
    contract: hiRisk ? 'FL_REWARDER_GOV_USD' : 'FL_REWARDER_STABLES',
    call: ['earned(address)(uint256)', address]
  }),
  returns: [[REWARD_EARNED_EX, fromWei]]
};

export default {
  rewardAmount,
  rewardPairInfo,
  rewardPerHour,
  rewardStartTime,
  rewardEarnedEx,
  rewardFirstStageDuration
};
