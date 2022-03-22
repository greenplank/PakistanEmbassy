import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Marquee from "react-easy-marquee";
import BlogCard from "../blog-card2";
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

const AboutEight = () => {
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

      <section className="pb-80">
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
                    <b>About the Embassy </b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "70%",
                      borderWidth: "3px",
                      marginBottom: "34px",
                      marginRight: "28em",
                    }}
                  />
                </Col>
              </Row>
              <div>
                <p>
                  The Embassy of Pakistan in Stockholm is responsible for
                  promoting Pakistan’s bilateral relations with the Kingdom of
                  Sweden as well as the Republic of Finland. The key mission of
                  the Embassy is to promote bilateral relations in all spheres
                  of live including political, economic, investment, education
                  and people-to-people relations. The Embassy also provides
                  consular services for the Pakistani-origin community in Sweden
                  and Finland as well as those interested in traveling to
                  Pakistan.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4} xs={12} sm={12}>
              <Row>
                <Col lg={12} md={12} xs={12}>
                  <div
                    class="fb-page"
                    data-href="https://www.facebook.com/PakinSweden"
                    data-tabs="timeline"
                    data-width=""
                    data-height="400"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/PakinSweden"
                      class="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/PakinSweden">
                        Pakistan Embassy Sweden
                      </a>
                    </blockquote>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutEight;
