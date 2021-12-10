import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trädäckets.webp";
import Footer from "../components/footer";
import Head from "next/head";

const tradackets = () => {
  return (
    <Layout pageTitle="tradackets-underhallskostnader">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="tradackets-underhallskostnader" crumbTitle="tradackets-underhallskostnader" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <div>
                <div className="row">
                    <div className="blog-details col-12">
                        <div className="blog-inner">
                            <div className="media"><div className="image"><img src={blogImg} alt="" /></div></div>
                            <div className="content">
                                <h2 className="title">Trädäckets underhållskostnader</h2>
                                <div className="mb-30">
                                    <p>Hur ofta och hur dyrt är det att underhålla ditt däck?</p>
                                    <p className="mb-30 mt-30">Medan traditionellt trädäck både möglar, förlorar färg, spricker och ger stickor och sen dessutom måste du slipa ner det, olja och måla för att hålla det snyggt och fräscht så slipper du detta med Green Plank® kompositdäck. Ett vanligt trädäck har en livslängd på cirka 10-15 år (om det underhålls rätt regelbundet). </p>
                                    <p className="mb-30 mt-30">Föredrar du inte att ligga och ta det lugnt på ditt vackra kompositdäck än att sitta på knäna och måla? Du behöver aldrig måla eller försegla ditt lågunderhålls Green Plank® däck. Det kommer inte heller spricka eller ge stickor – tro mig, dina fötter kommer uppskatta det! Insekter har heller inget intresse utav att gnaga på plast och vattenskador behöver du inte ens tänka på! </p>
                                    <p className="mb-30 mt-30">Green Plank® lågunderhålls kompositdäck produkter kräver enbart periodvis en liten tvätt och det håller sig vackert i flera år!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 section-space--top--60">
                        {/* <BlogComment/> */}
                    </div>
                </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default tradackets;
