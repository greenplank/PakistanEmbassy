import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";


import Fasadpanel from "../assets/images/backgrounds/Fasadpanel.webp";
import StaketSystem from "../assets/images/backgrounds/Staket_System.webp";
import Utomsuhbankar from "../assets/images/backgrounds/utomsuhbankar.webp";
import Batgolv from "../assets/images/backgrounds/Batgolv.webp";

const HemRelatedProducts = () => {
    return (
        <section className="about-two pt-50 pb-110 faq-one">

            <Container>
                <Row>
                    <Col xl={12}>
                        {/* section title */}
                        <div className="text-center block-title" style={{marginBottom:"2em"}}>
                            <h3>Andra produkter</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col md={3} xs={6}>
                                <a href="fasadpanel">
                                    <div className="mt-20 mb-20">
                                        <img src={Fasadpanel} className="img-fluid" alt="" />
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>Fasadpanel</b></h4>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} xs={6}>
                                <a href="staket-system">
                                    <div className="mt-20 mb-20">
                                        <img src={StaketSystem} className="img-fluid" alt="" />
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>Staket System</b></h4>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} xs={6}>
                                <a href="plankor">
                                    <div className="mt-20 mb-20">
                                        <img src={Utomsuhbankar} className="img-fluid" alt="" />
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>Utomsuhbankar</b></h4>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={3} xs={6}>
                                <a href="batgolv">
                                    <div className="mt-20 mb-20">
                                        <img src={Batgolv} className="img-fluid" alt="" />
                                        <div className="mt-20 text-center">
                                            <h4 className="title"><b>Batgolv</b></h4>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HemRelatedProducts;
