import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../components/footer";
import Head from "next/head";

const images = [
  { url: "/Nordic/image.jpg" },
  { url: "/Nordic/image1.jpg" },
  { url: "/Nordic/image2.jpg" },
  { url: "/Nordic/image3.jpg" },
  { url: "/Nordic/image4.jpg" },
  { url: "/Nordic/image5.jpg" },
  { url: "/Nordic/image6.jpg" },
  { url: "/Nordic/image7.jpg" },
  { url: "/Nordic/image8.jpg" },
  { url: "/Nordic/image9.jpg" },
  { url: "/Nordic/image10.jpg" },
];

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>Nordic Pakistan IT summit, 14-16 Nov, 2017</title>
        <meta
          name="title"
          content="Nordic Pakistan IT summit, 14-16 Nov, 2017"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Nordic Pakistan IT summit, 14-16 Nov, 2017">
        <HeaderTwo />
        <PageHeader title="Nordic Pakistan IT summit, 14-16 Nov, 2017" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="mt-30">
                  <h3 className="mt-80">
                    <b>Nordic Pakistan IT summit, 14-16 Nov, 2017</b>
                  </h3>
                  <p className="mb-30 mt-30 text-left">
                    Embassy of Pakistan together with Pakistan Sweden Business
                    Council (PSBC) organized first ever Nordic Pakistan IT
                    summit in Stockholm. The idea of the summit was to create an
                    integrated platform for IT Communities of Pakistan and
                    Nordic Region to exchange ideas, network and grow business.
                    The summit brought together industry experts & executives to
                    discuss efficient cooperation and launch potential
                    partnerships.
                  </p>
                  <br />
                  <p>Media coverage:</p>
                  <a
                    target="_blank"
                    href="https://www.phoneworld.com.pk/national-incubation-center-goes-nordic-pakistan-summit-2017/#"
                  >
                    https://www.phoneworld.com.pk/national-incubation-center-goes-nordic-pakistan-summit-2017/#
                  </a>
                  <br />
                  <a
                    target="_blank"
                    href="https://pakwired.com/highlights-nordic-pakistan-summit/"
                  >
                    https://pakwired.com/highlights-nordic-pakistan-summit/
                  </a>
                  <br />
                  <a
                    target="_blank"
                    href="https://www.dailymotion.com/video/x68p80a"
                  >
                    http://www.dailymotion.com/video/x68p80a
                  </a>
                  <p className="pt-40">The moments from the summit:</p>

                  <SimpleImageSlider
                    className="text-center"
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
