import React from "react";
import Layout from "../components/layout";
import Grid from "@material-ui/core/Grid"
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Garantier = () => {
  return (
    <>
      <Head>
        <title>Garantier</title>
        <meta name="title" content="Garantier - GreenPlank.se" />
        <meta name="description" content="Alla komposit produkter från Green Plank har branschledande garantitäckning. Se nivåerna av stöd som varje produkt har här.." />
      </Head>
      <Layout pageTitle="Garantier">
        <HeaderTwo />
        <PageHeader title="Garantier" crumbTitle="Garantier" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="block_title">Prestanda du kan räkna med!</h2>
                <div className="mb-30">
                  <p className="mt-30 mb-30">Med Green Planks branschledande garantier kan du vara säker på att din kunds vackra utomhusutrymme kommer att förbli så.
                  </p>
                  <h3 className="mt-30 mb-30">Green Plank Residential begränsad garanti
                  </h3>
                  <p className="mt-30 mb-30">Green Plank är stolt över våra naturfibrer kompositprodukter och vi är inte rädda för att visa det. Alla Green Plank produkter – trall, fasadbeklädnad och staket – täcks av en begränsad Residential garanti för att skydda mot termiter, delning, förfall, röta och splittring.</p>
                  <div className="row mt-30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/grantier/GREEN-PLANK-WARRANTY-swedish-.pdf" target="_blank" className="thm-btn" >Ladda Ner Garanti för privatperson</a>
                      </Grid>
                    </Grid>
                  </div>
                  <h3 className="mb-30 mt-30">Green Plank Fläck & Blekna Begränsad garanti
                  </h3>
                  <p className="mb-30 mt-30">Förutom den Residential garanti, Green Plank samsträngsprutad komposittrall och ASA belagda fasadbeklädnadsprodukter omfattas också av en 25 år Fläck & Blekna Prestanda garanti. Fläck & Blekna -garantin ger ytterligare försäkran om att de angivna produkterna är beständiga mot fläckar och blekning när de är korrekt installerade.</p>
                  <div className="row mt-30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/grantier/STAIN-AND-FADE-PERFORMANCE-LIMITED-WARRANTY-translated-and-corrected.pdf" target="_blank" className="thm-btn" >Ladde Ner FÄRG- OCH FADE</a>
                      </Grid>
                    </Grid>
                  </div>
                  <h3 className="mb-30 mt-30">Green Plank Commercial begränsad garanti
                  </h3>
                  <p className="mb-30 mt-30">Denna garanti gäller för Green Plank – trall och fasader som applicerad i en kommersiell applikation.</p>
                  <div className="row section-space--top--30">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={8}>
                        <a href="/pdfs/grantier/Green-Plank-kommersiell-begransad-garanti-Translated-and-Corrected.pdf" target="_blank" className="thm-btn" >Ladde Ner kommersiell begränsad garanti</a>
                      </Grid>
                    </Grid>
                  </div>
                  <p className="mb-30 mt-30">För teknisk support eller har frågor om garantin:</p>
                  <p className="mb-30 mt-30">E-post: <a href="mailto:info@greenplank.se">info@greenplank.se</a></p>
                  <p>Tel:<a href="tel:+46 40 450 560"> +46 40 450 560</a></p>
                  <p className="mb-30 mt-30">Kom ihåg, Vänligen behålla en kopia av ditt inköpsbevis vilket krävs för att lämna in en fordran.</p>
                  <h3 className="mb-30 mt-30">GARANTI REGISTRERING
                  </h3>
                  <p className="mb-30 mt-30">För att validera din garanti måste du fylla i och posta (<a href="/pdfs/grantier/GREEN-PLANK-WARRANTY-REGISTRATION-CARD.pdf" target="_blank">DOWNLOAD registreringskortet</a>) inom 90 dagar efter installationen. En kopia av kvittot från en auktoriserad Green Plank AB, Green Plank® Trall -återförsäljare eller entreprenör samt ett foto av projektet krävs.</p>
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

export default Garantier;
