import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Thumb from "../assets/images/backgrounds/thumb.jpg";
import Thumb2 from "../assets/images/backgrounds/thumb2.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const PolicyDocuments = () => {
  return (
    <>
      <Head>
        <title>Policy Documents </title>
        <meta name="title" content="Policy Documents " />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Policy Documents ">
        <HeaderTwo />
        <PageHeader title="Policy Documents " />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Policy Documents (Pakistan)</b>
                </h1>

                <ul>
                  <li>
                    Strategic trade policy framework 2015-18,{" "}
                    <a target="_blank" href="https://www.commerce.gov.pk/strategic-trade-policy-framework/">click here.</a>
                  </li>
                  <li>
                    FDI (Foreign direct investment) strategy 2013-17,{" "}
                    <a target="_blank" href="https://invest.gov.pk/"> click here.</a>
                  </li>
                  <li>
                    Investment Policy in Pakistan 2013,
                    <a target="_blank" href="https://invest.gov.pk/"> click here.</a>
                  </li>
                  <li>
                    Automotive development policy 2016-21,
                    <a target="_blank" href="https://invest.gov.pk/">click here.</a>
                  </li>
                  <li>
                    Textile policy,
                    <a target="_blank" href="/pdfs/TextilePolicy2014-19.pdf">click here.</a>
                  </li>
                  <li>
                    Agriculture and food security policy,
                    <a target="_blank" href="/pdfs/19RevisedFoodSecurityPolicy.pdf">click here.</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default PolicyDocuments;
