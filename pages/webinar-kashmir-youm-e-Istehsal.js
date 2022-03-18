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
        <title>Webinar on Kashmir Youm-e-Istehsal</title>
        <meta name="title" content="Webinar on Kashmir Youm-e-Istehsal" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Webinar on Kashmir Youm-e-Istehsal">
        <HeaderTwo />
        <PageHeader title="Webinar on Kashmir Youm-e-Istehsal" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                

                <h1 className="mt-80">
                  <b>Webinar on Kashmir Youm-e-Istehsal</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  Embassy of Pakistan to Sweden and Finland and Kashmir
                  Committee Sweden Organized International Webinar in solidarity
                  with Kashmir on Youm-e-Istehsal on 5th Aug, 2021.
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
