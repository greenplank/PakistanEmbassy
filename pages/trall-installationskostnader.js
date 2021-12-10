import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-installations.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallinstallationskostnader = () => {
  return (
    <Layout pageTitle="trall-installationskostnader">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trall-installationskostnader" crumbTitle="trall-installationskostnader" />
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
                        <h2 className="title">Trall installationskostnader</h2>
                        <div className="mb-30">
                          <p>Trall installationskostnader beror på vilken typ av trallmaterial du använder och om du anlitar en entreprenör eller bygger däck själv. Kostnaden för konstruktionen ska vara densamma för både komposit- och träplattor. Den verkliga kostnadsskillnaden kommer när du jämför kostnaden för plankorna. Green Plank® kompositplattor med lågt underhåll är mycket enkla att installera. När allt är fallet kostar Green Plank®-kompositdäck cirka 25% mer att konstruera än trädäck.</p>
                          <p className="mb-30 mt-30">Installationskostnader för alla däck anges för basmodeller innan några förbättringar eller förbättringar läggs till. En annan däckförbättring som kommer att höja däckinstallationskostnaderna är att ha elektrisk service som uttag eller belysning. Ännu en däckkostnadshöjare har en infällbar markis för att ge skugga installerad över däcket.</p>
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

export default trallinstallationskostnader;
