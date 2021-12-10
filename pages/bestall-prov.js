import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ContactCard from "../components/contact/contact-form-two";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const BestallProv = () => {
  return (
    <>
      <Head>
        <title>Beställ prover </title>
        <meta name="title" content="Beställ prover | Golv | Komposittrall | Plankor | Plattor" />
        <meta name="description" content="När du bestämmer dig för en ny komposittrall kommer du säkert att ha några frågor på vägen. Produktprover är ett bra sätt att få en uppfattning!" />
      </Head>
      <Layout pageTitle="Bestall-prov">
        <HeaderTwo />
        <PageHeader title="Prover beställning" crumbTitle="bestall-prov" />
        <StickyHeader />
        <ContactCard />
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BestallProv;
