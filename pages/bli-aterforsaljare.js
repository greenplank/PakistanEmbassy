import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliAterforsaljare = () => {
  return (
    <>
      <Head>
        <title>Bli Aterforsaljare</title>
        <meta name="title" content="Bli distributör för komposit produkter i världsklass - GreenPlank.se" />
        <meta name="description" content="Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc.Bli distributör eller återförsäljare av Green Plank Premium Quality hållbar komposittrall, fasadbeklädnad, staket, plankor, plattor etc." />
      </Head>
      <Layout pageTitle="Bli Aterforsaljare">
        <HeaderTwo />
        <PageHeader title="Bli-Aterforsaljare" crumbTitle="bli-aterforsaljare" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Är du intresserad av att bli återförsäljare av Green Plank® miljövänliga träkomposit produkter ?</h2>
                <div className="mb-30">
                  <p>Efterfrågan på Green Plank produkter (Trä-Plast Komposit, WPC) har ökat. Därför har möjligheten för Grossister och Återförsäljare att samarbeta med oss, också öppnats. Oavsett stort eller litet företag, så har Green Plank ett säljkoncept, som är utformat just för Er.</p>
                  <p className="mb-30 mt-30">Som återförsäljare av Green Planks produkter har du tillgång till det mest omfattande utbudet av Trä-Plast Komposit (WPC) – produkter som finns på marknaden. Såsom WPC, Trädäck, Räcken, Plank, Staket, Fasadbeklädnad, Takplattor.</p>
                  <p className="mb-30 mt-30">Oavsett vilket säljkoncept du väljer från Green Plank får du:</p>
                  <strong>1. </strong>Full tillgång till branschens mest omfattande utbud av Trä-Plast Kompositmaterial (WPC).<br />
                  <strong>2. </strong>Generösa villkor för varuprover / utställningar
                  <br />
                  <strong>3. </strong>Registrera ert företag på vår webbsida
                  <br />
                  <strong>4. </strong>Attraktiva distributionsrabatter
                  <br />
                  <strong>5. </strong>Fullständig tillgång till Green Planks – medier, marknadsförings och PR-material
                  <br />
                  <h3 className="mb-30 mt-30">Hur blir jag återförsäljare?</h3>
                  <p className="mb-30 mt-30">Om du är intresserad av att bli återförsäljare av Green Planks produkter, är det mycket lätt att komma igång. För att hjälpa dig med dina PR-insatser, marknadsföring, har du full tillgång till vårt omfattande sortiment av marknadsföringsmaterial, såsom broschyrer, varuprover, bärbara skärmar och anpassat marknadsföringsmaterial.

                    Det finns två (2) grundalternativ för att bli återförsäljare av Green Plank-produkter</p>
                  <h4 className="mb-30 mt-30">Lagerhållande återförsäljare/grossist</h4>

                  <strong>1.</strong>Inköp och lagerhållning av Green Planks produkter i eget lager.
                  <br />
                  <strong>2.</strong>Konstant lagerhållning av minimum 1000m2.
                  <br />
                  <strong>3.</strong>Exponerar och visar upp ett antal av Green Planks produkter.
                  <br />
                  <strong>4.</strong>Aktivt bearbetar marknaden / kunderna med Green Planks produkter.
                  <br />

                  <h4 className="mb-30 mt-30">Icke lagerhållande återförsäljare</h4>
                  <ul>
                    <strong>1.</strong>Behovsbeställning (styckeorder)
                    <br />
                    <strong>2.</strong>Aktivt arbetar med marknadsföring och PR av Green Planks produkter (WPC)
                    <br />
                    <strong>3.</strong>Tar emot kundordrar och beställer hos Green Plank.
                    <br />
                  </ul>
                  <p className="mb-30 mt-30">För att snabbt kunna hantera din förfrågan, ber vi dig att skicka din förfrågan på  info@GreenPlank.eu.</p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>

    </>);
};

export default BliAterforsaljare;
