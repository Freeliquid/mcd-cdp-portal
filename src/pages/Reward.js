import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PageContentLayout from 'layouts/PageContentLayout';
import LoadingLayout from 'layouts/LoadingLayout';
import { cutMiddle } from 'utils/ui';
import BigNumber from 'bignumber.js';
import { USD, USDFL } from '../libs/dai-plugin-mcd/src/index.js';
import rewardList from '../references/rewardList';

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

const InfoCard = ({ title, amount, denom }) => (
  <Card
    py={{ s: 'm', xl: 'l' }}
    px="m"
    minWidth="22.4rem"
    style={{
      borderColor: getColor('border'),
      backgroundColor: getColor('cardBg')
    }}
  >
    <Grid gridRowGap="s">
      <Text
        justifySelf={{ s: 'left', xl: 'center' }}
        t="subheading"
        css={`
          white-space: nowrap;
          color: ${getColor('greyText')};
        `}
      >
        {title.toUpperCase()}
      </Text>
      <Box justifySelf={{ s: 'left', xl: 'center' }}>
        <Box display={{ s: 'none', xl: 'unset' }}>
          <Flex alignSelf="end" alignItems="flex-end">
            <Text style={{ fontSize: '20px', color: getColor('whiteText') }}>
              {amount}
            </Text>
            &nbsp;
            <Text style={{ fontSize: '18px', color: getColor('whiteText') }}>
              {denom}
            </Text>
          </Flex>
        </Box>
        <Text
          style={{ fontSize: '20px', color: getColor('whiteText') }}
          display={{ s: 'unset', xl: 'none' }}
        >
          {amount} {denom}
        </Text>
      </Box>
    </Grid>
  </Card>
);

function Reward({ viewedAddress }) {
  const { trackBtnClick } = useAnalytics('Table');
  const { account } = useMaker();
  var { viewedAddressVaults } = useVaults();
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

  // console.log("rewardPairInfos");
  // console.log(rewardList);
  // console.log(rewardPairInfos);

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

  if (viewedAddressVaults && !viewedAddressVaults.length) {
    viewedAddressVaults = [
      {
        collateralValue: USD(0),
        debtValue: USD(0)
      }
    ];
  }

  const rewardPairInfosEx = rewardPairInfos.map(item => {
    const { avail, locked, lockedvalue, allowance } = item;
    return {
      ...item,
      approveDisabled: avail.toNumber() <= allowance.toNumber(),
      lockDisabled:
        avail.toNumber() <= 0 || allowance.toNumber() < avail.toNumber(),
      unlockDisabled: locked.toNumber() <= 0
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

  return (
    <PageContentLayout>
      <Text.h2 pr="m" mb="m" color="white">
        {lang.reward_page.title}
      </Text.h2>
      {viewedAddressVaults && (
        <Grid gridRowGap={{ s: 'm', xl: 'l' }}>
          <Grid
            gridTemplateColumns={{ s: '1fr', xl: 'auto auto 1fr' }}
            gridColumnGap="m"
            gridRowGap="s"
          >
            <InfoCard
              title={lang.overview_page.total_collateral_locked}
              amount={`$${viewedAddressVaults
                .reduce(
                  (acc, { collateralValue }) => collateralValue.plus(acc),
                  0
                )
                .toBigNumber()
                .toFixed(2)}`}
              denom={'USD'}
            />
          </Grid>
          <Box>
            <Text style={{ fontSize: '20px', color: getColor('greyText') }}>
              {'Participating pools'}
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
                      {'address'}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {'On wallet'}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {'Locked'}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {'Locked value'}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {'FL/h distributed'}
                    </Table.th>
                    <Table.th display={{ s: 'none', xl: 'table-cell' }}>
                      {'Allowance'}
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
                      locked,
                      lockedvalue,
                      perhour,
                      allowance,
                      approveDisabled,
                      lockDisabled,
                      unlockDisabled
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
                            {cutMiddle(gem, 7, 5)}
                          </Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">{avail.toFixed(8)}</Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">{locked.toFixed(8)}</Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">{lockedvalue.toFixed(2)}</Text>
                        </Table.td>
                        <Table.td display={{ s: 'none', xl: 'table-cell' }}>
                          <Text t="caption">{perhour.toFixed(2)}</Text>
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
                              Approve
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
                              Lock
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
                              Unlock
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
      )}
    </PageContentLayout>
  );
}

export default hot(Reward);
