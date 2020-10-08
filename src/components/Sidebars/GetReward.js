import React from 'react';
import BigNumber from 'bignumber.js';
import { USDL } from '../../libs/dai-plugin-mcd/src/index.js';
import { Text, Input, Grid, Button } from '@makerdao/ui-components-core';
import Info from './shared/Info';
import InfoContainer from './shared/InfoContainer';
import RatioDisplay, { RatioDisplayTypes } from 'components/RatioDisplay';
import useMaker from 'hooks/useMaker';
import useLanguage from 'hooks/useLanguage';
import useAnalytics from 'hooks/useAnalytics';
import { add, greaterThan } from 'utils/bignumber';
import { formatCollateralizationRatio, formatter } from 'utils/ui';
import { decimalRules } from '../../styles/constants';
import { getColor } from '../../styles/theme';
const { long, medium } = decimalRules;

const GetReward = ({ rewardAmount }) => {
  const { trackBtnClick } = useAnalytics('GetReward', 'Sidebar');
  const { lang } = useLanguage();
  const { maker } = useMaker();

  BigNumber.set({ ROUNDING_MODE: BigNumber.ROUND_DOWN });

  const reset = () => {};

  const generate = () => {
    maker.service('mcd:rewards').claimReward();
    reset();
  };

  return (
    <Grid gridRowGap="m">
      <Grid gridRowGap="s">
        <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
          "Get reward"
        </Text>
      </Grid>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="s">
        <Button
          disabled={!rewardAmount}
          onClick={() => {
            generate();
          }}
        >
          "Get Reward"
        </Button>
        <Button
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
          title="Reward to claim"
          body={`${formatter(rewardAmount, { precision: long })} FL`}
        />
      </InfoContainer>
    </Grid>
  );
};
export default GetReward;
