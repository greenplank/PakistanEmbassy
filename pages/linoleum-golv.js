import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Linoleum.webp";
import Footer from "../components/footer";
import Head from "next/head";

const linoleumgolv = () => {
  return (
    <Layout pageTitle="linoleum-golv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="linoleum-golv" crumbTitle="linoleum-golv" />
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
                                <h2 className="title">Linoleum golv</h2>
                                <div className="mb-30">
                                    <p>Linoleum var en av de ledande fjädrande golvbeläggningarna fram till 1950-talet – då ersattes det till stor del av PVC. Men åtminstone som en nischprodukt för miljömedvetna byggare har golvet överlevt till denna dag. Linoleum är ett hållbart naturmaterial som till och med kan komposteras i slutet av sitt liv.</p>
                                    <p>Liksom mattor tillverkas det traditionellt som elastiska rullvaror, men industrin erbjuder nu också lakvaror som är kända från laminat eller designgolv. När det gäller rullgods används vanligtvis jutetyg som substratskikt; när det gäller mindre paneler i kakel- eller plankformat är basen vanligtvis gjord av träbaserade material. Ofta finns det ytterligare ett lager kork för att öka golvets ljudisolering.</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Ingredienser:</h3>
                                    <p style={{marginBottom:30,marginTop:30}}>Linoleums sammansättning och egenskaper är internationellt standardiserade. I Europa finns EN 548 (“Fjädrande golvbeläggningar – specifikation för linoleum med och utan mönster”). De viktigaste komponenterna i den naturliga produkten är oxiderad linolja (cirka 32%) och naturliga hartser (8%). Det finns också organiska fyllmedel som kork eller trämjöl (40%) och oorganiska fyllmedel som kalkstenpulver och färgpigment (20%).</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Egenskaper:</h3>
                                    <p style={{marginBottom:30,marginTop:10}}>Linoleum som golvbeläggning har många fördelar:</p>
                                    
                                        <strong>1. </strong>Det är hållbart och fjädrande och framförallt extremt tryckbeständigt. Det elastiska materialet är till exempel lämpligt för stolhjul. Tillfälliga deformationer uppstår under tryckbelastningar, men dessa går snabbt tillbaka. Täckningen är också skonsam mot lederna, varm mot fötterna och halksäker. Den hälsosamma levande naturprodukten används också ofta i skolor, dagis och sjukhus och är lätt att ta hand om.<br/>
                                        <strong>2. </strong>Andra egenskaper: linoljegolv är flamskyddsmedel, hämmar fotfallsljud, laddas inte elektriskt (antistatisk effekt) och har till och med en antibakteriell effekt på grund av den oxiderade linoljan (linoxin). De gör också poäng med sin mycket goda färgfasthet – även när de utsätts för solljus – och är okänsliga för oljor, fetter och de flesta andra kemiska belastningar. Du bör dock undvika att använda starkt alkaliska rengöringsmedel (lut) för underhåll.<br/>
                                        <strong>3. </strong>Lämplig för trappor.<br/>
                                        <strong>4. </strong>Lämplig för golvvärme (när den är helt bunden)<br/>
                                        <strong>5. </strong>80% från förnybara råvaror, biologiskt nedbrytbara.<br/>
                                    
                                    <h3 style={{marginBottom:30,marginTop:30}}>Nackdelar:</h3>
                                    
                                        <strong>1. </strong>Linoleum är dock ganska olämpligt för våtrum. Det naturliga materialet är känsligt för fukt och kan ruttna eller svälla som trä när det utsätts för överdriven fukt<br/>
                                        <strong>2. </strong>Den här egenskapen indikerar också en fördel med materialet. Eftersom gammalt linoleum är biologiskt nedbrytbart kan det komposteras.<br/>
                                        <strong>3. </strong>En slöja av mognad kan utvecklas.<br/>
                                    
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

export default linoleumgolv;
