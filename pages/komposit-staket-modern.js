import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/staket_system/Modern/image.webp";
import Image1 from "../assets/images/products/innerPages/staket_system/Modern/image4.webp";
import Image2 from "../assets/images/products/innerPages/staket_system/Modern/image3.webp";
import Image3 from "../assets/images/products/innerPages/staket_system/Modern/image1.webp";
import Image4 from "../assets/images/products/innerPages/staket_system/Modern/image2.webp";

import Imagecolor1 from "../assets/images/colors/novofence-modern/Beach-Grey.png";
import Imagecolor2 from "../assets/images/colors/novofence-modern/Charcoal.png";

import Head from "next/head";
import Imagesurface from "../assets/images/surface/Novoclad-8.png";
import Imagesurface2 from "../assets/images/surface/Novofence-Modern-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Footer from "../components/footer";

const kompositstaketmodern = () => {
  return (
    <Layout pageTitle="komposit-staket-modern">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Komposit-staket-modern" crumbTitle="komposit-staket-modern" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper section-space--inner--120">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Staket Modern Section-1 content ============*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>NOVOFENCE ™ Horisontellt Komposit staket – Modern™</h2>
                          <strong>enkel design och estetisk look – använd din fantasi – PVC-fri!</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>En enkel att bygga utan underhåll, högkvalitativ, anpassad staket för att möta dina specifika behov. Den här moderna stilen lantstaket med liggande brädor skapar en fantastisk modern gräns till din egendom. Om man vill har insynsskydd kan brädorna överlappar på motstående sida.</strong>
                              <p>
                                Bra staket gör goda grannar. Novofence™ Modern™ slitstark horisontell avskärmning / staket kommer att förbättra din trädgård och värdet för ert hem. Modern™ lameller av skärmning / staket är idealiska som ett alternativ till fasta staketpaneler i högblåsiga områden eftersom de tillåter luft att passera genom dem.
                              </p>
                              <p>
                                Novofence™ Modern™ staket system är extremt mångsidigt och kan fungera som ett subtilt tillägg eller ett uttalande stycke i alla bostads- eller kommersiella utomhusområden. Förmågan hos vår komposit staket att motstå de tuffaste väderförhållandena – och motstå termiter – gör det också till ett fantastiskt, kostnadseffektivt alternativ till användning av träskärmar och staketprodukter.
                              </p>
                              <p>
                                Modern™ komposit staket ger ett vackert, unikt, lågt underhållsalternativ till trä- och vinylstaket. Våra komposit staketskivor och stolpar är konstgjorda för att se ut som äkta trä utan krav på oljning, målning eller tätning.
                              </p>

                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong> – Beprövad nordisk kvalitet för hårt väder och grönare levande.</li>
                                  <li><strong>Lågt underhåll</strong> –   Med tiden kräver Green Plank staket mindre underhåll och produktersättning än trä eller vinyl.</li>
                                  <li><strong>Förstärkta stolpar och räls</strong>–  Högkvalitativ, lågt underhållsstark ram av aluminium + kompositstolpar och horisontella rostfritt stål + kompositskenor.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Staket Modern Section-1 content  ===========*/}

                      {/*====================  Star Staket Modern Section-2 content  =============*/}
                      <div className="col-lg-12 mb-80">
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
                              <div className="project-information mb-30">
                                <h3>Produktinformation</h3>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td align="left"><strong>Yta:</strong></td>
                                      <td align="left"> Slät borstad med trätonade och lyxiga brokiga färger</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 25 * 135 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 1.8 m,   3.6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Åtgång:</strong></td>
                                      <td align="left">5 – 12 stolpar</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 2.66 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">150 cm c/c för bostadsapplikationer*</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* </div> */}
                              <div className="row mt-20 mb-20">

                                <Grid container spacing={2}>
                                  <Grid item xs={6} sm={4}>
                                    <img src={Imagesurface} />
                                  </Grid>
                                  <Grid item xs={6} sm={4}>
                                    <img src={Imagesurface2} />
                                  </Grid>
                                </Grid>

                              </div>
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
                      {/*====================  End of Staket Modern Section-2 content  ============*/}

                      {/*=============  Star Staket Modern Section-3 content  ====================*/}
                      <div className="col-12 mb-80">
                        <h3>VISA FÄRGTRENDS - ingrodd med naturlig och distinkt karaktär</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Beach Grey</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Charcoal</h4>
                            </div>
                          </Grid>

                        </Grid>
                      </div>
                      {/*====================  End of Staket Modern Section-3 content  ===========*/}

                      {/*====================  Star Staket Modern Section-4 content ==========*/}
                      <div className="col-12 mb-80">
                        <h2>Staketdelar</h2>
                        <hr />
                        <p className="mb-40">Green Plank NOVOFENCE™ -Tillbehör för staket i komposit utvidgar dina horisonter ytterligare, så att du kan bygga distinkta och förtjusande funktioner i ditt NOVOFENCE ™ -komposit staket som förbättrar både skönheten och funktionaliteten. Från aluminiumstolpar, stolpehattar, skenor till stolparna, staketfästena etc., här är alla staketet delar du behöver för att slutföra dina NOVOFENCE™ Staket projekt.</p>


                      </div>
                      {/*==============  End of Star Staket Modern Section-4 content  =========*/}

                      {/*====================  Start of Tillbehor Section-4.1 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                <img src={Image1} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>1.</strong>
                                    Pulverlackerade stolpar
                                  </li>
                                  <li>
                                    <strong>2.</strong>Aluminium + kompositstolpe
                                  </li>
                                  <li>
                                    <strong>3.</strong>Basplattor av metall
                                  </li>
                                  <li>
                                    <strong>4.</strong>Komposit staketplank
                                  </li>
                                  <li>
                                    <strong>5.</strong>Ändlock för staketplank
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.1 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.2 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Användning:</strong>
                                    Ändlock används för att täta ändarna på ihåliga kärnstaket för att ge din Modern ™ Composite Fencing en professionell färdig look.
                                    Ändlock skyddar staketbrädor från att skräp tränger in.
                                  </li>
                                  <li>
                                    <strong>Förpackning:</strong>Låda
                                  </li>
                                  <li>
                                    <strong>Innehåll:</strong>25 Ändlock
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Komposit
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                <img src={Image2} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.2 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.3 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">
                                <img src={Image3} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Användning:</strong>
                                    Med träets skönhet och hållbarheten hos aluminium + komposit, Modern ™ Stolpe garanterar varaktig hållbarhet med lågt underhåll.
                                  </li>
                                  <li>
                                    <strong>Storlek:</strong>ca. 80 * 80 mm
                                  </li>
                                  <li>
                                    <strong>Längd:</strong>ca. 2.0 m
                                  </li>
                                  <li>
                                    <strong>Yta:</strong>Rillad borstad med träfärgade och lyxiga brokiga färger
                                  </li>
                                  <li>
                                    <strong>Vikt:</strong>ca. 2.34 kg / m
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Hållbar komposithylsa över aluminiumhylsa
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.3 content =========*/}

                      {/*====================  Start of Tillbehor Section-4.4 content =========*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="project-information mb-20">
                                <ul>
                                  <li>
                                    <strong>Användning:</strong>
                                    Basplattor av metall finns i två typer, vilket ger säkra monteringsalternativ för Novofence ™ Private-systemet.
                                    Förankringsplattan har ett betonguppsättningsben som ligger under flänsen för att sätta i betong när du häller fot, medan basplattan är fixerad genom fyra borrhål och kan monteras på betong- och träbänk, uteplatser etc.
                                  </li>
                                  <li>
                                    <strong>Storlek 1:</strong>ca. 86*86*400 mm
                                  </li>
                                  <li>
                                    <strong>Storlek 2:</strong>ca. 86*86*700 mm
                                  </li>
                                  <li>
                                    <strong>Vikt:</strong>ca. 1.70 kg / pc,   ca. 2.70 kg / pc
                                  </li>
                                  <li>
                                    <strong>Material:</strong>Pulverlackad rostfritt stål
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-20">
                              <div className="single-gallery-project">
                                <div className="single-gallery-project__image">

                                <img src={Image4} className="img-fluid" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Tillbehor Section-4.4 content =========*/}


                      {/*==========  Star Staket Modern Section-5 content ================*/}
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
                                  <li><strong>1. </strong>Verkligt fullständigt integritetsstaket med rika naturliga färger</li>
                                  <li><strong>2. </strong>Träfärgade färger skapar ett äkta kornmönster som gör att du känner dig stolt över att välja ett hållbart och hållbart material för ditt projekt.</li>
                                  <li><strong>3. </strong>Board-on-board-stil ger estetisk appell</li>
                                  <li><strong>4. </strong>Ingen årlig färgning, tätning eller målning krävs</li>
                                  <li><strong>5. </strong>Exceptionell motståndskraft mot UV-ljus och blekning av färger</li>
                                  <li><strong>6. </strong>Horisontella staketpaneler ger ett vackert utbud av utomhusestetik</li>
                                  <li><strong>7. </strong>Extremt låg vattenabsorption</li>
                                  <li><strong>8. </strong>Fri från giftiga tillsatser</li>
                                  <li><strong>9. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.</li>
                                  <li><strong>10. </strong>Lämplig för offentlig och privat sektor</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*===========  End of Staket Modern Section-5 content  ===============*/}

                      {/*============  Star Staket Modern Section-6 content ================*/}
                      <div className="col-12 mb-80">
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/2IPWj7OjYCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                          </Grid>
                        </Grid>
                      </div>
                      {/*=============  End of Star Staket Modern Section-6 content  ========*/}

                      {/*==============  Star Staket Modern Section-7 content  ============*/}
                      <div className="col-12 mb-30 mt-40" >
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
                            <a target="_blank" href="/pdfs/NovofenceModern™/Green-Plank-Modern-Installeringsanvisning.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          
                          <Grid item xs={6} sm={2}>

                          </Grid>

                        </Grid>
                      </div>
                      {/*==============  End of Staket Modern Section-7 content  ============*/}


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

export default kompositstaketmodern;
