import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const SuccessionCertificates = () => {
  return (
    <>
      <Head>
        <title>Succession Certificates</title>
        <meta name="title" content="Succession Certificates" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Succession Certificates">
        <HeaderTwo />
        <PageHeader title="Succession Certificates" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="text-center">
                  <h3 className="mt-80">
                    <b>CIRCULAR</b>
                  </h3>
                  <h1>
                    Simplification of Procedure for Issuance of the Letters of
                    Administration/Succession Certificates
                  </h1>
                </div>
                <p className="mb-30 mt-30 text-left">
                  Upon death of any family member, legal heirs languish in
                  courts for years before they are able to obtain Letters of
                  Administration (for immovable properties) and Succession
                  Certificates (for movable properties). Now without going to
                  the Courts, the legal heirs can obtain Letters of
                  Administration or Succession Certificates, as the case may be,
                  through a quick five stage process faciliated by Succession
                  Facilitation Units operated by the National Database
                  Registration Authority. Presently, one Facilitation Unit is
                  operative in Islamabad dealing with properties/assets in the
                  Islamabad Capital Territory (ICT) only. Shortly, NADRA will
                  establish many more Succession Facilitation Units in other
                  cities of Pakistan.
                </p>
                <p>
                  The Applicants have to submit a simple application form after
                  which NADRA will issue public notice in leading local
                  nuewspapers and on its website. Where no objections are
                  received within fourteen days, the legal heirs whether in
                  Pakistan or abroad{" "}
                  <b>
                    (London, Manchester, Birmingham, Bradford, Jeddah, Riyadh,
                    Medina, Dubai, Abu Dhabi, Doha)
                  </b>{" "}
                  can visit their local NADRA office in Pakistan or the Pakistan
                  Missions abroad, as the case maybe, in the above mentioned
                  cities and conduct bio-metric cerification. Once verification
                  of the legal heirs is complete through bio-metrics, Succession
                  Certificate or Letter of Administration will be issued in
                  Applicant's favour. Apart from the abovementioned cities, the
                  Government at the earliest is creating bio-metric verification
                  centres in many other cities of the world.
                </p>
                <p>
                  Procedure for applying the Letters of
                  Administration/Succession Certificates is as follows:
                </p>

                <div className="mt-30">
                  <h4 className="mt-30 font-italic">
                    <b>
                      <u>Step 1:</u>
                    </b>
                  </h4>
                  <p className="mb-30 text-left">
                    <b>Application Initiation:</b> The applicant will provide
                    his/her National Identity number, deceased person's death
                    certificate and National Identity number. Along with the
                    application, the Applicant shall submit letter of
                    authorization from all the legal heirs to file application
                    on their behlaf
                  </p>
                  <h4 className="mt-30 font-italic">
                    <b>
                      <u>Step 2:</u>
                    </b>
                  </h4>
                  <p className="mb-30 text-left">
                    <b>Legal Heirs and Assets Details:</b> The applicant will
                    provide the relevant details of legal heirs, and information
                    pertaining to the moveable and immovable assets of deceased.
                  </p>
                  <h4 className="mt-30 font-italic">
                    <b>
                      <u>Step 3:</u>
                    </b>
                  </h4>
                  <p className="mb-30 text-left">
                    <b>Verification and Consent of Legal Heirs:</b> All legal
                    heirs mentioned by the applicant will visit NADRA's
                    Registration Center for biometric verification and details
                    provided by applicant will be verified.
                  </p>
                  <h4 className="mt-30 font-italic">
                    <b>
                      <u>Step 4:</u>
                    </b>
                  </h4>
                  <p className="mb-30 text-left">
                    <b>Advertisement in Newspaper:</b> NADRA will publish the
                    notice to the public at large for ascertaining if there are
                    any objections on the particular application.
                  </p>
                  <h4 className="mt-30 font-italic">
                    <b>
                      <u>Step 5:</u>
                    </b>
                  </h4>
                  <p className="mb-30 text-left">
                    <b>Printing and Delivery of Certificate:</b> If there are no
                    objections after 14 days of publication of the notice, the
                    Succession Certificate/Letter of Administration will be
                    printed and given to the applicant.
                  </p>
                </div>

                <div className="mt-50">
                  <h3 className="mt-80 text-center">
                    NOW THERE IS NO NEED TO GO TO THE COURTS!!!
                  </h3>
                  <div className="text-center">
                  <p>For details please visit the NADRA website:</p>
                  <a href="https://succession.nadra.gov.pk" target="_blank">
                    https://succession.nadra.gov.pk
                  </a>
                  </div>
                  <h3 className="mt-40 text-center">
                    VERY SOON NADRA SHALL INTRODUCE THE FACILITY OF FILING
                    ONLINE APPLICATIONS AND PROVIDE ONLINE BIO-METRICS
                    VERIFICATION.
                  </h3>
                  <h3 className="text-center mt-30">PLEASE LOOK OUT FOR NEW ANNOUNCEMENTS.</h3>
                  <p className="text-center">*****</p>
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

export default SuccessionCertificates;
