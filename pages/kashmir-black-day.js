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
        <title>Kashmir Black Day</title>
        <meta name="title" content="Kashmir Black Day" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Kashmir Black Day">
        <HeaderTwo />
        <PageHeader title="Kashmir Black Day" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                

                <h1 className="mt-80">
                  <b>Kashmir Black Day</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Embassy of Pakistan in Stockholm organized a special event
                  to mark the Kashmir Black Day. It was attended by members of
                  Pakistani and Kashmir Diaspora in Sweden, as well as
                  representatives of media.
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
