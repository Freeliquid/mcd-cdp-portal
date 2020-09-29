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

import { ReactComponent as BorrowIcon } from 'images/landing/borrow_block.svg';
import { ReactComponent as SaveIcon } from 'images/landing/save_block.svg';
import { ReactComponent as UsdlIcon } from 'images/landing/land_usdl.svg';
import { ReactComponent as LpgIcon } from 'images/landing/land_fl.svg';
import { ReactComponent as CommunityIcon } from 'images/landing/land_com.svg';
import { ReactComponent as Play } from 'images/landing/play.svg';
import { ReactComponent as ImgBlock2 } from 'images/landing/img_block21.svg';

import { Box, Flex, Text } from '@makerdao/ui-components-core';
import AnimateConvas from './AnimateConvas';

const Content = ({ children }) => (
  <Box p={{ s: `0 ${marketingTheme.mobilePaddingX}`, l: '0 32px' }}>
    <Box maxWidth="1140px" mx="auto">
      {children}
    </Box>
  </Box>
);

const ImgBox = styled.div`
  text-align: center;
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    height: 160px;
  }
  @media (max-width: 768px) {
    height: 180px;
  }
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

    @media (max-width: 768px) {
      :after {
        content: none;
      }
      padding-bottom: 0px;
    }
  `;

  const Card = styled.div`
    overflow: hidden;
    width: 48%;
    position: relative;
    flex-shrink: 1;
    text-align: left;
    padding: 60px 100px 60px 55px;
    @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
      padding: 40px 30px 40px 30px;
    }
    @media (max-width: 768px) {
      margin-bottom: 24px;
      width: 100%;
      padding: 40px 30px 40px 30px;
    }
    .buttonContainer {
      border-radius: 50px;
      margin-top: 40px;
      display: inline-block;
      transition: all 0.15s ease;
      padding-bottom: 0;
      cursor: pointer;
      :hover {
        ${FilledButton} {
          background-color: ${getColor('cardBg')};
          color: ${getColor('cayn')};
          bprder-color: ${getColor('cayn')};
        }
      }
    }

    ${FilledButton} {
      display: inline-flex;
      padding: 13px 35px 13px;
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
            background: getColor('cardBg'),
            borderRadius: '20px'
          }}
        >
          <BorrowIcon />
          <Text.h3>{lang.landing_page.borrow_card.title}</Text.h3>
          <Text.h5>{lang.landing_page.borrow_card.description}</Text.h5>
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
            >
              <FilledButton>
                {lang.landing_page.borrow_card.button}
              </FilledButton>
            </Link>
          </div>
        </Card>
        <Card
          style={{
            background: getColor('cardBg'),
            borderRadius: '20px'
          }}
        >
          <SaveIcon />
          <Text.h3>{lang.landing_page.save_card.title}</Text.h3>
          <Text.h5>{lang.landing_page.save_card.description}</Text.h5>
          <div className="buttonContainer">
            <Link
              href={`/${Routes.SAVE}${url.search}`}
              prefetch={true}
              onClick={() => {
                mixpanel.track('btn-click', {
                  id: 'SaveUSDL',
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

const TextDiv = styled.div`
  padding: 0px 0px 30px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 15px;
  }

  .text-desc {
    font-size: 20px;
    color: ${getColor('greyText')};
    line-height: 34px;
  }
`;
const Blocks = styled(Flex)`
  margin: 0px auto 69px;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  justify-content: revert;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    flex-direction: column-reverse;
  }
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    padding: 0px 25px;
  }
`;
const Blocks2 = styled(Flex)`
  margin: 0px auto 69px;
  flex-wrap: wrap;
  text-align: left;
  align-items: center;
  justify-content: revert;
  padding: 0px 120px;
  @media (min-width: ${props => props.theme.breakpoints.m}) {
  }
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    padding: 20px 25px;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    flex-direction: column-reverse;
    padding: 0px 20px;
  }
`;
const BlockBorder = styled.div`
  width: 1px;
  height: 240px;
  border-left: 1px solid ${getColor('border')};
  @media (max-width: 768px) {
    display: none;
  }
`;
const BlocksDiv = styled.div`
  width: 49%;
  padding: 40px 110px 40px 0px;
  justify-content: center;
  align-items: revert;

  .text-bl2 {
    font-size: 17px;
    color: ${getColor('greyText')};
    line-height: 32px;
    text-align: left;
    padding: 0px 10px 0px 95px;
  }
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    padding: 20px 0px 30px 0px;
    .text-bl2 {
      padding: 10px 35px 0px 40px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px 15px;
    .text-bl2 {
      padding: 0px 15px;
      text-align: center;
    }
    @media (min-width: 736px) {
      width: 100%;
      padding: 30px 15px;
    }
  }
`;
const BlocksDiv2 = styled.div`
  width: 49%;
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) {
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .video_bg {
      width: 300px;
      height: 250px;
    }
    .all_img {
      width: 360px;
      height: 270px;
      margin-top: -55px;
    }
    .usdl_svg {
      height: 160px;
    }
    .lpg_svg {
      height: 160px;
    }
    .comm_svg {
      height: 160px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .video_bg {
      width: 300px;
      height: 250px;
    }
    .all_img {
      height: 240px;
      margin-top: -60px;
      
    }
    .usdl_svg {
      height: 180px;
    }
    .lpg_svg {
      height: 180px;
    }
    .comm_svg {
      height: 180px;
    }
  }
`;
const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 40em) {
    justify-content: space-around;
  }
`;
const TitleCard = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: ${getColor('whiteText')};
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
          <Blocks>
            <BlocksDiv>
              <TextDiv>
                <Text.h2>{lang.landing_page.usdl_title}</Text.h2>
                <br />
                <div className="text-desc">{lang.landing_page.usdl_desc}</div>
              </TextDiv>
              <ButtonFlex>
                <div className="buttonContainer">
                  <Link href="#" className="button-link">
                    <FilledButton>{lang.landing_page.get_start}</FilledButton>
                  </Link>
                </div>

                <Link
                  style={{
                    color: '#00DCDC',
                    marginLeft: '40px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play style={{ marginRight: '10px' }} />
                  <Text>{lang.landing_page.play_video}</Text>
                </Link>
              </ButtonFlex>
            </BlocksDiv>
            <BlocksDiv2 style={{ textAlign: 'center' }}>
              <AnimateConvas />
            </BlocksDiv2>
          </Blocks>
        </FadeIn>
        <FadeIn moveDistance="40px">
          <Blocks
            style={{
              background: getColor('cardBg'),
              borderRadius: '40px',
              textAlign: 'center'
            }}
          >
            <BlocksDiv2>
            <ImgBox>
              <ImgBlock2 className="all_img" />
            </ImgBox>
            </BlocksDiv2>
            <BlockBorder />
            <BlocksDiv>
              <div className="text-bl2">{lang.landing_page.block1_text}</div>
              <br />
              <div className="text-bl2">{lang.landing_page.block1_text2}</div>
            </BlocksDiv>
          </Blocks>
        </FadeIn>
        <Blocks2>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block3_title}</Text.h4>
            <Text.h5>{lang.landing_page.block3_text}</Text.h5>
          </BlocksDiv>
          <BlocksDiv2>
            <ImgBox>
              <UsdlIcon className="usdl_svg" />
            </ImgBox>
          </BlocksDiv2>
        </Blocks2>

        <Blocks2>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block4_title}</Text.h4>
            <Text.h5>{lang.landing_page.block4_text}</Text.h5>
          </BlocksDiv>
          <BlocksDiv2>
            <ImgBox>
              <LpgIcon className="lpg_svg" />
            </ImgBox>
          </BlocksDiv2>
        </Blocks2>

        <Blocks2>
          <BlocksDiv>
            <Text.h4>{lang.landing_page.block5_title}</Text.h4>
            <Text.h5>{lang.landing_page.block5_text}</Text.h5>
          </BlocksDiv>
          <BlocksDiv2>
            <ImgBox>
              <CommunityIcon className="comm_svg" />
            </ImgBox>
          </BlocksDiv2>
        </Blocks2>

        <Box mt={{ s: '126px', m: '89px' }} px={{ s: '10px', m: 0 }}>
          <TitleCard>{lang.landing_page.headline}</TitleCard>
        </Box>
        <FadeIn moveDistance="47px">
          <Cards mt="72px" mb="50px" />
        </FadeIn>
      </Content>
    </MarketingLayout>
  );
}

export default hot(Landing);
