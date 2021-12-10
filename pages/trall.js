import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Trall1.webp";
import Footer from "../components/footer";
import Head from "next/head";

const trall = () => {
  return (
    <Layout pageTitle="trall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="trall" crumbTitle="trall" />
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
                        <h2 className="title">Trall</h2>
                        <div className="mb-30">
                          <p>Komposittrall är det ultimata materialet för golv i en utomhusmiljö. Trall representerar en plan yta som tål vikt och lyfts ofta upp från marken. Träkomposittrall är ett snabbt växande byggmaterial. Trall finns i flera former beroende på dess funktion, som trallgolv, däck fasader, däck stake , trappor, till olika typer av trämöbler som kommer att komplettera det moderna utseendet på trädgården där de ligger.</p>
                          <p>Här på greenplank kan du köpa det mest omfattande sortimentet och du får fasta längder och den kvalitet du behöver. Valet mellan en trall av massivt trä eller en WPC- komposittrall beror på syftet och ens önskemål.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Hur trall gjord av?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Det underhållsfria, hållbara trall materialet använder återvunnen plast med träfibrer och blandas med ett annat ämne. I och med att däcket är konstgjort är den mer hållbar. För att säkerställa dess livslängd och bibehålla dess skönhet över tid är regelbundet underhåll viktigt, det krävs beläggning med speciella beläggningar på våren och hösten.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Bygga ett trall
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Med trall kan du snabbt bygga en ny terrass och uteplats eller förnya den befintliga. Det är också mycket enklare än man tror att göra ett efterlängtat trål projekt verklighet på egen hand. Allt som krävs är rätt material och teknik. Om ditt däck ska vara utomhus året runt är det viktigt att du väljer ett behandlat trä som tål vårt väder – och regelbundet behandlar träet vid behov.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>I Sverige är det framför allt de stora temperatur förskjutningarna som sliter trallen mest. Våra trall kan stå ute året runt. Ett exempel är vårt kompositdäck, som har genomgått tester för att säkerställa att det uppfyller det svenska klimatets höga krav.</p>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>På ebygghandel kan du köpa trall i långa längder. Med dessa kan du bygga ett härligt uteplats golv utan fogar. För en ännu mer exklusiv känsla har vi olika typer av lövträ.</p>
                          <h3 style={{ marginBottom: 30, marginTop: 30 }}>Vilka tillbehör behövs för att lägga trall?
                          </h3>
                          <p style={{ marginBottom: 30, marginTop: 30 }}>Förutom skruvar och vinkeljärn beror det helt på projektets omfattning och design. En viktig aspekt är om din trall ska stå på socklar eller ligga direkt på marken, i vilket fall ska trallen ha ett trägolv eller ett nedsänkt golv. Vi har Sveriges mest omfattande sortiment av trall. Med det får du enkel hjälp att välja och jämföra fördelar mellan olika typer av trall. Däckväljaren hjälper dig också att beräkna materialförbrukning och tips om hur du bygger ditt däck. Vår trallväljare ger dig inblick i projektets omfattning och du får en bra bild av kostnaden för vagnen.</p>

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

export default trall;
