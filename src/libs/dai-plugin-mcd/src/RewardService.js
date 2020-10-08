import { PublicService } from '@makerdao/services-core';
import { ServiceRoles } from './constants';
import BigNumber from 'bignumber.js';
import tracksTransactions from './utils/tracksTransactions';

export default class RewardService extends PublicService {
  constructor(name = ServiceRoles.REWARDS) {
    super(name, [
      'smartContract',
      'proxy',
      'accounts',
      'web3',
      ServiceRoles.SYSTEM_DATA
    ]);
  }

  get proxyActions() {
    return this.get('smartContract').getContract('PROXY_ACTIONS_REWARD');
  }

  @tracksTransactions
  async claimReward({ promise }) {
    return this.proxyActions.claimReward(
      this.get('smartContract').getContractAddress('FL_REWARDER'),
      { dsProxy: true, promise }
    );
  }
}
