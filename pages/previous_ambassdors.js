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
        <title>Previous Ambassadors</title>
        <meta name="title" content="Previous Ambassadors" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Previous Ambassadors">
        <HeaderTwo />
        <PageHeader title="Previous Ambassadors" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <div>
                  <table class="table mt-40">
                    <thead>
                      <tr>
                        <th>Identification</th>
                        <th>Names</th>
                        <th>From</th>
                        <th>-</th>
                        <th>To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Mir Mohammad Khan</td>
                        <td>Nov. 1952</td>
                        <td>-</td>
                        <td>Sep. 1953</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/SamuelMartinBurke.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Samuel Martin Burke</td>
                        <td>Sep. 1953</td>
                        <td>-</td>
                        <td>Mar. 1956</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/AghaHilali.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Agha Hilaly</td>
                        <td>Aug. 1956</td>
                        <td>-</td>
                        <td>May. 1959</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Arshad Hussain</td>
                        <td>Sep. 1959</td>
                        <td>-</td>
                        <td>Sep. 1961</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. S.M. Hassan</td>
                        <td>Nov. 1961</td>
                        <td>-</td>
                        <td>Mar. 1963</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/WajidAliBurki.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Lt.Gen.(Rtd) Wajid Ali Burki</td>
                        <td>Sep. 1963</td>
                        <td>-</td>
                        <td>Sep.1966</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/KhawajaMuhammadKaisar.JPG"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Khawaja Mohammad Kaiser</td>
                        <td>Nov. 1966</td>
                        <td>-</td>
                        <td>Jun. 1968</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Iqbal Athar</td>
                        <td>Nov. 1968</td>
                        <td>-</td>
                        <td>Jul. 1971</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Mahmood Shafqat</td>
                        <td>Sep. 1971</td>
                        <td>-</td>
                        <td>Dec. 1973</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/Dr.AfzalIqbal.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Dr. Afzal Iqbal</td>
                        <td>Dec. 1973</td>
                        <td>-</td>
                        <td>Jan. 1977</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Abdur Rauf Khan</td>
                        <td>Oct. 1977</td>
                        <td>-</td>
                        <td>Dec. 1978</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Lt.Gen.(Rtd) Azmat Bakhsh Awan</td>
                        <td>Dec. 1978</td>
                        <td>-</td>
                        <td>Dec. 1985</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Lt.Col.(Rtd) Amir Ali Shah</td>
                        <td>Feb. 1987</td>
                        <td>-</td>
                        <td>Mar. 1991</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/Arshadsami.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Arshad Sami Khan</td>
                        <td>Jun. 1991</td>
                        <td>-</td>
                        <td>Apr. 1995</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Dr. Abdul Sattar Baber</td>
                        <td>Oct. 1995</td>
                        <td>-</td>
                        <td>Feb. 1999</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>H.E. Mr. Naeem U. Hassan</td>
                        <td>Mar. 1999</td>
                        <td>-</td>
                        <td>May. 2001</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/Shahidkamal.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Shahid A. Kamal</td>
                        <td>Jun. 2001</td>
                        <td>-</td>
                        <td>Mar. 2005</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/shaheengillani.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Shaheen A.Gilani</td>
                        <td>Apr. 2006</td>
                        <td>-</td>
                        <td>Jan. 2009</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/NadeemRiaz.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Nadeem Riyaz</td>
                        <td>Jan. 2009</td>
                        <td>-</td>
                        <td>Jan. 2013</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/SajjadKamran.JPG"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Mr. Sajjad Kamran</td>
                        <td>Mar. 2013</td>
                        <td>-</td>
                        <td>Mar. 2014</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/MohmmadTariqZameer.jpeg"
                            width="70px"
                            alt="Arshad"
                          />
                        </td>
                        <td>H.E. Muhammad Tariq Zameer</td>
                        <td>Aug. 2014</td>
                        <td>-</td>
                        <td>Oct. 2017</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/AhmadHussainDayo.jpeg"
                            width="70px"
                            alt="Ahmad"
                          />
                        </td>
                        <td>H.E. Mr. Ahmad Hussain Dayo</td>
                        <td>Oct. 2017</td>
                        <td>-</td>
                        <td>Aug. 2020</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            src="/ambasdors/ZahoorAhmed.jpeg"
                            width="70px"
                            alt="Zahoor Ahmad"
                          />
                        </td>
                        <td>H.E. Mr. Zahoor Ahmed</td>
                        <td>Nov. 2020</td>
                        <td>-</td>
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

export default BasicFact;
