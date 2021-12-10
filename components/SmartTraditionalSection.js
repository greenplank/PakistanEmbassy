import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/SmartTraditionell.webp";

const SmartTraditionalSection = () => {
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

export default SmartTraditionalSection;
