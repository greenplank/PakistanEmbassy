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
        <title>Invest in Pakistan</title>
        <meta name="title" content="Invest in Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Invest in Pakistan">
        <HeaderTwo />
        <PageHeader title="Invest in Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-120 text-left">
              <b>Invest in Pakistan</b>
            </h3>
            <ul className="mb-50">
              <li>
                <a
                  href="https://pakistanembassy.se/pakistan-sweden-economic-relations/"
                  target="_blank"
                >
                  Trade volume between Pakistan and Sweden
                </a>
              </li>
              <li>
                Export potential of Pakistan to Sweden{" "}
                <a
                  href="https://pakistanembassy.se/export-potential-of-pakistan-to-sweden-2019/"
                  target="_blank"
                >
                  (export-potential-of-pakistan-to-sweden)
                </a>
              </li>
              <li>
                Swedish exports and imports of goods by countries,{" "}
                <a
                  href="https://www.scb.se/hitta-statistik/statistik-efter-amne/handel-med-varor-och-tjanster/utrikeshandel/utrikeshandel-med-varor/pong/tabell-och-diagram/export-och-import-av-varor-fordelade-pa-lander/"
                  target="_blank"
                >
                  Click Here
                </a>
              </li>
            </ul>
            <h3 className="mb-10 mt-120 text-left">
              <b>Why Invest in Pakistan?</b>
            </h3>
            <p>
              Pakistan is strategically located to become Asia’s premier trade,
              energy and transport corridor. It is also the gateway to the
              energy rich Central Asian States, the financially liquid Gulf
              States and the economically advanced Far Eastern tigers. This
              strategic advantage alone makes Pakistan a marketplace teeming
              with possibilities.
            </p>
            <p>
              In the global financial crisis, Pakistan’s economy has shown
              resilience to the shocks and has maintained global and regional
              patterns and has performed better than some of the neighboring
              countries. International Reports of repute have shown that
              Pakistan ranks ahead of regional countries.
            </p>
            <p>
              The Policy has been designed to provide a comprehensive framework
              for creating a conducive business environment for the attraction
              of FDI. Pakistan's policy trends have been consistent, with
              liberalization, de-regulation, privatization, and facilitation
              being its foremost cornerstones.
            </p>
            <p>
              The Law of Special Economic Zones has been made to meet the global
              challenges of competitiveness to attract FDI. The law allows to
              create industrial cluster with liberal incentives, infrastructure,
              investor facilitation services to enhance productivity and reduce
              cost of doing business for economic development and poverty
              reduction. The Law further envisages to reduce processes through
              SEZ in Pakistan.
            </p>
            <p>
              Here are some useful links for further information on investing in
              Pakistan.
            </p>
            <p>
              {" "}
              <a href="https://invest.gov.pk/" target="_blank">
                Invest Govt. Pk
              </a>
            </p>
            <p>
              {" "}
              <a href="https://www.pakistanembassy.dk/business/investing-in-pakistan/special-economic-zones/" target="_blank">
              Special-Economic-Zones
              </a>
            </p>
            <p>
              {" "}
              <a href="https://www.pakistanembassy.dk/business/investing-in-pakistan/legal-framework-for-protection-of-investment/" target="_blank">
                Protection of Investment
              </a>
            </p>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default TradeProfile;
