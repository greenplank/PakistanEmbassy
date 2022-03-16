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
        <title>
          Federal Tax ombudsman Facilitation Desks at International Airports and
          Customs Border Stations
        </title>
        <meta
          name="title"
          content="Federal Tax ombudsman Facilitation Desks at International Airports and Customs Border Stations"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Federal Tax ombudsman Facilitation Desks at International Airports and Customs Border Stations">
        <HeaderTwo />
        <PageHeader title="Federal Tax ombudsman Facilitation Desks at International Airports and Customs Border Stations" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>
                    Federal Tax ombudsman Facilitation Desks at International
                    Airports
                  </b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The office of the Federal Tax Ombudsman has been providing
                  facilitation to the aggrieved taxpayers through redressal of
                  their complaints against the Federal Tax functionaries
                  comprising of the department of customs, Income tax, Sales Tax
                  and Federal excise. In continuation of the efforts, Federal
                  Tax Ombudsman office facilitation Desks for redressal of
                  international passengers, have been inaugurated at
                  International Airports at Islamabad, Karachi, Quetta and
                  Lahore by the Hon`ble Federal Tax Ombudsman Pakistan Dr. Asif
                  Mahmood Jah.
                </p>
                <p className="mb-30 mt-30 text-left">
                  To further extend the facility the office of Federal Tax
                  Ombudsman plans t open similar facilitation desks at the
                  border custom stations all over the country in the coming
                  months.
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
