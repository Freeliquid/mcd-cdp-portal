import React from 'react';
import BigNumber from 'bignumber.js';
import { USDFL } from '../../libs/dai-plugin-mcd/src/index.js';
import {
  Text,
  Grid,
  Button,
  Card,
  Flex,
  CardBody
} from '@makerdao/ui-components-core';
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
    <Card
      pt="sm"
      style={{
        background: getColor('cardBg'),
        borderColor: getColor('border')
      }}
    >
      <Flex justifyContent="space-between" alignContent="center" px="s" pt="">
        <Text
          t="h4"
          style={{ color: getColor('whiteText'), paddingBottom: '10px' }}
        >
          {lang.sidebar.reward}
        </Text>
      </Flex>
      <CardBody>
        <Flex
          justifyContent="space-between"
          alignItems="baseline"
          width="100%"
          py="xs"
          px="s"
          bg={'#1c2334'}
          color="#A3B2CF"
        >
          <Text fontWeight="semibold" t="smallCaps" color="#A3B2CF">
            {lang.sidebar.reward_info}
          </Text>
          <Text fontSize="1.4rem" style={{ color: getColor('greyText') }}>
            {`${formatter(rewardAmount, { precision: long })} FL`}
          </Text>
        </Flex>
      </CardBody>
      <Button
        className="btn btn_center"
        style={{ margin: '20px auto', fontSize: '14px' }}
        disabled={!rewardAmount}
        onClick={() => {
          generate();
        }}
      >
        {lang.sidebar.reward_button}
      </Button>
      {/* <Button className="btn"
          variant="secondary-outline"
          onClick={() => {
            reset();
          }}
        >
          {lang.cancel}
        </Button> */}
    </Card>
  );
};
export default GetReward;
