import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import AterfarsaljareTextSection from "../components/AterfarsaljareTextSection";
import Footer from "../components/footer";
import Head from "next/head";

const Aterfarsaljare = () => {
  return (
    <>
      <Head>
        <title>Återförsäljare</title>
        <meta name="title" content="Återförsäljare av hållbara byggprodukter- GreenPlank.se" />
        <meta name="description" content="Hitta din Green Plank-återförsäljare för våra många hållbara kompositprodukter nära dig." />
      </Head>
      <Layout pageTitle="Om oss - Hållbart byggande produkter - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Hitta Green Plank Återförsäljare" crumbTitle="Aterfarsaljare" />
        <StickyHeader />
        <AterfarsaljareTextSection />
        <Footer />
      </Layout>
    </>
  );
};

export default Aterfarsaljare;
