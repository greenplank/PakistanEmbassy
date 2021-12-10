import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/backgrounds/GREEN-PLANK-ABOUT-banner-1-1-1.webp";
import image2 from "../../assets/images/backgrounds/about-1.webp";
import image3 from "../../assets/images/backgrounds/about-2.webp";
import image4 from "../../assets/images/backgrounds/about-profile.webp";

const AboutOne = () => {
  return (
    <section className="about-one text-center pt-120 pb-40">
      <Container>
        <Row style={{ marginBottom: "4em" }}>
          <Col lg={12}>
            <h4 style={{ marginBottom: "2em" }}>
              Hej, vi är Green Plank. Vi erbjuder oöverträffade miljövänliga byggprodukter tillverkade av återvunnen plast och naturavfall.
            </h4>
          </Col>
          <Col lg={12}>
            <img src={image1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image4} alt="" width="510px" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <img src={image3} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="team-about__top mt-60">
          <Row>
            <Col md={12} lg={12} style={{ marginBottom: "4em" }}>
              <div className="block-title">
                <h3>Välkommen till GreenPlank</h3>
                <h2>15 års erfarenhet inom industrin</h2>
                <h5>
                  År 2001 deltog en ung Jamshaid Gill från Pakistan på en mässa i Wien, Österrike på ett seminarium om innovation inom teknik för kompositprodukter tillverkade med en mängd olika återvunna material och naturavfall.
                </h5>
                <h5>
                  Han inspirerades av talet som hölls av en amerikansk professor om hållbara byggprodukter med träliknande egenskaper och utseende av en blandning av återvunnen plast och naturligt avfall som risskal, vetestrå, sågspån, bambuflis, kokosnötskal, sojabönor, jordnötsskal, bomullsstrå etc.
                </h5>
                <h5>
                  Green Plank-produkter används av många svenska kommuner över hela Sverige
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
          <img src={image2} alt="" className="img-fluid" />
          </Col>
          <Col lg={6}>
            <div className="block-title">
              <h3 style={{ marginBottom: ".5em" }}>
                <span>15</span>År av erfarenhet
              </h3>
              <h5>
                Risskal blandat med återvunnen plast för att producera träalternativ och dess positiva effekt på miljön, tanken på Green Plank blev tänkt.
              </h5>
              <h5>
                Han återvände till sitt hemland, Pakistan och började sitt arbete med att utveckla en träalternativprodukt tillverkad av återvunnen plast och risskalfibrer.
              </h5>
              <h5>
              År 2004 emigrerade Gills yngre bror Nasir Gill till Sverige som företagare och grundade ett företag och började marknadsföra deras innovativa kompositplattor.
              </h5>
              <h5>
              2015 fick Green Plank utmärkelsen “Årets Nybyggare” från Hans Majestät kung Carl Gustav. Green Plank hyllades för att representera Sverige som en miljövänlig nation.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
