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
        <title>Prime Minister's Performance Delivery Unit </title>
        <meta
          name="title"
          content="Prime Minister's Performance Delivery Unit "
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Prime Minister's Performance Delivery Unit ">
        <HeaderTwo />
        <PageHeader title="Prime Minister's Performance Delivery Unit " />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mb-30 mt-50">
                  Prime Minister's Performance Delivery Unit{" "}
                </h3>
                <p>
                  Prime Minister's Performance Delivery Unit (PMDU) has been
                  established with a new vision to promote citizen-centric and
                  participatory governance. PMDU is pioneering a nation-wide
                  complaints and grievance redressal mechanism with special
                  emphasis on facilitation of overseas Pakistanis, women,
                  special persons and foreigners. The Unit strives to assure
                  that the registered citizens/members on Pakistan Citizen's
                  Portal (PCP) get every possible relief from the Government
                  Organizations being interacted. The primary objective of the
                  portal is to provide citizens an opportunity to seamlessly
                  communicate with all government entities and have their issues
                  resolved on priority basis.
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
