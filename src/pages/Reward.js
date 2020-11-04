import React, { useEffect, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import PageContentLayout from 'layouts/PageContentLayout';
import LoadingLayout from 'layouts/LoadingLayout';
import { formatter } from 'utils/ui';
import { cutMiddle } from 'utils/ui';
import BigNumber from 'bignumber.js';
import { USD, USDFL } from '../libs/dai-plugin-mcd/src/index.js';
import rewardList from '../references/rewardList';
import { formatDate } from 'utils/ui';
import ExternalLink from 'components/ExternalLink';
import { Currency } from '@makerdao/currency';

import {
  Text,
  Grid,
  Card,
  Table,
  Box,
  Button,
  Address,
  Flex
} from '@makerdao/ui-components-core';
import { Link, useCurrentRoute } from 'react-navi';
import useMaker from 'hooks/useMaker';
import RatioDisplay from '../components/RatioDisplay';
import { getColor } from 'styles/theme';
import useLanguage from 'hooks/useLanguage';
import useModal from '../hooks/useModal';
import useNotification from 'hooks/useNotification';
import useAnalytics from 'hooks/useAnalytics';
import useVaults from 'hooks/useVaults';
import { watch } from 'hooks/useObservable';
import useEmergencyShutdown from 'hooks/useEmergencyShutdown';
import { NotificationList, Routes, SAFETY_LEVELS } from 'utils/constants';
import { FilledButton } from 'components/Marketing';
import { distanceInWordsToNow } from 'date-fns'

import { decimalRules } from '../styles/constants';

const { long, medium, short } = decimalRules;

const RewardInfo = ({ params, title, button }) => {
  return (
    <Fragment>
      <Card
        css={'overflow:hidden;'}
        pt="sm"
        style={{
          background: getColor('cardBg'),
          borderColor: getColor('border'),
          paddingTop: '20px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <Flex
          justifyContent="space-between"
          alignContent="center"
          px="s"
          pb="s2"
        >
          <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
            {title}
          </Text>
        </Flex>
        {params.map(([param, value, denom], idx) => (
          <Flex
            key={`system_${param}`}
            justifyContent="space-between"
            alignItems="baseline"
            width="100%"
            py="xs"
            px="sm"
          >
            <Text fontWeight="semibold" t="smallCaps" color="#A3B2CF">
              {param}
            </Text>
            <Box>
              <Text
                fontSize="s"
                style={{ marginLeft: 15, color: getColor('greyText') }}
              >
                {`${value}`} {`${denom}`}
              </Text>
            </Box>
          </Flex>
        ))}
        {button && (
          <Flex
            justifyContent="space-between"
            alignContent="right"
            px="s"
            pb="s2"
          >
            <Button
              className="btn btn"
              style={{ margin: '5px auto', fontSize: '14px' }}
              disabled={button.disable}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          </Flex>
        )}
      </Card>
    </Fragment>
  );
};

function Reward({ viewedAddress }) {
  const { trackBtnClick } = useAnalytics('Table');
  const { account, network } = useMaker();
  const { url } = useCurrentRoute();
  const { lang } = useLanguage();
  const { emergencyShutdownActive } = useEmergencyShutdown();
  const { maker } = useMaker();
  const { addNotification, deleteNotifications } = useNotification();
  const rewardPairInfosHiRisk = watch.walletRewardPairInfos(
    rewardList,
    account?.address,
    true
  );
  const rewardPairInfosLowRisk = watch.walletRewardPairInfos(
    rewardList,
    account?.address,
    false
  );
  const rewardPairInfos =
    rewardPairInfosHiRisk && rewardPairInfosLowRisk
      ? [...rewardPairInfosHiRisk, ...rewardPairInfosLowRisk].filter(
          item => item.gem != 0
        )
      : [];
  
  const rewardPerHourHiRisk = watch.rewardPerHour(true);
  const rewardPerHourLowRisk = watch.rewardPerHour(false);

  const rewardFirstStageDuration = watch.rewardFirstStageDuration();
  const rewardStartTime = watch.rewardStartTime();

  const earnedRewardHiRisk = watch.rewardEarnedEx(account?.address, true);
  const earnedRewardLowRisk = watch.rewardEarnedEx(account?.address, false);

  const walletAmount = watch.tokenBalance(account?.address, 'FL');

  const rewardNextStartTime =
    rewardFirstStageDuration && rewardStartTime
      ? parseInt(rewardFirstStageDuration) + parseInt(rewardStartTime)
      : 0;


  const hiRiskEpoch = watch.rewardCurrentEpoch(true);
  const lowRiskEpoch = watch.rewardCurrentEpoch(false);

  const timestamp = Math.round(new Date().getTime() / 1000);
  // if (rewardFirstStageDuration && rewardStartTime)
  //   console.log(
  //     'rewardNextStartTime',
  //     rewardNextStartTime,
  //     rewardFirstStageDuration.toFixed(0),
  //     rewardStartTime.toFixed(0),
  //     timestamp,
  //     formatDate(new Date(rewardNextStartTime * 1000))
  //   );

  // console.log("rewardPairInfos");
  // console.log(rewardList);
  // console.log(rewardPairInfos);

  const timeTillStart = distanceInWordsToNow(
    new Date(rewardNextStartTime * 1000)
  );


  const globalParams = [
    [
      lang.overview_page.reward_next_start_time,
      formatDate(new Date(rewardNextStartTime * 1000)),
      '('+timeTillStart+')'
    ],
    [
      lang.overview_page.reward_per_hour_hirisk,
      formatter(rewardPerHourHiRisk ? rewardPerHourHiRisk : 0.0, {
        precision: short
      }),
      'FL'
    ],
    [
      lang.overview_page.reward_epoch_hirisk,
      hiRiskEpoch,
      ''
    ],
    [
      lang.overview_page.reward_per_hour_lowrisk,
      formatter(rewardPerHourLowRisk ? rewardPerHourLowRisk : 0.0, {
        precision: short
      }),
      'FL'
    ],
    [
      lang.overview_page.reward_epoch_lowrisk,
      lowRiskEpoch,
      ''
    ]
  ];

  const yourInfoParams = [
    [
      lang.overview_page.reward_earned_hirisk,
      formatter(earnedRewardHiRisk ? earnedRewardHiRisk : 0.0, {
        precision: short
      }),
      'FL'
    ],
    [
      lang.overview_page.reward_earned_lowrisk,
      formatter(earnedRewardLowRisk ? earnedRewardLowRisk : 0.0, {
        precision: short
      }),
      'FL'
    ],
    [
      lang.sidebar.reward_on_wallet,
      formatter(walletAmount ? walletAmount : 0.0, {
        precision: short
      }),
      'FL'
    ]
  ];

  useEffect(() => {
    if (
      account &&
      viewedAddress.toLowerCase() !== account.address.toLowerCase()
    ) {
      addNotification({
        id: NotificationList.NON_OVERVIEW_OWNER,
        content: lang.formatString(
          lang.notifications.non_overview_owner,
          <Address full={viewedAddress} shorten={true} expandable={false} />
        ),
        level: SAFETY_LEVELS.WARNING
      });
    }
    return () => deleteNotifications([NotificationList.NON_OVERVIEW_OWNER]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewedAddress, account]);

  const { show } = useModal();
  if (!rewardPairInfos) {
    return <LoadingLayout background={getColor('cardBg')} />;
  }

  const rewardPairInfosEx = rewardPairInfos.map(item => {
    const { avail, locked, allowance } = item;
    return {
      ...item,
      approveDisabled: avail.toNumber() <= allowance.toNumber(),
      lockDisabled:
        avail.toNumber() <= 0 ||
        allowance.toNumber() < avail.toNumber() ||
        rewardNextStartTime >= timestamp,
      unlockDisabled: locked.toNumber() <= 0,
      network
    };
  });

  console.log('rewardPairInfosEx', rewardPairInfosEx);

  const conv = amount => {
    const c = new Currency(amount);
    return c.toFixed('wei');
  };

  const lockPool = (selectedGem, avail, hiRisk) => {
    console.log('lockPool', selectedGem, avail.toNumber(), conv(avail), hiRisk);
    maker.service('mcd:rewards').lockPool(conv(avail), selectedGem, hiRisk);
  };

  const unlockPool = (selectedGem, locked, hiRisk) => {
    console.log(
      'unlockPool',
      selectedGem,
      locked.toNumber(),
      conv(locked),
      hiRisk
    );
    maker.service('mcd:rewards').unlockPool(conv(locked), selectedGem, hiRisk);
  };

  const poolApprove = (selectedGem, avail, allowance, hiRisk) => {
    console.log(
      'poolApprove',
      selectedGem,
      avail.toNumber(),
      allowance.toNumber(),
      hiRisk
    );
    maker.service('mcd:rewards').poolApprove(conv(avail), selectedGem, hiRisk);
  };
  const valid = formatter(earnedRewardHiRisk) == 0 && formatter(earnedRewardLowRisk) == 0;
  const getRewardButton = {
    text: lang.sidebar.reward_button,
    disable: valid,
    onClick: () => {
      maker.service('mcd:rewards').claimRewardEx();
    }
  };

  return (
    <PageContentLayout>
      <Text.h2 pr="m" mb="m" color="white">
        {lang.reward_page.title}
      </Text.h2>
      {
        <Grid gridRowGap={{ s: 'm', xl: 'l' }}>
          <Grid
            gridTemplateColumns={{ s: '1fr', xl: 'auto auto' }}
            gridColumnGap="m"
            gridRowGap="s"
          >
            <RewardInfo
              params={globalParams}
              title={lang.overview_page.reward_global_info}
              button={null}
            />

            <RewardInfo
              params={yourInfoParams}
              title={lang.overview_page.reward_your_info}
              button={getRewardButton}
            />
          </Grid>
          <Box>
            <Text style={{ fontSize: '20px', color: getColor('greyText') }}>
              {lang.reward_page.participating_pools}
            </Text>
            <Card
              px={{ s: 'm', xl: 'l' }}
              pt="m"
              pb="s"
              my="m"
              css={`
                overflow-x: none;
                background: ${getColor('cardBg')};
                border-color: ${getColor('border')};
              `}
            >
              <Table
                width="100%"
                variant="cozy"
                css={`
                  td,
                  th {
                    white-space: nowrap;
                    color: ${getColor('whiteText')};
                  }
                  tbody, tr {border-color: ${getColor('border')} !important} 
                  td:not(:last-child),
                  th:not(:last-child) {
                    padding-right: 10px;
                  }
                `}
              >
                <Table.thead>
                  <Table.tr>
                    <Table.th>{lang.overview_page.token}</Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {lang.reward_page.address}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {lang.reward_page.on_wallet_value}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {lang.reward_page.locked_value}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {lang.reward_page.allowance}
                    </Table.th>
                    <Table.th />
                  </Table.tr>
                </Table.thead>
                <tbody>
                  {rewardPairInfosEx.map(
                    ({
                      name,
                      hiRisk,
                      gem,
                      avail,
                      availvalue,
                      locked,
                      lockedvalue,
                      allowance,
                      approveDisabled,
                      lockDisabled,
                      unlockDisabled,
                      network
                    }) => (
                      <Table.tr key={gem}>
                        <Table.td>
                          <Text
                            t="body"
                            fontSize={{ s: '1.7rem', xl: 'm' }}
                            fontWeight={{ s: 'medium', xl: 'normal' }}
                            color={hiRisk ? 'red' : 'white'}
                          >
                            {name}
                          </Text>
                        </Table.td>
                        <Table.td>
                          <Text
                            t="body"
                            fontSize={{ s: '1.7rem', xl: 'm' }}
                            color={{ s: 'grey', xl: 'white' }}
                          > 
                           <ExternalLink
                            key={1}
                            string={gem}
                            network={network}
                            arrowInheritsColorOnHover={true}
                          />
                          </Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">
                            {formatter(availvalue, { precision: short })}
                          </Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">
                            {formatter(lockedvalue, { precision: short })}
                          </Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Flex justifyContent="flex-end">
                            <Button
                              // variant="secondary-outline"
                              className="btn btn_center"
                              style={{ margin: '1px auto', fontSize: '12px' }}
                              borderColor="steel"
                              disabled={approveDisabled}
                              onClick={() => {
                                poolApprove(gem, avail, allowance, hiRisk);
                              }}
                            >
                              {lang.reward_page.button_approve}
                            </Button>
                          </Flex>
                        </Table.td>
                        <Table.td>
                          <Flex justifyContent="flex-end">
                            <Button
                              // variant="secondary-outline"
                              className="btn btn_center"
                              style={{ margin: '1px auto', fontSize: '12px' }}
                              borderColor="steel"
                              disabled={lockDisabled}
                              onClick={() => {
                                lockPool(gem, avail, hiRisk);
                              }}
                            >
                              {lang.reward_page.button_lock}
                            </Button>
                          </Flex>
                        </Table.td>
                        <Table.td>
                          <Flex justifyContent="flex-end">
                            <Button
                              // variant="secondary-outline"
                              className="btn btn_center"
                              style={{ margin: '1px auto', fontSize: '12px' }}
                              borderColor="steel"
                              disabled={unlockDisabled}
                              onClick={() => {
                                unlockPool(gem, locked, hiRisk);
                              }}
                            >
                              {lang.reward_page.button_unlock}
                            </Button>
                          </Flex>
                        </Table.td>
                      </Table.tr>
                    )
                  )}
                </tbody>
              </Table>
            </Card>
          </Box>
        </Grid>
      }
    </PageContentLayout>
  );
}

export default hot(Reward);
