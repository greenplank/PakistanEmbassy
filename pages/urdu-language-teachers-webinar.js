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
        <title>Urdu Language Teachers webinar</title>
        <meta name="title" content="Urdu Language Teachers webinar" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Urdu Language Teachers webinar">
        <HeaderTwo />
        <PageHeader title="Urdu Language Teachers webinar" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
            

                <h1 className="mt-80">
                  <b>Urdu Language Teachers webinar</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  On 22 November 2021, the Embassy of Pakistan organized the
                  first meeting of Urdu teachers. The purpose of the meeting was
                  to establish coordination among Urdu teachers at various
                  levels, share experiences, develop syllabus and enhance their
                  teaching resources. The meeting was attended by teachers of
                  Urdu and parents living in Sweden.
                </p>
                
                <div className="mb-30 mt-50 text-center">
                  <iframe
                    width="880"
                    height="615"
                    src="https://www.youtube.com/embed/AuTewdoB5O8"
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
