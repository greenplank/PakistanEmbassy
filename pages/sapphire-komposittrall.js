import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/SAPPHIREKomposittrall.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const sapphirekomposittrall = () => {
  return (
    <Layout pageTitle="sapphire-komposittrall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="sapphire-komposittrall" crumbTitle="sapphire-komposittrall" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pt-40 pb-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-60 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>SAPPHIRE™ Komposittrall</h2>
                          <strong>För hemmet är där du känner dig bekväm och avslappnad</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Inspirerad av det traditionella trädäcket som kännetecknas av estetik, hållbarhet och funktionalitet.</strong>
                              <p>Med ett traditionellt trädekorationsutseende och lång livslängd är vårt SAPPHIRE™ komposittrall ett attraktivt alternativ till träbeläggningsmaterial. Med ett så överraskande prisvärt alternativ finns det helt enkelt ingen anledning att nöja sig med färgning, tätning, splinter och konstant underhåll.</p>
                              <p>Hög glidbeständiga eleganta, ribbade / räfflade borstade ytor möjliggör bra dragkraft i våta områden som runt pooler, de är säkra att gå på barfota.</p>
                              <p>Med en estetisk skandinavisk designutseende har vårt Sapphire™ -komposittrall varit de bästsäljande däckbrädorna i mer än tio år och är fortfarande idag.</p>
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> – Beprövad nordisk kvalitet för hårt väder och grönare levande.</li>
                                  <li><strong>Enhetlighet </strong>– HidLo™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.</li>
                                  <li><strong>Komplimerande tillbehör</strong> Komplettera dina drömuteplatser med våra täckbrädor – den perfekta matchen för ditt högpresterande SAPPHIRE ™ – Komposittrall.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-1 content  ====================*/}

                      {/*====================  Star Smart Classic Section-2 content  ====================*/}
                      <div className="col-lg-12 mb-60">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">

                                <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Yta:</strong></td>
                                      <td align="left">Halkmotståndig, räfflade ytor, autentiska och naturliga träfärger; vändbara brädor</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 25 * 150 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 4.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Åtgång:</strong></td>
                                      <td align="left">ca. 6.4 meter för 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 2.82 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">50 cm c/c för bostadsapplikationer</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row section-space--top--60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={4} lg={6}>
                                  <a target="_blank" href="/bestall-prov" className="thm-btn" >beställ prov</a>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-2 content  ====================*/}


                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-60">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Produktinformation</strong></h2>
                                <h3>Färgval</h3>
                                <p>
                                  Studio fotografering och / eller din surfings enhet kanske inte ger en exakt bild av färgerna. För att se färgerna personligen, vänligen begär gratis prover.
                                </p>
                                <h3>Naturlig skönhet</h3>
                                <p>
                                  Våra produkter är designade för att se ut som naturligt trä och kan ha svag färg / textur och skuggnings variationer från bräde till bräda. Färg variationen påverkar inte på något sätt produktens prestanda.</p>
                                <h3>Behåll skönheten</h3>
                                <p>
                                  Alla yttre ytor samlar smuts, damm och föroreningar och kräver rengöring. Det är nödvändigt att rengöra ditt komposit trall med jämna mellanrum för att hålla den så vacker som den dag du installerade det.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Pålitlig hållbarhet, överlägsen kvalitet</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Installerad med HidLoc™ dolda fästelement för att skapa enhetlig yta, vilket gör det säkrare och mer bekvämt för familjer med barn och husdjur.</li>
                                  <li><strong>2. </strong>Träfärgade färger skapar ett äkta kornmönster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.</li>
                                  <li><strong>3. </strong>Utmärkande inlay design, stil och färgalternativ</li>
                                  <li><strong>4. </strong>Ingen årlig färgning, tätning eller målning krävs</li>
                                  <li><strong>5. </strong>Exceptionell motståndskraft mot UV-ljus och blekning av färger</li>
                                  <li><strong>6. </strong>Hög glidmotstånd ger en säker yta, även i våta förhållanden</li>
                                  <li><strong>7. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.</li>
                                  <li><strong>8. </strong>Fri från giftiga tillsatser</li>
                                  <li><strong>9. </strong>Lämplig för privat sektor</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      <div className="col-12 mb-20">
                        <h3>TILLBEHÖR</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART ™ -täcknings tillbehör utvidgar dina horisonter ytterligare, så att du kan bygga ut distinkta och förtjusande funktioner i ditt SMART ™ -trall som förbättrar både dess skönhet och funktionalitet. Från F-trim och L-trim till stige rörelser, ventilerade aluminium lister, trall pedaler, balk, etc., här är alla trall delar du behöver för att slutföra ditt SMART ™ trall projekt.</p>

                      </div>
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}


                    </div>
                  </div>
                </div>
                {/*Projects section end*/}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Layout>
  );
};

export default sapphirekomposittrall;
