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
import QuaidAzam from "../assets/images/backgrounds/Quaid-e-Azam.jpg";
import PresidentPK from "../assets/images/backgrounds/presidentofpakistan.jpg";
import PrimeMinisterPK from "../assets/images/backgrounds/imrankhan.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const AboutPakistan = () => {
  return (
    <>
      <Head>
        <title>About Pakistan</title>
        <meta name="title" content="About Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="About Pakistan">
        <HeaderTwo />
        <PageHeader title="About Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-60 text-left">
              <b>History of Pakistan</b>
            </h3>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <p>
                  Pakistan emerged as an independent country on 14th August 1947
                  after getting independence from Britain. The land where the
                  Islamic Republic of Pakistan is situated today had been a seat
                  of world’s leading Civilizations from the time immemorial. The
                  cultural heritage of Pakistan, starting from pre-historic
                  times to the present day can be summarized in the following
                  periods:
                </p>
                <ul>
                  <li>Indus Civilization</li>
                  <li>Gandhara Civilization</li>
                  <li>Islamic Period</li>
                  <li>Sikh Period</li>
                  <li>British Period</li>
                  <li>Post-independence Period</li>
                </ul>
                <p>For further details please click here <a href="http://www.heritage.gov.pk/)" target="_blank">http://www.heritage.gov.pk/)</a></p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default AboutPakistan;
