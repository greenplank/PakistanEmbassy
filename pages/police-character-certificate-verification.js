import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const EVisa = () => {
  return (
    <>
      <Head>
        <title>Police Character Certificate Verification</title>
        <meta
          name="title"
          content="Police Character Certificate Verification"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Police Character Certificate Verification">
        <HeaderTwo />
        <PageHeader title="Police Character Certificate Verification" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <p className="mb-30 mt-30 text-left">
                  Balochistan Police has already launched and started online
                  verification of the Police Charcter Certificate as ell as
                  Driving License through Balochistan Khidmat Markaz to
                  facilitate the general public at their doorstep as one window
                  operation.
                </p>
                <p className="mb-30 mt-30 text-left">
                  The service of Police Certificate and Character Certificate
                  has already been provided to overseas/expatriate Pakistanis in
                  35-embassies/consulates of 31 countries, including Character
                  Certificate and Driving Licence verification visa Police
                  Khidmat Markaz Global. The link for verification of Character
                  Certificate and Driving Licence is given below:
                </p>
                <ol>
                  <li>
                    <b>Character Certificate Verification</b>
                    <br />
                    <a
                      target="_blank"
                      href="https://pkm.balochistanpolice.gov.pk/"
                    >
                      https://pkm.balochistanpolice.gov.pk/
                    </a>{" "}
                  </li>
                  <li>
                    <b>Driving License Verification</b>
                    <br />
                    <a
                      target="_blank"
                      href="https://qtp.gob.pk/main/license-verification/"
                    >
                      Driving Licence Verification
                    </a>{" "}
                    <br />
                    <a target="_blank" href="https://qtp.gob.pk/main/">
                      Quetta Traffic Police
                    </a>{" "}
                    <br />
                  </li>
                  <li>
                    <b>Android App for Driving License Verification</b>
                    <br/>
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.ixs.qtp_publicapp">
                      Download App Click here
                    </a>{" "}
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default EVisa;
