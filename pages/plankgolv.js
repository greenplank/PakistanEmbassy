import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Plank.webp";
import Footer from "../components/footer";
import Head from "next/head";

const plankgolv = () => {
  return (
    <Layout pageTitle="plankgolv">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Plankgolv" crumbTitle="plankgolv" />
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
                                <h2 className="title">Plank golv</h2>
                                <div className="desc section-space--bottom--30">
                                    <p>Ett plankgolv, även känt som ett remsgolv eller ett bältgolv, är ett trägolv av brädor, i rumslängder eller varierande längder. Det är den äldsta formen av trägolv, tillsammans med träbeläggningen (klickgolv) gjord av korta sektioner av träkorn.</p>
                                    <p  style={{marginBottom:30,marginTop:30}}>Plankor kan tillverkas av alla typer av trä som kan skäras till önskad bredd utan att spricka. Torrt och dimensionellt stabilt trä är önskvärt för att erhålla en långvarig yta som är fri från förskjutning och fogar.</p>
                                    <p  style={{marginBottom:30,marginTop:30}}>Traditionellt används massiva brädor med en tjocklek på cirka 21 till 40 mm och en bredd på 100 mm eller mer. Numera är golvbrädor vanligtvis försedda med tunga och spår, som fördelar punktbelastningar på flera angränsande golvbrädor, så att även tunnare brädor med en tjocklek på cirka 15 mm kan användas med tillräckligt stöd. Höjdskillnader på grund av snedvridning av träet kan inte heller inträffa.</p>
                                    <p  style={{marginBottom:30,marginTop:30}}>Idag är plankor också limmade i två eller flera lager som fanér eller limmat laminerat trä och kallas ofta lantbruksplankor eller parkettplankor.</p>
                                    <p  style={{marginBottom:30,marginTop:30}}>Tall, lärk, gran eller gran används mest som barrved. Omkring 1900 användes den importerade skogsgraden och Oregon-tall (Douglasgran) oftare i gamla byggnader. Högkvalitativa golv är gjorda av lövträ eller tropiska träslag.</p>
                                    <h3  style={{marginBottom:30,marginTop:30}}>Skötsel och rengöring av trägolvbrädorna:</h3>
                                    <p  style={{marginBottom:30,marginTop:30}}><strong>Hur man rengör och underhåller plankorna beror på golvet och dess yta:</strong></p>
                                    
                                        <strong>1. </strong><strong>Naturligt:</strong> Brädorna är öppna och kräver mycket vård, de får inte torkas våta. För att öka ytans motståndskraft bör oljeytan behandlas med en speciell föremålsolja efter noggrann rengöring.<br/>
                                        <strong>2. </strong><strong>Oljad och vaxad:</strong> Ytan är öppen, men kräver lite underhåll. Torka golvet med en fuktig trasa i riktning mot spannmålet för rutinmässig rengöring.<br/>
                                        <strong>3. </strong><strong>Oljat:</strong> Träet är nästan stängt och lätt att sköta<br/>
                                        <strong>4. </strong><strong>lackerad:</strong> Täckningen är sluten porer och nästan underhållsfri. Blanda varmt vatten med rengörings- och vårdprodukter för rengöring. Detta torkar golvet fuktigt. Intensiv rengöring krävs inte för målade ytor – tätningsmedlet tätar ytan helt tätt och smidigt.<br/>
                                  
                                    <h3  style={{marginBottom:30,marginTop:30}}>Träbeläggning</h3>
                                    <p  style={{marginBottom:30,marginTop:30}}>Träbeläggning, ibland även kallad huvud, slutkorn eller slutkornsträ, har en framträdande status bland alla trägolv. Till skillnad från parkett eller golvbrädor används ändkornytan som slitlager. Utsikten över de stående årringarna ger inte bara golven ett karakteristiskt och unikt utseende, träets korn ger också träets tekniska egenskaper som uppfyller de högsta kraven i alla avseenden.</p>
                                    <h4  style={{marginBottom:30,marginTop:30}}>En hållbar och robust golvbeläggning:</h4>
                                    <p  style={{marginBottom:30,marginTop:10}}>Många vittnesmål från historiska byggnader i städer som Graz, Dublin och Krakow vittnar om att trottoaren nästan är oförstörbar samtidigt. Under åren som följde krävdes de fastigheter som redan var efterfrågade om och om igen från golvet. Till exempel i storskalig industris storhetstid, då många tillverkare hade sina produktionshallar utrustade med träbeläggning. Golvet var särskilt populärt inom tung industri. Biltillverkare, gjuterier och stålverk bygger på dess fördelar.</p> 
                                    
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

export default plankgolv;
