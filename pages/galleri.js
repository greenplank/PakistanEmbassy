import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import GalleryPage from "../components/gallery/gallery-page";
import PageHeader from "../components/page-header";
import Footer from "../components/footer";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Galleri</title>
        <meta name="title" content="Galleri Hållbara byggprodukter - GreenPlank.se" />
        <meta name="description" content="Bildgalleri med inspiration från Green Plank. Kompositmaterial för hållbart byggande i framtiden." />
      </Head>
      <Layout pageTitle="Galleri Hållbara byggprodukter - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Gallerisida" crumbTitle="Galleri" />
        <StickyHeader />
        <GalleryPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Gallery;
