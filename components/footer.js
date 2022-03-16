import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import SiteLogo from "../assets/images/site-logo.png";

const Footer = () => {
  return (
    <section className="site-footer">
      {/* <div className="main-footer pt-120 pb-80">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <img
                  style={{ marginBottom: "2em" }}
                  src={SiteLogo}
                  className="footer-widget__logo"
                  width="300"
                  alt=""
                />
                <ul className="list-unstyled">
                  <li>
                    <Link href="https://goo.gl/maps/1EMvz58QJ9HojcZq6">
                      <a style={{ color: "white" }}>Site Map</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-pakistan">
                      <a style={{ color: "white" }}>Useful Links</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs">
                      <a style={{ color: "white" }}>Feedback</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="footer-widget footer-widget__link mb-40">
                <h3 className="footer-widget__title">
                  Islamabad Security Dialogue
                </h3>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/events">
                      <a style={{ color: "white" }}>Event Brief</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/events">
                      <a style={{ color: "white" }}>Event Report</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5} md={6} sm={12}>
              <div className="footer-widget mb-40 footer-widget__about">
                <h3 className="footer-widget__title">CONTACT</h3>
                <ul className="list-unstyled footer-widget__contact">
                  <li>
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/1EMvz58QJ9HojcZq6"
                      style={{ color: "white" }}
                    >
                      <i className="azino-icon-pin"></i>Embassy of Pakistan
                      Karlavägen 65, 1st Floor
                      <br /> 114 49 Stockholm Sweden
                    </a>
                  </li>
                  <li>
                    <a href="tel:+46764343315">
                      <i className="azino-icon-telephone"></i>+46764343315
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@pakistanembassy.se">
                      <i className="azino-icon-email"></i>
                      info@pakistanembassy.se
                    </a>
                  </li>
                  <li>
                    <a style={{ color: "white" }}>
                      <span>Fax: </span>+46-8249233
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
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
          <p>
            © Copyright 2021 Embassy of Pakistan in Sweden.All rights reserved.
          </p>
          <div>
            <p>
              Designed and Developed by{" "}
              <a href="https://www.ecomin.se/" style={{ color: "white" }}>
                Ecomin.se
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
