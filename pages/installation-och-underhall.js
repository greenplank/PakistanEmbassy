import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

import image1 from "../assets/images/installation/smart-Marine-swedish-01.jpg";
import image2 from "../assets/images/installation/greenplank-brochure-title-1.jpg";
import image3 from "../assets/images/installation/smart-classic-deck-swedish-01.jpg";
import image4 from "../assets/images/installation/smart-regular-Swedish-01.jpg";
import image5 from "../assets/images/installation/smart-Capped-swedish-01.jpg";
import image6 from "../assets/images/installation/img_265949.png";
import image7 from "../assets/images/installation/0001-scaled.jpg";
import image8 from "../assets/images/installation/0001-2-scaled.jpg";
import image9 from "../assets/images/installation/img_265949.png";

const InstallationUnderhall = () => {
  return (
    <>
      <Head>
        <title>Installation och underhåll</title>
        <meta name="title" content="Installation och underhåll | Hjälp och guider - GreenPlank.se" />
        <meta name="description" content="Green Plank installationsguider och video kan hjälpa dig att korrekt installera kompositplattor, klädsel, stängsel och räcke med lätthet." />
      </Head>
      <Layout pageTitle="installation-och-underhall">
        <HeaderTwo />
        <PageHeader title="Installation-och-underhall" crumbTitle="installation-och-underhall" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>HUR MAN INSTALLERAR KOMPOSITT DÄCK, FASADBEKLÄDNAD, STAKET OCH PLATTOR.
                </h2>
                <div className="mb-30">
                  <p>Säkerställ att ert kompositgolv, fasad eller staket ser ut och fungerar precis som det ska.</p>
                  <p className="mb-30 mt-30">Korrekt installation och underhåll är avgörande för att få er vision att leva upp och säkerställa era produkters naturliga skönhet och livslängd. Följande installationsguider och underhållsinstruktioner hjälper er att komma igång medan våra instruktionsvideor ger en nära bild av grunderna. Oavsett om ni är en professionell installatör, anläggningschef eller privatperson så har Green Plank resurser för att hjälpa er under varje steg i installations- och underhållsprocessen.</p>
                  <p className="mb-30 mt-30">Välj vilken typ av installations- och underhållsinstruktioner ni är intresserad av så att ni kan se dem på skärmen eller ladda ner dem till er dator. Om ni inte hittar den information som ni söker efter, besök vår FAQs-sida eller skicka ett e-postmeddelande till info@GreenPlank.se</p>

                  <div class="table-1">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th style={{ textAlign: "left" }}>Produkt</th>
                          <th style={{ textAlign: "left" }}>Enkel Installationsguide</th>
                          <th style={{ textAlign: "left" }}>Detaljerad Installationsguide</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Marine</td>
                          <td><a target="_blank" href="/pdfs/SmartMarine/smart-Marine-swedish.pdf"><img class="wp-image-10058 aligncenter" src={image1} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Datablad-Smart-Decking.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "left" }}>Smart™ Classic</td>
                          <td><a target="_blank" href="/pdfs/smart-classic-deck-swedish.pdf"><img class="wp-image-10058 aligncenter" src={image3} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Datablad-Smart-Decking.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Regular</td>
                          <td><a target="_blank" href="/pdfs/SmartRegular/smart-regular-Swedish.pdf"><img class="wp-image-10058 aligncenter" src={image4} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Datablad-Smart-Decking.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Smart™ Capped</td>
                          <td><a target="_blank" href="/pdfs/SmartCapped/smart-Capped-swedish.pdf"><img class="wp-image-10058 aligncenter" src={image5} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Datablad-Smart-Decking.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>DECK CARE AND CLEANING</td>
                          <td><img class="wp-image-10063 aligncenter" src={image6} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/GreenPlank-deck-care-and-cleaning-guide.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 40™</td>
                          <td><a target="_blank" href="/pdfs/Marine40™/marine-40-swedish.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Marine 60™</td>
                          <td><a target="_blank" href="/pdfs/Marine60™/marine-60-swedish.pdf"><img class="wp-image-10063 aligncenter" src={image7} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Classic™ Komposittrall</td>
                          <td><a target="_blank" href="/pdfs/ClassicKomposittrall/classic-deck-swedish.pdf"><img class="wp-image-10063 aligncenter" src={image8} alt="" width="83" height="115" /></a></td>
                          <td><a target="_blank" href="/pdfs/ClassicKomposittrall/Green-Plank-Composite-Decking-hollow-boards-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>ENTRA™ Composite Decking</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/Green-Plank-Entra-Decking-System-Installation-Guide-2019.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>PRIMACAP™ Facade Cladding</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/Novoclad/Green-Plank-Primacap-Installeringsanvisning.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Private™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofencePrivate™/Green-Plank-Private-Installeringsanvisning.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Traditional™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofenceTraditional™/Green-Plank-Traditional-Installeringsanvisning.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>Novofence Modern™</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/NovofenceModern™/Green-Plank-Modern-Installeringsanvisning.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                        <tr>
                          <td>InstaClick™/EverTile™ Deck Tiles</td>
                          <td><img class="wp-image-10063 aligncenter" src={image9} alt="" width="18" height="18" /></td>
                          <td><a target="_blank" href="/pdfs/golvplattor/Green-Plank-kompositplattor-Monteringsguide.pdf"><img class="wp-image-10058 aligncenter" src={image2} alt="" width="83" height="115" /></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mb-30 mt-60">Green Plank SmartCap & Smart Wood Composite Decking with Tongue & Groove Installation Instructions – No clips required Green Plank (Rectangular) Wood Composite Decking Installation Instructions</p>
                  <h3 className="mb-30 mt-30">DISCLAIMER:</h3>
                  <p className="mb-30 mt-10">All contents, publications and literature on this page are for informational purposes only. These information should not be considered complete, up-to-date, and are not intended to be</p>
                  <h3 className="mb-30 mt-30">FRISKRIVNING:</h3>
                  <p className="mb-30 mt-10">Allt innehåll, publikationer och litteratur på denna sida är endast för informativt syfte. Denna information bör inte betraktas som fullständig, uppdaterad och är inte avsedd att användas i stället för ett besök, konsultation eller rådgivning från en licensierad professionell.</p>
                  <p className="mb-30 mt-10">Dessa publikationer och all litteratur som finns på denna webbplats är skyddad av upphovsrätt och tillstånd bör erhållas från utgivaren före reproduktion, lagring i ett hämtningssystem eller överföring i någon form eller på något sätt, elektroniskt, mekaniskt, fotokopiering, inspelning, eller liknande. Genom att ladda ner innehåll, publikationer och / eller litteratur från denna webbplats godkänner du de metoder som anges i användarvillkoren.</p>
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

export default InstallationUnderhall;
