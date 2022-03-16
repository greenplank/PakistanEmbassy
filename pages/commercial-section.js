import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header-2";
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

const CommercialSection = () => {
  return (
    <>
      <Head>
        <title>COMMERCIAL WING</title>
        <meta name="title" content="COMMERCIAL WING" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="COMMERCIAL WING">
        <HeaderTwo />
        <PageHeader title="COMMERCIAL WING" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <p className="text-center mt-80 mb-40">
              The Commercial Section promotes business between Pakistan and
              Sweden and Finland. We provide information to Pakistani companies
              on trade and investment opportunities in Sweden and Finland and
              help both Swedish, Finnish and Pakistani companies to establish
              contacts with suppliers, buyers, exporters and importers from
              these countries. The Commercial Section also organizes and
              participates in various business related events, seminars,
              conferences and spread the word about the availability of business
              opportunities in Pakistan.
            </p>

            <Row style={{ marginBottom: "4em" }}>
              <Col lg={8} md={8} xs={12}>
                <h3 className="mb-30 mt-50">Business & Trade</h3>
                <div>
                  <p>
                    Pakistan offers huge business and investment opportunities
                    for Swedish & Finnish companies e.g. in infrastructure,
                    construction, education, healthcare, energy, cleantech,
                    water, food and food production as well as within
                    agriculture and IT/ICT sectors. Just a few to mention.
                  </p>
                  <p>
                    Pakistan’s economy is growing by 5-6 per cent annually and
                    the new, consuming middle class is willing to spend more on
                    various articles and products. New shopping malls are built,
                    new residential and housing areas created with many
                    practical challenges linked to energy and water, for
                    example.
                  </p>
                  <p>
                    Pakistan is growing and Swedish and Finnish companies offer
                    plenty of best technology, products and knowledge to match
                    the needs of developing Pakistan.
                  </p>
                  <p>
                    We believe that Pakistan-Sweden & Pakistan-Finland business
                    relations create a perfect win-win package supporting both
                    countries and markets in the best possible way.
                  </p>
                 
                </div>
              </Col>
              <Col lg={4} md={4} xs={12}>
                <div className="mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://www.commerce.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Ministry of Commerce</center>
                  </a>
                </div>
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://tdap.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Trade Development Authority of Pakistan</center>
                  </a>
                </div>
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://pakistanexportersdirectory.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Pakistan Exports Directory </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://invest.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Board of Investment </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="http://www.moip.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Ministry of Industries & Production </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="http://www.aedb.org/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Alternative Energy Development Board </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://www.pseb.org.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Pakistan Software Export Board </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="https://fpbc.fi/welcome/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Finland Pakistan Business Council </center>
                  </a>
                </div>{" "}
                <div className=" mt-20 mb-20">
                  <a
                    style={{
                      margin: ".4em",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    target="_blank"
                    href="http://www.ppib.gov.pk/"
                    className="thm-btn thm-btn2"
                  >
                    <center>Private Power & Infrastructure Board </center>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default CommercialSection;
