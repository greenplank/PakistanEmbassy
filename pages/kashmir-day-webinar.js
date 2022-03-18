import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import IMg1 from "../assets/images/texpo-pic.png";
import Footer from "../components/footer";
import Head from "next/head";

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>Kashmir Day Webinar</title>
        <meta name="title" content="Kashmir Day Webinar" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Kashmir Day Webinar">
        <HeaderTwo />
        <PageHeader title="Kashmir Day Webinar" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                

                <h1 className="mt-80">
                  <b>Kashmir Day Webinar</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Embassy of Pakistan in Stockholm Sweden organized a
                  special virtual event, to commemorate Kashmir Solidarity Day.
                  The key speakers of the event included Barrister Sultan
                  Mehmood Chaudhry, President of AJK, Mr. Serkan Köse, Member of
                  Swedish Parliament, Mr. Shehryar Khan Afridi, Chairperson of
                  the Parliamentary Special Committee on Kashmir, Lord Wajid
                  Khan, Member of the House of Lords in the United Kingdom, Mrs.
                  Sara Kukka-Salam, the Mayor of the Opposition in Solna, Dr.
                  Maria Sultan, Director General South Asia Stability Institute
                  and Ambassador of Pakistan, Dr Zahoor Ahmed. The event was
                  also attended by journalists and members of the Pakistani and
                  Kashmiri Diaspora.
                </p>
              
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default NADRAApplication;
