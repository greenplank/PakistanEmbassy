import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Såpa.webp";
import Footer from "../components/footer";
import Head from "next/head";

const sapaTrall = () => {
  return (
    <Layout pageTitle="sapa-trall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="sapa-trall" crumbTitle="sapa-trall" />
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
                                <h2 className="title">Såpa trall</h2>
                                <div className="mb-30">
                                    <p>Ett komposittrall ger ett naturligt och varmt intryck av ditt hem och din trädgård. Men för att den ska behålla sin känsliga färg är det viktigt att du tar hand om den korrekt. Det är ett måste att tvätta och olja eller lasra trädäck med jämna mellanrum. Varannan år räcker det vanligtvis om man bara tänker på hållbarhet. Om du å andra sidan vill ge den en fin glöd bör du utföra behandlingen en gång om året.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>Plankor kan tillverkas av alla typer av trä som kan skäras till önskad bredd utan att spricka. Torrt och dimensionellt stabilt trä är önskvärt för att erhålla en långvarig yta som är fri från förskjutning och fogar.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>I det klimat som råder i stora delar av Sverige tål uteplatsens trädäck och däck mycket. Genom att underhålla trädäcket förlänger du dess livslängd men håller det också estetiskt tilltalande. Vi ger tips om hur du underhåller, tvättar och ger din uteplats lite extra kärlek!</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Hur rengör jag däcket med terrass såpa?</h3>
                                    <p style={{marginBottom:30,marginTop:30}}>Det första du gör är att såpa skrubba trädäcket för att bli av med ingrain, och detta kräver en hink med vatten, miljövänlig såpa och en skrubbborste som passar både plånboken och miljön. Använd såpa när du rengör trall  på våren. Såpa uteplatsen eller trädäcket istället för att använda olja.</p>
                                    <p style={{marginBottom:30,marginTop:30}}>Med såpa får träet en mjuk och varm känsla och det får en fin grå finish. Samtidigt lockar inte såpa trall lika mycket pollen och föroreningar som en oljad vagn. Skölj ytorna med en vattenslang och skrubba lätt med såpavatten. Se till att träet alltid är fuktigt.</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Hur mår du då?</h3>
                                    <p style={{marginBottom:30,marginTop:30}}>När hela kroppen har rengjorts, skölj den med vatten och låt trädäcket torka några dagar i fint väder innan du behandlar det.</p>
                                    <h3 style={{marginBottom:30,marginTop:30}}>Hur såpskurar jag trallen?</h3>
                                    <p style={{marginBottom:30,marginTop:30}}>Börja med att sopa rent på trä komposittrall och se till att den är fri från smuts. Om det är mycket smutsig, kan en runda skura behövas innan tvålen.</p>
                                    
                                        <strong>1. </strong>Blanda tvål i en hink med ljummet vatten. Tre dl tvål per 10 liter vatten.<br/>
                                        <strong>2. </strong>Börja sedan skrubba vagnen med en grov skrubbborste. Var noga med att skrubba noggrant så att hela vagnen täcks av tvål. Om vissa ytor är kraftigt nedsmutsade kan de behöva en extra tvättrunda innan du tvålar vagnen.<br/>
                                        <strong>3. </strong>Låt sedan torka in, skölj inte av tvålen!<br/>
                                        <strong>4. </strong>Då kan du njuta av en vagn med en mjuk och varm känsla. Om en större effekt önskas, upprepa processen tills önskat resultat uppnås.<br/>
                                        <strong>5. </strong>Undvik att använda högtryckstvätt för din träterrass eftersom trycket kan skada fibrerna i träet.<br/>
                                   
                                    
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

export default sapaTrall;
