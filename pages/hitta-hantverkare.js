import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import HittaTextSection from "../components/HittaTextSection";
import Head from "next/head";
import Footer from "../components/footer";

const HittaHantverkare = () => {
  return (
    <>
      <Head>
        <title>Hitta Hantverkare</title>
        <meta name="title" content="Hitta hantverkare av hållbara byggprodukter - GreenPlank.se" />
        <meta name="description" content="Hitta din Green Plank-återförsäljare för våra många hållbara kompositprodukter nära dig." />
      </Head>
      <Layout pageTitle="Om oss - Hållbart byggande produkter - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Hitta Green Plank Hantverkare" crumbTitle="HittaHantverkare" />
        <StickyHeader />
        <HittaTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default HittaHantverkare;
