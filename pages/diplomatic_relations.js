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
        <title>Diplomatic Relations</title>
        <meta name="title" content="Diplomatic Relations" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Diplomatic Relations">
        <HeaderTwo />
        <PageHeader title="Diplomatic Relations" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mb-30 mt-50">Diplomatic Relations</h3>
                <ol>
                  <li>
                    Pakistan and Sweden enjoy friendly and cooperative relations
                    characterised by mutual respect, understanding and
                    cooperation. Sweden was the first Scandinavian country to
                    establish diplomatic relations with Pakistan, in 1949. Since
                    establishment of diplomatic relations, both countries have
                    enjoyed multifaceted and fruitful cooperation over the years
                    especially in trade, economy, education, culture and
                    people-to-people contacts. There have been regular contacts
                    between the leadership of two countries and the two sides
                    also hold regular Bilateral Political Consultations.
                  </li>
                  <li>
                    {" "}
                    Pakistan and Sweden have a convergence of views on the
                    issues of human rights, gender equality and sustainable
                    development that translates into cooperation and support for
                    each other at various international fora. There is growing
                    cooperation in the educational and business and investment
                    sectors. More than 35 Swedish companies are represented in
                    the Pakistan’s market including ABB, Atlas Copco, Alfa
                    Laval, Equinox, Ericsson, Panasian Group, SAAB, VPL,
                    Oriflame, Profarm, SKF, Tetrapack, Wah Nobel, Ecolean, Ikea,
                    Lindex, Pulse etc.
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

export default BasicFact;
