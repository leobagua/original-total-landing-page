import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'common/src/containers/Ride/ride.style';
import { AppWrapper } from 'common/src/containers/App/app.style';
import { ContentWrapper as CryptoContentWrapper } from 'common/src/containers/Crypto/crypto.style';
import { ContentWrapper as HostingContentWrapper } from 'common/src/containers/Hosting/hosting.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from 'common/src/containers/Ride/Navbar';
import Banner from 'common/src/containers/Ride/Banner';
import ControllSection from 'common/src/containers/App/Control';
import PaymentSection from 'common/src/containers/App/PaymentSection';
import Footer from 'common/src/containers/Crypto/Footer';
import FeatureSlider from 'common/src/containers/Ride/FeatureSlider';
import FeatureSection from 'common/src/containers/Hosting/Features';

export default () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <Head>
          <title>Original Total</title>
          <meta name="theme-color" content="#ec5555" />
          <meta name="Description" content="React next landing page" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Lato:300,400,700" rel="stylesheet" />
          <meta name="viewport" content="width=device-width, user-scalable=no" />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <AppWrapper>
            <ControllSection />
            <PaymentSection />
          </AppWrapper>
          <FeatureSlider />
          <HostingContentWrapper>
            <FeatureSection />
          </HostingContentWrapper>
          <CryptoContentWrapper>
            <Footer />
          </CryptoContentWrapper>
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};