import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Events from "../components/blog-page";
import Footer from "../components/footer";
import Head from "next/head";

const Artiklar = () => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="title" content="Media Events" />
        <meta name="description" content="Media Events" />
      </Head>
      <Layout pageTitle="Media Events">
        <HeaderTwo />
        <PageHeader title="Media Events" crumbTitle="Events" />
        <StickyHeader />
        <Events />
        <Footer />
      </Layout>
    </>
  );
};

export default Artiklar;
