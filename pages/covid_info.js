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

const TradeProfile = () => {
  return (
    <>
      <Head>
        <title>Information Regarding Covid</title>
        <meta name="title" content="Information Regarding Covid" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Information Regarding Covid">
        <HeaderTwo />
        <PageHeader title="Information Regarding Covid" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-120 text-left">
              <b>Information Regarding Covid in Pakistan</b>
            </h3>
            <ol className="mb-50">
              <li>
                <a href="https://caapakistan.com.pk/" target="_blank">
                  https://caapakistan.com.pk/
                </a>
              </li>
              <li>
                <a
                  href="https://covid.gov.pk/travel-guidelines"
                  target="_blank"
                >
                  https://covid.gov.pk/travel-guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://ncoc.gov.pk/covid-vaccination-en.php"
                  target="_blank"
                >
                  https://ncoc.gov.pk/covid-vaccination-en.php
                </a>
              </li>
            </ol>
          </Container>
          <Container>
            <h3 className="mb-10 mt-120 text-left">
              <b>Information Regarding Covid in Sweden</b>
            </h3>
            <ol className="mb-50">
              <li>
                <a href="https://www.krisinformation.se/" target="_blank">
                  https://www.krisinformation.se/
                </a>
              </li>
              <li>
                <a href="https://polisen.se/" target="_blank">
                  https://polisen.se/
                </a>
              </li>
              <li>
                <a href="https://www.folkhalsomyndigheten.se/" target="_blank">
                  https://www.folkhalsomyndigheten.se/
                </a>
              </li>
            </ol>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default TradeProfile;
