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
  { url: "/Exhibition/image1.jpg" },
  { url: "/Exhibition/image2.jpg" },
  { url: "/Exhibition/image3.jpg" },
  { url: "/Exhibition/image4.jpg" },
  { url: "/Exhibition/image5.jpg" },
  { url: "/Exhibition/image6.jpg" },
  { url: "/Exhibition/image7.jpg" },
  { url: "/Exhibition/image8.jpg" },
  { url: "/Exhibition/image9.jpg" },
  { url: "/Exhibition/image10.jpg" },
  { url: "/Exhibition/image11.jpg" },
  { url: "/Exhibition/image12.jpg" },
  { url: "/Exhibition/image13.jpg" },
  { url: "/Exhibition/image14.jpg" },
  { url: "/Exhibition/image15.jpg" },
  { url: "/Exhibition/image16.jpg" },
  { url: "/Exhibition/image17.jpg" },
  { url: "/Exhibition/image18.jpg" },
  { url: "/Exhibition/image19.jpg" },
  { url: "/Exhibition/image20.jpg" },
  { url: "/Exhibition/image21.jpg" },
  { url: "/Exhibition/image22.jpg" },
  { url: "/Exhibition/image23.jpg" },
  { url: "/Exhibition/image24.jpg" },
  { url: "/Exhibition/image25.jpg" },
  { url: "/Exhibition/image26.jpg" },
  { url: "/Exhibition/image27.jpg" }
];

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>EXHIBITION SOURCE PAKISTAN IN STOCKHOLM</title>
        <meta name="title" content="EXHIBITION SOURCE PAKISTAN IN STOCKHOLM" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="EXHIBITION SOURCE PAKISTAN IN STOCKHOLM">
        <HeaderTwo />
        <PageHeader title="EXHIBITION SOURCE PAKISTAN IN STOCKHOLM" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                

                <div className="mt-30">
                  <h3 className="mt-80">
                    <b>
                      EXHIBITION SOURCE PAKISTAN IN STOCKHOLM, AUG 31- SEPT 1,
                      2017
                    </b>
                  </h3>
                  <p className="mb-30 mt-30 text-left">
                    Embassy of Pakistan in Sweden together with Pakistan Sweden
                    Business Council (PSBC) organized a single country
                    exhibition where Pakistani products like textile, carpets,
                    handicrafts, furniture, jewelry, leather and sport items
                    were displayed.
                  </p><br/>
                  <p>Moments from the exhibition:</p>
                  <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                  />
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
