import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import QuaidAzam from "../assets/images/backgrounds/Quaid-e-Azam.jpg";
import PresidentPK from "../assets/images/backgrounds/presidentofpakistan.jpg";
import PrimeMinisterPK from "../assets/images/backgrounds/imrankhan.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const DownloadApplicationForms = () => {
  return (
    <>
      <Head>
        <title>Download Application Forms</title>
        <meta name="title" content="Download Application Forms" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Download Application Forms">
        <HeaderTwo />
        <PageHeader title="Download Application Forms" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-60 text-left">
              <b>Download Application Forms</b>
            </h3>

            <Row style={{ marginBottom: "4em" }}>
              <Col lg={8} md={8} xs={12}>
                <h3 className="mb-30 mt-50">Download Forms</h3>
                <div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <td>Title of Form</td>
                        <td>Open File</td>
                        <td>Additional Information</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>No Objection Certificate (NOC) Form</td>
                        <td><a href="/pdfs/NOC.pdf" target="_blank">Click Here</a></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Birth Registration Form (S-I Form)</td>
                        <td><a href="/pdfs/Form-S_1-1.pdf" target="_blank">Click Here</a></td>
                        <td></td>
                      </tr>
                     
                    </tbody>
                  </table>
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

export default DownloadApplicationForms;
