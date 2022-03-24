import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const EVisa = () => {
  return (
    <>
      <Head>
        <title>Visa for Pakistan</title>
        <meta name="title" content="Visa for Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Visa for Pakistan">
        <HeaderTwo />
        <PageHeader title="Visa for Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Visa for Pakistan</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  <ul>
                    <li>
                      To apply for visa and for all other relevant information,
                      please{" "}
                      <a target="_blank" href="https://visa.nadra.gov.pk/">
                        click here
                      </a>{" "}
                    </li>
                    <li>
                      For children under 18 years the NOC shall be duly signed
                      by both the parents even if both parents are travelling
                      with the child/children.
                    </li>
                    <li>
                      For NOC form for children under 18 years of age,{" "}
                      <a target="_blank" href="/pdfs/NOC.pdf">
                        click here
                      </a>
                    </li>
                    <li>
                      The embassy does not receive applications physically
                    </li>
                  </ul>
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

export default EVisa;
