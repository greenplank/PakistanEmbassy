import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import PakEmbassy from "../assets/images/pakistansweden.jpg";
import PakEmbassy2 from "../assets/images/pakistansweden-trade-1.png";
import PakImp1 from "../assets/images/pak-exp.png";
import PakImp2 from "../assets/images/pak-imp.png";
import Expo1 from "../assets/images/larg-exp-1.png";
import Expo2 from "../assets/images/larg-exp-2.png";
import Expo3 from "../assets/images/bil-trade-1.png";
import Card from "@material-ui/core/Card";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BasicFact = () => {
  return (
    <>
      <Head>
        <title>Economic Relations</title>
        <meta name="title" content="Economic Relations" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Economic Relations">
        <HeaderTwo />
        <PageHeader title="Economic Relations" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <div className="text-center">
                <img src={PakEmbassy} width="1200px" />
              </div>
              <Col lg={4} md={4} xs={12}>
                <a target="_blank" href="/trade/larg-exp-1.png">
                  <Card>
                    <div className="text-center">
                      <img src={Expo1} width="400px" />
                    </div>
                  </Card>
                </a>
              </Col>
              <Col lg={4} md={4} xs={12}>
                <a target="_blank" href="/trade/larg-exp-2.png">
                  <Card>
                    <div className="text-center">
                      <img src={Expo2} width="400px" />
                    </div>
                  </Card>
                </a>
              </Col>
              <Col lg={4} md={4} xs={12}>
                <a target="_blank" href="/trade/bil-trade-1.png">
                  <Card>
                    <div className="text-center">
                      <img src={Expo3} width="260px" />
                    </div>
                  </Card>
                </a>
              </Col>
              <div className="text-center mt-80">
                <h2>Pakistan's Exports to Sweden</h2>
                <h4>154.47 Thousand USD</h4>
                <img src={PakEmbassy2} width="1200px" />
              </div>
              <Col lg={4} md={4} xs={12}>
                <h2 className="mt-40">Pakistan's Major Exports</h2>
                <ul type="square">
                  <li>Home Textile</li>
                  <li>Ready-made garments</li>
                  <li>Sports goods</li>
                  <li>Knitwear (hosiery)</li>
                  <li>Cotton Fabrics</li>
                  <li>Leather Apparel & Clothing</li>
                  <li>Made-up articles of textiles (silk / synthetic)</li>
                  <li>Carpets & floor covering</li>
                  <li>Rice & Mangoes</li>
                  <li>
                    IKEA, H&M, Lindex and Gina Tricot are major buyers of
                    textile products & have their own offices in Pakistan.
                  </li>
                  <li>
                    Swedish Multinational giants like Tetrapak, Millicom, SAAB &
                    GAC have made direct investments in Pakistan.
                  </li>
                </ul>
              </Col>
              <Col lg={8} md={8} xs={12}>
                <img src={PakImp1} width="900px"/>
                </Col>
                <Col lg={4} md={4} xs={12}>
                <h2 className="mt-60">Pakistan's Major Imports</h2>
                <ul type="square">
                  <li>Paper & articles of paper pulp</li>
                  <li>Industrial goods</li>
                  <li>Chemicals</li>
                  <li>Machinery</li>
                  <li>Transport Equipment</li>
                  <li>Agricultural Products</li>
                  <li>Minerals</li>
                  
                </ul>
              </Col>
              <Col lg={8} md={8} xs={12}>
                <img src={PakImp2} width="900px"/>
                </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </Layout>
    </>
  );
};

export default BasicFact;
