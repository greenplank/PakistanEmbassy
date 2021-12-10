import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Replacement-Tips.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallbrador = () => {
  return (
    <Layout pageTitle="trallbrador-i-trakomposit-for-villaagare">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trallbrador-i-trakomposit-for-villaagare" crumbTitle="trallbrador-i-trakomposit-for-villaagare" />
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
                                <h2 className="title">Trallbrädor i träkomposit för Villaägare</h2>
                                <div className="mb-30">
                                    <p>Att bygga ett trädäck är en av de fem (5) högst rankade önskningarna i en villaträdgård. Det är en investering som kan löna sig genom ökat värde på fastigheten.</p>
                                    <p className="mb-30 mt-30">Villaägare väljer ofta en utbyggnad av ett trädäck för att utöka boytan under vår/sommar/höst. Ett trädäck är ett av hemmets bästa utrymmen, som ökar hemmets funktion och ger plats för sköna dagar utomhus och härliga grillkvällar, från tidig vår till sen höst. Att välja rätt material, för att minimera underhållet, är grunden för ett bra trädäck. Stressade villaägare/barnfamiljer i kombination med en stark önskan om en uteplats, med lättskötta material har skapat en stor efterfrågan på nya produkter/material. Minimalt med underhåll, var ledig på din fritid…. Njut på trädäcket!</p>
                                    <p className="mb-30 mt-30">Green Plank®– underhållsfri trall, staket/plank, räcke, fasadpanel och utemöbler har en unik och naturligt trä liknande funktion och utseende.</p>
                                        
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

export default trallbrador;
