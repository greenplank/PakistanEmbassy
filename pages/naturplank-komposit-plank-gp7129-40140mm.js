import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/plankor/GP7129/image.webp";

import Head from "next/head";
import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";
import pdfimg5 from "../assets/images/projects/greenplank-tds-composite-technical-data-sheet-1.jpg";
import Footer from "../components/footer";

const naturplankkompositplankagp7129 = () => {
  return (
    <Layout pageTitle="naturplank-komposit-plank-gp7129-40140mm">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="naturplank-komposit-plank-gp7129-40140mm" crumbTitle="gp7129" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <div className="page-wrapper pb-40 pt-40">
                    {/*Smart Classic section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">

                                {/*==============  Star Naturplank  Section-1 content ====================*/}
                                <div className="col-lg-12 col-12 mb-80 pl-30 pl-sm-15 pl-xs-15">
                                    <div className="project-details">
                                        <h2>NATURPLANK™ Komposit plank – GP7129 – det gröna alternativet</h2>
                                        <strong>hållbart träalternativ med oändliga kreativa och designmöjligheter – PVC-fri!</strong>
                                        <div class="et_pb_text_inner">
                                            <div class="ce_text block">

                                                <strong>Vackert realistiska och mycket praktisk med en tidlös kvalitet NATURPLANK™ komposit plankor är ett idealiskt val av landskapsarkitekter och byggare för att maximera livslängden för elementen i landskapet.</strong>
                                                <p>
                                                    Green Plank NATURPLANK™ högpresterande naturfibrer kompositplanka GP7129 är ett lågt underhållsalternativ till lövved, den har använts i ett brett spektrum av miljöer inklusive strandpromenader, broar, kustbryggor, offentliga parker, utomhusmatsalar, fritidsområden, skolor och företagsgrunder etc.
                                                </p>
                                                <p>
                                                    Också känd som WPC, trä-plast-komposit, naturfibrer komposit eller komposit, är denna supertåliga komposittavla, som uteslutande distribueras av Green Plank, består av naturliga trä- / risskalfiber och polymerer (återvunnen plast) för att få en komposit med större styrka och hållbarhet än traditionellt trä. Detta ger det utmärkta motståndet mot sol, frost, regn och plötsliga temperaturförändringar.
                                                </p>
                                                <p>
                                                    Precis som äkta träplankor kan våra NATURPLANK™ GP7129 icke-spårade tunga däckskivor / kompositplankor slipas eller sågas till önskad form utan att förlora kompositskivans verkliga träeffekt.
                                                </p>
                                                <div>
                                                    <ul>
                                                        <li><strong>Premiumkvalitet</strong> – Beprövade nordiska kvalitetsplankor för hårt väder och grönare levande.</li>
                                                        <li><strong>Praktisk</strong> –  Perfekt kombination av estetik och praktik med en naturlig trä-look.</li>
                                                        <li><strong>Exceptionellt lågt underhåll </strong>–  Idealisk lämpad för nordiska väderförhållanden med minimal blekning, lång livslängd och minimalt underhåll.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===============  End of Naturplank Section-1 content  =================*/}

                                {/*==============  Star Naturplank Section-2 content  ====================*/}
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
                                                                <td align="left"> halkmotståndig slät yta,slående utseende efterliknar exotiska, tropiska lövträ.</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Storlek:</strong></td>
                                                                <td align="left">ca. 23 * 150 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Längd:</strong></td>
                                                                <td align="left">ca. 3.6 m</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Vikt:</strong></td>
                                                                <td align="left">ca. 7.65 kg / m</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Regelavstånd:</strong></td>
                                                                <td align="left">60 cm c/c för kommersiell användning</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
                                {/*===============  End of Naturplank Section-2 content  =============*/}

                                {/*===============  Star Naturplank Section-6 content  ====================*/}
                                <div className="col-12 mb-30 mt-80" >
                                    <h2>
                                        Ladda ner Pdfs</h2>
                                    <hr />

                                    <Grid container spacing={3}>
                                        <Grid item xs={6} sm={2}>
                                            <a target="_blank" href="/pdfs/Broschyr-SV.pdf">
                                                <img src={pdfimg1} className="img-fluid" alt="" />
                                            </a>
                                        </Grid>
                                        <Grid item xs={6} sm={2}>
                                            <a target="_blank" href="/pdfs/plankor/Green-Plank-Kompositbrador-Installeringsanvisning.pdf">
                                                <img src={pdfimg3} className="img-fluid" alt="" />
                                            </a>
                                        </Grid>
                                        <Grid item xs={6} sm={2}>

                                        </Grid>

                                    </Grid>
                                </div>
                                {/*====================  End of Naturplank Section-6 content  =============*/}


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

export default naturplankkompositplankagp7129;
