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
import { formatCollateralizationRatio, formatter } from 'utils/ui';
import { multiply } from 'utils/bignumber';
import { getCurrency } from 'utils/cdp';
import ProxyAllowanceToggle from 'components/ProxyAllowanceToggle';
import BigNumber from 'bignumber.js';
import { decimalRules } from '../../styles/constants';
import { getColor } from '../../styles/theme';
const { long, medium } = decimalRules;

const Deposit = ({ vault, reset }) => {
  const { trackBtnClick } = useAnalytics('Deposit', 'Sidebar');
  const { lang } = useLanguage();
  const { maker } = useMaker();
  const { hasProxy } = useProxy();

  let {
    vaultType,
    collateralTypePrice,
    collateralValue,
    collateralAmount,
    collateralValueForAmount,
    collateralAmountByValue
  } = vault;

  function convertAmountToValue(amount) {
    if (amount == 0)
      return BigNumber(0);
    const r =  collateralValueForAmount(BigNumber(amount));

    if (r == undefined)
      return BigNumber(0);

    return r;
  }

  function convertValueToAmount(value) {
    if (value == 0)
      return BigNumber(0);
    const r =  collateralAmountByValue(BigNumber(value));

    if (r == undefined)
      return BigNumber(0);
    return r;
  }



  const symbol = collateralAmount?.symbol;
  const { hasAllowance, hasSufficientAllowance } = useTokenAllowance(symbol);
  const gemBalances = useWalletBalances();
  const gemBalance = gemBalances[symbol] || 0;

  const [amount, , onAmountChange, amountErrors] = useValidatedInput(
    '',
    {
      maxFloat: gemBalance,
      minFloat: 0,
      isFloat: true,
      custom: {
        allowanceInvalid: value => !hasSufficientAllowance(value)
      }
    },
    {
      maxFloat: () =>
        lang.formatString(lang.action_sidebar.insufficient_balance, symbol),
      allowanceInvalid: () =>
        lang.formatString(lang.action_sidebar.invalid_allowance, symbol)
    }
  );
  const valid = amount && !amountErrors && hasAllowance && hasProxy;
  const amountToDeposit =
    amount && !BigNumber(amount).isNegative()
      ? BigNumber(amount)
      : BigNumber(0);

  const deposit = () => {
    const currency = getCurrency({ ilk: vaultType });
    maker
      .service('mcd:cdpManager')
      .lock(vault.id, vaultType, currency(amountToDeposit));
    reset();
  };

  const valueDiff = multiply(amountToDeposit, collateralTypePrice.toNumber());

  const liquidationPrice = vault.calculateLiquidationPrice({
    collateralAmount: collateralAmount.plus(amountToDeposit)
  });

  const collateralizationRatio = vault.calculateCollateralizationRatio({
    collateralValue: collateralValue.plus(valueDiff)
  });

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.formatString(lang.action_sidebar.deposit_title, symbol)}
        </Text>
        <p>
          <Text style={{ fontSize: '16px', color: getColor('greyText') }}>
            {lang.formatString(lang.action_sidebar.deposit_description, symbol)}
          </Text>
        </p>
        <div className="input_border">
        <Input
          style={{ color: getColor('whiteText') }}
          type="number"
          min="0"
          value={amount}
          onChange={onAmountChange}
          placeholder={`0.00 ${symbol}`}
          failureMessage={amountErrors}
          data-testid="deposit-input"
        />
        </div>
      </Grid>
      <ProxyAllowanceToggle token={symbol} trackBtnClick={trackBtnClick} />
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="s">
        <Button className="btn"
          disabled={!valid}
          onClick={() => {
            trackBtnClick('Confirm', {
              amount,
              fathom: { id: `${symbol}VaultDeposit`, amount }
            });
            deposit();
          }}
        >
          {lang.actions.deposit}
        </Button>
        <Button className="btn"
          variant="secondary-outline"
          onClick={() => {
            trackBtnClick('Cancel');
            reset();
          }}
        >
          {lang.cancel}
        </Button>
      </Grid>
      <InfoContainer>
        <Info
          title={lang.action_sidebar.current_account_balance}
          body={`${formatter(gemBalance, { precision: medium })} ${symbol}`}
        />
        <Info
          title={lang.action_sidebar.new_collateralization_ratio}
          body={formatCollateralizationRatio(collateralizationRatio)}
        />
      </InfoContainer>
    </Grid>
  );
};
export default Deposit;
