import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";

import PakistanPoliticalMap from "../assets/images/backgrounds/Pakistans-Political-Map.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BasicFact = () => {
  return (
    <>
      <Head>
        <title>Renunciation of Pakistani Citizenship</title>
        <meta name="title" content="Renunciation of Pakistani Citizenship" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Renunciation of Pakistani Citizenship">
        <HeaderTwo />
        <PageHeader title="Renunciation of Pakistani Citizenship" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mb-30 mt-50">
                  Renunciation of Pakistani Citizenship
                </h3>
                <p>
                  A minor below the age of 21 years cannot renounce his/her
                  nationality of Pakistan.{" "}
                </p>
                <p className="mb-30 mt-20">
                  Pakistan has dual nationality agreement with both Sweden and
                  Finland and thus a person does not need to renounce his/her
                  Pakistani nationality. However, if still someone wants to
                  renounce Pakistani nationality, the following documents are
                  required to process the case for renunciation:-.{" "}
                </p>
                <ul>
                  <li>Duly filled in original Form X (four set)</li>
                  <li>Copy of Swedish or Finnish Passport </li>
                  <li> Computer Proforma</li>
                  <li>Original CNIC or NICOP</li>
                  <li>Copies of valid Pakistani Passport </li>
                  <li>Five colour photographs not older than six months.</li>
                  <li>Original receipt of SEK 750 & 50.</li>
                  <li>
                    The applicant should provide a written reason of renouncing
                    his / her Pakistani nationality duly signed by the
                    applicant.{" "}
                  </li>
                </ul>
                <p>
                  Kindly see the following link for further detail.
                  https://dgip.gov.pk/immigration/renunciation.php
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

export default BasicFact;
