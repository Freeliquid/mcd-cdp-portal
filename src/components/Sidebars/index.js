import Global from './Global';
import Generate from './Generate';
import Payback from './Payback';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Send from './Send';
import DsrDeposit from './DsrDeposit';
import DsrWithdraw from './DsrWithdraw';
import DepositAndGenerate from './DepositAndGenerate';
import GetReward from './GetReward';
import DepositLPReward from './DepositLPReward';
import WithdrawLPReward from './WithdrawLPReward';

export default {
  global: Global,
  generate: Generate,
  payback: Payback,
  deposit: Deposit,
  withdraw: Withdraw,
  getreward: GetReward,
  send: Send,
  dsrdeposit: DsrDeposit,
  dsrwithdraw: DsrWithdraw,
  depositAndGenerate: DepositAndGenerate,
  depositLPReward: DepositLPReward,
  withdrawLPReward: WithdrawLPReward
};
