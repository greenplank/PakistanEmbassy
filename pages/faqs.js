import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import FaqOne from "../components/faq-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Faqs = () => {
  return (
    <>
      <Head>
        <title>Faqs</title>
        <meta name="title" content="Faqs - GreenPlank.se" />
        <meta name="description" content="Vanliga frågor om träplatta / risskal kompositplattor, stängsel, fasadbeklädnad, räcke och andra produkter" />
      </Head>
      <Layout pageTitle="Faqs">
        <HeaderTwo />
        <PageHeader title="Faqs" crumbTitle="Faqs" />
        <StickyHeader />
        <FaqOne />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Faqs;
