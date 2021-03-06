import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';

import Image11 from "../assets/images/products/innerPages/staket_system/Traditional/image.webp";
import Image1 from "../assets/images/products/innerPages/staket_system/Traditional/image1.webp";
import Image2 from "../assets/images/products/innerPages/staket_system/Traditional/image2.webp";
import Image3 from "../assets/images/products/innerPages/staket_system/Traditional/image3.webp";
import Image4 from "../assets/images/products/innerPages/staket_system/Traditional/image4.webp";
import Image5 from "../assets/images/products/innerPages/staket_system/Traditional/image5.webp";


import Imagecolor1 from "../assets/images/colors/novofence-traditional/White-Grey.png";


import Head from "next/head";
import Imagesurface from "../assets/images/surface/Novofence-Traditional-8.png";

import pdfimg1 from "../assets/images/projects/greenplank-brochure-title-1.jpg";
import pdfimg2 from "../assets/images/projects/pic.png";
import pdfimg3 from "../assets/images/projects/pic1.png";
import pdfimg4 from "../assets/images/projects/swedish.png";

import Footer from "../components/footer";

const kompositstakettraditional = () => {
  return (
    <Layout pageTitle="komposit-staket-traditional">
      <HeaderTwo />
      <StickyHeader />
      <PageHeader title="komposit-staket-traditional" crumbTitle="komposit-staket-traditional" />
      <section className="blog-details pt-120 pb-40">
        <Container>
          <Row>
            <Col md={12} lg={12}>
            <div className="page-wrapper section-space--inner--120">
                    {/*Smart Classic section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">

                                {/*====================  Star Staket Traditional Section-1 content ============*/}
                                <div className="col-lg-12 col-12 section-space--bottom--80 pl-30 pl-sm-15 pl-xs-15">
                                    <div className="project-details">
                                        <h2>NOVOFENCE??? Komposit staket ??? Traditional???</h2>
                                        <strong>bra grannstaket med stil och styrka ??? PVC-fri!</strong>
                                        <div class="et_pb_text_inner">
                                            <div class="ce_text block">

                                                <strong>En enkel att bygga utan underh??ll, h??gkvalitativ, anpassad staket f??r att m??ta dina specifika behov. Den h??r stilen ser ut som ett integritetsstaket men m??jligg??r mer luftcirkulation.</strong>
                                                <p>
                                                    Traditional??? ??? ett idealiskt ???bra granne??? -staket har samma utseende p?? b??da sidor. Novofence??? Traditional??? slitstarka skuggboxdesign inkluderar en dubbel rad med plockar i komposit med l??gt underh??ll, en p?? varje sida av horisontella f??rst??rkta staketskenor (rostfritt st??l + komposit) som g??r mellan de f??rst??rkta staketstolparna (aluminium + komposit). De tv?? raderna med komposit plockv??gar ??r f??rskjutna s?? att utrymmena mellan plockarna p?? ena sidan av staketskenorna blockeras av plockarna p?? r??lsens andra sida. Utrymmet mellan raderna till??ter vind att bl??sa genom staketet, men utsikten genom st??ngslet ??r n??stan helt blockerad av staket.
                                                </p>
                                                <p>
                                                    Traditional??? komposit staket ger ett vackert, unikt, l??gt underh??llsalternativ till tr??- och vinylstaket. V??ra komposit staket br??dor ??r konstgjorda f??r att se ut som ??kta tr?? utan krav p?? oljning, m??lning eller t??tning.
                                                </p>

                                                <div>
                                                    <ul>
                                                        <li><strong>Premiumkvalitet</strong>????? Bepr??vad nordisk kvalitet f??r h??rt v??der och gr??nare levande.</li>
                                                        <li><strong>L??gt underh??ll</strong>?????   Med tiden kr??ver Green Plank staket mindre underh??ll och produkters??ttning ??n tr?? eller vinyl.</li>
                                                        <li><strong>F??rst??rkta stolpar och r??ls</strong>???  H??gkvalitativ, l??g underh??llsstark ram av aluminium + kompositstolpar och horisontella rostfritt st??l + kompositskenor.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*====================  End of Staket Traditional Section-1 content  ===========*/}

                                {/*====================  Star Staket Traditional Section-2 content  =============*/}
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
                                                <div className="project-information" >
                                                    <h3>Produktinformation</h3>
                                                    <table width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td align="left"><strong>Yta:</strong></td>
                                                                <td align="left"> Rillad borstad med tr??f??rgade och lyxiga brokiga f??rger</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Storlek:</strong></td>
                                                                <td align="left">ca. 10 * 115 mm</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>L??ngd:</strong></td>
                                                                <td align="left">ca. 1.8 m,   3.6 m</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>??tg??ng:</strong></td>
                                                                <td align="left">12 br??dor (1.8 m l??nga) anv??nds f??r 1.8 m??</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Vikt:</strong></td>
                                                                <td align="left">ca. 2.66 kg / m</td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"><strong>Stolpavst??nd:</strong></td>
                                                                <td align="left">60 cm c/c f??r bostadsapplikationer</td>
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
                                                        <Grid item xs={6} sm={3} lg={6}>
                                                            <a target="_blank" href="/bestall-prov" className="thm-btn" >best??ll prov</a>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/*====================  End of Staket Traditional Section-2 content  ============*/}

                                {/*=============  Star Staket Traditional Section-3 content  ====================*/}
                                <div className="col-12 mb-80">
                                    <h3>VISA F??RGTRENDS - ingrodd med naturlig och distinkt karakt??r</h3>
                                    <hr />
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} sm={2}>
                                            <div className="single-gallery-project__image">
                                                <img src={Imagecolor1} className="img-fluid" alt="" />
                                                <h4 className="mt-20 text-center">White Grey</h4>
                                            </div>
                                        </Grid>
                                        
                                    </Grid>
                                </div>
                                {/*====================  End of Staket Traditional Section-3 content  ===========*/}

                                {/*====================  Star Staket Traditional Section-4 content ==========*/}
                                <div className="col-12 mb-80">
                                    <h2>Staketdelar</h2>
                                    <hr />
                                    <p className="mb-40">Green Plank NOVOFENCE??? -Tillbeh??r f??r staket i komposit utvidgar dina horisonter ytterligare, s?? att du kan bygga distinkta och f??rtjusande funktioner i ditt NOVOFENCE ??? -komposit staket som f??rb??ttrar b??de sk??nheten och funktionaliteten. Fr??n aluminiumstolpar, stolpehattar, skenor till stolparna, staketf??stena etc., h??r ??r alla staketet delar du beh??ver f??r att slutf??ra dina NOVOFENCE??? Staket projekt.</p>


                                </div>
                                {/*==============  End of Star Staket Traditional Section-4 content  =========*/}

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
                                                            Pulverlackade stolphattar
                                                        </li>
                                                        <li>
                                                            <strong>2.</strong>Stolpe av komposit och aluminium
                                                        </li>
                                                        <li>
                                                            <strong>3.</strong>Kompositplank
                                                        </li>
                                                        <li>
                                                            <strong>4.</strong>Basplattor av metall
                                                        </li>
                                                        <li>
                                                            <strong>5.</strong>Skenor av komposit och aluminium
                                                        </li>
                                                        <li>
                                                            <strong>6.</strong>Staketkonsol med dubbla bultar
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
                                                            <strong>anv??nda sig av:</strong>
                                                            Med tr??ets sk??nhet och h??llbarheten hos aluminium + komposit, Traditional??? staketstolpe garanterar varaktig h??llbarhet med l??gt underh??ll.
                                                        </li>
                                                        <li>
                                                            <strong>Storlek:</strong>ca. 80 * 80 mm
                                                        </li>
                                                        <li>
                                                            <strong>L??ngd:</strong>ca. 2.0 m
                                                        </li>
                                                        <li>
                                                            <strong>Yta:</strong>Rillad borstad med tr??f??rgade och lyxiga brokiga f??rger
                                                        </li>
                                                        <li>
                                                            <strong>Vikt:</strong>ca. 2.34 kg / m
                                                        </li>
                                                        <li>
                                                            <strong>Material:</strong>Aluminiumk??rna med komposith??lje
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
                                                            <strong>Anv??ndning:</strong>
                                                            St??ngslingskonsol med dubbla skruvar g??r kopplingen mellan staket och stolpar enkel och stark.
                                                        </li>
                                                        <li>
                                                            <strong>Storlek:</strong>ca. 24 * 20.3 mm
                                                        </li>
                                                        <li>
                                                            <strong>L??ngd:</strong>ca. 1.76 m
                                                        </li>
                                                        <li>
                                                            <strong>Yta:</strong>Gr??/Svart matt yta
                                                        </li>
                                                        <li>
                                                            <strong>Vikt:</strong>ca. 0.42 kg / m
                                                        </li>
                                                        <li>
                                                            <strong>Material:</strong>Pulverlackad aluminium
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
                                                            <strong>Anv??ndning:</strong>
                                                            Dekorativ stolphatt f??r att d??lja ??ppningen till stolpen
                                                        </li>
                                                        <li>
                                                            <strong>Storlek:</strong>ca. 84 * 84 * 10 mm
                                                        </li>
                                                        <li>
                                                            <strong>Yta:</strong> Gr??/Svart matt yta
                                                        </li>
                                                        <li>
                                                            <strong>Vikt:</strong>ca. 0.38 kg / m
                                                        </li>
                                                        <li>
                                                            <strong>Material:</strong>Pulverlackad aluminium
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

                                {/*====================  Start of Tillbehor Section-4.5 content =========*/}
                                <div className="col-lg-12 mb-80">
                                    <div className="project-gallery-wrapper">
                                        <div className="row">
                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                <div className="single-gallery-project">
                                                    <div className="single-gallery-project__image">
                                                    <img src={Image5} className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-mobile-6 mb-20">
                                                <div className="project-information mb-20">
                                                    <ul>
                                                        <li>
                                                            <strong>Anv??ndning:</strong>
                                                            Dekorativ stolphatt f??r aluminiumstaket
                                                            Press fit design Skyddar stolpen fr??n att skr??p tr??nger in.
                                                        </li>
                                                        <li>
                                                            <strong>Storlek:</strong>ca. 84 * 84 * 10 mm
                                                        </li>
                                                        <li>
                                                            <strong>Yta:</strong> Matt gr??
                                                        </li>
                                                        <li>
                                                            <strong>Vikt:</strong>ca. 0.38 kg / m
                                                        </li>
                                                        <li>
                                                            <strong>Material:</strong>Pulverlackad aluminium
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*====================  End of Tillbehor Section-4.5 content =========*/}

                                {/*==========  Star Staket Traditional Section-5 content ================*/}
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
                                                        <li><strong>1. </strong>Verkligt fullst??ndigt integritetsstaket med rika naturliga f??rger</li>
                                                        <li><strong>2. </strong>Tr??f??rgade f??rger skapar ett ??kta kornm??nster som g??r att du k??nner dig stolt ??ver att v??lja ett h??llbart och h??llbart material f??r ditt projekt.</li>
                                                        <li><strong>3. </strong>Board-on-board-stil ger estetisk appell</li>
                                                        <li><strong>4. </strong>Ingen ??rlig f??rgning, t??tning eller m??lning kr??vs</li>
                                                        <li><strong>5. </strong>Exceptionell motst??ndskraft mot UV-ljus och blekning av f??rger</li>
                                                        <li><strong>6. </strong>Grannv??nlig design popul??r f??r delade linjer</li>
                                                        <li><strong>7. </strong>Extremt l??g vattenabsorption</li>
                                                        <li><strong>8. </strong>Fri fr??n giftiga tillsatser</li>
                                                        <li><strong>9. </strong>Kommer inte spricka, Flisa, Ruttna eller Vrida sig.</li>
                                                        <li><strong>10. </strong>L??mplig f??r offentlig och privat sektor</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*===========  End of Staket Traditional Section-5 content  ===============*/}

                                {/*============  Star Staket Traditional Section-6 content ================*/}
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
                                {/*=============  End of Star Staket Traditional Section-6 content  ========*/}

                                {/*==============  Star Staket Traditional Section-7 content  ============*/}
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
                                            <a target="_blank" href="/pdfs/NovofenceTraditional???/Green-Plank-Traditional-Installeringsanvisning.pdf">
                                                <img src={pdfimg3} className="img-fluid" alt="" />
                                            </a>
                                        </Grid>
                          
                                        <Grid item xs={6} sm={2}>

                                        </Grid>

                                    </Grid>
                                </div>
                                {/*==============  End of Staket Traditional Section-7 content  ============*/}


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

export default kompositstakettraditional;
