import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";


import SmartTrall from "../assets/images/backgrounds/smart_trall.webp";
import SmaertClassic from "../assets/images/backgrounds/smart_classic.webp";
import SmartCap from "../assets/images/backgrounds/smart_cap.webp";
import MarineTrall from "../assets/images/backgrounds/Marine_trall.webp";
import EntraTrall from "../assets/images/backgrounds/Entra_trall.webp";
import ClassicTrall from "../assets/images/backgrounds/classic_trall.webp";

const HemGallery = () => {
    return (
        <section className="about-two pt-10 pb-70">

            <Container>
                <Row>
                    <Col xl={12}>
                        {/* section title */}
                        <div className="text-center block-title ">
                            <h3>Green Plank komposittrall produkter</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Row>
                            <Col md={12}>
                                <a href="smart-komposittrall">
                                    <div className="mt-20 mb-20">
                                        <img src={SmartTrall} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner text-center">
                                            <h2 className="title" style={{ color: "white" }}><b>Smart Trall</b></h2>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} xs={6}>
                                <a href="smart-komposittrall-smart-classic">
                                    <div className="mt-10 mb-10 ">
                                        <img src={SmaertClassic} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner text-center">
                                            <h3 className="title text-center" style={{ color: "white" }}><b>Smart Classic</b></h3>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={6} xs={6}>
                                <a href="smart-komposittrall-smart-cap">
                                    <div className="mt-10 mb-10">
                                        <img src={SmartCap} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner text-center">
                                            <h3 className="title" style={{ color: "white" }}><b>Smart Cap</b></h3>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={6}>
                        <Row>
                            <Col md={6} xs={6}>
                                <a href="marine-komposittrall">
                                    <div className="mb-20 mt-20">
                                        <img src={MarineTrall} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner">
                                            <h3 className="title" style={{ color: "white" }}><b>Marine Trall</b></h3>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                            <Col md={6} xs={6}>
                                <a href="entra-trall">
                                    <div className="mb-20 mt-20">
                                        <img src={EntraTrall} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner">
                                            <h3 className="title" style={{ color: "white" }}><b>Entra Trall</b></h3>
                                        </div>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <a href="classic-komposittrall">
                                    <div className="mt-10">
                                        <img src={ClassicTrall} className="img-fluid" alt="" />
                                        <div className="service-two__box-inner">
                                            <h3 className="title" style={{ color: "white" }}><b>Classic Trall</b></h3>
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

export default HemGallery;
