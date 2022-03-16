import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const AboutFive = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section className="about-two pt-50 pb-60 faq-one">
      <Container>
        <Row className="footer-social text-center ">
    
            <Col md={1} xs={2}>
              <a
                href="https://www.facebook.com/PakinSweden/"
                aria-label="facebook"
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </Col>

            <Col md={1} xs={2}>
              <a
                href="https://twitter.com/PakinSweden"
                aria-label="twitter"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </Col>
            <Col md={1} xs={2}>
              <a
                href="https://youtube.com/channel/UCZQNFMtP1bQvct40Zve9bEw"
                aria-label="youtube"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFive;
