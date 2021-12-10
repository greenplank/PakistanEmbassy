import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import GoogleMap from "../components/google-map";
import ContactFormOne from "../components/contact/contact-form-one";
import ContactCardCarousel from "../components/contact/contact-card-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontakta oss </title>
        <meta name="title" content="Kontakta oss | Kundtjänst - GreenPlank.se" />
        <meta name="description" content="GreennPlank laget är alla öron på alla dina frågor och problem. Kontakta oss och vårt kundtjänstteam hjälper dig med det du har problem med." />
      </Head>
      <Layout pageTitle="Kontakta oss | Kundtjänst - GreenPlank.se">
        <HeaderTwo />
        <PageHeader title="Kontaktsida" crumbTitle="Kontakta oss" />
        <StickyHeader />
        <ContactFormOne />
        <ContactCardCarousel />
        <GoogleMap extraClass="contact" />
        <Footer />
      </Layout>
    </>
  );
};

export default Contact;
