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
  { url: "/Swedish/image1.jpg" },
  { url: "/Swedish/image2.jpg" },
  { url: "/Swedish/image3.jpg" },
  { url: "/Swedish/image4.jpg" },
  { url: "/Swedish/image5.jpg" },
  { url: "/Swedish/image6.jpg" },
  { url: "/Swedish/image7.jpg" },
  { url: "/Swedish/image8.jpg" },
  { url: "/Swedish/image9.jpg" },
  { url: "/Swedish/image10.jpg" },
  { url: "/Swedish/image11.jpg" },
  { url: "/Swedish/image12.jpg" },
];

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>
          Swedish & Lithuanian delegation attended EXPO Pakistan 2017 in
          Karachi, Nov 8-13
        </title>
        <meta
          name="title"
          content="Swedish & Lithuanian delegation attended EXPO Pakistan 2017 in Karachi, Nov 8-13"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Swedish & Lithuanian delegation attended EXPO Pakistan">
        <HeaderTwo />
        <PageHeader title="Swedish & Lithuanian delegation attended EXPO Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="mt-30">
                  <h3 className="mt-80">
                    <b>
                      Swedish & Lithuanian delegation attended EXPO Pakistan
                      2017 in Karachi, Nov 8-13
                    </b>
                  </h3>
                  <p className="mb-30 mt-30 text-left">
                    Embassy of Pakistan brought Swedish & Lithuanian delegation
                    consisting of 12 companies from different sectors (textile,
                    leather, automotive parts, paper, engineering, IT) to visit
                    EXPO Pakistan 2017 in Karachi and meet companies in their
                    interest.
                  </p>
                  <br />
                  <p>
                    The delegates attended exhibition with many B2B meetings
                    scheduled there, made the field visits to the private
                    companies from different sectors, also had a chance to
                    attend a reception of launching event for #EmergingPakistan
                    compaign and fashion shows of Pakistani designers who
                    introduced the concept of Made in Pakistan.
                  </p>
                  <br />
                  <p>
                    For majority of the delegates it was first time visiting
                    Pakistan which lead to a complete change of the image of
                    business Community and business regime of Pakistan as well
                    as general image of country, women participation in
                    development and tourist destinations in Pakistan. Delegates
                    were introduced to Pakistan’s exportable sectors,
                    macroeconomic situation, quality and capacity of businesses
                    in each sector and competitive advantages of doing business
                    with Pakistan.
                  </p>
                  <br />
                  <p>Moments of the visit below:</p>
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
