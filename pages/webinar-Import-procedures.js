import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import IMg1 from "../assets/images/texpo-pic.png";
import Footer from "../components/footer";
import Head from "next/head";

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>
          A webinar on Import Procedures/Taxes/Exemptions in Pakistan on Used
          Cars/Vehicles and Personal Mobile Phones at airports for Overseas
          Pakistanis.A webinar on Import Procedures/Taxes/Exemptions in Pakistan
          on Used Cars/Vehicles and Personal Mobile Phones at airports for
          Overseas Pakistanis.A webinar on Import Procedures/Taxes/Exemptions in
          Pakistan on Used Cars/Vehicles and Personal Mobile Phones at airports
          for Overseas Pakistanis.A webinar on Import
          Procedures/Taxes/Exemptions in Pakistan on Used Cars/Vehicles and
          Personal Mobile Phones at airports for Overseas Pakistanis.A webinar
          on Import Procedures/Taxes/Exemptions in Pakistan on Used
          Cars/Vehicles and Personal Mobile Phones at airports for Overseas
          Pakistanis.A webinar on Import Procedures/Taxes/Exemptions in Pakistan
          on Used Cars/Vehicles and Personal Mobile Phones at airports for
          Overseas Pakistanis.A webinar on Import Procedures/Taxes/Exemptions in
          Pakistan on Used Cars/Vehicles and Personal Mobile Phones at airports
          for Overseas Pakistanis.A webinar on Import
          Procedures/Taxes/Exemptions in Pakistan on Used Cars/Vehicles and
          Personal Mobile Phones at airports for Overseas Pakistanis.A webinar
          on Import Procedures/Taxes/Exemptions in Pakistan on Used
          Cars/Vehicles and Personal Mobile Phones at airports for Overseas
          Pakistanis.
        </title>
        <meta
          name="title"
          content="A webinar on Import Procedures/Taxes/Exemptions in Pakistan on Used Cars/Vehicles and Personal Mobile Phones at airports for Overseas Pakistanis."
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="A webinar on Import Procedures/Taxes/Exemptions in Pakistan on Used Cars/Vehicles and Personal Mobile Phones at airports for Overseas Pakistanis.">
        <HeaderTwo />
        <PageHeader title="A webinar on Import Procedures/Taxes/Exemptions in Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
              

                <h1 className="mt-80">
                  <b>
                    A webinar on Import Procedures/Taxes/Exemptions in Pakistan
                    on Used Cars/Vehicles and Personal Mobile Phones at airports
                    for Overseas Pakistanis.
                  </b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Embassy of Pakistan in Sweden held a webinar on Import
                  Procedures/Taxes/Exemptions in Pakistan on Used Cars/Vehicles
                  and Personal Mobile Phones at airports for Overseas
                  Pakistanis. Senior Officers from Pakistan Customs and SBP
                  representatives provided information to the participants on
                  procedures, taxes and exemption process.
                </p>

                <div className="mb-30 mt-50 text-center">
                  <iframe
                    width="880"
                    height="615"
                    src="https://www.youtube.com/embed/JTtzdPyG3qw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                 
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
