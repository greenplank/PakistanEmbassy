import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AllaTyperVaders from "../components/alla-typer-av-vader";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const AllaTyperVader = () => {
  return (
    <>
      <Head>
        <title>Alla typer av väder - GreenPlank.se</title>
        <meta name="title" content="Alla typer av väder - GreenPlank.se" />
        <meta name="description" content="Ge oss en chans att vara ditt favoritmärke; Eftersom Green Plank är ett hållbart varumärke för byggprodukter som representerar kvalitet, expertis och" />
      </Head>
      <Layout pageTitle="Alla typer av väder - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Alla-typer-av-vader" crumbTitle="alla-typer-av-vader" />
        <StickyHeader />
        <AllaTyperVaders />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default AllaTyperVader;
