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
        <title>Important Websites</title>
        <meta name="title" content="Important Websites" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Important Websites">
        <HeaderTwo />
        <PageHeader title="Important Websites" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12} className="pt-40">
                <ul>
                  <li>
                    <a target="_blank" href="https://covid.gov.pk/">
                      covid.gov.pk
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://www.presidentofpakistan.gov.pk/"
                    >
                      The President of the Islamic Republic of Pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://pmo.gov.pk/">
                      Prime Minister's Office
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mofa.gov.pk/">
                      Ministry of Foreign Affairs
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://interior.gov.pk/">
                      Ministry of Interior
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.finance.gov.pk/">
                      Ministry of Finance
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://ead.gov.pk/">
                      Economic Affairs Division (EAD)
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.ophrd.gov.pk/">
                      Ministry of Overseas Pakistanis and Human Resource
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.hec.gov.pk/english/pages/home.aspx"
                    >
                      Higher Education Commission of Pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mod.gov.pk/">
                      Ministry of Defence
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://moib.gov.pk/">
                      Ministry of Information, Broadcasting and National
                      Heritage
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.moit.gov.pk/">
                      Ministry of Information Technology and Telecommunication{" "}
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://most.gov.pk/">
                      Ministry of Scienc and Technology
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mowp.gov.pk/">
                      Ministry of Water & Power
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mopa.gov.pk/">
                      Ministry of Parlimentary Affairs
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.textile.gov.pk/">
                      Ministry of Textile Industry
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.kana.gov.pk/">
                      Ministry of Kashmir Affairs and Gilgit Baltistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://pakistan.gov.pk/">
                      Web Gateway to the Government of pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://tourism.gov.pk/">
                      Tourism
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.business-sweden.com/globalassets/invest-in-sweden/documents/starting-a-business-in-sweden---an-introduction.pdf"
                      target="_blank"
                    >
                      Business in Sweden
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://www.bolagsverket.se/en" target="_blank">
                      http://www.bolagsverket.se/en
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://www.verksamt.se/web/international/home"
                      target="_blank"
                    >
                      https://www.verksamt.se/en/web/international/home
                    </a>
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

export default BasicFact;
