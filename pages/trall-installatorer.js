import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Installeeer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trallinstallatorer = () => {
  return (
    <Layout pageTitle="trall-installatorer">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Trall-installatorer" crumbTitle="trall-installatorer" />
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
                                <h2 className="title">Green Plank Certifierade Trall Installatörer</h2>
                                <div className="mb-30">
                                    <p>Vi förstår vad det krävs att installera ett trall och hålla dina kunder nöjda. Vår roll är att göra det så enkelt som möjligt för dig att hålla dina kunders förväntningar, på så sätt blir de kunderna en bra referens till andra potentiella kunder.</p>
                                    <p className="mb-30 mt-30">Den största oron bland slutkunder är; kvalitén av trall, underhållet, garantin och när projektet kommer bli klart. De kan berätta för dig vad de vill ha, men egentligen vet dem inte riktigt. Många gånger har slutkunder för lite kunskap av allt som är inkluderat för att slutföra ett komplett tralldäck – besluten som måste tas, detaljerna som måste göras.</p>
                                    <p className="mb-30 mt-30">Använd denna hemsida som din primära källa för att få informationen du behöver angående komposit. På så sätt kan du skapa en bättre kvalité och längre hållbarhet vilket slutligen kommer gör att din kund kommer bli riktigt nöjd.</p>            
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

export default trallinstallatorer;
