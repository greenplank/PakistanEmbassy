import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import vilma from "../assets/images/vilma-1-200x200.png";
import sundahus from "../assets/images/sundahus-1-200x200.png";


const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">KUNDTJÄNST</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/aterfarsaljare" >
                      <a style={{color:"white"}}>Återförsäljare</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/hitta-hantverkare">
                      <a style={{color:"white"}}>Hitta Green Plank certifierade hantverkare</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/forsaljningsvillkor">
                      <a style={{color:"white"}}>Försäljningsvillkor</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/anvandarvillkor">
                      <a style={{color:"white"}}>Användningsvillkor</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/integritetspolicy">
                      <a style={{color:"white"}}>Integritetspolicy</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Företagsinformation</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link href="/om-oss" >
                      <a style={{color:"white"}}>Om Oss</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/karriar">
                      <a style={{color:"white"}}>Karriär</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bli-aterforsaljare">
                      <a style={{color:"white"}}>Bli en Återförsäljare</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bli-en-green-plank-certifierad-hantverkare">
                      <a style={{color:"white"}}>Bli en Green Plank certifierad hantverkare</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rengoring">
                      <a style={{color:"white"}}>Rengöring</a>
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </Col>
            <Col lg={2} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">Resurser</h3>
                <ul className="list-unstyled" >
                  <li>
                    <Link  href="/pdfs/Teknish-Brochyr/Teknisk-Brochyr-ver-1.3.pdf"  >
                      <a target="_blank" style={{color:"white"}}>Teknisk Brochyr</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/installation-och-underhall">
                      <a style={{color:"white"}}>Installation och underhåll</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a style={{color:"white"}}>Faqs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/garantier">
                      <a style={{color:"white"}}>Garantier</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/artiklar">
                      <a style={{color:"white"}}>Artiklar</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resurser">
                      <a style={{color:"white"}}> Alla resurser</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bibliotek">
                      <a style={{color:"white"}}> Bibliotek</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
   
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
              <h3 className="footer-widget__title">Följ oss</h3>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a href="tel:+46 40 450 560">
                      <i className="azino-icon-telephone"></i>+46 40 450 560
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@greenplank.se">
                      <i className="azino-icon-email"></i>info@greenplank.se
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="azino-icon-pin"></i>Sadelgatan 9, SE-213 77 Malmö, Sweden
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
              <h3 className="footer-widget__title">Certifierad</h3>
              <Row>
                  <a aria-label="logo image">
                    <img
                      src={vilma}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                  <a aria-label="logo image">
                    <img
                      src={sundahus}
                      className="footer-widget__logo"
                      width="101"
                      alt=""
                    />
                  </a>
                
                  </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
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

export default Footer;
