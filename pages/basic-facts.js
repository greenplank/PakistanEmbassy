import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";

import PakistanPoliticalMap from "../assets/images/backgrounds/Pakistans-Political-Map.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BasicFact = () => {
  return (
    <>
      <Head>
        <title>Basic Facts</title>
        <meta name="title" content="Basic Facts" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Basic Facts">
        <HeaderTwo />
        <PageHeader title="Basic Facts" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={8} md={8} xs={12}>
                <h3 className="mb-30 mt-50">Basic Facts</h3>
                <div>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Official Name:</td>
                        <td>Islamic Republic of Pakistan</td>
                      </tr>
                      <tr>
                        <td>Independence day:</td>
                        <td>14th August , 1947</td>
                      </tr>
                      <tr>
                        <td>Founder: </td>
                        <td>Quaid e Azam Muhammad Ali Jinnah</td>
                      </tr>
                      <tr>
                        <td>Head of State :</td>
                        <td> Dr. Arif Alvi</td>
                      </tr>
                      <tr>
                        <td>Head of Government: </td>
                        <td> Mr. Imran Ahmad Khan Niazi</td>
                      </tr>
                      <tr>
                        <td>Government: </td>
                        <td>Federal Parliamentary Republic</td>
                      </tr>
                      <tr>
                        <td>Location: </td>
                        <td> 30 00 N, 70 00 E</td>
                      </tr>
                      <tr>
                        <td>Capital : </td>
                        <td>Islamabad</td>
                      </tr>
                      <tr>
                        <td>Area: </td>
                        <td>796,096 sq km</td>
                      </tr>
                      <tr>
                        <td>Population: </td>
                        <td>207,774,520 (Census 2017)</td>
                      </tr>
                      <tr>
                        <td>Emblem: </td>
                        <td>Faith, Unity, Discipline</td>
                      </tr>
                      <tr>
                        <td>National Language : </td>
                        <td>Urdu</td>
                      </tr>
                      <tr>
                        <td>Official Language : </td>
                        <td>English</td>
                      </tr>
                      <tr>
                        <td>National Poet : </td>
                        <td>Allama Doctor Muhammad Iqbal</td>
                      </tr>
                      <tr>
                        <td>National Anthem : </td>
                        <td>Qaumi Tarana</td>
                      </tr>
                      <tr>
                        <td>National Animal : </td>
                        <td>Markhor</td>
                      </tr>
                      <tr>
                        <td>National Mammal : </td>
                        <td>Indus River Dolphin</td>
                      </tr>
                      <tr>
                        <td>National Bird : </td>
                        <td>Chukor</td>
                      </tr>
                      <tr>
                        <td>National Flower : </td>
                        <td>Jasmine</td>
                      </tr>
                      <tr>
                        <td>National Fruits : </td>
                        <td>Mango (Summer), Gawa (Winter)</td>
                      </tr>
                      <tr>
                        <td>National Tree : </td>
                        <td>Cedrus Deodara</td>
                      </tr>
                      <tr>
                        <td>National Sports : </td>
                        <td>Hockey</td>
                      </tr>
                      <tr>
                        <td>Notional Dress : </td>
                        <td>Shalwar Qameez</td>
                      </tr>
                      <tr>
                        <td>National Juice </td>
                        <td>Sugarcane Juice</td>
                      </tr>
                      <tr>
                        <td>Literacy rate </td>
                        <td>53%</td>
                      </tr>
                      <tr>
                        <td>Currency </td>
                        <td>Pakistani Rupee PKR</td>
                      </tr>
                      <tr>
                        <td>Largest City </td>
                        <td>Karachi</td>
                      </tr>
                      <tr>
                        <td>Demonym </td>
                        <td>Pakistani</td>
                      </tr>
                      <tr>
                        <td>GDP </td>
                        <td>$1.254 Trillion (2020)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
              <Col lg={4} md={4} xs={12}>
                <h3 className="mb-30 mt-50">Important Websites:</h3>
                <ul>
                  <li>
                    <a target="_blank" href="https://covid.gov.pk/">
                      covid.gov.pk
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="http://www.presidentofpakistan.gov.pk/"
                    >
                      The President of the Islamic Republic of Pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://pmo.gov.pk/">
                      Prime Minister's Office
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mofa.gov.pk/">
                      Ministry of Foreign Affairs
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://interior.gov.pk/">
                      Ministry of Interior
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.finance.gov.pk/">
                      Ministry of Finance
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://ead.gov.pk/">
                      Economic Affairs Division (EAD)
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.ophrd.gov.pk/">
                      Ministry of Overseas Pakistanis and Human Resource
                      Development
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.hec.gov.pk/english/pages/home.aspx"
                    >
                      Higher Education Commission of Pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://mod.gov.pk/">
                      Ministry of Defence
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://moib.gov.pk/">
                      Ministry of Information, Broadcasting and National
                      Heritage
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.moit.gov.pk/">
                      Ministry of Information Technology and Telecommunication{" "}
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://most.gov.pk/">
                      Ministry of Scienc and Technology
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mowp.gov.pk/">
                      Ministry of Water & Power
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.mopa.gov.pk/">
                      Ministry of Parlimentary Affairs
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.textile.gov.pk/">
                      Ministry of Textile Industry
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="http://www.kana.gov.pk/">
                      Ministry of Kashmir Affairs and Gilgit Baltistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://pakistan.gov.pk/">
                      Web Gateway to the Government of pakistan
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://tourism.gov.pk/">
                      Tourism
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Pakistan’s Political Map</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Government of Pakistan on 4th August 2020, unveiled a
                  political map of the country.
                </p>

                <div className="mb-30">
                  <img
                    src={PakistanPoliticalMap}
                    alt="Pakistan Political Map"
                    width="700px"
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

export default BasicFact;
