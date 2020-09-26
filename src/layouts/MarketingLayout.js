import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-navi';
import { Routes } from 'utils/constants';
import useLanguage from 'hooks/useLanguage';
import CookieNotice from '../components/CookieNotice';
import { hot } from 'react-hot-loader/root';
import { getColor, marketingTheme } from 'styles/theme';
import { Box, Flex } from '@makerdao/ui-components-core';
import { LogoLink, SeparatorDot, Hamburger } from 'components/Marketing';

const MarketingLayoutStyle = styled.div`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;

  font-family: 'PT Root', Arial, Helvetica, sans-serif;
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${getColor('headerNav')};
  width: 100%;
  overflow-x: hidden;

  a {
    color: ${getColor('headerNav')};
    text-decoration: none;
  }
`;

const Nav = styled(Box)`
  display: ${props => props.display || 'inline-flex'};
  justify-content: center;
  font-size: 16px;

  a {
    text-decoration: none;
    color:  ${getColor('headerNav')};
  }

  a:hover {
    color:  ${getColor('cayn')};
  }

  a:not(:first-child) {
    margin-left: ${props => props.separation || '56px'};
  }
`;

const MainNavStyle = styled(Nav)`
  font-size: ${props => props.fontSize || '18px'};

  a {
    color: ${getColor('headerNav')};
  }
`;

const MainNav = ({ onLinkClicked, ...props }) => {
  const { lang } = useLanguage();

  return (
    <MainNavStyle {...props}>
      <Link
        href={`/${Routes.BORROW}`}
        activeStyle={{ fontWeight: 'bold' }}
        onClick={() => onLinkClicked && onLinkClicked()}
      >
        {lang.navbar.borrow}
      </Link>
      <Link
        href={`/${Routes.SAVE}`}
        activeStyle={{ fontWeight: 'bold' }}
        onClick={() => onLinkClicked && onLinkClicked()}
      >
        {lang.navbar.save}
      </Link>
      <Link
        //href={`/${Routes.Governance}`}
        activeStyle={{ fontWeight: 'bold' }}
        //onClick={() => onLinkClicked && onLinkClicked()}
      >
        {lang.navbar.governance}
      </Link>
    </MainNavStyle>
  );
};

const centerContent = css`
  margin: 0 auto;
  padding: 0 24px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.m}) {
    padding: 25px 0px;
  }
`;

const Header = styled.header`
  ${centerContent};
  max-width: 1140px;
  padding: 16px;
  text-align: left;
  letter-spacing: 0.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${getColor('border')};
  .logo {
    font-size: 22px;
    line-height: 26px;
    font-weight: bold;
  }

  a {
    color: ${getColor('headerNav')};
  }

  ${MainNavStyle} {
    display: none;
  }

  ${Hamburger} {
    display: block;
    margin-right: 3px;
  }
  @media (min-width: 52em){
    padding: 20px 32px;
  }
  @media (min-width: 40em){
    padding: 20px 25px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0px;

    ${MainNavStyle} {
      display: inline-flex;
    }

    ${Hamburger} {
      display: none;
    }
  }
`;

const MobileMenu = styled(Box)`
  position: fixed;
  top: 43px;
  left: 0;
  width: 100vw;
  background-color: ${getColor('cardBg')};
  overflow-y: scroll;
  transition: all 0.2s ease-in-out;
  z-index: 99;

  ${MainNavStyle} {
    flex-direction: column;
    align-items: flex-start;
    font-size: 26px;
    float: left;
    a:not(:first-child) {
      margin-left: 0;
      margin-top: 15px;
    }
  }

  ${LogoLink} {
    text-align: left;
    font-size: 28px;
    line-height: 48px;
    color: ${getColor('headerNav')};
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const centerFooterMaxWidth = '980px';

const Footer = styled.footer`
  ${centerContent};
  max-width: 1140px;
  padding: 20px 0px;
  letter-spacing: 0.3px;
  border-top: 1px solid ${getColor('border')};
  *,
  *:before,
  *:after {
    position: static;
  }

  .navs {
    display: inline-flex;
    align-items: center;
    float: none;
    text-align: center;
    flex-direction: column;
  }

  ${SeparatorDot} {
    display: none;
  }

  ${MainNavStyle} {
    margin-bottom: 24px;
  }

  .legal-nav {
    a:not(:first-child) {
      margin-left: 44px;
    }
  }
  @media (min-width: 52em){
    padding: 20px 32px;
  }
  @media (min-width: 40em){
    padding: 20px 25px;
  }
  @media only screen and (min-device-width: 769px) and (max-device-width: 1024px) and (orientation:portrait) {
   
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    ${SeparatorDot} {
      display: inline-block;
    }

    ${MainNavStyle} {
      margin-bottom: 0;
    }

    .legal-nav {
      a:not(:first-child) {
        margin-left: 56px;
      }
    }
  }

  ${Nav} {
    float: right;
  }

  ${Nav}, .navs {
    @media (min-width: ${props => props.theme.breakpoints.m}) {
      text-align: center;
      flex-direction: row;
    }
    
    @media (min-width: ${centerFooterMaxWidth}) {
      float: right;
    }
  }

  .copyright {
    font-size: 13px;
    color: ${getColor('footercopy')};
    white-space: nowrap;

    padding-top: 48px;
    text-align: center;

    @media (min-width: 375px) {
      font-size: 16px;
    }

    @media (min-width: ${centerFooterMaxWidth}) {
      text-align: left;
      padding-top: 0;
    }
  }
`;

// It has the Freeliquid logo, the top nav links, and the copyright notice.
// It also has a ThemeProvider
const MarketingLayout = ({ showNavInFooter, children }) => {
  const { lang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <ThemeProvider theme={marketingTheme}>
      <MarketingLayoutStyle>
        <Helmet>
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Regular.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Regular.woff"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Medium.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Medium.woff"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Bold.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/PT-Root-UI_Bold.woff"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Helmet>
        <Header className={mobileMenuOpen ? 'menu-open' : ''}>
          <LogoLink
            style={{ visibility: mobileMenuOpen ? 'hidden' : 'visible' }}
          />
          <MainNav separation="67px" />
          <Hamburger
            active={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </Header>
        <MobileMenu
          opacity={mobileMenuOpen ? 1 : 0}
          height={mobileMenuOpen ? '100%' : '0'}
          display={{ s: 'block', m: 'none' }}
        >
          <Box p="39px 33px 33px">
            <Box display="inline-block" style={{ float: 'left' }}>
              <LogoLink onClick={() => setMobileMenuOpen(false)} />
              <MainNav onLinkClicked={() => setMobileMenuOpen(false)} />
            </Box>
          </Box>
        </MobileMenu>
        {children}
        <CookieNotice />
        <Footer>
          <div className="navs">
            {showNavInFooter && (
              <Flex
                display={{ s: 'none', xl: 'inline-flex' }}
                alignItems="center"
              >
                <MainNav fontSize="16px" separation="52px" />
                <SeparatorDot m="0 38px" />
              </Flex>
            )}
            <Nav className="legal-nav">
              <Link href={`/${Routes.PRIVACY}`}>{lang.navbar.privacy}</Link>
            </Nav>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Freeliquid.io
          </div>
        </Footer>
      </MarketingLayoutStyle>
    </ThemeProvider>
  );
};

export default hot(MarketingLayout);
