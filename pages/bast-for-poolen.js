import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Bastforpoolen from "../components/bast-for-poolen";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BastPoolen = () => {
  return (
    <>
      <Head>
        <title>Bäst för poolen</title>
        <meta name="title" content="Bäst för poolen - GreenPlank.se" />
        <meta name="description" content="För här på Green Plank erbjuder vi ett brett utbud av moderna, trendiga, slitstarka trallmaterial med garanterad kvalitet." />
      </Head>
      <Layout pageTitle="bast-for-poolen">
        <HeaderTwo />
        <PageHeader title="Bast-for-poolen" crumbTitle="bast-for-poolen" />
        <StickyHeader />
        <Bastforpoolen />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BastPoolen;
