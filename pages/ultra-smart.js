import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/Komposittrall/ultrasmart.webp";


import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";

import Footer from "../components/footer";

const ultrasmart = () => {
  return (
    <Layout pageTitle="ultra-smart">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="Ultra-smart" crumbTitle="ultra-smart" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              <div className="page-wrapper pb-40 pt-40">
                {/*Smart Classic section start*/}
                <div className="project-section">
                  <div className="container">
                    <div className="row">

                      {/*====================  Star Smart Classic Section-1 content ====================*/}
                      <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                        <div className="project-details">
                          <h2>ULTRA™ Smart</h2>
                          <strong>Med vår nya Smart Ultra får du en terrass som är 50% lättare och  25% starkare än tidigare modeller.</strong>
                          <div class="et_pb_text_inner">
                            <div class="ce_text block">

                              <strong>Smart Ultra är en solid profil tillverkad av träfiber och skum-PVC för en lätt och stark terrass som finns i två färger: Coffee Brown och Nordic Sand.</strong>
                              <div>
                                <ul>
                                  <li>ASA-beläggning gör den reptålig och färgfast.</li>
                                  <li>Inget underhåll brandmotstånd.</li>
                                  <li>Hög halksäkerhet och vi erbjuder 30 års garanti för slitage.</li>
                                  <li>Färgen bleknar inte med solljus och blir inte färgad av vin, olja, kaffe eller andra vätskor.</li>
                                </ul>
                                <p>Eftersom detta är en Green Plank Smart-produkt erbjuder den ett sömlöst utseende med tunga och spår som gör installationer upp till 60% snabbare än normalt kompositdäck.
                                  Den är installerad med 50 cm c/c och ger en mycket solid yta eftersom den låser ihop brädorna.</p>
                                <p>Ultra erbjuder en mycket halksäker yta och är helt vattentät vilket gör den mycket lämplig för våta områden som runt pooler eller nära vattendrag.</p>
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
                                      <td align="left">Skum PVC med träfiber.</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Längd:</strong></td>
                                      <td align="left">ca. 3 m | 6 m</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Vikt:</strong></td>
                                      <td align="left">ca. 10 kg.</td>
                                    </tr>
                                    <tr>
                                      <td align="left"><strong>Regelavstånd:</strong></td>
                                      <td align="left">Ingen färgförändring, ASA-kapslad <br/>(beläggning) 50 cc</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              
                            </div>

                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-2 content  ====================*/}

                      {/*====================  Star Smart Classic Section-4 content ====================*/}
                      <div className="col-lg-12 mb-80">
                        <div className="project-gallery-wrapper">
                          <div className="row">
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                              <div className="project-details">
                                <h2 className="mb-40 mt-20"><strong>Nyckelfunktioner av kompositdäck Ultra Smart
                                </strong></h2>
                                <ul>
                                  <li><strong>1. </strong>30 års garanti</li>
                                  <li><strong>2. </strong>Lätt och solid bräda</li>
                                  <li><strong>3. </strong> Fläckresistent, främst från vin och kaffe.</li>
                                  <li><strong>4. </strong>Sömlös yta med vårt patenterade click-system.</li>
                                  <li><strong>5. </strong>Ingen årlig målning, tätning eller oljning krävs.</li>
                                  <li><strong>6. </strong>Motstånd mot UV-ljus och färgblekning.</li>
                                  <li><strong>7. </strong>Fri från giftiga tillsatser.</li>
                                  <li><strong>8. </strong>upp till 60% snabbare installation jämnfört med traditionellt däck</li>
                                  <li><strong>9. </strong>WPC med träflisor</li>
                                  <li><strong>10. </strong>Välj den perfekta produkten för er.Beställ idag!</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6 col-mobile-6 mb-40 mt-20 pl-30 pl-sm-15 pl-xs-15">
                             
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*====================  End of Smart Classic Section-4 content  ====================*/}

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

export default ultrasmart;
