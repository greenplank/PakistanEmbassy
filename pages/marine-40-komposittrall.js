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
                          <h2>MARINE 40??? Komposittrall</h2>
                          <strong>Ger sk??nheten i det praktiska ??? PVC-fri!</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>MARINE 40??? komposittrall g??r sk??nheten praktiskt ??? PVC-fri! Samtida stil som skapar ett stort och varaktigt intryck, MARINE 40??? terrassgolv ??r vackert realistiska och mycket praktiska med en tidl??s kvalitet.</strong>
                              <p>
                                Green Plank MARINE 40??? Komposittrall av Naturfiber ??r konstruerade f??r att h??lla vackert fr??n installation under alla ??rstider i ditt d??cks liv. V??rdesmedvetna hus??gare v??ljer MARINE??? 40 f??r sitt traditionella, naturliga tr??liknande utseende och l??ga underh??ll. Med ett s?? ??verraskande prisv??rt alternativ finns det helt enkelt ingen anledning att n??ja sig med f??rgning, t??tning, sp??gor och konstant underh??ll.</p>
                              <p>H??g glidbest??ndig, fin, r??fflad yta i europeisk stil ger en h??rlig filigran-look och m??jligg??r bra dragkraft i v??ta omr??den som runt pooler, de ??r s??kra att g?? p?? med bara f??tter.
                                Precis som ??kta tr??skivor kan v??rt MARINE 40??? -kompositbr??dor slipas eller s??gas till vilken ??nskad form som helst utan att tappa t??ckbr??dans ??kta tr??effekt.</p>
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong>????? Bepr??vad nordisk kvalitet f??r h??rt v??der och gr??nare levande.</li>
                                  <li><strong>Enhetlighet</strong>?????  HidLoc??? dolda f??stelement s??kerst??ller en sl??t och enhetlig yta som ??r s??ker att g?? p??.</li>
                                  <li><strong>Komplimerande tillbeh??r</strong> Komplettera dina dr??muteplatser med v??ra kompletterande t??ckbr??dor av komposit ??? den perfekta matchen f??r din h??gpresterande MARINE 40 ???- komposittrall.</li>
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
                                      <td align="left">Slipresistenta r??fflade och ribbade, sl??ende utseende
                                        emulerar exotiska, tropiska l??vtr??; v??ndbara br??dor</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 19 * 146 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>L??ngd:</strong></td>
                                      <td align="left">ca. 4.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>??tg??ng:</strong></td>
                                      <td align="left">ca. 6.70 meter f??r 1 m??</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 3.60 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavst??nd:</strong></td>
                                      <td align="left">40 cm c/c f??r bostadsapplikationer</td>
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
                                    <a target="_blank" href="/bestall-prov" className="thm-btn">best??ll prov</a>
                                  </Grid>
                                  <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/Marine40???/marine-40-swedish.pdf" className="thm-btn">installationsguide</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/Marine40???/marine-40-swedish-with-aluminum.pdf" className="thm-btn" >installation av aluminium</a>
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
                        <h3>VISA F??RGTRENDS - ingrodd med naturlig och distinkt karakt??r</h3>
                        <hr />
                        <Grid container spacing={3}>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor5} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Strandgr??</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Tr??kol</h4>
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
                                <h3>F??rgval</h3>
                                <p>
                                  Studio fotografering och / eller din surfings enhet kanske inte ger en exakt bild av f??rgerna. F??r att se f??rgerna personligen, v??nligen beg??r gratis prover.
                                </p>
                                <h3>Naturlig sk??nhet</h3>
                                <p>
                                  V??ra produkter ??r designade f??r att se ut som naturligt tr?? och kan ha svag f??rg / textur och skuggnings variationer fr??n br??de till br??da. F??rg variationen p??verkar inte p?? n??got s??tt produktens prestanda.</p>
                                <h3>Beh??ll sk??nheten</h3>
                                <p>
                                  Alla yttre ytor samlar smuts, damm och f??roreningar och kr??ver reng??ring. Det ??r n??dv??ndigt att reng??ra ditt komposit trall med j??mna mellanrum f??r att h??lla den s?? vacker som den dag du installerade det.</p>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>P??litlig h??llbarhet, ??verl??gsen kvalitet</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>Installerad med HidLoc??? dolda f??stelement f??r att skapa enhetlig yta, vilket g??r det s??krare och mer bekv??mt f??r familjer med barn och husdjur.</li>
                                  <li><strong>2. </strong>Tr??f??rgade f??rger skapar ett ??kta kornm??nster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.</li>
                                  <li><strong>3. </strong>Utm??rkande inlay design, stil och f??rgalternativ</li>
                                  <li><strong>4. </strong>Ingen ??rlig f??rgning, t??tning eller m??lning kr??vs</li>
                                  <li><strong>5. </strong>Exceptionell motst??ndskraft mot UV-ljus och blekning av f??rger</li>
                                  <li><strong>6. </strong>H??g glidmotst??nd ger en s??ker yta, ??ven i v??ta f??rh??llanden</li>
                                  <li><strong>7. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.</li>
                                  <li><strong>8. </strong>Fri fr??n giftiga tillsatser</li>
                                  <li><strong>9. </strong>L??mplig f??r privat sektor</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

                      {/*====================  Star Smart Classic Section-5 content ====================*/}
                      <div className="col-12 mb-80">
                        <h3>TILLBEH??R</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART ??? -t??cknings tillbeh??r utvidgar dina horisonter ytterligare, s?? att du kan bygga ut distinkta och f??rtjusande funktioner i ditt SMART ??? -trall som f??rb??ttrar b??de dess sk??nhet och funktionalitet. Fr??n F-trim och L-trim till stige r??relser, ventilerade aluminium lister, trall pedaler, balk, etc., h??r ??r alla trall delar du beh??ver f??r att slutf??ra ditt SMART ??? trall projekt.</p>

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
                            <a target="_blank" href="/pdfs/Marine40???/marine-40-swedish.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Green-Plank-Marine-Decking-System-Installation-Guide-2019.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Marine40???/marine-40-swedish-with-aluminum.pdf">
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
