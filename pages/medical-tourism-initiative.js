import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Medical from "../assets/images/medical.jpg";
import Head from "next/head";

const EVisa = () => {
  return (
    <>
      <Head>
        <title>Medical Tourism Initiative</title>
        <meta name="title" content="Medical Tourism Initiative" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Medical Tourism Initiative">
        <HeaderTwo />
        <PageHeader title="Medical Tourism Initiative" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="text-center mt-80">
                  <img src={Medical} alt="medical" width="900px" />
                </div>
                <p className="mb-30 mt-30 text-left">
                  Ministry of National Health Services, Regulation and
                  Coordination (MNHSR&C) is leading on the national medical
                  tourism initiative as part of the Economic Outreach Initiative
                  (EOI) by the Prime Minister. MNHSR&C has developed a website
                  on Medical Tourism.
                  <br />
                  The Government of Pakistan has identified ‘Medical Tourism’ as
                  a niche market in which the country has a competitive edge.
                  Pakistan is blessed with some of the best healthcare experts
                  and state of the art health facilities in the world which
                  provide treatments at much lower costs as compared to other
                  countries. Medical Tourism is a key element in Pakistan's
                  recent tourism policy. Follow the link below:
                  <br />
                  <a target="_blank" href="https://mtp.nhsrc.gov.pk/">
                    https://mtp.nhsrc.gov.pk/
                  </a>{" "}
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

export default EVisa;
