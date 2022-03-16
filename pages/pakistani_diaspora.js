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
        <title>Pakistan Diaspora</title>
        <meta name="title" content="Pakistan Diaspora" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Pakistan Diaspora">
        <HeaderTwo />
        <PageHeader title="Pakistan Diaspora" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mb-30 mt-50">Pakistan Diaspora</h3>
                <p>
                  {" "}
                  The Pakistani community in Sweden numbers around 28000. These
                  figures do not include Pakistanis born and immigrants from
                  other parts of Europe. The community is largely located in
                  Gothenburg, Malmo and Stockholm. There are about 13
                  Associations of Pakistanis in Sweden. In addition, a large
                  number of Pakistani students are studying in educational
                  institutions in Sweden.
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
