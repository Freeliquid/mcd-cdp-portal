import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, useNavigation } from 'react-navi';
import styled from 'styled-components';
import AccountSelection from 'components/AccountSelection';
import { Routes } from 'utils/constants';
import useMaker from 'hooks/useMaker';
import useLanguage from 'hooks/useLanguage';
import { Box, Flex, Position, Text } from '@makerdao/ui-components-core';
import {
  ConnectHero,
  ThickUnderline,
  Quotes,
  GradientBox,
  Features,
  Questions,
  QuestionsWrapper,
  buildQuestionsFromLangObj,
  FixedHeaderTrigger,
  Parallaxed,
  QuotesFadeIn,
  SeparatorDot,
  BorrowCalculator,
  StyledPageContentLayout,
  PageHead,
  MarketsTable
} from 'components/Marketing';

import useCdpTypes from 'hooks/useCdpTypes';
import { watch } from 'hooks/useObservable';

const HeroBackground = (() => {
  const Pos = styled(Position)`
    position: absolute;
  `;

  return () => (
    <Box
      width="100%"
      zIndex="-1"
      height="670px"
      style={{ position: 'absolute' }}
    >
      <Box maxWidth="866px" m="0 auto">
        <Pos top={{ s: '-30px', m: '-17px' }} left={{ s: '-86px', m: '-83px' }}>
          <Parallaxed
            style={{ position: 'absolute', top: '-36px', left: '-67px' }}
          ></Parallaxed>
        </Pos>
        <Pos
          top={{ s: '306px', m: '270px' }}
          right={{ s: '-105px', m: '-18px' }}
        >
          <Parallaxed
            style={{ position: 'absolute', top: '98px', left: '-33px' }}
          ></Parallaxed>
        </Pos>
      </Box>
    </Box>
  );
})();

const StyledQuotes = styled(Quotes)`
  background: rgb(45 57 83);
  box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.75);

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    :after {
      content: '';
      display: block;
      height: 98%;
      width: 58%;
      position: absolute;
      top: 49px;
      right: -40px;
      z-index: -1;
    }
  }
`;

// disableConnect is for testing
function Borrow({ disableConnect = false }) {
  const { account } = useMaker();
  const navigation = useNavigation();
  const { lang } = useLanguage();

  useEffect(() => {
    async function redirect() {
      if (!disableConnect && account) {
        const { search } = (await navigation.getRoute()).url;
        navigation.navigate({
          pathname: `/${Routes.BORROW}/owner/${account.address}`,
          search
        });
      }
    }
    redirect();
  }, [account, navigation, disableConnect]);

  const { cdpTypesList } = useCdpTypes();
  const prices = watch.collateralTypesPrices(
    cdpTypesList?.length ? cdpTypesList : []
  );

  return (
    <StyledPageContentLayout>
      <PageHead
        title={lang.borrow_landing.meta.title}
        description={lang.borrow_landing.meta.description}
      />
      <FixedHeaderTrigger>
        <ConnectHero>
          <HeroBackground />
          <ThickUnderline>
            <Text.h4>{lang.borrow_landing.page_name}</Text.h4>
          </ThickUnderline>
          <Text.h1 className="headline">{lang.borrow_landing.headline}</Text.h1>
          <Box minHeight="81px" maxWidth="720px">
            <Text>{lang.borrow_landing.subheadline}</Text>
          </Box>
          <Text fontSize="s" className="connect-to-start">
            {lang.borrow_landing.connect_to_start}
          </Text>
          <AccountSelection className="button" />
        </ConnectHero>
      </FixedHeaderTrigger>
      <GradientBox mt="26px">
        <Box m="30px auto 0" maxWidth="980px">
          <Text.h2 mb="16px">{lang.borrow_landing.calc_heading}</Text.h2>
          <Text>{lang.borrow_landing.calc_subheading}</Text>
          {prices?.length && cdpTypesList?.length ? (
            <BorrowCalculator
              mt="40px"
              prices={prices}
              cdpTypesList={cdpTypesList}
            />
          ) : null}
        </Box>
      </GradientBox>
      <Box maxWidth="1007px" m="204px auto 0">
        <Box maxWidth="777px" m="0 auto">
          <Text.h2 mb="34px">{lang.borrow_markets.heading}</Text.h2>
          <Text>{lang.borrow_markets.subheading}</Text>
        </Box>
        <Box
          mt={{ s: '54px', m: '87px' }}
          css={`
            overflow-x: scroll;
            overflow-y: hidden;
            &::-webkit-scrollbar {
              display: none;
            }
            -ms-overflow-style: none;
          `}
        >
          <MarketsTable
            cdpTypesList={cdpTypesList.filter(symbol =>
              ['ETH', 'BAT', 'USDC', 'WBTC'].includes(symbol.split('-')[0])
            )}
          />
        </Box>
        <Box
          textAlign="left"
          mt={{ s: '20px', m: '35px' }}
          pl={{ s: '6px', m: '37px' }}
        >
          {/* <Link
            href={`/${Routes.BORROW}/markets`}
            style={{ textDecoration: 'underline' }}
          >
            {lang.borrow_landing.markets_link}
          </Link> */}
        </Box>
      </Box>
      <QuestionsWrapper mt="147px">
        <Text.h2>{lang.landing_page.questions_title}</Text.h2>
        <Questions
          questions={buildQuestionsFromLangObj(
            lang.borrow_landing.questions,
            lang
          )}
          links={
            <>
              <Link
                style={{ color: '#00C4C4' }}
                href="https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/vault"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang.borrow_landing.questions.bottom_link1}
              </Link>
              <Box display={{ s: 'none', m: 'inline-block' }}>
                <SeparatorDot mx="24px" />
              </Box>
              <Link
                style={{ color: '#00C4C4' }}
                href="https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/glossary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang.borrow_landing.questions.bottom_link2}
              </Link>
            </>
          }
        />
      </QuestionsWrapper>
    </StyledPageContentLayout>
  );
}

export default hot(Borrow);
