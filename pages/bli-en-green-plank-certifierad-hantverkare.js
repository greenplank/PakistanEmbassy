import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BrandCarousel from "../components/brand-carousel";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BliCertifieradHantverkare = () => {
  return (
    <>
      <Head>
        <title>Bli en Green Plank certifierad</title>
        <meta name="title" content="Bli en Green Plank certifierad hantverkare - GreenPlank.se" />
        <meta name="description" content="Vårt professionella installationsprogram delar avancerad installationsteknik bland skickliga installatörer" />
      </Head>
      <Layout pageTitle="Bli en Green Plank certifierad">
        <HeaderTwo />
        <PageHeader title="Bli-en-green-plank-certifierad-hantverkare" crumbTitle="bli-en-certifierad" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Gå med i vårt team av certifierade installatörer</h2>
                <div className="mb-30">
                  <p>På Green Plank handlar det om partnerskap. Vår verksamhet bygger er!</p>
                  <p className="mb-30 mt-30">Upptäck hur Green Plank kan stärka ert företag och er marknadsandel med våra banbrytande marknadsföringsverktyg, praktisk utbildning och support. Bli proffset på komposit i ert samhälle idag!</p>
                  <h3 className="mb-30 mt-30">Ett lojalitetsprogram som faktiskt hjälper ert företag</h3>
                  <p className="mb-30 mt-30">Green Plank är ett av världens främsta varumärken inom komposit och erbjuder belöningar för affärs byggande till sina välkvalificerade partners. Green PlankPro hittar en installatör nära er och gör det enkelt att öka ert företags exponering med ett anpassningsbart marknadsföringsprogram och vinna över kunder med våra miljövänliga, högkvalitativa, långvariga produkter med lågt underhåll.</p>
                  <p className="mb-30 mt-30">Fem enkla steg för att bli certifierad Green Plank Installatör.</p>

                  <strong>1. </strong>Skicka dina kontaktuppgifter till oss via ansökningsformulär
                  <br />
                  <strong>2. </strong>Gå med i ett träningspass om Green Plank Green installatörs Lojalitetsprogram
                  <br />
                  <strong>3. </strong>installera tre Green Plank-däck inom 12 månader efter det att du lämnat in din ansökan och registrera dessa projekt på GreenPro.GreenPlank.eu
                  <br />
                  <strong>4. </strong>En Green Plank-representant kommer att inspektera ett av de tre senaste projekt för korrekt installation av Green Plank-produkter.
                  <br />
                  <strong>5. </strong>Er företagskontaktinformation kommer att delas på vår webbsida “Hitta installatör”.
                  <br />


                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Silver</h3>
                        <p className="text-center">Build 3 Green Plank decks within 12 months of submitting your application and register those projects on GreenPro.GreenPlank.com</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Gold</h3>
                        <p className="text-center">Bygg 6 Green Plank däck inom 12 månader efter det att du lämnat in din ansökan och registrera dessa projekt på GreenPro.GreenPlank.com
                          Delta i ett gratis träningspass</p>
                      </blockquote>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <blockquote className="blockquote mb-30 mt-30">
                        <h3 className="mb-30 mt-30 text-center">Platinum</h3>
                        <p className="text-center">Bygg 12 Green Plank-däck inom 12 månader efter det att du lämnat in din ansökan och registrera dessa projekt på GreenPro.GreenPlank.com
                          Delta i ett gratis träningspass</p>
                      </blockquote>
                    </Grid>
                  </Grid>


                  <p className="mb-30 mt-30">*Delta i en kostnadsfri produktutbildning vartannat år för att behålla medlemsnivån. För att bli Green Installer behöver du en ansvarsförsäkring och undertecknar Green Installer-avtalet.</p>

                  <div >
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Green Plank lojalitetsprogramsfördelar*</th>
                          <th>Silver</th>
                          <th>Guld</th>
                          <th>Platinum</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Prioriterat samtal från Green Plank kundsupport</td>
                          <td>Next day</td>
                          <td>Next day</td>
                          <td>Same day</td>
                        </tr>
                        <tr>
                          <td>Prioriterad teknisk support</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Enkel garantiregistrering</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Hitta en installatörs hänvisning på Green Plank webbplatser **</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>Premium plats</td>
                        </tr>
                        <tr>
                          <td>Lojalitetspoäng för varje projekt du registrerar</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Godkända arbetskläder för installatörer</td>
                          <td></td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Rabatt</td>
                          <td>10%</td>
                          <td>15%</td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td>Gratis bilutsmycknad</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                        <tr>
                          <td>Månatligt nyhetsbrev och erbjudanden</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <strong>1.</strong>*Villkor gäller.
                  <br />
                  <strong>2.</strong>*Minst 3 projekt med Green Plank-produkter som ska göras per år och delta i en gratis produktutbildning vartannat år.
                  <br />

                  <h3 className="mb-30 mt-30">Intresserad av att bli en Green Plank certifierad <strong>”Green Installatör”?</strong>
                  </h3>
                  <p className="mb-30 mt-30">Vi skulle gärna ha dig med i vårt team! Klicka på knappen nedan och fyll i registreringsformuläret tillsammans med en kort sammanfattning av vem ni är och er erfarenhet av utomhusdäck, staket och fasadbyggnad.</p>

                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default BliCertifieradHantverkare;
