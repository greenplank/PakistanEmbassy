import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";

import Ambassador from "../../assets/images/Ambassador.png";
import Icon2 from "../../assets/images/backgrounds/alll-icons-02.png";
import Icon3 from "../../assets/images/backgrounds/alll-icons-03.png";
import Icon4 from "../../assets/images/backgrounds/alll-icons-04.png";
import Icon5 from "../../assets/images/backgrounds/alll-icons-05.png";
import Icon6 from "../../assets/images/backgrounds/alll-icons-06.png";
import Icon7 from "../../assets/images/backgrounds/alll-icons-07.png";
import Icon8 from "../../assets/images/backgrounds/alll-icons-08.png";

const VideoCard = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-80 pb-40">

            <Container>
                <Row>
                    <Col xl={4}>
                        <section>

                            <Container>

                                {/* <h3>
                                    Fördelar och nackdelar med trä komposit. <br />
                                </h3> */}
                                <div className="video-card__btn-block mr-4px">
                                   <img src={Ambassador} alt='Ambassador' />
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={8}>
                        <div className="about-two__content">
                            <Row>
                                <Col md={6}>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon7} alt="" /> <span >Bevisad Svensk kvalitéts komposittrall för hårdare väder.</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon8} alt="" /> <span>Stark och hållbar komposittrall med 50 cm regelavstånd</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon2} alt="" /> <span>Patenterad Smart Komposit med Not och Spont. Utan clips!</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon3} alt="" /> <span>Tack vare not och spont installationen blir ditt altandäck enhetligt</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon6} alt="" /> <span>Lågt Underhålls däck som inte ruttnar eller flisar</span>
                                        </p>
                                    </div>
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon5} alt="" /> <span>Långvariga naturliga färger</span>
                                        </p>
                                    </div>
                                    {/* <div className="about-two__box">
                                        <p>
                                            <img src={Icon1} alt="" /> <span>Upp till 60% snabbare att installera jämfört med traditionellt tralldäck</span>
                                        </p>
                                    </div> */}
                                    <div className="about-two__box">
                                        <p>
                                            <img src={Icon4} alt="" /> <span>Slitstark och bekväm att gå på barfota</span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoCard;
