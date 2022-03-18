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
        <title>Webinar on Roshan Digital Account</title>
        <meta name="title" content="Webinar on Roshan Digital Account" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Webinar on Roshan Digital Account">
        <HeaderTwo />
        <PageHeader title="Webinar on Roshan Digital Account" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
            

                <h1 className="mt-80">
                  <b>Webinar on Roshan Digital Account</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Embassy of Pakistan in Sweden, Denmark, Norway and State
                  Bank of Pakistan held Roshan Webinar on Roshan Account, Roshan
                  Apna Ghar & Car, Roshan Equity Investment, Naya Pakistan
                  Certificates and Roshan Samaji Khidmat.
                </p>
                

                <div className="mb-30 mt-50 text-center">
                  <iframe
                    width="880"
                    height="615"
                    src="https://www.youtube.com/embed/ccyMigb14Oc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
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
