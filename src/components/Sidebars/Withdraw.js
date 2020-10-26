import React from 'react';
import BigNumber from 'bignumber.js';
import { USDFL } from '../../libs/dai-plugin-mcd/src/index.js';
import { Text, Input, Grid, Button } from '@makerdao/ui-components-core';
import Info from './shared/Info';
import InfoContainer from './shared/InfoContainer';
import SetMax from 'components/SetMax';
import RatioDisplay, { RatioDisplayTypes } from 'components/RatioDisplay';
import useMaker from 'hooks/useMaker';
import useLanguage from 'hooks/useLanguage';
import useAnalytics from 'hooks/useAnalytics';
import useValidatedInput from 'hooks/useValidatedInput';
import { greaterThan, multiply } from 'utils/bignumber';
import { formatCollateralizationRatio, formatter, prettifyCurrency } from 'utils/ui';
import { getCurrency } from 'utils/cdp';
import { decimalRules } from '../../styles/constants';
import { getColor } from '../../styles/theme';
import { ShortType } from 'three';
const { short } = decimalRules;

const Withdraw = ({ vault, reset, dispatch }) => {
  const { trackBtnClick } = useAnalytics('Withdraw', 'Sidebar');
  const { lang } = useLanguage();
  const { maker } = useMaker();

  let {
    vaultType,
    liquidationRatio,
    collateralAvailableAmount,
    collateralTypePrice,
    collateralAmount,
    collateralValue,
    encumberedCollateral,
    collateralValueForAmount,
    collateralAmountByValue,
    encumberedDebt: debtAmount
  } = vault;
  BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_DOWN });
  collateralAvailableAmount = collateralAvailableAmount.toBigNumber();
  collateralValue = collateralValue.toBigNumber();

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

  const [amount, setAmount, onAmountChange, amountErrors] = useValidatedInput(
    '',
    {
      maxFloat: collateralAvailableAmount,
      minFloat: 0,
      isFloat: true
    },
    {
      maxFloat: () => lang.action_sidebar.cdp_below_threshold
    }
  );

  const amountToWithdraw = amount || BigNumber(0);
  const undercollateralized =
    amount && greaterThan(amount, collateralAvailableAmount);

  const setMax = () => setAmount(collateralAvailableAmount);

  const currency = getCurrency({ ilk: vaultType });
  const withdraw = () => {
    maker
      .service('mcd:cdpManager')
      .wipeAndFree(vault.id, vaultType, USDFL(0), currency(amountToWithdraw));
    reset();
  };

  const valueDiff = multiply(amountToWithdraw, collateralTypePrice.toNumber());

  const liquidationPrice =
    undercollateralized || debtAmount.eq(0)
      ? BigNumber(0)
      : vault.calculateLiquidationPrice({
          collateralAmount: currency(
            encumberedCollateral.minus(amountToWithdraw)
          )
        });

  const collateralizationRatio = vault.calculateCollateralizationRatio({
    collateralValue: collateralValue.minus(valueDiff).gte(0)
      ? currency(collateralValue.minus(valueDiff))
      : currency(0)
  });

  function handleValueChange({ target }) {
    if (parseFloat(target.value) < 0) return;

    const val = convertValueToAmount(target.value);

    dispatch({
      type: `form/set-${target.name}`,
      payload: { value: val }
    });
  }

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s" className="input_des">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          {lang.formatString(lang.action_sidebar.withdraw_title, symbol)}
        </Text>
        <Text
          style={{ fontSize: '16px', color: getColor('greyText') }}
          t="body"
        >
          {lang.formatString(lang.action_sidebar.withdraw_description, symbol)}
        </Text>
        <div className="input_border">
        <Input
          style={{ color: getColor('whiteText') }}
          type="number"
          placeholder={`0.00`}
          after={'USD'}
          value={prettifyCurrency(convertAmountToValue(amount))}
          min="0"
          onChange={handleValueChange}
          after={
            parseFloat(debtAmount) === 0 ? (
              <SetMax style={{ color: getColor('greyText') }}
                onClick={() => {
                  setMax();
                  trackBtnClick('SetMax', {
                    collateralAvailableAmount: collateralAvailableAmount.toString(),
                    setMax: true
                  });
                }}
              />
            ) : null
          }
          failureMessage={amountErrors}
        />
        </div>
        <RatioDisplay
          type={RatioDisplayTypes.CARD}
          ratio={formatter(collateralizationRatio)}
          ilkLiqRatio={formatter(liquidationRatio, { percentage: true })}
          text={lang.action_sidebar.withdraw_warning}
          onlyWarnings={true}
          show={amount !== '' && amount > 0 && !undercollateralized}
          textAlign="center"
        />
      </Grid>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="s">
        <Button className="btn"
          disabled={!amount || amountErrors}
          onClick={() => {
            trackBtnClick('Confirm', {
              amount,
              fathom: { id: `${symbol}VaultWithdraw`, amount }
            });
            withdraw();
          }}
        >
          {lang.actions.withdraw}
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
          title={lang.action_sidebar.maximum_available_to_withdraw}
          body={`${formatter(convertAmountToValue(collateralAvailableAmount), {
            precision: short
          })} USD`}
        />
        <Info
          title={lang.action_sidebar.new_collateralization_ratio}
          body={
            <RatioDisplay
              type={RatioDisplayTypes.TEXT}
              ratio={formatter(collateralizationRatio)}
              ilkLiqRatio={formatter(liquidationRatio, { percentage: true })}
              text={formatCollateralizationRatio(collateralizationRatio)}
            />
          }
        />
      </InfoContainer>
    </Grid>
  );
};
export default Withdraw;
