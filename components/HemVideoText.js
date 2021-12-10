import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
// import ModalVideo from "react-modal-video";


import Fasadpanel from "../assets/images/backgrounds/14.jpg";
import StaketSystem from "../assets/images/backgrounds/Staket_System.webp";
import Utomsuhbankar from "../assets/images/backgrounds/utomsuhbankar.webp";
import Batgolv from "../assets/images/backgrounds/Batgolv.webp";

const HemVideoText = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-120 pb-120">

            <div className="about-section section-space--inner--120">
                <div className="container">
                    <div className="row row-25 align-items-center">
                        <div className="col-lg-6 col-12 mb-30 ">
                            <div className="service-two__box-inner" >
                                <img src={Fasadpanel} alt="" />
                                <span className="video-popup">
                                    {/* <ModalVideo
                                        channel="youtube"
                                        isOpen={isOpen}
                                        videoId="m20hG3KpQtI"
                                        onClose={() => setOpen(false)}
                                    /> */}
                                    <button  onClick={() => setOpen(true)} className="video-popup video-card__btn service-two__box-inner text-center">
                                    <i className="fa fa-play"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 mb-30">
                            <div className="about-content-two">
                                <h1>Varför Green Plank?</h1>
                                <h4>
                                    Varumärket Green Plank är ett hållbart varumärke för byggprodukter som representerar kvalitet, expertis och innovation i mer än 15 år. Green Plank står för innovation, tillförlitlighet, kvalitet, förtroende och kompetens – det här är grunden för vår verksamhet. Vi drivs av en passion för hållbara byggprodukter och detta återspeglas i var och en av våra produkter.
                                </h4>
                                <p>
                                    Som ett paraplymärke omfattar Green Plank en bred varumärkesportfölj i de fyra kategorierna terrasser, fasadbeklädnad, plankor och staket, inklusive produktmärke som AVON Flooring. Green Plank är det perfekta valet för krävande applikationer som hotellplattformar, liksom andra allmänna utrymmen som parker, förfriskningsbarer, verandor och klubbhusplattformar. Green Plank kompositplattor är hållbara, barfota vänliga och lätta att hålla i utmärkt skick år efter år.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HemVideoText;
