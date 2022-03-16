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
        <title>For-pakistanis</title>
        <meta name="title" content="For-pakistanis" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="For-pakistanis">
        <HeaderTwo />
        <PageHeader title="For-pakistanis" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>For-pakistanis</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  <ol>
                    <li><a href="/passport-application" target="_blank">Machine Readable Passports (MRP)</a></li>
                    <li><a href="/registration-of-newborn" target="_blank">Registration of Newborn</a></li>
                    <li><a href="/attestation" target="_blank">Attestation</a></li>
                    <li><a href="/nicop-cnic-poc" target="_blank">Nadra (NICOP / CNIC / POC)</a></li>
                  </ol>
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
