import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Tryckimpregnerat-trä.webp";
import Footer from "../components/footer";
import Head from "next/head";

const tryckimpregnerat = () => {
  return (
    <Layout pageTitle="tryckimpregnerat-tra-bra-eller-daligt">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="tryckimpregnerat-tra-bra-eller-daligt" crumbTitle="tryckimpregnerat-tra-bra-eller-daligt" />
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
                                <h2 className="title">Tryckimpregnerat trä – bra eller dåligt?</h2>
                                <div className="mb-30">
                                    <p>Tryckimpregnerat trä är mestadels av tall. Träet har en hållbarhet på mellan 20-25 år utomhus om det används korrekt.</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Var ska man använda tryckimpregnerat trä?
                                    </h3>
                                    <p style={{marginBottom:30,marginTop:30}}>Tryckimpregnerat trä är perfekt för de platser där en struktur är i mer eller mindre konstant kontakt med jord eller vatten. Alternativt kan du välja en ek eller andra trätyper som håller länge, vilket är betydligt dyrare än billigt tryckimpregnerat trä.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>Tryckimpregnerat trä är också lämpligt för användning på byggarbetsplatser där det kan vara svårt att komma åt och se träets tillstånd. När du bygger med tryckimpregnerat trä kan det vara bra att använda skruvar märkta med A4, rost och syrafast. Detta beror på att kopparföreningarna i tryckimpregnerat trä lätt kan röra vanliga skruvar.</p>
                                    <h4 style={{marginBottom:30,marginTop:30}}>Var ska man inte använda tryckimpregnerat trä?
                                    </h4>
                                    <p style={{marginBottom:30,marginTop:30}}>Om du ska bygga höga sängar är det en hemsk idé att använda tryckimpregnerat trä. Oavsett träetiketten ska tryckimpregnerat trä inte komma i kontakt med mat eller mat, så det är inte acceptabelt att använda det i höga sängar där kemiska ämnen kan tränga in i jorden.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>Du bör inte heller använda tryckimpregnerat trä på lekplatser eller lekstugor, där barn kan kontakta träet. Om du gör detta bör du först måla träet.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>Det är inte heller tillåtet att bränna tryckimpregnerat trä, så om du inte längre ska använda träet rekommenderar vi att du lämnar det på återvinningsstationen.</p>
                                    <h4 style={{marginBottom:30,marginTop:30}}>Försiktighet att ta Arbeta med tryckimpregnerat trä</h4>
                                    <p style={{marginBottom:30,marginTop:30}}>Om du ska arbeta med träet under en längre tid kan det vara en bra idé att använda handskar, precis som det är en bra idé att använda en mask om du ska se eller slipa mycket tryckimpregnerat trä. Tryckimpregnerat trä som produceras utomlands kan innehålla kromföreningar som kan orsaka hudirritation eller allergiska reaktioner vid långvarig kontakt.</p>
                                    <h4 style={{marginBottom:30,marginTop:30}}>Alternativ till tryckimpregnerat trä</h4>
                                    <p style={{marginBottom:30,marginTop:30}}>Det finns många alternativ till tryckimpregnerat trä. Det enda problemet är att de vanligtvis är ganska dyra. Skogen azobé, Robinia och teak kan användas för stolpar för att stå på marken. Hållbarheten är längre än för ek och mäter bra med tryckimpregnerat trä. Azobé är så robust att den används under saltvatten, t.ex. båthavnar och marina miljöer.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>För träterrasser och liknande där träet ska monteras horisontellt kan flera tropiska träslag som doussié, fakturering och teak användas som ett alternativt tryckimpregnerat trä. Och för träfasader kan tall, gran och lärk användas. Om de ytbehandlas enligt alla tekniska regler innan de monteras, uppnår de hållbarhet som kan mätas med tryckimpregnerat trä.</p>
                                    <h4 style={{marginBottom:30,marginTop:30}}>Målning av tryckimpregnerat trä</h4>
                                    <p style={{marginBottom:30,marginTop:10}}>Eftersom tryckimpregnerat trä innehåller impregneringsvätska kan det vara lite av en utmaning att måla. Som utgångspunkt bör du få skydd av järnved på ditt tryckimpregnerade trä. När tryckimpregnerat trä exponeras för solens skarpa UV-strålar bryts träets yta ner.</p>

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

export default tryckimpregnerat;
