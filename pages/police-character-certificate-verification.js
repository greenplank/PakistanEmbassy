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
                  Police Character Certificate can be obtained from the
                  concerned district police officer (DPO) office where the
                  person is permanently residing. In case, personal appearance
                  of the applicant is required. The person may give an authority
                  letter to a family member or friend to obtain the same for the
                  person. Moreover, some of the provincial governments have
                  started online police character certificate and driving
                  license online. Government of Baluchistan Police Khidmat
                  Markaz Global has the following link for such online services:
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
                    <br />
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.ixs.qtp_publicapp"
                    >
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
