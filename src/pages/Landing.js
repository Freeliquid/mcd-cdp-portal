import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { Link, useCurrentRoute } from 'react-navi';

import MarketingLayout from 'layouts/MarketingLayout';
import { FadeIn, FilledButton, PageHead } from 'components/Marketing';
import mixpanel from 'mixpanel-browser';
import { Routes } from 'utils/constants';
import useLanguage from 'hooks/useLanguage';
import { getColor, marketingTheme } from 'styles/theme';

import { ReactComponent as BorrowIcon } from 'images/landing/borrow-icon.svg';
import { ReactComponent as SaveIcon } from 'images/landing/save-icon.svg';
import { ReactComponent as UsdlIcon } from 'images/landing/usdl.svg';
import { ReactComponent as LpgIcon } from 'images/landing/lpg.svg';
import { Box, Flex, Text } from '@makerdao/ui-components-core';

const Content = ({ children }) => (
  <Box p={{ s: `0 ${marketingTheme.mobilePaddingX}`, l: '0 32px' }}>
    <Box maxWidth="1200px" mx="auto">
      {children}
    </Box>
  </Box>
);

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
`;
const SpaceBox = styled.div`
  width: 100%;
  height: 50px;
`;

const Cards = (() => {
  const CardsContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 48px;

    :after {
      content: ' ';
      display: block;
      position: absolute;
      z-index: -1;
      bottom: 0;
      width: 93%;
      left: 3.5%;
      height: 91%;
    }

    @media (max-width: 735px) {
      max-width: 368px;
      :after {
        content: none;
      }
    }
  `;

  const Card = styled.div`
    overflow: hidden;
    width: 48%;
    position: relative;
    flex-shrink: 1;
    text-align: left;
    padding: 64px 40px;

    @media (max-width: 1238px) {
      margin-bottom: 24px;
      width: 100%;
    }

    .title {
      font-size: 26px;
      line-height: 27px;
      margin-top: 21px;
      margin-bottom: 12px;
      font-weight: bold;
      color: #fff;
    }

    .description {
      min-height: 98px;
      display: block;
    }

    .buttonContainer {
      margin-top: 18px;
      display: inline-block;
      transition: all 0.15s ease;
      padding-bottom: 0;
      cursor: pointer;
      :hover {
        ${FilledButton} {
          background-color: #00c4c4;
        }
      }
    }

    ${FilledButton} {
      display: inline-flex;
      padding: 12px 24px 13px;
      height: unset;
      line-height: 19px;
      text-decoration: none;
    }
  `;

  return props => {
    const { url } = useCurrentRoute();
    const { lang } = useLanguage();

    return (
      <CardsContainer {...props}>
        <Card
          style={{
            background: 'rgb(45 57 83)',
            boxShadow: '0px 5px 20px -10px rgba(0,0,0,0.75)'
          }}
        >
          <BorrowIcon />
          <h1 className="title">{lang.landing_page.borrow_card.title}</h1>
          <Text className="description">
            {lang.landing_page.borrow_card.description}
          </Text>
          <div className="buttonContainer">
            <Link
              href={`/${Routes.BORROW}${url.search}`}
              prefetch={true}
              onClick={() => {
                mixpanel.track('btn-click', {
                  id: 'BorrowDai',
                  product: 'freeliquid-landing'
                });
              }}
              className="button-link"
            >
              <FilledButton>
                {lang.landing_page.borrow_card.button}
              </FilledButton>
            </Link>
          </div>
        </Card>
        <Card
          style={{
            background: 'rgb(45 57 83)',
            boxShadow: '0px 5px 20px -10px rgba(0,0,0,0.75)',
            marginBottom: 0
          }}
        >
          <SaveIcon />
          <h1 className="title">{lang.landing_page.save_card.title}</h1>
          <Text className="description">
            {lang.landing_page.save_card.description}
          </Text>
          <div className="buttonContainer">
            <Link
              href={`/${Routes.SAVE}${url.search}`}
              prefetch={true}
              onClick={() => {
                mixpanel.track('btn-click', {
                  id: 'SaveDai',
                  product: 'freeliquid-landing'
                });
              }}
              className="button-link"
            >
              <FilledButton>{lang.landing_page.save_card.button}</FilledButton>
            </Link>
          </div>
        </Card>
      </CardsContainer>
    );
  };
})();

const BulletPoints = (() => {
  const JumboBlock = styled(Box)`
    max-width: 966px;
    background: rgb(218 228 249);
    boxshadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.75);
    text-align: left;
    padding: 120px 24px 122px;

    & > div:not(:first-child) {
      margin-top: 123px;
    }

    .title {
      margin-bottom: 21px;
    }

    width: 100vw;
    position: relative;
    left: -${props => props.theme.mobilePaddingX};

    @media (min-width: ${props => props.theme.breakpoints.m}) {
      padding: 131px 13% 122px 12%;
      width: inherit;
      left: unset;

      .title {
        margin-bottom: 23px;
      }

      & > div:not(:first-child) {
        margin-top: 121px;
      }
    }
  `;

  return props => {
    const { lang } = useLanguage();

    return (
      <JumboBlock mr={{ s: 0, xl: '35px' }} {...props}>
        <div>
          <Text.h3 className="title">
            {lang.landing_page.section1_title}
          </Text.h3>
          <Text>{lang.landing_page.section1_p}</Text>
        </div>
        <div>
          <Text.h3 className="title">
            {lang.landing_page.section2_title}
          </Text.h3>
          <Text>{lang.landing_page.section2_p}</Text>
        </div>
        <div>
          <Text.h3 className="title">
            {lang.landing_page.section3_title}
          </Text.h3>
          <Text>{lang.landing_page.section3_p}</Text>
        </div>
      </JumboBlock>
    );
  };
})();
const TextDiv = styled.div`
  padding: 30px 70px;
  @media (max-width: 735px) {
    width: 100%;
    padding: 30px 15px;
  }
`;
const Blocks = styled(Flex)`
  margin: 74px auto 69px;
  flex-wrap: wrap;
  text-align: left;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
  }
  @media (max-width: 735px) {
    width: 100%;
    text-align: center;
    flex-direction: column-reverse;
  }
`;
const BlocksDiv = styled.div`
  width: 60%;
  padding: 20px 50px 20px 100px;
  @media (max-width: 735px) {
    width: 100%;
    padding: 30px 15px;
  }
`;
const BlocksDiv2 = styled.div`
  width: 40%;
  padding: 20px 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 735px) {
    width: 100%;
    padding: 30px 15px;
  }
`;

function Landing() {
  const { lang } = useLanguage();

  return (
    <MarketingLayout>
      <PageHead
        title={lang.landing_page.meta.title}
        description={lang.landing_page.meta.description}
      />
      <Content>
        <SpaceBox />
        <FadeIn moveDistance="-60px">
          <TextDiv style={{ paddingTop: '80px' }}>
            <Text.h2>{lang.landing_page.usdl_title}</Text.h2>
            <br />
            <Text>{lang.landing_page.usdl_desc}</Text>
          </TextDiv>
        </FadeIn>
        <FadeIn moveDistance="40px">
          <Blocks>
            <BlocksDiv2></BlocksDiv2>
            <BlocksDiv
              style={{
                padding: '80px 50px',
                backgroundColor: 'rgb(45, 57, 83)'
              }}
            >
              <Text.h4>{lang.landing_page.block1_text}</Text.h4>
              <Text>{lang.landing_page.block1_text2}</Text>
            </BlocksDiv>
          </Blocks>
        </FadeIn>
        <Blocks>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block3_title}</Text.h4>
            <Text>{lang.landing_page.block3_text}</Text>
          </BlocksDiv>
          <BlocksDiv2>
            <ImgBox>
              <UsdlIcon />
            </ImgBox>
          </BlocksDiv2>
        </Blocks>

        <Blocks>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block4_title}</Text.h4>
            <Text>{lang.landing_page.block4_text}</Text>
          </BlocksDiv>
          <BlocksDiv2>
            <ImgBox>
              <LpgIcon />
            </ImgBox>
          </BlocksDiv2>
        </Blocks>

        <Blocks>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block5_title}</Text.h4>
            <Text>{lang.landing_page.block5_text}</Text>
          </BlocksDiv>
          <BlocksDiv2></BlocksDiv2>
        </Blocks>

        <Box mt={{ s: '126px', m: '89px' }} px={{ s: '10px', m: 0 }}>
          <Text.h2>{lang.landing_page.headline}</Text.h2>
        </Box>

        <FadeIn moveDistance="47px">
          <Cards mt="72px" />
        </FadeIn>
        <Box>
          <Text.h2 style={{ padding: '30px 150px 10px' }}>
            {lang.landing_page.block6_title}
          </Text.h2>
          <Text>{lang.landing_page.block6_text}</Text>
        </Box>
      </Content>
    </MarketingLayout>
  );
}

export default hot(Landing);
