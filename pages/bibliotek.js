import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';
import BrandCarousel from "../components/brand-carousel";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/images/resources/laptop-mockup-1-1-scaled.jpg";
import image2 from "../assets/images/resources/laptop-mockup-1-scaled.jpg";
import Head from "next/head";
import Footer from "../components/footer";

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: '#369956',
  m: 1,
  border: 6,
  style: { width: '20rem', height: '20rem' },
};

const Bibliotek = () => {
  return (
    <>
      <Head>
        <title>Bibliotek</title>
        <meta name="title" content="Bibliotek - GreenPlank.se" />
        <meta name="description" content="Bibliotek Resurser" />
      </Head>
      <Layout pageTitle="Bibliotek">
        <HeaderTwo />
        <PageHeader title="Bibliotek" crumbTitle="Bibliotek" />
        <StickyHeader />
        <section className="about-one pt-120 pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2>Bibliotek Resurser</h2>
                <hr style={{ backgroundColor: "#369956", width: "100", borderWidth: "0.2em", marginBottom: "70px" }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12} md={4} style={{ marginRight: "4em" }} >
                    <a href="/pdfs/massing_m_logrim_wikander_f_190409.pdf" target="_blank">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image1} className="img-fluid" alt="" /></center>
                      </Box>
                    </a>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} style={{ marginLeft: ".5em" }} >
                    <a href="https://www.byggahus.se/test-basta-traslagen-till-altan-och-tradack" target="_blank">
                      <Box borderRadius="2em" {...defaultProps} >
                        <center><img style={{ padding: "1em" }} src={image2} className="img-fluid" alt="" /></center>
                      </Box>
                    </a>
                  </Grid>

                </Grid>
              </Col>
            </Row>
          </Container>
        </section>
        <BrandCarousel />
        <Footer />
      </Layout>
    </>
  );
};

export default Bibliotek;
