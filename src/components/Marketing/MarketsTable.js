import React, { useState } from 'react';
import styled from 'styled-components';
import { Loader, Table, Text } from '@makerdao/ui-components-core';
import BigNumber from 'bignumber.js';
import { TokenIcon } from './index';
import { formatter, prettifyNumber } from 'utils/ui';
import { getColor } from 'styles/theme';
import useLanguage from 'hooks/useLanguage';
import groupBy from 'lodash.groupby';
import { watch } from 'hooks/useObservable';
import { getMaxDaiAvailable } from 'utils/cdp';

const TABLE_PADDING = '35px';

const Number = styled(Text)`
  color: #fff;
`;

const tokenNames = {
  ETH: 'USDT/USDC',
  BAT: 'USDT/USDN',
  WBTC: 'USDT/DAI',
  USDC: 'USDC/USDN',
  MANA: 'USDC/DAI',
  ZRX: 'USDN/DAI'
};

const MarketsTableStyle = styled(Table)`
  widht: 100%;
  margin: 0 auto;
  color: #fff;

  ${Text} {
    color: #fff;
    font-size: ${props => props.theme.fontSizes.s};
    text-align: center;
  }

  ${Number} {
    font-size: 15px;
  }

  .gem {
    color: #fff;
  }

  .profile-name {
    color: #6f838f;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    .gem {
      color: #6f838f;
    }
  }

  ${Table.th} {
    padding-bottom: 18px;
    color: ${props => props.theme.colors.steel};
    text-align: center;
  }

  ${Table.thead}, .summary:not(:nth-last-child(2)) {
    border-bottom: 1px solid #e8e8e8;
  }

  ${Table.td} {
    padding-top: 14px;
    padding-bottom: 13px;
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    ${Table.td}, ${Table.th} {
      padding-right: 6px;
    }
  }
`;

const MarketsTable = ({ cdpTypesList, ...props }) => {
  const collateralTypesData = watch.collateralTypesData(cdpTypesList);
  const debtCeilings = watch.collateralDebtCeilings(cdpTypesList);
  const { lang } = useLanguage();
  const cdpTypesByGem = groupBy(
    collateralTypesData,
    type => type.symbol.split('-')[0]
  );
  const [expandedRows, setExpandedRows] = useState({});
  const isExpanded = rowIndex => expandedRows[rowIndex];

  return (
    <MarketsTableStyle {...props}>
      <Table.thead>
        <Table.tr>
          <Table.th width={{ s: '0', m: TABLE_PADDING }} />
          <Table.th width={{ s: '30px', m: '49px' }} />
          <Table.th minWidth="80px">{lang.overview_page.token}</Table.th>
          <Table.th width={{ s: 'unset', xl: '190px' }}>
            {lang.stability_fee}
          </Table.th>
          <Table.th width={{ s: 'unset', xl: '190px' }}>
            {lang.borrow_markets.min_col_ratio}
          </Table.th>
          <Table.th width={{ s: 'unset', xl: '190px' }}>
            {lang.dai_available}
          </Table.th>
          <Table.th />
          <Table.th width={{ s: '0', m: TABLE_PADDING }} />
        </Table.tr>
      </Table.thead>
      {collateralTypesData ? (
        Object.entries(cdpTypesByGem).map(([gem, cdpTypesData], rowIndex) => {
          cdpTypesData = cdpTypesData.map(ilkData => ({
            maxDaiAvailableToGenerate: getMaxDaiAvailable(ilkData),
            ...ilkData
          }));

          // aggregate data
          const fees = cdpTypesData.map(data => data.annualStabilityFee);
          const minFee = BigNumber.min.apply(null, fees);
          const maxFee = BigNumber.max.apply(null, fees);
          const colRatios = cdpTypesData.map(data =>
            data.liquidationRatio.toBigNumber()
          );
          const minRatio = BigNumber.min.apply(null, colRatios);
          const maxRatio = BigNumber.max.apply(null, colRatios);
          const daiAvailableList = cdpTypesData.map(
            data => data.maxDaiAvailableToGenerate
          );
          const totalDaiAvailable = BigNumber.sum.apply(null, daiAvailableList);

          return [
            <Table.tbody
              key={gem}

              //onClick={() => toggleRow(rowIndex)}
            >
              <Table.tr>
                <td className="margin" />
                <Table.td>
                  <TokenIcon symbol={gem} size={31.67} />
                </Table.td>
                <Table.td>
                  <Text display={{ s: 'none', m: 'inline' }}>
                    {tokenNames[gem]}
                  </Text>
                  {/* <Text ml="8px" className="gem">
                    {gem}
                  </Text> */}
                </Table.td>
                <Table.td>
                  <Number>
                    {formatter(minFee, { percentage: true })}%
                    {!minFee.eq(maxFee) && (
                      <> - {formatter(maxFee, { percentage: true })}%</>
                    )}
                  </Number>
                </Table.td>
                <Table.td>
                  <Number>
                    {formatter(minRatio, {
                      percentage: true
                    })}
                    %
                    {!minRatio.eq(maxRatio) && (
                      <>
                        {' - '}
                        {formatter(maxRatio, {
                          percentage: true
                        })}
                        %
                      </>
                    )}
                  </Number>
                </Table.td>
                <Table.td>
                  <Number>{prettifyNumber(totalDaiAvailable, true)}</Number>
                </Table.td>
              </Table.tr>
            </Table.tbody>
          ];
        })
      ) : (
        <tr>
          <td colSpan={8}>
            <Loader
              size="4rem"
              color={getColor('spinner')}
              bg="white"
              m="40px auto"
            />
          </td>
        </tr>
      )}
    </MarketsTableStyle>
  );
};

export default MarketsTable;
