import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import ContactFormOne from "../components/contact-form-one";
import Footer from "../components/footer";
import Head from "next/head";

const BookAppointment = () => {
  return (
    <>
      <Head>
        <title>Book an Appointment</title>
        <meta name="title" content="Book an Appointment" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Book an Appointment">
        <HeaderTwo />
        <PageHeader title="Book an Appointment" />
        <StickyHeader />
       <ContactFormOne/>
        <Footer />
      </Layout>
    </>
  );
};

export default BookAppointment;
