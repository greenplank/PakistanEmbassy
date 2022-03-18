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
        <title>Independence Day Celebration</title>
        <meta name="title" content="Independence Day Celebration" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Independence Day Celebration">
        <HeaderTwo />
        <PageHeader title="Independence Day Celebration" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
               

                <h1 className="mt-80">
                  <b>Independence Day Celebration</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The 75th Independence Day of Pakistan was celebrated on 14
                  August 2021 at the Pakistan House Stockholm with zeal and
                  fervor. The flag hoisting ceremony was held keeping in mind
                  the Covid-19 restrictions. The event was attended by Pakistani
                  community members from all walks of life.
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
