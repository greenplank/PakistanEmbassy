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
        <title>E-Visa Service</title>
        <meta name="title" content="E-Visa Service" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="E-Visa Service">
        <HeaderTwo />
        <PageHeader title="E-Visa Service" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>E-Visa Service</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  <ul>
                    <li>All visas are issued online only.</li>
                    <li>
                      To apply for visa and for all other relevant
                      information, please visit the following website{" "}
                      <a target="_blank" href="https://visa.nadra.gov.pk/">
                        https://visa.nadra.gov.pk/
                      </a>{" "}
                    </li>
                    <li>For children under 18 years the NOC shall be duly signed by both the parents even if both parents are travelling with the child/children.</li>
                    <li>For NOC form for children under 18 years of age, <a target="_blank" href="/pdfs/NOC.pdf">click here</a></li>
                  </ul>
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
