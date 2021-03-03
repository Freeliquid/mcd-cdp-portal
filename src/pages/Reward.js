import React, { useEffect, Fragment, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import useSidebar from 'hooks/useSidebar';
import PageContentLayout from 'layouts/PageContentLayout';
import LoadingLayout from 'layouts/LoadingLayout';
import { formatter } from 'utils/ui';
import rewardList from '../references/rewardList';
import rewardListX2 from '../references/rewardListX2';
import { formatDate, formatCollateralizationRatio } from 'utils/ui';
import ExternalLinkUni from 'components/ExternalLinkUni';
import { Currency } from '@makerdao/currency';
import {
  Text,
  Grid,
  Card,
  Table,
  Box,
  Button,
  Address,
  Flex,
  Link
} from '@makerdao/ui-components-core';
import FullScreenAction from 'components/CDPDisplay/FullScreenAction';
import useMaker from 'hooks/useMaker';
import theme, { getColor } from 'styles/theme';
import useLanguage from 'hooks/useLanguage';
import useNotification from 'hooks/useNotification';
import { watch } from 'hooks/useObservable';
import { NotificationList, SAFETY_LEVELS } from 'utils/constants';
import { decimalRules } from '../styles/constants';
import TimeAgo from 'timeago-react';
import { ReactComponent as MarkerCayn } from 'images/landing/marker_cayn.svg';
import { ReactComponent as MarkerPurple } from 'images/landing/marker_purple.svg';

const { short } = decimalRules;

const RewardInfo = ({ params, title, buttons }) => {
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
          paddingRight: '20px',
          paddingBottom: '20px'
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
        {params.map(([param, value, denom, info, timer]) => (
          <Flex
            key={`system_${param}`}
            justifyContent="space-between"
            alignItems="baseline"
            width="100%"
            style={{ padding: '7px 10px' }}
            className="info_reward"
          >
            <Text fontWeight="semibold" t="smallCaps" color="#A3B2CF">
              {param}
            </Text>
            <Box style={{ textAlign: 'right', lineHeight: '15px' }}>
              <Text fontSize="s" style={{ color: getColor('whiteText') }}>
                {`${value}`} {`${denom}`}
              </Text>
              <br />
              <Text
                style={{ fontSize: '12px', color: getColor('greyText') }}
              >{`${info}`}</Text>
              <Text style={{ fontSize: '12px', color: getColor('greyText') }}>
                {' '}
                {timer === null ? null : (
                  <TimeAgo datetime={timer} live={true} />
                )}
              </Text>
            </Box>
          </Flex>
        ))}
        {buttons && (
          <Grid
            gridTemplateColumns={{ s: '1fr', xl: '1fr 1fr' }}
            gridColumnGap="m"
            gridRowGap="s"
          >
            {buttons.map(({ disable, onClick, text }) => (
              <Button
                className="btn reward_btn"
                style={{ margin: '10px auto 0px', fontSize: '14px' }}
                disabled={disable}
                onClick={onClick}
              >
                {text}
              </Button>
            ))}
          </Grid>
        )}
      </Card>
    </Fragment>
  );
};

function Reward({ viewedAddress }) {
  const { account, network } = useMaker();
  const { lang } = useLanguage();
  const { maker } = useMaker();
  const { addNotification, deleteNotifications } = useNotification();
  const rewardPairInfosHiRisk = watch.walletRewardPairInfos(
    rewardList,
    account?.address,
    true
  );
  const apyHiRisk = watch.getAPY(true) * 100;
  const apyLowRisk = watch.getAPY(false) * 100;

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
  const timeStart = rewardNextStartTime * 1000;

  const globalParams = [
    [
      lang.overview_page.reward_next_start_time,
      formatDate(new Date(rewardNextStartTime * 1000)),
      '',
      '',
      timeStart
    ],
    [
      lang.overview_page.reward_per_hour_hirisk,
      formatter(rewardPerHourHiRisk ? rewardPerHourHiRisk : 0.0, {
        precision: short
      }),
      'FL (APY: ' + formatCollateralizationRatio(apyHiRisk) + ')',
      lang.overview_page.reward_epoch + ' ' + hiRiskEpoch,
      null
    ],
    [
      lang.overview_page.reward_per_hour_lowrisk,
      formatter(rewardPerHourLowRisk ? rewardPerHourLowRisk : 0.0, {
        precision: short
      }),
      'FL (APY: ' + formatCollateralizationRatio(apyLowRisk) + ')',
      lang.overview_page.reward_epoch + ' ' + lowRiskEpoch,
      null
    ]
  ];

  const yourInfoParams = [
    [
      lang.overview_page.reward_earned_hirisk,
      formatter(earnedRewardHiRisk ? earnedRewardHiRisk : 0.0, {
        precision: short
      }),
      'FL',
      '',
      null
    ],
    [
      lang.overview_page.reward_earned_lowrisk,
      formatter(earnedRewardLowRisk ? earnedRewardLowRisk : 0.0, {
        precision: short
      }),
      'FL',
      '',
      null
    ],
    [
      lang.sidebar.reward_on_wallet,
      formatter(walletAmount ? walletAmount : 0.0, {
        precision: short
      }),
      'FL',
      '',
      null
    ]
  ];

  const { show: showSidebar } = useSidebar();
  const [actionShown, setActionShown] = useState(null);
  const showAction = props => {
    const emSize = parseInt(getComputedStyle(document.body).fontSize);
    const pxBreakpoint = parseInt(theme.breakpoints.l) * emSize;
    const isMobile = document.documentElement.clientWidth < pxBreakpoint;
    if (isMobile) {
      setActionShown(props);
    } else {
      showSidebar(props);
    }
  };

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
      network,
      x2: rewardListX2
    };
  });

  const conv = amount => {
    const c = new Currency(amount);
    return c.toFixed('wei');
  };

  const poolApprove = (selectedGem, avail, allowance, hiRisk) => {
    maker.service('mcd:rewards').poolApprove(conv(avail), selectedGem, hiRisk);
  };
  const valid =
    formatter(earnedRewardHiRisk) == 0 && formatter(earnedRewardLowRisk) == 0;
  const getRewardButton = {
    text: lang.sidebar.reward_button,
    disable: valid,
    onClick: () => {
      maker.service('mcd:rewards').claimRewardEx();
    }
  };

  const getRewardButtonHiRisk = {
    text: lang.sidebar.reward_button_hi_risk,
    disable: valid,
    onClick: () => {
      maker.service('mcd:rewards').claimRewardHiRisk();
    }
  };

  const getRewardButtonLowRisk = {
    text: lang.sidebar.reward_button_low_risk,
    disable: valid,
    onClick: () => {
      maker.service('mcd:rewards').claimRewardLowRisk();
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
              buttons={null}
            />
            <RewardInfo
              params={yourInfoParams}
              title={lang.overview_page.reward_your_info}
              buttons={[
                getRewardButtonHiRisk,
                getRewardButtonLowRisk,
                getRewardButton
              ]}
            />
          </Grid>
          <Text style={{ fontSize: '20px', color: getColor('greyText') }}>
              {lang.reward_page.info_box}
            </Text>
          <Card
        css={'overflow:hidden;'}
        pt="sm"
        style={{
          background: getColor('cardBg'),
          borderColor: getColor('border'),
          paddingTop: '35px',
          paddingLeft: '35px',
          paddingRight: '35px',
          paddingBottom: '35px',
          color: getColor('greyText'),
          lineHeight: '34px',
        }}
      >
           <ul>
              <li>
                {lang.formatString(lang.reward_page.info_box_l1, 
                  <Link
                    className="link_post"
                    href="https://freeliquid.medium.com/freeliquid-rewards-distribution-a40b3de86dc"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      {lang.reward_page.info_box_link_meduim}
                  </Link>,
                  <Link
                    className="link_post"
                    href="https://freeliquid.io/wp/Freeliquid_WP_English.pdf"
                    download=""
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      {lang.reward_page.info_box_link_wp}
                  </Link>
                )}
              </li>
             <li>{lang.reward_page.info_box_l2}</li>
             <li>
             {lang.formatString(lang.reward_page.info_box_l3,
              <MarkerCayn />,
              <MarkerPurple />
              )}</li>
             <li>{lang.reward_page.info_box_l4}</li>
             <li>{lang.reward_page.info_box_l5}</li>
           </ul>
            </Card>
          <Box>
            <Text style={{ fontSize: '20px', color: getColor('greyText') }}>
              {lang.reward_page.participating_pools}
            </Text>
            <Card
              className="table-reward"
              px={{ s: 's', xl: 'l' }}
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
                  table {
                  }
                  td,
                  th {
                    white-space: nowrap;
                    color: ${getColor('whiteText')};
                  }

                  tbody,
                  tr {
                    border-color: ${getColor('border')} !important;
                  }
                  td:not(:last-child),
                  th:not(:last-child) {
                    padding-right: 15px;
                  }
                  thead {
                    overflow: auto;
                  }
                `}
              >
                <Table.thead>
                  <Table.tr>
                  <Table.th></Table.th>
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
                    <Table.th
                      display={{ s: 'none', xl: 'table-cell' }}
                      style={{ textAlign: 'center' }}
                    >
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
                      x2
                    }) => (
                      <Table.tr key={gem}>
                      <Table.td>
                        <div style={{
                          width: '10px',
                          height: '10px',
                          background: hiRisk ? getColor('cayn') : getColor('blue'),
                          borderRadius: '50%'
                        }} />

                      </Table.td>
                        <Table.td>
                          <Text
                            t="body"
                            fontSize={{ s: '1.2rem', xl: 'm' }}
                            fontWeight={{ s: 'medium', xl: 'normal' }}
                            color = {getColor('whiteText')}
                          >
                            { name == 'USDFL_FL' ? 'FL_USDFL' : name } 
                          </Text>
                        </Table.td>
                        <Table.td>
                          <Text
                            t="body"
                            fontSize={{ s: '1.2rem', xl: 'm' }}
                            color={{ s: 'grey', xl: 'white' }}
                          >
                            <ExternalLinkUni
                              key={1}
                              string={gem}
                              arrowInheritsColorOnHover={true}
                            />
                          </Text>
                        </Table.td>
                        <Table.td
                          display={{ s: 'table-cell', xl: 'table-cell' }}
                        >
                          <Text t="caption">
                          {x2.some(function(val) {
                              return val === name;
                            }) ? 
                            formatter(availvalue, { precision: short }) 
                            : formatter(availvalue/2, { precision: short })}
                          </Text>
                        </Table.td>
                        <Table.td
                          display={{ s: 'table-cell', xl: 'table-cell' }}
                        >
                          <Text t="caption">
                            {formatter(lockedvalue, { precision: short })}
                          </Text>
                        </Table.td>
                        <Table.td
                          display={{ s: 'table-cell', xl: 'table-cell' }}
                        >
                          <Flex justifyContent="flex-end">
                            <Button
                              // variant="secondary-outline"
                              className="btn w100"
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
                            {x2.some(function(val) {
                              return val === name;
                            }) ? (
                              <Button
                                // variant="secondary-outline"
                                className="btn w100"
                                style={{ margin: '1px auto', fontSize: '12px' }}
                                borderColor="steel"
                                disabled={lockDisabled}
                                onClick={() => {
                                  showAction({
                                    type: 'depositLPReward',
                                    props: {
                                      avail,
                                      availValue: availvalue,
                                      name,
                                      gem,
                                      hiRisk
                                    }
                                  });
                                }}
                              >
                                {lang.reward_page.button_lock}
                              </Button>
                            ) : (
                              <Button
                                // variant="secondary-outline"
                                className="btn w100 x2"
                                style={{ margin: '1px auto', fontSize: '12px' }}
                                borderColor="steel"
                                disabled={lockDisabled}
                                onClick={() => {
                                  showAction({
                                    type: 'depositLPReward',
                                    props: {
                                      avail,
                                      availValue: availvalue,
                                      name,
                                      gem,
                                      hiRisk
                                    }
                                  });
                                }}
                              >
                                {lang.reward_page.button_lockx2}
                              </Button>
                            )}
                          </Flex>
                        </Table.td>
                        <Table.td>
                          <Flex justifyContent="flex-end">
                            <Button
                              // variant="secondary-outline"
                              className="btn w100"
                              style={{ margin: '1px auto', fontSize: '12px' }}
                              borderColor="steel"
                              disabled={unlockDisabled}
                              onClick={() => {
                                showAction({
                                  type: 'withdrawLPReward',
                                  props: {
                                    locked,
                                    lockedValue: lockedvalue,
                                    name,
                                    gem,
                                    hiRisk
                                  }
                                });
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
      {actionShown && (
        <FullScreenAction {...actionShown} reset={() => setActionShown(null)} />
      )}
    </PageContentLayout>
  );
}

export default hot(Reward);
