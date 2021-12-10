import React, { useState } from "react";
import Link from "next/link";
// import ModalVideo from "react-modal-video";
import { Container, Row, Col } from "react-bootstrap";
import bgImage from "../../assets/images/backgrounds/video-cta.webp";

const VideoCard2 = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="about-two pt-120 pb-60">

            <Container>
                <Row>
                    <Col xl={6}>
                        <section className="video-card">
                            {/* <ModalVideo
                                channel="youtube"
                                autoplay
                                isOpen={isOpen}
                                videoId="u5aosoMYRt4"
                                onClose={() => setOpen(false)}
                            /> */}
                            <div
                                className="video-card__bg"
                                style={{ backgroundImage: `url(${bgImage})` }}
                            ></div>
                            <Container className=" text-center pt-120 pb-120">

                                <h3>
                                    Periodisk<br /> rengöring 
                                </h3>
                                <div className="video-card__btn-block">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/u5aosoMYRt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </Container>
                        </section>
                    </Col>
                    <Col xl={6}>

                        <div>
                            <h2>Periodisk rengöring</h2>
                            <p>Alla yttre ytor samlar smuts, damm och föroreningar och kräver rengöring. Det är nödvändigt att rengöra dem regelbundet så att de ser bra ut. Green Plank®-kompositer är produkter med lågt underhåll, inte produkter utan underhåll. Periodisk rengöring av Green Plank®-kompositprodukter föreslås, även om de verkar rena. Det är viktigt att förhindra att pollen / skräp bildas som kan orsaka mögel. Vi rekommenderar en grundläggande rengöring med en komposittrall rengörare eller en kombination av tvål (diskmedel), varmt vatten och en mjuk borst. Skölj noggrant efter rengöring. Om du är osäker på vilken produkt som används för att rengöra / ta bort fläckar från ditt trall, rekommenderas att du testar ett litet område på en obetydlig plats för att avgöra om produkten kommer att orsaka oönskad missfärgning. Skölj av hela däcket med en trädgårdsslang och inte med en högtryckstvätt. Högtryckstvätten sprutar tvålpartiklar på andra ytor och kan orsaka fläckar. Att använda en trädgårdsslang är en bättre metod för att försiktigt skölja bort hemmagjort rengöringsmedel och bli av med alla vattenfläckar. Hushållens högtryckstvättar med sprutmunstycke kan användas för att avlägsna fläckar, smuts eller mögel men riskerar att spraya partiklar av tvål på andra ytor.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default VideoCard2;
