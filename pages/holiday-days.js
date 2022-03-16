import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Holidays = () => {
  return (
    <>
      <Head>
        <title>Holidays</title>
        <meta name="title" content="Holidays" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Holidays">
        <HeaderTwo />
        <PageHeader title="Holidays" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h3 className="mb-30 mt-50 text-center">
                  OFFICIAL HOLIDAYS 2022
                </h3>
                <p className="text-center">
                  (The Embassy will remain closed during these days)
                  <br />
                  The following official holidays would be observed in the
                  Mission during the calendar year of 2022
                </p>
                <div>
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th>Name of Occasion</th>
                        <th>Date</th>
                        <th>Day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>New Year </td>
                        <td>01-Jan</td>
                        <td> Friday </td>
                      </tr>
                      <tr>
                        <td>Kashmir Day </td>
                        <td>05-Feb </td>
                        <td>Friday</td>
                      </tr>
                      <tr>
                        <td>Pakistan Day </td>
                        <td>23-Mar </td>
                        <td>Tuesday</td>
                      </tr>
                      <tr>
                        <td>Good Friday </td>
                        <td>02-Apr </td>
                        <td>Friday</td>
                      </tr>
                      <tr>
                        <td>Easter Monday </td>
                        <td>05-Apr </td>
                        <td>Monday</td>
                      </tr>
                      <tr>
                        <td>Labour Day </td>
                        <td>01-May </td>
                        <td>Saturday</td>
                      </tr>
                      <tr>
                        <td>Ascension Day </td>
                        <td>13-May </td>
                        <td>Thursday</td>
                      </tr>
                      <tr>
                        <td>Eid-ul-Fitr (Subject to sighting of the moon) </td>
                        <td>11 till 15-May </td>
                        <td>Tuesday Till Friday</td>
                      </tr>
                      <tr>
                        <td>National day of Sweden </td>
                        <td>6-Jun </td>
                        <td>Sunday</td>
                      </tr>
                      <tr>
                        <td>Midsummer </td>
                        <td>25-Jun </td>
                        <td>Friday</td>
                      </tr>
                      <tr>
                        <td>Eid-ul-Azha (Subject to sighting of the moon) </td>
                        <td>20 till 23-July </td>
                        <td>Tuesday till Friday</td>
                      </tr>
                      <tr>
                        <td>Independence Day </td>
                        <td>14-Aug </td>
                        <td>Saturday</td>
                      </tr>
                      <tr>
                        <td>Ashura 10th Moharrum </td>
                        <td>19 Aug </td>
                        <td>Thursday</td>
                      </tr>
                      <tr>
                        <td>
                          Eid-Milad-un Nabi (Subject to sighting of moon){" "}
                        </td>
                        <td>18-Oct </td>
                        <td>Monday</td>
                      </tr>
                      <tr>
                        <td>Quad-e-Azam Day/Christmas Day </td>
                        <td>25-Dec </td>
                        <td>Saturday</td>
                      </tr>
                      <tr>
                        <td>Boxing Day </td>
                        <td>26-Dec </td>
                        <td>Sunday</td>
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

export default Holidays;
