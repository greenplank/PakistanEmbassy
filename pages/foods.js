import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Food1 from "../assets/images/img11.jpg";
import Food2 from "../assets/images/img22.jpg";
import Food3 from "../assets/images/img33.jpg";
import Food4 from "../assets/images/img44.jpg";
import Food5 from "../assets/images/img55.jpg";
import Food6 from "../assets/images/img66.jpg";
import Food7 from "../assets/images/img77.jpg";
import Food8 from "../assets/images/img88.jpg";
import PakImp1 from "../assets/images/pak-exp.png";
import PakImp2 from "../assets/images/pak-imp.png";
import Expo1 from "../assets/images/larg-exp-1.png";
import Expo2 from "../assets/images/larg-exp-2.png";
import Expo3 from "../assets/images/bil-trade-1.png";
import Card from "@material-ui/core/Card";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Foods = () => {
  return (
    <>
      <Head>
        <title>Foods</title>
        <meta name="title" content="Foods" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Foods">
        <HeaderTwo />
        <PageHeader title="Foods" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em", marginTop: "2em" }}>
              <p className="mt-40 mb-40">
                Roaring with dazzling flavor combinations and often accompanied
                with plenty of heat and spice, Pakistani food takes on a
                culinary experience like no other with a cuisine as diverse as
                the country’s culture and population
              </p>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food1} width="400px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food2} width="400px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food3} width="530px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food4} width="400px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food5} width="490px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food6} width="580px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food7} width="400px" />
                  </div>
                </Card>
              </Col>
              <Col className="mt-40 mb-40" lg={4} md={4} xs={12}>
                <Card>
                  <div className="text-center">
                    <img src={Food8} width="430px" />
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </Layout>
    </>
  );
};

export default Foods;
