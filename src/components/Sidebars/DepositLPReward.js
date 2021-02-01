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

const DepositLPReward = ({ avail, availValue, name, gem, hiRisk, reset }) => {
  const { lang } = useLanguage();
  const { maker } = useMaker();
  const { hasProxy } = useProxy();

  const usdPrice = watch.rewardPairInfoGetPrice(name, hiRisk) || BigNumber(0);

  console.log(
    'DepositLPReward',
    usdPrice.toNumber(),
    avail ? avail.toNumber() : 0,
    availValue ? availValue.toNumber() : 0,
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
    availValue,
    {
      maxFloat: availValue,
      minFloat: 0,
      isFloat: true
    },
    {
      maxFloat: () =>
        lang.formatString(lang.action_sidebar.insufficient_balance, name)
    }
  );

  const valueToDeposit = value || BigNumber(0);
  const amountToDeposit = convertValueToAmount(valueToDeposit);

  const valid = value && !amountErrors;

  const deposit = () => {
    const v = amountToDeposit.integerValue(BigNumber.ROUND_DOWN).toFixed();
    console.log('deposit', name, gem, amountToDeposit.toNumber(), v, hiRisk);
    maker.service('mcd:rewards').lockPool(v, gem, hiRisk);
    reset();
  };

  const depositAll = () => {
    const c = new Currency(avail);
    const v = c.toFixed('wei');
    console.log('depositAll', name, gem, avail.toNumber(), v, hiRisk);
    maker.service('mcd:rewards').lockPool(v, gem, hiRisk);
    reset();
  };

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.formatString(lang.action_sidebar.deposit_title, name)}
        </Text>
        <p>
          <Text style={{ fontSize: '16px', color: getColor('greyText') }}>
            {lang.formatString(lang.action_sidebar.deposit_description, name)}
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
            data-testid="deposit-input"
          />
        </div>
      </Grid>

      <Grid gridTemplateColumns="1fr" gridColumnGap="m" gridRowGap="s">
        <Button
          className="btn"
          disabled={!valid}
          onClick={() => {
            deposit();
          }}
        >
          {lang.actions.deposit}
        </Button>
        <Button
          className="btn"
          onClick={() => {
            depositAll();
          }}
        >
          {lang.actions.depositAll}
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
          title={lang.action_sidebar.current_account_balance}
          body={`${formatter(availValue)} USD`}
        />
      </InfoContainer>
    </Grid>
  );
};
export default DepositLPReward;
