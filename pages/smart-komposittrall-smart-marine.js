import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";

import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/smartmarine/BeachGrey_Thumbnail.webp";
import Head from "next/head";
import Imagecolor1 from "../assets/images/colors/smart_marine/Beach-Grey.png";
import Imagecolor2 from "../assets/images/colors/smart_marine/Chocolate.png";
import Imagecolor3 from "../assets/images/colors/smart_marine/Teak.png";
import Imagecolor4 from "../assets/images/colors/smart_marine/Charcoal.png";


import Imagesurface from "../assets/images/surface/smart_marine/Smart-Marine-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const smartmarine = () => {
  return (
    <Layout pageTitle="smart-komposittrall-smart-marine">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="smart-komposittrall-smart-marine" crumbTitle="smart-marine" />
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
                          <h2>SMART??? Komposittrall ??? Smart Marine???</h2>
                          <strong>Otroligt val med otrolig sk??nhet</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>SMART ??? Komposit trall ??r ett utm??rkt val f??r familjer p?? grund av det unika Not och Spont systemet och den gap fria ytan. Det ??r designat f??r maximal h??llbarhet. Den motst??r blekning, f??rgning, m??gel och kommer inte att ruttna, spricka eller varpa. Den ??r ocks?? insekt s??ker och splint fri, vilket g??r det s??krare och bekv??mare f??r familjer med barn och husdjur.</strong>
                              Med en sl??t och elegant yta skapar SMART Marine ??? komposit trall ett j??mnare, naturligt snyggt landskap. SMART Marine ??? Komposit trall ??r s??kra att g?? p?? med bara f??tter.
                              V??r SMART??? Naturel??? trall ??r inspirerad av naturliga mineraler och jord pigment. F??rg paletten ??r rik, levande och f??redras av hem ??gare och arkitekter ??ver andra d??ck material. Varje noggrant formulerade nyans inneh??ller attraktiva multi kromatiska toner och strimmor.
                              SMART??? Naturel??? Komposit trall ??r installerade utan clips och f??stes p?? reglarna med f??r fabricerade h??l.
                              Genom att anv??nda SMART ??? komposit trall kan du skapa en helt st??ngd terrass yta som inte till??ter smuts att falla ner eller ogr??s att v??xa upp.
                              <div>
                                <ul>
                                  <li><strong>Premiumkvalitet</strong>????? Bepr??vad nordisk kvalitet f??r h??rt v??der och gr??nare levande.</li>
                                  <li><strong>Inga klips Clips</strong>????? Du beh??ver inga klips ( clips )f??r att montera v??r Smart??? Komposit med Not och Spont.</li>
                                  <li><strong>Enhetlighet??</strong>??? V??r komposit Not och Spont trall ger mycket enhetliga och sl??ta ytor.</li>
                                  <li><strong>Enkel installation</strong>????? Det ??r ocks?? enkelt att installera v??r Komposit Not och Spont trall, plankan klickar enkelt p?? plats utan oro ??ver j??mnt avst??nd mellan br??dorna.</li>
                                  <li><strong>F??rfabrikerade h??l??</strong> ( f??r fabrikerade h??l )??? V??ra Not och Spont trall kommer med f??rfabrikerade h??l, s?? att du enkelt och enkelt kan s??kra skivorna p?? plats utan risken f??r att v??xla eller f??rflytta dig s?? att du f??r en smidig, skruvfri ( skruv fri ) finish.</li>
                                  <li><strong>Komplimerande</strong> ( kompletterande ) tillbeh??r????? Komplettera dina dr??m uteplatser med v??ra ventilerade kl??dsel och skydd ??? den perfekta matchen f??r din h??gpresterande SMART ???- komposit trall.</li>
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
                                      <td align="left">Rich, wood-toned colors, slip-resistant</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Storlek:</strong></td>
                                      <td align="left">ca. 22 * 138 mm</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>L??ngd:</strong></td>
                                      <td align="left">ca. 2.8 m | 3.8 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>??tg??ng:</strong></td>
                                      <td align="left">ca. 6.45 meters for 1 m??</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 3.45 kg / m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavst??nd:</strong></td>
                                      <td align="left">50 cm c/c for residential applications*</td>
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
                                  <a target="_blank" href="/bestall-prov" className="thm-btn" >best??ll prov</a>
                                  </Grid>
                                  <Grid item xs={6} sm={3} lg={6}>
                                    <a target="_blank" href="/pdfs/SmartMarine/smartMarineswedish.pdf" className="thm-btn"  >installationsguide</a>
                                  </Grid>
                                  <Grid item xs={8} sm={6} lg={8}>
                                    <a target="_blank" href="/pdfs/SmartMarine/smart-Marine-swedish.pdf" className="thm-btn" >installation av aluminium</a>
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
                              <img src={Imagecolor1} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Molnigt Gr??tt</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor2} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Ip??</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor3} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Amerikansk valn??t</h4>
                            </div>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <div className="single-gallery-project__image">
                              <img src={Imagecolor4} className="img-fluid" alt="" />
                              <h4 className="mt-20 text-center">Strandgr??</h4>
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
                                <h2 className="mb-40 mt-20"><strong>Var smart ??? K??p SMART???</strong></h2>
                                <ul>
                                  <li><strong>1. </strong>T??tt, enhetlig yta, vilket g??r den s??krare och bekv??mare f??r familjer med barn och husdjur.</li>
                                  <li><strong>2. </strong>Flerf??rgade strimmor i varje br??da skapar ett ??kta korn m??nster som inbjuder dig att koppla av och njuta av ditt personliga tropiska paradis.</li>
                                  <li><strong>3. </strong>Utm??rkande inslag av design, stil och f??rg alternativ</li>
                                  <li>4.Ingen ??rlig f??rgning, t??tning eller m??lning kr??vs</li>
                                  <li><strong>4. </strong>Exceptionell motst??ndskraft mot UV-ljus och blekning av f??rger</li>
                                  <li><strong>5. </strong>H??g glid motst??nd ger en s??ker yta, ??ven i v??ta f??rh??llanden</li>
                                  <li><strong>6. </strong>Inga fixerings klipp kr??vs</li>
                                  <li><strong>7. </strong>Fri fr??n giftiga tillsatser</li>
                                  <li><strong>8. </strong>L??mplig f??r offentlig och privat sektor</li>
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
                        <h3>TILLBEH??R</h3>
                        <hr />
                        <p className="mb-40">Green Plank SMART ??? -t??cknings tillbeh??r utvidgar dina horisonter ytterligare, s?? att du kan bygga ut distinkta och f??rtjusande funktioner i ditt SMART ??? -trall som f??rb??ttrar b??de dess sk??nhet och funktionalitet. Fr??n F-trim och L-trim till stige r??relser, ventilerade aluminium lister, trall pedaler, balk, etc., h??r ??r alla trall delar du beh??ver f??r att slutf??ra ditt SMART ??? trall projekt.</p>

                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/hqPj65OSR0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <iframe width="360" height="315" src="https://www.youtube.com/embed/JsJv1k0dTco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                            <a target="_blank" href="/pdfs/SmartMarine/smartMarineswedish.pdf">
                              <img src={pdfimg2} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/Smart-Installation-SV-1.pdf">
                              <img src={pdfimg3} className="img-fluid" alt="" />
                            </a>
                          </Grid>
                          <Grid item xs={6} sm={2}>
                            <a target="_blank" href="/pdfs/SmartMarine/smart-Marine-swedish.pdf">
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

export default smartmarine;
