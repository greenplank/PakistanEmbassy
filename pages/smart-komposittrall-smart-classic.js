import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/smartclassic/smart_classic.jpg";

import Imagecolor1 from "../assets/images/colors/smart_classic/Smart-Cloudy-Grey.png";
import Imagecolor2 from "../assets/images/colors/smart_classic/Smart-Ipe.png";
import Imagecolor3 from "../assets/images/colors/smart_classic/Smart-Walnut.png";
import Imagecolor4 from "../assets/images/colors/smart_classic/Classic-Beach-Grey.png";
import Imagecolor5 from "../assets/images/colors/smart_classic/Classic-Chocolate.png";


import Imagesurface from "../assets/images/surface/smart_classic/Smart-Classic.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const smartclassic = () => {
  return (
    <Layout pageTitle="smart-komposittrall-smart-classic">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="smart-komposittrall-smart-classic" crumbTitle="smart-komposittrall-smart-classic" />
      <section className="blog-details pt-120 pb-40">
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
                          <h2>SMART™ Komposittrall – Smart Classic™</h2>
                          <strong>Otroligt val med otrolig skönhet</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>SMART ™ (komposittrall) komposit trall är ett utmärkt val för familjer på grund av det unika Not och Spont systemet och den gapfria ( gap fria ) ytan. Det är designat för maximal hållbarhet. Den motstår blekning, färgning, mögel och kommer inte att ruttna, spricka eller varpa. Den är också insektsäker (insekt säker) och splintfri ( splint fri ), vilket gör det säkrare och bekvämare för familjer med barn och husdjur.</strong>
                              Vårt SMART Classic ™- ( komposittrall) komposit trall är inspirerad av naturliga mineraler och jordpigment, med ett estetiskt tilltalande av kontinuerliga och texturerade spår, färgpaletten färg paletten är rik och livlig – och föredras av husägare och arkitekter framför andra trall material. Varje noggrant formulerade nyans innehåller attraktiva multikromatiska ( multi kromatiska ) toner och strimmiga. SMART Classic ™ ( komposittrall ) komposit trall skivor är säkra att gå på med bara fötter.
                              SMART Classic – komposit brädor installeras utan några klämmor och fästs på bjälkarna med skruvar genom de för konstruerade långa fixerings- och dräneringshålen.
                              Genom att använda SMART ™ komposit trall kan du skapa en helt stängd terrassyta som inte tillåter smuts att falla ner eller ogräs att växa upp.
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> – Beprövad nordisk kvalitet för hårt väder och grönare levande.</li>
                                  <li><strong>Inga klips Clips</strong> – Du behöver inga klips ( clips )för att montera vår Smart™ Komposit med Not och Spont.</li>
                                  <li><strong>Enhetlighet </strong>– Vår komposit Not och Spont trall ger mycket enhetliga och släta ytor.</li>
                                  <li><strong>Enkel installation</strong> – Det är också enkelt att installera vår Komposit Not och Spont trall, plankan klickar enkelt på plats utan oro över jämnt avstånd mellan brädorna.</li>
                                  <li><strong>Förfabrikerade hål </strong> ( för fabrikerade hål )– Våra Not och Spont trall kommer med förfabrikerade hål, så att du enkelt och enkelt kan säkra skivorna på plats utan risken för att växla eller förflytta dig så att du får en smidig, skruvfri ( skruv fri ) finish.</li>
                                  <li><strong>Komplimerande</strong> ( kompletterande ) tillbehör – Komplettera dina dröm uteplatser med våra ventilerade klädsel och skydd – den perfekta matchen för din högpresterande SMART ™- komposit trall.</li>
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
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                  {/* <img src="assets/img/projects/img12.PNG" className="img-fluid" alt="" /> */}
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
                                      <td align="left">Halkmotståndig, räfflade, rika, flerfärgade färger</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 22 * 152 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 2.8 m | 3.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Åtgång:</strong></td>
                                      <td align="left">ca. 6.5 meters for 1 m²</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 3.45 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">50 cm c/c för bostadsapplikationer</td>
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
                                    <a target="_blank" href="/bestall-prov" className="thm-btn" >beställ prov</a>
                                  </Grid>
                                  <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/smart-classic-deck-swedish.pdf" className="thm-btn"  >installationsguide</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/smart-classic-deck-swedish%20(1).pdf" className="thm-btn" >installation av aluminium</a>
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
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Molnigt Grått</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Ipé</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Amerikansk valnöt</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Strandgrå</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project">
                              <div className="single-gallery-project__image">
                                <img src={Imagecolor5} className="img-fluid" alt="" />
                                <h4 className="mt-20 text-center">Choklad</h4>
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
                                <h2 className="mb-40 mt-20"><strong>Var smart – Köp SMART™</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Tätt, enhetlig yta, vilket gör den säkrare och bekvämare för familjer med barn och husdjur.</li>
                                  <li><strong>2. </strong>Flerfärgade strimmor i varje bräda skapar ett äkta korn mönster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.</li>
                                  <li><strong>3. </strong>Utmärkande inslag av design, stil och färg alternativ</li>
                                  <li>4.Ingen årlig färgning, tätning eller målning krävs</li>
                                  <li><strong>4. </strong>Exceptionell motståndskraft mot UV-ljus och blekning av färger</li>
                                  <li><strong>5. </strong>Hög glid motstånd ger en säker yta, även i våta förhållanden</li>
                                  <li><strong>6. </strong>Inga fixerings klipp krävs</li>
                                  <li><strong>7. </strong>Fri från giftiga tillsatser</li>
                                  <li><strong>8. </strong>Lämplig för offentlig och privat sektor</li>
                                  <li><strong>9. </strong>Upp till 60% snabbare installation</li>
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
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/hqPj65OSR0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
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
                            <a target="_blank" href="/pdfs/smart-classic-deck-swedish.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Smart-Installation-SV-1.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/smart-classic-deck-swedish%20(1).pdf">
                              <img src={pdfimg4} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Datablad-Smart-Decking.pdf">
                              <img src={pdfimg5} className="img-fluid" alt="" />
                            </a>
                          </Grid>
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

export default smartclassic;
