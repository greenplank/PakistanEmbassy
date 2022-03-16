import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import QuaidAzam from "../assets/images/backgrounds/Ambassador.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Ambassador = () => {
  return (
    <>
      <Head>
        <title>About Ambassador</title>
        <meta name="title" content="About Ambassador" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="About Ambassador">
        <HeaderTwo />
        <PageHeader title="About Ambassador" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-60 text-left">
              <b>
                Ambassador Extraordinary Plenipotentiary of the Islamic Republic
                of Pakistan for the Kingdom of Sweden and the Republic of
                Finland
              </b>
            </h3>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={9} md={9} xs={12}>
                <p className="mt-50">
                  Ambassador Zahoor Ahmed is a career Foreign Service officer
                  with diplomatic experience spanning over 27 years that
                  includes various assignments at the Ministry of Foreign
                  Affairs as well as Pakistan’s missions abroad in both
                  bilateral and multilateral arenas.
                </p>
                <p>
                  Prior to being designated as Pakistan's Ambassador to Sweden
                  with concurrent accreditation to Finland, he was Additional
                  Foreign Secretary (Asia Pacific) in the Ministry of Foreign
                  Affairs, Islamabad. In this capacity he dealt with Pakistan's
                  relations with China and countries of ASEAN and SAARC regions,
                  Australia, New Zealand, Japan and Koreas. He also represented
                  Pakistan at the ASEAN regional forum, ASEM and SAARC.
                </p>
              </Col>
              <Col lg={3} md={3} xs={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={QuaidAzam}
                      alt="Quaid-e-Azam"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        className="text-center"
                        color="text.secondary"
                      >
                        H.E. Mr. Zahoor Ahmed
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <p>
                  He was also National Coordinator for Shanghai Cooperation
                  Organization (SCO), a multilateral organization comprising of
                  China, India, Kazakhstan, Kyrgyzstan, Russian federation,
                  Tajikistan and Uzbekistan besides Pakistan. Mr. Ahmed
                  represented Pakistan at the SCO Regional Anti terrorism
                  Structure Council from October 2018 till September 2020.
                </p>
                <p>
                  Ambassador Ahmed has a Bachelors Degree in Medicine from
                  Punjab University, Lahore, a Diploma in French language from
                  National University of Modern Languages, Islamabad, LLM in
                  International Business Law from University of London and MBA
                  from Philippines School of Business Administration, Manila.
                </p>
                <p>
                  In the Ministry of Foreign Affairs Islamabad, he has served in
                  various capacities in Afghanistan, US, Personnel, Policy
                  Planning and UN Divisions and represented Pakistan at various
                  international conference and meetings including at the
                  International Maritime Organization, the Commonwealth, UN
                  Human Rights Council and World Economic Forum, Shanghai
                  Cooperation Organization (SCO) and SCO-RATS.
                </p>
                <p>
                  He has served in Pakistan’s Diplomatic Missions in Budapest
                  from 1994 to 1997, London from 2000 to 2005 and Manila from
                  2005 to 2008.
                </p>
                <p>
                  He was Deputy Chief of Mission in the Embassy of Pakistan,
                  Beijing from 2010 to 2013 and Consul General of Pakistan at
                  Manchester from 2013 to 2017.
                </p>
                <p>
                  He was Deputy Chief of Mission in the Embassy of Pakistan,
                  Beijing from 2010 to 2013 and Consul General of Pakistan at
                  Manchester from 2013 to 2017.
                </p>
                <p>
                  He has published the first Urdu translation of the Chinese
                  classic Romance of the Three Kingdoms besides several
                  articles.
                </p>
                <p>He is married with four children.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default Ambassador;
