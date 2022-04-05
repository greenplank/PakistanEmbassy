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
        <title>Pakistan Finland Trade</title>
        <meta name="title" content="Pakistan Finland Trade" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Pakistan Finland Trade">
        <HeaderTwo />
        <PageHeader title="Pakistan Finland Trade" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mt-80 text-center">
                  <b>Pakistan Finland Bilateral Trade 2021</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/Pakistan_Finlad_Bilatrel.PNG" />
                </p>

                <h3 className="mt-80 text-center">
                  <b> Pakistan-Finland Bilateral Trade 2011-2021</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/pakistan_finland_trade.PNG" />
                </p>

                <h3 className="mt-80 text-center">
                  <b> Pakistan Exports to Finland</b>
                </h3>
                <p className="mt-40 text-center">
                  <img src="/trade/Pakistan_Export_Finland.PNG" />
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
