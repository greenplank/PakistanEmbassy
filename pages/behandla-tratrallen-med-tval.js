import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Behandla-trätrallen.webp";
import Footer from "../components/footer";
import Head from "next/head";

const BehandlaTratrallenMedTval = () => {
  return (
    <Layout pageTitle="behandla-tratrallen-med-tval">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Behandla-tratrallen-med-tval" crumbTitle="behandla-tratrallen" />
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
                        <h2 className="title">Behandla trätrallen med tvål</h2>
                        <div className="desc section-space--bottom--30">
                          <p>Ett komposittrall ger ett naturligt och varmt intryck av ditt hem och din trädgård. Men för att den ska behålla sin känsliga färg är det viktigt att du tar hand om den. Det är väldigt viktigt att tvätta och olja eller lasera trädäck med jämna mellanrum.Vanligtvis räcker det med vartannat år om man tänker på hållbarhet. Om du å andra sidan vill ge den en fin glöd bör du utföra behandlingen en gång om året.</p>
                          <p className="mb-30 mt-30">I det klimat som råder i stora delar av Sverige tål uteplatsens trädäck och däck mycket. Genom att underhålla trädäcket förlänger du dess livslängd men håller det också estetiskt tilltalande. Här har du några tips på hur du underhåller, tvättar och ger din uteplats lite extra kärlek!</p>
                          <h3 className="mb-30 mt-30">Hur rengör jag däcket med terrass såpa?</h3>
                          <p className="mb-30 mt-30">Det första du gör är att skrubba trädäcket med såpa för att bli av med ingrain(use different word), för att göra detta behöver du en hink med vatten, miljövänlig såpa och en skrubb borste som passar både plånboken och miljön. Använd såpa när du rengör trall på våren. Såpa uteplatsen eller trädäcket istället för att använda olja.</p>
                          <p className="mb-30 mt-30">Med såpa får träet en mjuk och varm känsla och det får ett fint grått finish. Samtidigt lockar inte såpad trall mindre pollen och föroreningar än en oljad trall. Skölj ytorna med en vattenslang och skrubba lätt med såpa och vatten. Se till att träet alltid är fuktigt.</p>
                          <h3 className="mb-30 mt-30">Vad är nästa steg?</h3>
                          <p className="mb-30 mt-30">När trallen har rengjorts, skölj den med vatten och låt trädäcket torka några dagar i fint väder innan du behandlar det.</p>
                          <h3 className="mb-30 mt-30">Hur såpskurar jag trallen?</h3>
                          <p className="mb-30 mt-30">Börja med att sopa rent på trätrallen och se till att den är fri från smuts. Om det är mycket smutsig, kan en runda skurning behövas innan tvålen.</p>
                         
                            <strong>1. </strong>Blanda tvål i en hink med ljummet vatten. Tre dl tvål per 10 liter vatten.<br/>
                            <strong>2. </strong>Börja sedan skrubba trallen med en grov skrubbborste. Var noga med
                              att skrubba noggrant så att hela vagnen täcks av tvål. Om vissa ytor är
                              extremt  nedsmutsade kan de behöva en extra tvätt runda innan du tvålar
                              trallen.<br/>
                            <strong>3. </strong>Låt sedan torka in, skölj inte av tvålen!<br/>
                            <strong>4. </strong>Efter det kan du njuta av en trall med en mjuk och varm känsla. Om en större
                              effekt önskas, upprepa processen tills önskat resultat uppnås.<br/>
                            <strong>5. </strong>Undvik att använda högtryckstvätt för din träterrass eftersom trycket kan
                              skada fibrerna i träet.<br/>
                          
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

export default BehandlaTratrallenMedTval;
