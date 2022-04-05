import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Thumb from "../assets/images/backgrounds/thumb.jpg";
import Thumb2 from "../assets/images/backgrounds/thumb2.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const ImportExport = () => {
  return (
    <>
      <Head>
        <title>Pakistan Sweden Trade</title>
        <meta name="title" content="Pakistan Sweden Trade" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Pakistan Sweden Trade">
        <HeaderTwo />
        <PageHeader title="Pakistan Sweden Trade" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mt-80 text-center">
                  <b>Pakistan Sweden Bilateral Trade 2021</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/pakistan_sweden_trade.PNG" />
                </p>

                <h3 className="mt-80 text-center">
                  <b> Pakistan-Sweden Bilateral Trade 2011-2021</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/pakistan_sweden_biletrals.PNG" />
                </p>

                <h3 className="mt-80 text-center">
                  <b> Pakistan Exports to Sweden</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/pakistan_sweden_export.PNG" />
                </p>
              
                <p className="mt-60 text-center">
                  <img src="/trade/pakistan_sweden_export_1.PNG" />
                </p>

              
                <p className="mt-60 text-center">
                  <img src="/trade/pakistan_sweden_export_2.PNG" />
                </p>

              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default ImportExport;
