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
        <title>Ambassador hosted Sound Quest at Pakistan House</title>
        <meta
          name="title"
          content="Ambassador hosted Sound Quest at Pakistan House"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Ambassador hosted Sound Quest at Pakistan House">
        <HeaderTwo />
        <PageHeader title="Ambassador hosted Sound Quest at Pakistan House" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                

                <h1 className="mt-80">
                  <b>Ambassador hosted Sound Quest at Pakistan House</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  Ambassador of Pakistan to Stockholm Mr. Zahoor Ahmed hosted
                  Sound Quest , a Swedish band to Pakistan House which visited
                  and performed in Pakistan recently. Shahrukh Sheikh, Tuva Lee,
                  Felix, Gröndahl, Eva Dunder from Sound Quest Band and famous
                  singers from Royal Opera Vincent Hashimi and Paulina Pfieffer
                  attended the event along with Pakistani community members.
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
