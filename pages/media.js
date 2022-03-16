import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import PakistanPoliticalMap from "../assets/images/backgrounds/Pakistans-Political-Map.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer";
import Head from "next/head";

const images = [
  { url: "/slider/1.jpg" },
  { url: "/slider/2.jpg" },
  { url: "/slider/3.jpg" },
  { url: "/slider/4.jpg" },
  { url: "/slider/5.jpg" },
  { url: "/slider/6.jpg" },
  { url: "/slider/7.jpg" },
  { url: "/slider/8.jpg" },
  { url: "/slider/9.jpg" },
  { url: "/slider/10.jpg" },
  { url: "/slider/11.jpg" },
  { url: "/slider/12.jpg" },
  { url: "/slider/13.jpg" },
  { url: "/slider/14.jpg" },
  { url: "/slider/15.jpg" },
  { url: "/slider/16.jpg" },
  { url: "/slider/17.jpg" },
  { url: "/slider/18.jpg" },
  { url: "/slider/19.jpg" },
  { url: "/slider/20.jpg" },
  { url: "/slider/21.jpg" },
  { url: "/slider/22.jpg" },
  { url: "/slider/23.jpg" },
  { url: "/slider/24.jpg" },
  { url: "/slider/25.jpg" },
];

const NADRAApplication = () => {
  return (
    <>
      <Head>
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
        <title>Media</title>
        <meta name="title" content="Media" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Media">
        <HeaderTwo />
        <PageHeader title="Media" />
        <StickyHeader />
        <section className="pt-80 pb-80">
          <Container>
            <Row>
              <Col lg={8} md={8} xs={12} style={{padding:"2em"}}>
                <SimpleImageSlider
                  width={760}
                  height={400}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                />
              </Col>
              <Col lg={4} md={4} xs={12} style={{padding:"2em"}}>
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
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default NADRAApplication;
