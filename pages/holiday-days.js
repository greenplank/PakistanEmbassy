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
                        <td>Epiphany day </td>
                        <td>06 January 2022</td>
                        <td> Thursday </td>
                      </tr>
                     
                      <tr>
                        <td>Pakistan Day </td>
                        <td>23 March 2022 </td>
                        <td>Wednesday</td>
                      </tr>
                      <tr>
                        <td>Good Friday </td>
                        <td>15 April 2022 </td>
                        <td>Friday</td>
                      </tr>
                      <tr>
                        <td>Easter Monday </td>
                        <td>18 April 2022 </td>
                        <td>Monday</td>
                      </tr>
                      <tr>
                        <td>Eid-ul-Fitr (1st Shawal 1443 A.H.) (Subject to sighting of the moon) </td>
                        <td>2, 3, 4 May 2022 </td>
                        <td>Monday, Tuesday, Wednesday</td>
                      </tr>
                      <tr>
                        <td>National Day of Sweden</td>
                        <td>06 June 2022 </td>
                        <td>Monday</td>
                      </tr>
                      <tr>
                        <td>Midsummer Eve</td>
                        <td>24 June 2022</td>
                        <td>Friday</td>
                      </tr>
                      <tr>
                        <td>Eid-ul-Azha (10th Zil Haj 1443 A.H.) (Subject to sighting of the moon)</td>
                        <td>10, 11, 12 July 2022</td>
                        <td>Sunday, Monday, Tuesday</td>
                      </tr>
                      <tr>
                        <td>Ashura (9th & 10th Moharrum 1444 A.H) (Subject to sighting of the moon) </td>
                        <td>7, 8 August 2022 </td>
                        <td>Sunday, Monday</td>
                      </tr>
                      <tr>
                        <td>Independence Day </td>
                        <td>14-Aug </td>
                        <td>Sunday</td>
                      </tr>
                      <tr>
                        <td>
                        Eid Milad-un-Nabi (12th Rabi-ul-Awwal 1444 A.H.)  (Subject to sighting of moon){" "}
                        </td>
                        <td>9 October 2022</td>
                        <td>Sunday</td>
                      </tr>
                      <tr>
                        <td>Boxing Day </td>
                        <td>26 December 2022 </td>
                        <td>Monday</td>
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
