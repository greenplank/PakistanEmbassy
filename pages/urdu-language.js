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
                <p className="mb-30 mt-30 text-left">
                  Urdu is the official language of Pakistan.  It is estimated to
                  be the the 10th most widely spoken language in the world with
                  230 million total speakers, including those who speak it as a
                  second language.  The Urdu alphabet has up to 39 or
                  40 distinct letters with no distinct letter cases and is
                  typically written in the calligraphic Nastaʿlīq script.
                </p>
                <p className="mb-30 mt-30 text-left">
                  In order to provide teaching resources to Urdu teachers in
                  Sweden and Finland the Embassy has initiated this platform.
                </p>
                <p className="mb-30 mt-30 text-left">
                  The Embassy of Pakistan arranged a first ever Urdu teachers
                  meeting on 22nd Nov 2021. Click here to watch the complete
                </p>
                <p className="mb-30 mt-30 text-left">
                  Following are some links which for guidance and resources for
                  the teaching of Urdu language:
                  <br />
                  <a
                    target="_blank"
                    href="http://www.alisheraz.com/urdu-editor.php"
                  >
                   alisheraz
                  </a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  <a href="Sherazali.com" target="_blank">
                    Sherazali
                  </a>{" "}
                  is the website by Mr. Sheraz Ali, who is the lecturer of Urdu
                  Language at the Manchester Univerisy. It is an Urdu editor
                  which provides the writing space along with the Urdu Keypad to
                  type Urdu language easily.
                  <br />
                  <a href="https://matnsaz.net/">matnsaz</a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  Matansaz is also a keyboard for long Urdu writings with an
                  auto correct feature.
                  <br />
                  <a
                    href="https://www.mbilalm.com/download/pak-urdu-installer.php"
                    target="_blank"
                  >
                  mbilalm
                  </a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  This website provides stories for reading and discussion to be
                  used while teaching Urdu language. The main element provided
                  by the website is Pak Urdu installer through which one can
                  type Urdu by using qwerty keyboard.
                  <a href="https://urduthesaurus.com/index" target="_blank">
                   urduthesaurus
                  </a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  It is the initial version of Urdu thesaurus which has 40,000
                  words and  20,000 synonyms. It is in the process of expanding
                  and will soon provide dictionary, antonym, idioms and,
                  phrases.
                  <br />
                  <a href="https://اردو.com/" target="_blank">
                   اردو
                  </a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  Urdu{" "}
                  <a href="Gah.com" target="_blank">
                    Gah.com
                  </a>{" "}
                  is a very interesting website that provides you with the Urdu
                  poetry, content for discussion, quotes, idioms, golden words
                  in Urdu etc.
                  <a href="https://youtu.be/aMOX1I3lo34" target="_blank">
                   Video Link
                  </a>
                </p>
                <p className="mb-30 mt-30 text-left">
                  The above mentioned video is a  demonstration on how to use
                  the regular  keyboard for Urdu typing.
                </p>
                <div className="mt-30">
                  <h4 className="mt-60">For more Information view below links</h4>
                  <hr/>
                  <a
                    target="_blank"
                    href="http://www.alisheraz.com/urdu-editor.php"
                  >
                    Ali Sheraz
                  </a>
                  <br />
                  <a
                    target="_blank"
                    href="https://books.apple.com/gb/book/general-urdu-vocabulary/id1237763911"
                  >
                    General-Urdu-Vocabulary
                  </a>
                  <br />
                  <a target="_blank" href="https://matnsaz.net/">
                    matnsaz
                  </a>
                  <br />
                  <a
                    target="_blank"
                    href="https://www.mbilalm.com/download/pak-urdu-installer.php"
                  >
                   Pak-urdu-installer
                  </a>
                  <br />
                  <a target="_blank" href="https://urduthesaurus.com/index">
                   Urdu_the_saurus
                  </a>
                  <br />
                  <a target="_blank" href="https://xn--mgbqf7g.com/">
                    اردو
                  </a>
                  <br />
                  <a target="_blank" href="https://xn--mgbqf7g.com/">
                   Video Link
                  </a>
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
