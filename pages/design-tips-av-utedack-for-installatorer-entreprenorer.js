import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall-Installeeer.webp";
import Footer from "../components/footer";
import Head from "next/head";

const DesignTips = () => {
  return (
    <Layout pageTitle="design-tips-av-utedack-for-installatorer-entreprenorer">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Design-tips-av-utedack-for-installatorer" crumbTitle="design-tips-av-utedack" />
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
                                <h2 className="title">Design tips av utedäck för installatörer / entreprenörer</h2>
                                <div className="desc section-space--bottom--30">
                                    <p>Nyckeln till att överträffa dina kunders förväntningar är “Du måste lyssna på dem“. De kommer att berätta vad de vill, men de vet inte alltid vad de vill. Lyssna allmänt och tänk sedan specifikt på hur du kan leverera det. Det är väldigt enkelt att bygga ett fyrkantigt däck, men om du kan lägga till lite “personlighet” till det, höjer du dig över packet. Det finns tusentals däckinstallatörer / byggare där ute som kan sätta upp ett däck snabbt, men de uppmärksammar inte detaljerna så att de tjänar mindre.</p>
                                    <h3 className="section-space--bottom--30 section-space--top--30">Trender för däckdesign</h3>
                                    
                                        <strong>1. </strong>Green Plank® kompositprodukter finns i ett brett utbud av färger och ser ut som trä. Dolda fästsystem ger en slät yta och kompletterande färger kan användas för att skapa mönster och mönster direkt i dina däckbrädor. Även om kompositprodukter tenderar att kosta minst 50% mer än vanligt tryckbehandlat trä, överväger fördelarna långt varje extra kostnad.<br/>
                                        <strong>2. </strong>Böjda element, som rundade däckkanter, mjuka hörn och böjda planteringar.<br/>
                                        <strong>3. </strong>Gränser ger inte bara panache, men de förbättrar också säkerheten.<br/>
                                        <strong>4. </strong>Flera nivåer, ofta uppdelade i funktionella områden för matlagning, konversation och mat.<br/>
                                        <strong>5. </strong>Två våningar däck med gott om plats på den asfalterade bottennivån för möbler och underhållning och med dränering på det upphöjda däcket så att regnet inte droppar ner.<br/>
                                        <strong>6. </strong>Utekök, som fler husägare anser är funktionellt, bekvämt – och en statussymbol.<br/>
                                        <strong>7. </strong>Lågspänningsbelysning eller solbelysning för säkerhet och atmosfär kan också förlänga användningen av däcket till natten.<br/>
                                        <strong>8. </strong>En annan fördel är att Green Plank® ihåliga däckprofiler erbjuder ett bekvämt utrymme för att driva ledningar och kablar för belysning, elektriska apparater och högtalare.<br/>
                                        <strong>9. </strong>Vattenfunktioner på däck eller i närheten för att skapa lugnande vitt brus och lägga till en intressant plats.<br/>
                                        <strong>10. </strong>Eldfunktioner som eldstäder eller eldstäder som sitter ett par meter upp från gångytan, särskilt de med den senaste prylen, som gasbrännare som skjuter upp ärtgrus eller glasstenar istället för ved.<br/>
                                        <strong>11. </strong>Ljudsystem utformade för utomhusbruk med högtalare inbyggda i järnvägsposter och uttag för väderbeständig hemmabioutrustning.<br/>
                                            
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

export default DesignTips;
