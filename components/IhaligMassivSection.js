import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/IhaligMassiv.webp";
import image2 from "../assets/images/backgrounds/about-1.webp";
import image3 from "../assets/images/backgrounds/about-2.webp";
import image4 from "../assets/images/backgrounds/about-profile.webp";

const IhaligMassivSection = () => {
  return (
    <section className="about-one text-center pt-120 pb-40">
      <Container>
        <Row style={{ marginBottom: "4em" }}>
          <Col lg={12}>
            <img src={image1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default IhaligMassivSection;
