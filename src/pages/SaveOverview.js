import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import useMaker from 'hooks/useMaker';
import AccountSelection from 'components/AccountSelection';
import { Routes } from 'utils/constants';
import {
  ConnectHero,
  buildQuestionsFromLangObj,
  Features,
  FixedHeaderTrigger,
  Questions,
  QuestionsWrapper,
  Quotes,
  GradientBox,
  ThickUnderline,
  Parallaxed,
  QuotesFadeIn,
  StyledPageContentLayout,
  SaveCalculator,
  PageHead
} from '../components/Marketing';
import { Box, Text } from '@makerdao/ui-components-core';
import useLanguage from 'hooks/useLanguage';
import styled from 'styled-components';
import { Flex } from '@makerdao/ui-components-core';
import { getColor } from 'styles/theme';
import { ReactComponent as Feat1 } from 'images/landing/save/feature-1.svg';
import { ReactComponent as Feat2 } from 'images/landing/save/feature-2.svg';
import { ReactComponent as Feat3 } from 'images/landing/save/feature-3.svg';
import { ReactComponent as Feat4 } from 'images/landing/save/feature-4.svg';
import BgSave from 'images/landing/save/save_block1.png';
import { Link } from 'react-navi';
import { useDaiSavingsRate } from '../components/Marketing/Calculators';

const HeroBackground = (() => {
  return () => (
    <Box
      width="100%"
      zIndex="-1"
      height="670px"
      style={{ position: 'absolute' }}
    >
      <Box maxWidth="1140px" m="0 auto">
        <Parallaxed style={{ zIndex: 10 }}></Parallaxed>
      </Box>
    </Box>
  );
})();

const StyledQuotes = styled(Quotes)`
  background: ${getColor('cardBg')};
  border-radius: 40px;

  @media (min-width: ${props => props.theme.breakpoints.m}) {
    :after {
      content: '';
      display: block;
      height: 80%;
      width: 110%;
      position: absolute;
      top: 13%;
      left: -5%;
      z-index: -1;
    }
  }
`;

const SaveBg = styled.div`
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  padding: 0px 20px;
}
    .save_block1{ 
    margin-top: 60px;
    background-image: url(${BgSave});
    background-repeat: no-repeat;
    background-position: bottom right;
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      background-position: 410px 0px;
    }
   
    @media (max-width: 767px) {
      background-position: -300px 0px;
      padding: 0px 15px;
      }
    }
  }
  .headline {
    margin-top: 7px;
    margin-bottom: 24px;
  }

  .connect-to-start {
    margin-top: 88px;
  }

  .button {
    margin-top: 24px;
    margin-bottom: 8px;
  }

  @media (min-width: ${props => props.theme.breakpoints.m}) {

    .headline {
      margin-top: 16px;
      margin-bottom: 15px;
    }

    .button {
      margin-top: 12px;
    }
  }
  `;

function SaveOverview() {
  const { account, network, navigation } = useMaker();
  const { lang } = useLanguage();
  const dsr = useDaiSavingsRate()?.toNumber() - 1;

  useEffect(() => {
    if (account && account.address) {
      navigation.navigate(
        `/${Routes.SAVE}/owner/${account.address}?network=${network}`
      );
    }
  }, [account, navigation, network]);
  return (
    <SaveBg>
      <StyledPageContentLayout>
        <PageHead
          title={lang.save_landing.meta.title}
          description={lang.save_landing.meta.description}
        />
        <FixedHeaderTrigger>
          <ConnectHero className="save_block1">
            <HeroBackground />
            <ThickUnderline>
              <Text style={{ fontSize: '20px', color: getColor('cayn') }}>
                {lang.save_landing.page_name}
              </Text>
            </ThickUnderline>
            <Text.h1
              className="headline"
              style={{ marginBottom: '17px', fontSize: '48px' }}
              maxWidth="600px"
            >
              {lang.save_landing.headline}
            </Text.h1>
            <Box minHeight="81px" maxWidth="600px">
              <Text style={{ fontSize: '20px', color: getColor('greyText') }}>
                {lang.save_landing.subheadline}
              </Text>
            </Box>
            <Text
              fontSize="s"
              className="connect-to-start"
              style={{ fontSize: '17px', color: getColor('greyText') }}
            >
              {lang.save_landing.connect_to_start}
            </Text>
            <AccountSelection className="button" />
          </ConnectHero>
        </FixedHeaderTrigger>
        <GradientBox mt="141px">
          <QuotesFadeIn>
            <StyledQuotes
              title={lang.save_landing.quotes_block.title}
              body={
                <Box
                  mb="95px"
                  style={{ fontSize: '17px', color: getColor('greyText') }}
                >
                  {lang.save_landing.quotes_block.body}
                </Box>
              }
              quote={lang.save_landing.quotes_block.quote1}
              author={
                <Box style={{ fontSize: '17px', color: getColor('greyText') }}>
                  {lang.save_landing.quotes_block.author1}
                </Box>
              }
            />
          </QuotesFadeIn>
          {dsr > 0 && (
            <Box m="256px 15px 0" maxWidth="813px">
              <Text.h2 mb="16px">{lang.save_landing.calc_heading}</Text.h2>
              <Text>{lang.save_landing.calc_subheading}</Text>
              <Box position="relative">
                <Parallaxed
                  initialOffset={1750}
                  style={{
                    position: 'absolute',
                    top: '177px',
                    width: '100%',
                    height: '400px'
                  }}
                ></Parallaxed>
                <SaveCalculator mt="40px" />
              </Box>
            </Box>
          )}
        </GradientBox>
        <Features
          mt={{ s: '158px', m: '200px' }}
          features={[<Feat1 />, <Feat2 />, <Feat3 />, <Feat4 />].map(
            (img, index) => ({
              img: img,
              title: lang.save_landing[`feature${index + 1}_heading`],
              content: lang.save_landing[`feature${index + 1}_content`]
            })
          )}
        />
        <QuestionsWrapper>
          <Text.h2>{lang.landing_page.questions_title}</Text.h2>
          <Questions
            questions={buildQuestionsFromLangObj(
              lang.save_landing.questions,
              lang
            )}
            /* links={
              <Link
                style={{ color: '#00C4C4' }}
                href="https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/dsr"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang.save_landing.questions.bottom_link1}
              </Link>
            } */
          />
        </QuestionsWrapper>
      </StyledPageContentLayout>
    </SaveBg>
  );
}

export default hot(SaveOverview);
