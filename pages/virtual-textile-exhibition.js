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
        <title>Virtual Textile Exhibition</title>
        <meta name="title" content="Virtual Textile Exhibition" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Virtual Textile Exhibition">
        <HeaderTwo />
        <PageHeader title="Virtual Textile Exhibition" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="mt-60">
                  <div className="text-center"> 
                  <img src={IMg1} alt="Virtual Exhibition" />
                  </div>
                </div>

                <h1 className="mt-80">
                  <b>Virtual Textile Exhibition</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  TDAP's 1st International Virtual Textile Exhibition is
                  scheduled to be held from 1st - 5th February 2021. It will be
                  operational 24 hours offering convenience for both the Buyers
                  and visitors to attend/visit as per their respective time
                  zones.
                </p>
                <p>
                  Register as online visitor at:<br/>
                  <a href="http://virtualtexpo.tdap.gov.pk" target="_blank">http://virtualtexpo.tdap.gov.pk</a> <br/>
                  For more information<a target="_blank" href="/pdfs/Virtual-Texpo-promo-flyer.pdf">{" "}Click Here</a>
                </p>

                <div className="mb-30 mt-50 text-center">
                  <iframe
                    width="880"
                    height="615"
                    src="https://www.youtube.com/embed/YVinIGEhqDw"
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
