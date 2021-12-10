import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import IhaligMassivSection from "../components/IhaligMassivSection"; 
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const IhaligMassiv = () => {
  return (
    <Layout pageTitle="Ihalig-vs-Massiv">
      <HeaderTwo/>
      <PageHeader title="Ihalig-vs-Massiv" crumbTitle="ihalig-vs-massiv" />
      <StickyHeader />
      <IhaligMassivSection />
      <BrandCarousel />
      <Footer />
    </Layout>
  );
};

export default IhaligMassiv;
