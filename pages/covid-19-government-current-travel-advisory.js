import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer";
import Head from "next/head";
import Virtualtexpo from "../assets/images/plane.jpg";
import PassTrack from "../assets/images/passtrack.jpg";

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>Government Current Travel Advisory</title>
        <meta name="title" content="Government Current Travel Advisory" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Government Current Travel Advisory">
        <HeaderTwo />
        <PageHeader title="Government Current Travel Advisory" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="mt-30">
                  <div className="text-center pt-60 pb-60">
                    <img src={Virtualtexpo} alt="Virtualtexpo" />
                  </div>
                  <div className="text-center">
                    <h3>
                      <b>CURRENT TRAVEL ADVISORY</b>
                    </h3>
                  </div>
                  <p className="mb-30 mt-30 text-left">
                    According the revised guidelines for inbound travel to
                    Pakistan:-
                  </p>
                  <ol>
                    <li>
                      Mandatory COVID-19 vaccination and possession of proof of
                      COVID-19 vaccination. This is applicable for all
                      passengers above 15 years of age.
                    </li>
                    <li>
                      All passengers of age 6 years and above will be required
                      to possess a valid negative PCR Test result conducted
                      within the 48 hours prior to commencement of travel to
                      Pakistan.
                    </li>
                  </ol>
                  <p>
                    For details, please follow the link below:{" "}
                    <a
                      target="_blank"
                      href="/pdfs/Cat-C-Abolishment-Inbound-Guidelines.pdf"
                    >
                      Revised Guidelines as of 3-1-2022
                    </a>
                  </p>
                  <br />
                  <p>
                    For updated and detailed information regarding COVID-19
                    travel SOPs, please visit the following official covid
                    website of Pakistan and Civil Aviation Authority website:-
                  </p>
                  <a href="https://covid.gov.pk/">https://covid.gov.pk/</a>
                  <br />
                  <a href="https://caapakistan.com.pk/">
                    https://caapakistan.com.pk/
                  </a>
                  <p>
                    The{" "}
                    <a target="_blank" href="https://covid.gov.pk/">
                      website
                    </a>{" "}
                    also has Guidelines for travelers, procedures for outbound
                    passengers from Pakistan and Guidelines for transportation
                    of dead body
                  </p>
                  <p>
                    In addition to the above, please also check the Standard
                    operating procedures of the concerned airline you are
                    travelling with.
                  </p>
                </div>
              </Col>
            </Row>

            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="mt-30">
                  
                  <div className="text-center">
                    <h3>
                      <b>PASS TRACK APPLICATION</b>
                    </h3>
                    <p className="pt-30">
                    All international travelers to Pakistan are required to
                    provide traveler contact information through The Pass Track
                    mobile app or An accessible web-based form.
                  </p>
                  </div>
                  <div className="text-center pt-60 pb-60">
                    <img src={PassTrack} alt="PassTrack" />
                  </div>
                  
                  
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
