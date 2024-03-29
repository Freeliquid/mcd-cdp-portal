import React, { useEffect } from 'react';
import { map, route, mount, withView, compose } from 'navi';
import { View } from 'react-navi';

import Navbar from 'components/Navbar';
import DashboardLayout from 'layouts/DashboardLayout';
import MarketingLayout from './layouts/MarketingLayout';
import Landing from 'pages/Landing';
import Overview from 'pages/Overview';
import Borrow from 'pages/Borrow';
import Save from 'pages/Save';
import Reward from 'pages/Reward';
import SaveOverview from 'pages/SaveOverview';
import Privacy from 'pages/Privacy';
import Terms from 'pages/Terms';
import CDPDisplay from 'components/CDPDisplay';
import modals, { templates } from 'components/Modals';
import { ModalProvider } from 'providers/ModalProvider';
import { SidebarProvider } from 'providers/SidebarProvider';
import { ToggleProvider } from 'providers/ToggleProvider';
import MakerProvider from 'providers/MakerProvider';
import VaultsProvider from 'providers/VaultsProvider';
import TransactionManagerProvider from 'providers/TransactionManagerProvider';
import NotificationProvider from 'providers/NotificationProvider';
import config from 'references/config';
import MobileNav from 'components/MobileNav';
import { Routes } from 'utils/constants';

const { networkNames, defaultNetwork } = config;

const dappProvidersView = async request => {
  const {
    network = networkNames[defaultNetwork],
    testchainId,
    backendEnv
  } = request.query;
  const { viewedAddress } = request.params;

  return (
    <MakerProvider
      network={network}
      testchainId={testchainId}
      backendEnv={backendEnv}
      viewedAddress={viewedAddress}
    >
      <RouteEffects network={network} />
      <TransactionManagerProvider>
        <NotificationProvider>
          <VaultsProvider viewedAddress={viewedAddress}>
            <ToggleProvider>
              <ModalProvider modals={modals} templates={templates}>
                <SidebarProvider>
                  <View />
                </SidebarProvider>
              </ModalProvider>
            </ToggleProvider>
          </VaultsProvider>
        </NotificationProvider>
      </TransactionManagerProvider>
    </MakerProvider>
  );
};

const withDashboardLayout = childMatcher =>
  compose(
    withView(dappProvidersView),
    withView(request => {
      const { viewedAddress, cdpId } = request.params;
      return (
        <DashboardLayout
          mobileNav={<MobileNav viewedAddress={viewedAddress} cdpId={cdpId} />}
          navbar={<Navbar viewedAddress={viewedAddress} />}
        >
          <View />
        </DashboardLayout>
      );
    }),
    childMatcher
  );

const marketingLayoutView = () => (
  <MarketingLayout showNavInFooter={true}>
    <View />
  </MarketingLayout>
);

export default mount({
  '/': withView(() => <Landing />),

  [`/${Routes.BORROW}`]: compose(
    withView(dappProvidersView),
    withView(marketingLayoutView),
    withView(() => <Borrow />)
  ),

  [`/${Routes.BORROW}/owner/:viewedAddress`]: withDashboardLayout(
    route(request => {
      const { viewedAddress } = request.params;
      return {
        title: 'Overview',
        view: <Overview viewedAddress={viewedAddress} />
      };
    })
  ),

  [`/${Routes.BORROW}/:cdpId`]: withDashboardLayout(
    map(request => {
      const { cdpId } = request.params;

      if (!/^\d+$/.test(cdpId))
        return route({ view: <div>invalid cdp id</div> });

      return route({ title: 'CDP', view: <CDPDisplay cdpId={cdpId} /> });
    })
  ),

  [`/${Routes.SAVE}`]: compose(
    withView(dappProvidersView),
    withView(marketingLayoutView),
    withView(() => <SaveOverview />)
  ),

  [`/${Routes.SAVE}/owner/:viewedAddress`]: withDashboardLayout(
    route(request => {
      const { viewedAddress } = request.params;
      return {
        title: 'Save',
        view: <Save viewedAddress={viewedAddress} />
      };
    })
  ),

  [`/${Routes.REWARD}/owner/:viewedAddress`]: withDashboardLayout(
    route(request => {
      const { viewedAddress } = request.params;
      return {
        title: 'Reward',
        view: <Reward viewedAddress={viewedAddress} />
      };
    })
  ),

  [`/${Routes.TERMS}`]: route(() => ({
    title: 'Freeliquid - Terms',
    view: <Terms />
  })),
  
  [`/${Routes.PRIVACY}`]: route(() => ({
    title: 'Freeliquid - Privacy Policy',
    view: <Privacy />
  }))
});

function RouteEffects({ network }) {
  useEffect(() => {
    if (network !== 'mainnet' && window.location.hostname !== 'localhost');
  }, [network]);
  return null;
}
