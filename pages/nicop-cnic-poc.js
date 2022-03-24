import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const NADRAApplication = () => {
  return (
    <>
      <Head>
        <title>Application for NADRA</title>
        <meta name="title" content="Application for NADRA" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Application for NADRA">
        <HeaderTwo />
        <PageHeader title="Application for NADRA" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <p className="mt-50">NADRA ID cards</p>
                <h5>
                  Overseas Pakistanis can apply for their ID cards
                  <a target="_blank" href="https://id.nadra.gov.pk.">
                    online
                  </a>
                </h5>
                <p className="mb-30 mt-30 text-left">
                  NADRA has launched 24/7 online/web chat service to guide and
                  facilitate online applicants at the URL{" "}
                  <a
                    target="_blank"
                    href="https://www.messenger.com/t/nadrapakidentity."
                  >
                    https://www.messenger.com/t/nadrapakidentity.
                  </a>
                  NADRA has also launched Pak ID official Twitter account
                  (twitter handle: @NadraPak) and Complaint Management System
                  (CMS) which is an online facility for lodging of complaints at
                  the URL{" "}
                  <a
                    target="_blank"
                    href="https://www.nadra.gov.pk/complaint/ ."
                  >
                    https://www.nadra.gov.pk/complaint/ .
                  </a>
                </p>

                <div class="alert alert-secondary" role="alert">
                  <p>
                    Any applicant who has any complaints or requires information
                    pertaining to online ID card services will be able to talk
                    to the Director Pak ID directly via Skype ID{" "}
                    <a href="mailto:pakidentity@outlook.com">
                      <span>pakidentity@outlook.com </span>
                    </a>
                    on every Thursday from 1500 hrs to 1600 hrs PST at
                    e-Kachari. Applicants can leave their feedback regarding
                    NADRA online services at the URL{" "}
                    <a target="_blank" href="https://id.nadra.gov.pk/feedback/">
                      https://id.nadra.gov.pk/feedback/.
                    </a>
                  </p>
                </div>

                <h3 className="mb-30 mt-30 text-left">What is NICOP?</h3>
                <div className="mb-30">
                  <p>
                    National Identity Card for Overseas Pakistanis (NICOP) is an
                    identity card for Pakistanis living abroad.
                  </p>
                  <h3 className="mb-30 mt-30 text-left">What is CNIC?</h3>
                  <p>
                    Computerized National Identity Card (CNIC) is an identity
                    card for Pakistani citizens living in Pakistan.
                  </p>
                  <div class="alert alert-secondary" role="alert">
                    <p>
                      <b>Please note</b> that CNIC and NICOP both are national
                      ID cards. Citizen number or Nadra ID number for both cards
                      is the same for an individual. Also note that Smart ID
                      Card or Smart NICOP has the only difference of microchip
                      on it. So there is nothing to get confused between Nicop
                      and SmartNicop.
                    </p>
                  </div>
                  <h3 className="mb-30 mt-30 text-left">What is POC?</h3>
                  <p>
                    Pakistan Origin Card (POC) is an identity card which is
                    issued to those Pakistani origin individuals who have
                    renounced their Pakistani nationality. POC holder is not a
                    Pakistani citizen but he/she may travel and stay in Pakistan
                    without visa as long as POC card is valid.
                  </p>
                  <p className="mb-30 mt-30 text-left font-italic">
                    <b>Note:</b> NICOP, POC and FRC services are NOT provided at
                    the Embassy.
                  </p>
                  <p>
                    In case of any query or technical support, please contact on
                    NADRA’s following email and telephone number or their
                    website.
                  </p>

                  <div className="mb-30 mt-60">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td>Email:</td>
                          <td>
                            {" "}
                            <a href="mailto:info.pakid@nadra.gov.pk">
                              info.pakid@nadra.gov.pk
                            </a>
                            <br />
                            <a href="mailto:support.pakid@nadra.gov.pk">
                              support.pakid@nadra.gov.pk
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Phone:</td>
                          <td>
                            {" "}
                            <a href="tel:+9251111786100">+9251111786100</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h4 className="mb-30 mt-80">
                    <b class="font-italic">
                      BEAWARE of some fake NADRA websites found on Google and
                      other search engines. Only the above mentioned website is
                      used for Nadra online applications.
                    </b>
                  </h4>
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
