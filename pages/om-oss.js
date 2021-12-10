import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AboutOne from "../components/about/about-one";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta name="title" content="Om oss - Hållbart byggande produkter - GreenPlank.se" />
        <meta name="description" content="Green Plank grundades av två bröder 2004 i Sverige. Idag har Green Plank fått en ledande position i kompositvärlden." />
      </Head>
      <Layout pageTitle="Om oss - Hållbart byggande produkter - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Om sidan" crumbTitle="Om Oss" />
        <StickyHeader />
        <AboutOne />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default About;
