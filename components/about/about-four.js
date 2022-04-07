import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Marquee from "react-easy-marquee";
import BlogCard from "../../components/blog-card2";
import Hidden from "@material-ui/core/Hidden";
import CAALogo from "../../assets/images//icons/logo3.gif";
import Govt from "../../assets/images//icons/logo2.gif";
import Nordic from "../../assets/images//icons/logo.gif";

import Logo4 from "../../assets/images//icons/logo4.gif";
import Logo5 from "../../assets/images//icons/logo5.gif";
import Logo6 from "../../assets/images//icons/logo6.gif";

import Head from "next/head";

const BLOG_DATA = [
  {
    id: 1,
    link: "https://caapakistan.com.pk/",
    image: CAALogo,
  },
  {
    id: 2,
    link: "https://covid.gov.pk/travel-guidelines",
    image: Govt,
  },
  {
    id: 3,
    link: "https://ncoc.gov.pk/covid-vaccination-en.php",
    image: Nordic,
  },
];

const BLOG_DATA2 = [
  {
    id: 1,
    link: "https://www.krisinformation.se/",
    image: Logo4,
  },
  {
    id: 2,
    link: "https://polisen.se/",
    image: Logo5,
  },
  {
    id: 3,
    link: "https://www.folkhalsomyndigheten.se/",
    image: Logo6,
  },
];

const AboutFour = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
        <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"
          nonce="YITXpszc"
        ></script>
      </Head>

      <section className="pt-80 pb-20">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Row>
                <Col lg={12}>
                  <h2
                    style={{
                      marginBottom: "15px",
                      paddingTop: "1em",
                      color: "#035804",
                    }}
                  >
                    <b>Welcome to the Embassy of Pakistan in Stockholm</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "94%",
                      borderWidth: "3px",
                      marginBottom: "34px",
                      marginRight: "28em",
                    }}
                  />
                </Col>
              </Row>
              <div>
                <p>
                  Through this website we hope to give you a glimpse of Pakistan
                  and the many aspects of Pakistan’s relations with Sweden and
                  Finland.{" "}
                </p>
                <p>
                  We also hope to provide you with a more user-friendly
                  experience of our consular services. We have tried to make it
                  a one window comprehensive information portal for those
                  interested in travelling to Pakistan or doing business with
                  Pakistan. In particular we are pleased with the guides for
                  those who wish to study and work in Sweden and compilation of
                  resources for teaching Urdu language.
                </p>
                <p>
                  The website will be complemented with our social media
                  accounts on Facebook, Twitter , instagram and Linkedin.
                </p>
                <p>
                  I look forward to your feedback and suggestions to further
                  improve the website.
                </p>
                <p>
                  <b>Dr. Zahoor Ahmed</b>
                  <br />
                  Ambassador of Pakistan to Sweden and Finland
                </p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <a
                    className="twitter-timeline"
                    data-height="580"
                    href="https://twitter.com/PakinSweden"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tweets by PakinSweden
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutFour;
