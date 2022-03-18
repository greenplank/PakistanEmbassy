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
        <title>National Day Celebration</title>
        <meta name="title" content="National Day Celebration" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="National Day Celebration">
        <HeaderTwo />
        <PageHeader title="National Day Celebration" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
              

                <h1 className="mt-80">
                  <b>National Day Celebration</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  Pakistan National Day was celebrated on 23rd March 2021 at the
                  Pakistan House Stockholm with zeal and Fervour. The flag
                  hoisting ceremony was held with limited attendance keeping in
                  mind the Covid-19 restrictions.
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
