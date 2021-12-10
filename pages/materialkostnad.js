import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import blogImg from "../assets/images/blog/Materialk.webp";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid"
import Head from "next/head";

const materialkostnad = () => {
  return (
    <Layout pageTitle="materialkostnad">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="materialkostnad" crumbTitle="materialkostnad" />
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
                        <h2 className="title">Materialkostnad – Alternativa golv/trall-material till trädäck, altan, uteplats</h2>
                        <div className="mb-30">
                          <p>Tycker du att det är svårt välja mellan ett traditionellt trädäck och underhållsfri komposit trädäck? Fullt förståeligt, det är ofta ett svårt beslut. Å ena sidan är vanliga trädäck traditionellt billigare att köpa och montera, men dyra och tids/arbetskrävande att underhålla. Komposit (WPC) trädäck från Green Plank är lite dyrare att köpa, men över tid sparar du både pengar och tid på grund av att materialet knappt behöver underhållas.</p>
                          <h3 className="mb-30 mt-30">Så vilken typ av trädäck passar just dig, ditt hem och din plånbok ?</h3>
                          <p className="mb-30 mt-30">Totalkostnaden mellan de två alternativen kommer att vara den avgörande faktorn, inköpspris och fortlöpande underhåll. Green Plank® underhållsfritt trädäck/utedäck har en ökande efterfrågan trots ett högre inköpspris, än traditionella trädäck. Green Plank® träkomposit väljs ofta på grund av en materialets långa livslängd (totalekonomi), dess tålighet och smidiga montering. Men största avgörande faktorn är att du sparar mycket tid, pengar och kraft på det lilla underhåll som krävs.</p>
                          <p className="mb-30 mt-30">Green Plank® träkomposit (WPC) är lättskötta terassgolv/trädäck, räcken, staket/plankor och fasadbeklädnad, som är tillverkade av en homogen blandning av naturmaterial – trä- och plast- fiber som är ett miljövänligt alternativ, med fördelar som hållbarhet, färgbeständighet och minskat underhåll. Green Plank® träkomposit, kräver varken slipning, målning, betsning eller oljning. Det enda underhåll som behövs är en tvätt då och då, för borttagande av ytlig mögelpåverkan och annan smuts, alltså en normal städning. Green Plank® träkomposit kostar lite mer än traditionella trädäck, men i det långa loppet lönar det sig. Du eliminerar det årliga underhållet, och behovet av att byta ut röt-, svamp- och insektsangripna brädor försvinner helt.</p>
                          <h4 className="mb-30 mt-30">MILJÖVÄNLIGT</h4>
                          <p className="mb-30 mt-10">Allt material är återvunnet från kasserade trä- och plast- föremål. Green Plank® komposit innehåller INGA träskyddsmedel, formaldehyd, arsenik eller liknande (vilket tryckimpregnerat gör). Trots det är Green Plank® komposit terassgolv/trädäck beständigt mot röta och svampangrepp.</p>
                          <p className="mb-30 mt-10">Green Plank® komposit träkomposit är ett snyggt, hållbart och lättskött alternativ till traditionella material. Det finns två typer av Green Plank® komposittrallbrädor, ihåliga eller massiva profiler.</p>
                          <h4 className="mb-30 mt-30">Installationskostnad</h4>
                          <p className="mb-30 mt-10">Kostnad för installation av däck beror på vilken typ av material som ska användas och om du anlitar en entreprenör eller monterar däcket själv. Kostnaden för underkonstruktionen bör vara densamma för både komposittrall och traditionellt trä. Installation av komposittrall från Green Plank® kostar ca 25% mer än installation av traditionella trädäck.</p>
                          <p className="mb-30 mt-10">Installationskostnader för alla däck är angivna för grundmodeller utan övriga tillval som exempelvis dekoration och belysning som höjer installationskostnaderna.</p>
                          <h3 className="mb-30 mt-30">FÖRDELAR MED ATT ANVÄNDA GREEN PLANK® UNDERHÅLLSFRIA KOMPOSITTRALL PRODUKTER</h3>
                          <Grid container spacing={3}>
                            <Grid item xs={6} sm={6}>
                              
                                <strong>1. </strong>Vattenavvisande<br/>
                                <strong>2. </strong>Tål tufft klimat<br/>
                                <strong>3. </strong>Underhållsfritt<br/>
                                <strong>4. </strong>Enkel rengöring<br/>
                                <strong>5. </strong>Hög halksäkerhet<br/>
                                <strong>6. </strong>Dimensionsstabil<br/>
                                <strong>7. </strong>Frostsäker<br/>
                                <strong>8. </strong>Luktar inte/giftfri<br/>
                                <strong>9. </strong>Håller länge<br/>
                                <strong>10. </strong>Rostar inte<br/>
                              
                            </Grid>
                            <Grid item xs={6} sm={6}>
                              
                                <strong>11. </strong>Står emot insektsangrepp<br/>
                                <strong>12. </strong>Rötsäker<br/>
                                <strong>13. </strong>Utmärkta värmeegenskaper<br/>
                                <strong>14. </strong>Antistatisk<br/>
                                <strong>15. </strong>Stort utbud av färger och modeller<br/>
                                <strong>16. </strong>Fri från formaldehyd<br/>
                                <strong>17. </strong>UV resistent<br/>
                                <strong>18. </strong>Miljövänlig<br/>
                                <strong>19. </strong>100% återvinningsbar<br/>
                              
                            </Grid>
                          </Grid>


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

export default materialkostnad;
