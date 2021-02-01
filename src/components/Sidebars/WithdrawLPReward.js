import React from 'react';
import { Text, Input, Grid, Button } from '@makerdao/ui-components-core';
import Info from './shared/Info';
import InfoContainer from './shared/InfoContainer';
import useMaker from 'hooks/useMaker';
import useProxy from 'hooks/useProxy';
import useTokenAllowance from 'hooks/useTokenAllowance';
import useWalletBalances from 'hooks/useWalletBalances';
import useValidatedInput from 'hooks/useValidatedInput';
import useLanguage from 'hooks/useLanguage';
import useAnalytics from 'hooks/useAnalytics';
import { formatter, prettifyCurrency, prettifyNumber } from 'utils/ui';
import { multiply } from 'utils/bignumber';
import { getCurrency } from 'utils/cdp';
import ProxyAllowanceToggle from 'components/ProxyAllowanceToggle';
import BigNumber from 'bignumber.js';
import { decimalRules } from '../../styles/constants';
import { getColor } from '../../styles/theme';
import { watch } from 'hooks/useObservable';
import { Currency } from '@makerdao/currency';

const { short } = decimalRules;

const WithdrawLPReward = ({
  locked,
  lockedValue,
  name,
  gem,
  hiRisk,
  reset
}) => {
  const { lang } = useLanguage();
  const { maker } = useMaker();
  const { hasProxy } = useProxy();

  const usdPrice = watch.rewardPairInfoGetPrice(name, hiRisk) || BigNumber(0);

  console.log(
    'WithdrawLPReward',
    usdPrice.toNumber(),
    locked ? locked.toNumber() : 0,
    lockedValue ? lockedValue.toNumber() : 0,
    name,
    gem,
    hiRisk
  );

  function convertValueToAmount(value) {
    const WAD = new BigNumber('1e18');
    if (value == 0) return BigNumber(0);
    const r = new BigNumber(value).times(WAD).dividedBy(usdPrice);

    if (r == undefined) return BigNumber(0);
    return r;
  }

  const [value, , onAmountChange, amountErrors] = useValidatedInput(
    lockedValue,
    {
      maxFloat: lockedValue,
      minFloat: 0,
      isFloat: true
    },
    {
      maxFloat: () =>
        lang.formatString(lang.action_sidebar.cdp_below_threshold, name)
    }
  );

  const valueToWithdraw = value || BigNumber(0);
  const amountToWithdraw = convertValueToAmount(valueToWithdraw);

  const valid = value && !amountErrors;

  const withdraw = () => {
    const v = amountToWithdraw.integerValue(BigNumber.ROUND_DOWN).toFixed();
    console.log('withdraw', name, gem, amountToWithdraw.toNumber(), v, hiRisk);
    maker.service('mcd:rewards').unlockPool(v, gem, hiRisk);
    reset();
  };

  const withdrawAll = () => {
    const c = new Currency(locked);
    const v = c.toFixed('wei');
    console.log('withdrawAll', name, gem, locked.toNumber(), v, hiRisk);
    maker.service('mcd:rewards').unlockPool(v, gem, hiRisk);
    reset();
  };

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.formatString(lang.action_sidebar.withdraw_title, name)}
        </Text>
        <p>
          <Text style={{ fontSize: '16px', color: getColor('greyText') }}>
            {lang.formatString(lang.action_sidebar.withdraw_description, name)}
          </Text>
        </p>
        <div className="input_border">
          <Input
            style={{ color: getColor('whiteText') }}
            name="valueToLock"
            type="number"
            min="0"
            value={value}
            onChange={onAmountChange}
            placeholder={`0.00 USD`}
            failureMessage={amountErrors}
            data-testid="withdraw-input"
          />
        </div>
      </Grid>

      <Grid gridTemplateColumns="1fr" gridColumnGap="s" gridRowGap="s">
        <Button
          className="btn"
          disabled={!valid}
          onClick={() => {
            withdraw();
          }}
        >
          {lang.actions.withdraw}
        </Button>
        <Button
          className="btn"
          onClick={() => {
            withdrawAll();
          }}
        >
          {lang.actions.withdrawAll}
        </Button>
        <Button
          className="btn"
          variant="secondary-outline"
          onClick={() => {
            reset();
          }}
        >
          {lang.cancel}
        </Button>
      </Grid>
      <InfoContainer>
        <Info
          title={lang.action_sidebar.maximum_available_to_withdraw}
          body={`${formatter(lockedValue)} USD`}
        />
      </InfoContainer>
    </Grid>
  );
};
export default WithdrawLPReward;
