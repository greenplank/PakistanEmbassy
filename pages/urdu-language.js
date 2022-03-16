import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer";
import Head from "next/head";

const SOURCES = [
  {
    src: "https://www.youtube.com/embed/CgSQe64SP6c",
    type: "application/x-mpegURL",
  },
];

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

const UrduLanguage = () => {
  return (
    <>
      <Head>
        <title>Urdu Teaching Language</title>
        <meta name="title" content="Urdu Teaching Language" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Urdu Teaching Language">
        <HeaderTwo />
        <PageHeader title="Urdu Teaching Language" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Urdu Teaching Language Resources</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  It is the official state language of Pakistan. Urdu uses a
                  modified form of Perso-Arabic script known as Nastaliq
                  (nastaʿlīq). According to research done in 2021 estimates,
                  Urdu is the 21st most spoken first language in the world, with
                  approximately 61.9 million who speak it as their native
                  language. According to Ethnologue’s 2018 estimates, Urdu is
                  the 10th most widely spoken language in the world with 230
                  million total speakers, including those who speak it as a
                  second language.
                </p>
                <p className="mb-30 mt-30 text-left">
                  In order to meet the needs of the teachers and to help Urdu
                  teachers in Sweden and Finland the Embassy has initiated this
                  platform to share the teaching material that we gather from
                  different sources.
                </p>
                <p className="mb-30 mt-30 text-left">
                  <b>
                    The Embassy of Pakistan arranged a first ever Urdu teachers
                    meeting on 22nd Nov 2021. Follow the Link below to watch the
                    complete video:
                  </b>
                </p>

                <div className="mb-30 text-center">
                  <iframe
                    width="660"
                    height="515"
                    src="https://www.youtube.com/embed/AuTewdoB5O8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>

                <p className="mb-30 mt-30 text-left">
                  <b>
                    There are many teaching resources created by Mr. Shiraz Ali
                    lecturer at Manchester University, to guide and help Urdu
                    teachers:
                  </b>
                </p>

                <div className="mt-30">
                  <a target="_blank" href="http://www.alisheraz.com/urdu-editor.php">http://www.alisheraz.com/urdu-editor.php</a><br/>
                  <a target="_blank" href="https://books.apple.com/gb/book/general-urdu-vocabulary/id1237763911">https://books.apple.com/gb/book/general-urdu-vocabulary/id1237763911</a><br/>
                  <a target="_blank" href="https://matnsaz.net/">https://matnsaz.net/</a><br/>
                  <a target="_blank" href="https://www.mbilalm.com/download/pak-urdu-installer.php">https://www.mbilalm.com/download/pak-urdu-installer.php</a><br/>
                  <a target="_blank" href="https://urduthesaurus.com/index">https://urduthesaurus.com/index</a><br/>
                  <a target="_blank" href="https://xn--mgbqf7g.com/">https://اردو.com/</a><br/>
                  <a target="_blank" href="https://xn--mgbqf7g.com/">https://youtu.be/aMOX1I3lo34</a>
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

export default UrduLanguage;
