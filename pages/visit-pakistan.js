import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";

import VisitPakistan from '../components/visitPakistan'
import Footer from "../components/footer";
import Head from "next/head";



const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>Visit Pakistan</title>
        <meta name="title" content="Visit Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Visit Pakistan">
        <HeaderTwo />
        <PageHeader title="Visit Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Visit Pakistan</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Government of Pakistan on 4th August 2020, unveiled a
                  political map of the country.
                </p>

                <div className="mb-30">
                  <iframe
                    width="880"
                    height="615"
                    src="https://www.youtube.com/embed/CgSQe64SP6c"
                    title="Emerging Pakistan"
                    frameborder="42"
                   
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="mt-30">
                  <h3 className="mt-80">
                    <b>Tourist Attractions Sites in Pakistan</b>
                  </h3>
                  <p className="mb-30 mt-30 text-left">
                    Here are a few pictures of breath-taking views and beautiful
                    landscapes from Pakistan captured by famous Pakistani
                    photographers Mr. Gulraiz Ghouri and Mr. Tariq Hameed.
                  </p>
                  <VisitPakistan/>
                </div>
                <div>
                  <h2>How to apply for Visa?</h2>
                  <a href="/e-Visa" target="_blank">Visa Info</a>
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

export default NADRAApplication;
