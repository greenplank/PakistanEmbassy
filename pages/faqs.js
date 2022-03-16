import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import FaqOne from "../components/faqs/faqs-one.js";
import FaqTwo from "../components/faqs/faqs-two.js";
import FaqThree from "../components/faqs/faqs-three.js";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const FAQS = () => {
  return (
    <>
      <Head>
        <title>FAQS</title>
        <meta name="title" content="FAQS" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="FAQS">
        <HeaderTwo />
        <PageHeader title="FAQS" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="mb-30 mt-60 text-left"><b>FAQs Regarding Attestations</b></h2>
                <FaqOne />
                <h2 className="mb-30 mt-60 text-left"><b>FAQs Regarding e-visas</b></h2>
                <FaqTwo />
                <h2 className="mb-30 mt-60 text-left"><b>FAQs Regarding Machine Readable Passports</b></h2>
                <FaqThree />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default FAQS;
