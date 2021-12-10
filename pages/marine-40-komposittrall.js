import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from '@material-ui/core/Grid';
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";


import Image11 from "../assets/images/products/innerPages/Komposittrall/marine40/BeachGrey_Thumbnail.webp";

import Imagecolor1 from "../assets/images/colors/marine_40/Brazilian-Oak.png";
import Imagecolor2 from "../assets/images/colors/marine_40/teak.png";
import Imagecolor3 from "../assets/images/colors/marine_40/Chocolate.png";
import Imagecolor4 from "../assets/images/colors/marine_40/Charcoal.png";
import Imagecolor5 from "../assets/images/colors/marine_40/Beach-Grey.png";

import Imagesurface from "../assets/images/surface/marine_40/Marine40-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Footer from "../components/footer";

const marine40 = () => {
  return (
    <Layout pageTitle="marine-40-komposittrall">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="marine-40-komposittrall" crumbTitle="marine-40-komposittrall" />
      <section className="blog-details pt-40 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper section-space--inner--120">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>MARINE 40™ Komposittrall</h2>
                          <strong>Ger skönheten i det praktiska – PVC-fri!</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>MARINE 40™ komposittrall gör skönheten praktiskt – PVC-fri! Samtida stil som skapar ett stort och varaktigt intryck, MARINE 40™ terrassgolv är vackert realistiska och mycket praktiska med en tidlös kvalitet.</strong>
                              <p>
                                Green Plank MARINE 40™ Komposittrall av Naturfiber är konstruerade för att hålla vackert från installation under alla årstider i ditt däcks liv. Värdesmedvetna husägare väljer MARINE™ 40 för sitt traditionella, naturliga träliknande utseende och låga underhåll. Med ett så överraskande prisvärt alternativ finns det helt enkelt ingen anledning att nöja sig med färgning, tätning, spågor och konstant underhåll.</p>
                              <p>Hög glidbeständig, fin, räfflad yta i europeisk stil ger en härlig filigran-look och möjliggör bra dragkraft i våta områden som runt pooler, de är säkra att gå på med bara fötter.
                                Precis som äkta träskivor kan vårt MARINE 40™ -kompositbrädor slipas eller sågas till vilken önskad form som helst utan att tappa täckbrädans äkta träeffekt.</p>
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> – Beprövad nordisk kvalitet för hårt väder och grönare levande.</li>
                                  <li><strong>Enhetlighet</strong> –  HidLoc™ dolda fästelement säkerställer en slät och enhetlig yta som är säker att gå på.</li>
                                  <li><strong>Komplimerande tillbehör</strong> Komplettera dina drömuteplatser med våra kompletterande täckbrädor av komposit – den perfekta matchen för din högpresterande MARINE 40 ™- komposittrall.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-1 content  ====================*/}

                      {/*====================  Star Smart Classic Section-2 content  ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 section-space--bottom--20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
                                  <img src={Image11} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 section-space--bottom--20">
                              <div className="project-information">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Yta:</strong></td>
                                      <td align="left">Slipresistenta räfflade och ribbade, slående utseende
                                        emulerar exotiska, tropiska lövträ; vändbara brädor</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 19 * 146 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 4.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Åtgång:</strong></td>
                                      <td align="left">ca. 6.70 meter för 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 3.60 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">40 cm c/c för bostadsapplikationer</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row mt-40 mb-30">

                                <div className="row" style={{ marginTop: ".5em", marginRight: "8px", marginLeft: "4px" }}>
                                  <img src={Imagesurface} />
                                </div>


                              </div>
                              <div className="row mt-60">

                                <Grid container spacing={3}>
                                  <Grid item xs={6} sm={3} lg={4}>
                                    <a target="_blank" href="/bestall-prov" className="thm-btn">beställ prov</a>
                                  </Grid>
                                  <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/Marine40™/marine-40-swedish.pdf" className="thm-btn">installationsguide</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/Marine40™/marine-40-swedish-with-aluminum.pdf" className="thm-btn" >installation av aluminium</a>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-2 content  ====================*/}

                      {/*====================  Star Smart Classic Section-3 content  ====================*/}

                      <div className="col-12 mb-80">
                        <h3>VISA FÄRGTRENDS - ingrodd med naturlig och distinkt karaktär</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor5} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Strandgrå</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Träkol</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Choklad</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Teak</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project">
                              <div className="single-gallery-project__image">
                                <img src={Imagecolor1} className="img-fluid" alt="" />
                                <h4 className="mt-20 text-center">Brasiliansk ek</h4>
                              </div>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                          </Grid>
                        </Grid>
                      </div>

                      {/*====================  End of Smart Classic Section-3 content  ====================*/}

                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-80">
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
                      <div className="col-12 mb-80">
                        <h3>TILLBEHÖR</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART ™ -täcknings tillbehör utvidgar dina horisonter ytterligare, så att du kan bygga ut distinkta och förtjusande funktioner i ditt SMART ™ -trall som förbättrar både dess skönhet och funktionalitet. Från F-trim och L-trim till stige rörelser, ventilerade aluminium lister, trall pedaler, balk, etc., här är alla trall delar du behöver för att slutföra ditt SMART ™ trall projekt.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={5} style={{ marginRight: "3em" }}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/SO9_1Pm42Rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={5} style={{ marginRight: "3em" }}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={6} sm={4}>
                          </Grid>
                        </Grid>
                      </div>
                      {/*====================  End of Star Smart Classic Section-5 content  ===============*/}

                      {/*====================  Star Smart Classic Section-6 content  ====================*/}
                      <div className="col-12 mb-30 mt-80" >
                        <h3>
                          Ladda ner Pdfs</h3>
                        <hr />

                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Broschyr-SV.pdf">
                              <img src={pdfimg1} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Marine40™/marine-40-swedish.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Marine40™/marine-40-swedish-with-aluminum.pdf">
                              <img src={pdfimg4} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          {/* <Grid item xs={6} sm={2}>
                                            <a target="_blank" href="assets/pdfs/Datablad-Smart-Decking.pdf">
                                                <img src="assets/img/projects/greenplank-tds-composite-technical-data-sheet-1.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </Grid> */}
                          <Grid item xs={6} sm={2}>

                          </Grid>

                        </Grid>
                      </div>
                      {/*====================  End of Smart Classic Section-6 content  ====================*/}


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

export default marine40;
