import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logoDark from "../assets/images/logo-dark.png";
import Head from "next/head";
import img1 from "../assets/images/Untitled-1.webp"
import img2 from "../assets/images/69481518449927554-200x206.webp"
import img3 from "../assets/images/35521518781111316-200x206.webp"
import img4 from "../assets/images/43871518781118548-200x206.webp"

const Varkampanj = () => {
    return (
        <section className="about-one">
            <div className="main-header__two">
                <div className="main-header__top">
                    <Container>
                        <p>Award Winning Company</p>
                        <div className="main-header__social">
                            <a href="https://www.facebook.com/GreenplankSweden" aria-label="facebook">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://www.instagram.com/greenplank/?hl=en" aria-label="instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/greenplank" aria-label="twitter">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCxWdmtRk1tZ-lbHd0zpcQ6g" aria-label="youtube">
                                <i className="fab fa-youtube"></i>
                            </a>

                        </div>
                    </Container>
                </div>
                <div className="header-upper">
                    <Container>
                        <div className="logo-box">
                         
                                <a aria-label="logo image">
                                    <img src={logoDark} width="101" alt="" />
                                </a>
                           
                            <span className="fa fa-bars mobile-nav__toggler"></span>
                        </div>

                        <div className="header-info">
                            <div className="header-info__box">
                                <i className="azino-icon-email1"></i>
                                <div className="header-info__box-content">
                                    <h3>Email</h3>
                                    <p>
                                        <a href="mailto:ngill@greenplank.eu">ngill@greenplank.eu</a>
                                    </p>
                                </div>
                            </div>
                            <div className="header-info__box">
                                <i className="azino-icon-calling"></i>
                                <div className="header-info__box-content">
                                    <h3>Phone</h3>
                                    <p>
                                        <a href="tel:+0761734777">+0761734777</a>
                                    </p>
                                </div>
                            </div>
                            <div className="header-info__box">
                                <i className="azino-icon-address"></i>
                                <div className="header-info__box-content">
                                    <h3>Address</h3>
                                    <p>Sadelgatan 9, SE-213 77 Malmö, Sweden</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <Container>
                <Row style={{ marginBottom: "4em" }}>
                    <Col lg={12}>
                        <div className="row">
                            <div className="col-lg-12 col-12 order-1 order-lg-2">
                                <div className="blog-details col-12">
                                    <div className="blog-inner">
                                        <div className="container">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    {/* top bar left */}
                                                    <div className="top-bar-left-wrapper">
                                                        <h4 className="mb-80">Miljövanlig komposittrall, staket och fasad</h4>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 text-center">
                                                    {/* top bar left */}
                                                    <div className="top-bar-right-wrapper">
                                                        <h4 className="mb-80"><a href="/">Visa i webbläsaren</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="logo text-center mb-30">
                                            <a href="/">
                                                <img src={logoDark} className="img-fluid" alt="Logo" />
                                            </a>
                                        </div>
                                        <div className="media"><div className="image"><img src={img1} alt="" /></div></div>
                                        <div className="section-space--inner--40">
                                            <h2 className="mb-30 mt-30 text-center">Hej på dig !</h2>
                                            <hr style={{ backgroundColor: "#369956", width: "20", borderWidth: "0.2em", marginBottom: "70px" }} />
                                            <p className="mb-30 mt-30 text-center">Vi hoppas på att Covid-19 börjar försvinna snart så att vi kan sakta börja återgå till det normala. Vi vill då gärna försöka åka runt och besöka er för att diskutera mer om just vårt produktsortiment och se om ni eventuellt har några andra frågor eller funderingar!</p>
                                        </div>
                                        <div className="pt-60 pb-60">
                                            <div className="row">
                                                <div className="col-md-1 col-12">

                                                </div>
                                                <div className="col-md-2 col-12 section-space--top--20">
                                                    <a href="mailto:info@greenplank.se"><img src={img2} className="img-fluid" width="90px" alt="Image1" /></a>
                                                </div>
                                                <div className="col-md-8 col-12">
                                                    <h3 className=" mt-30"><a href={`${process.env.PUBLIC_URL}/resurser`}>Vi har uppdaterat vår Hemsida med massa nyheter!</a></h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-12">

                                                </div>
                                                <div className="col-md-9 col-12">
                                                    <p className="mb-10">Bland annat så har vi lagt till massor med teknisk information och resurser på greenplank.se/resurser</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-60 pb-60">
                                            <div className="row">
                                                <div className="col-md-1 col-12">

                                                </div>
                                                <div className="col-md-2 col-12 section-space--top--20">
                                                    <a href="mailto:info@greenplank.se"><img src={img3} className="img-fluid" width="90px" alt="Image1" /></a>
                                                </div>
                                                <div className="col-md-8 col-12">
                                                    <h3 className=" mt-30"><a href={`${process.env.PUBLIC_URL}/komposittrall`}>Komposittrall båda till privat och offentlig miljö</a></h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-12">

                                                </div>
                                                <div className="col-md-9 col-12">
                                                    <p className="mb-10">Green Plank är det perfekta valet för krävande applikationer som hotellplattformar, liksom andra allmänna utrymmen som parker, förfriskningsbarer, verandor och klubbhusplattformar. Green Plank komposittrall är hållbara, barfota vänliga och lätta att hålla i utmärkt skick år efter år.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-60 pb-60">
                                            <div className="row">
                                                <div className="col-md-1 col-12">

                                                </div>
                                                <div className="col-md-2 col-12 section-space--top--20">
                                                    <a href="mailto:info@greenplank.se"><img src={img4} className="img-fluid" width="90px" alt="Image1" /></a>
                                                </div>
                                                <div className="col-md-8 col-12">
                                                    <h3 className=" mt-30"><a href={`${process.env.PUBLIC_URL}/bast-for-poolen`}>Beställ ett gratis produktprov</a></h3>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 col-12">

                                                </div>
                                                <div className="col-md-9 col-12">
                                                    <p className="mb-10">Vi ger dig möjligheten att beställa ett gratis prov. Det är enkelt att beställa prov från Green Plank, klicka i den produkt du vill beställa och fyll i adressformuläret.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-60 pb-60">
                                            <div className="text-center">
                                                <h2 className=" mt-30 mb-30">Emil Henriksson</h2>
                                                <h4 className=" mt-10"><a href="tel:040450560">040450560</a></h4>
                                                <h4 className=" mt-10"><a href="mailto:emil@greenplank.se">emil@greenplank.se</a></h4>
                                                <h3 className=" mt-30">Nasir Gill</h3>
                                                <h4 className=" mt-10"><a href="tel:0761734777">0761734777</a></h4>
                                                <h4 className=" mt-10"><a href="mailto:ngill@greenplank.eu">ngill@greenplank.eu</a></h4>
                                                <h3 className=" mt-30">Green Plank AB</h3>
                                                <h4 className=" mt-10">Sadelgatan 9, SE-213 77 Malmö</h4>
                                                <p className=" mt-30">You are receiving this email because you have visited our site or have bought our products.
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <div className="container">
                    <p>© Copyright 2020 by Ecomin.se</p>
                    <div className="footer-social">

                        <a href="https://www.facebook.com/GreenplankSweden" aria-label="facebook">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="https://www.instagram.com/greenplank/?hl=en" aria-label="instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/greenplank" aria-label="twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCxWdmtRk1tZ-lbHd0zpcQ6g" aria-label="youtube">
                            <i className="fab fa-youtube"></i>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Varkampanj;
