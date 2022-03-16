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
        <title>Trade Profile</title>
        <meta name="title" content="Trade Profile" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Trade Profile">
        <HeaderTwo />
        <PageHeader title="Trade Profile" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-120 text-left">
              <b>Trade Profile</b>
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
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default TradeProfile;
