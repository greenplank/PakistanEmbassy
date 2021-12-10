import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import causeImage from "../assets/images/resources/1.webp";
const FeaturedCause = () => {
  return (
    <section className="about-two pt-80 pb-80 featured-cause"> 
      <Container>
        <div className="inner-container background-secondary ">
          <Row>
            <Col lg={4}>
              <img src={causeImage} className="img-fluid" alt="" />
            </Col>
            <Col lg={8} className=" d-flex">
              <div className="my-auto" >
                <h6 style={{marginBottom:"1em",color:"white"}}>UTVALDA ARTIKEL </h6>
                <h3>Test av olika material för bryggor av Öresund</h3>
                <p style={{color:"white"}}>
                  Prestanda för olika däckmaterial tillgängliga på marknaden – konserveringsbehandlat trä, modifierat trä, naturligt hållbart trä, återvunnen plast och träplastkompositer (WPC) används i två bryggor nära Øresundsbron, söder om centrala Malmö i Sverige.
                </p>
                <h8 style={{marginBottom:"1em",color:"white"}}>Alla rättigheter går till SP / RISE.</h8>
                <Link href="/artiklar">
                <a className="thm-btn p-2 ml-2" style={{background:"black"}}> Läs mer</a>
              </Link>
              </div>
             
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCause;
