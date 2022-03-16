import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Thumb from "../assets/images/backgrounds/thumb.jpg";
import Thumb2 from "../assets/images/backgrounds/thumb2.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const VehicleGiftUndertaking = () => {
  return (
    <>
      <Head>
        <title>Vehicle Gift Undertaking</title>
        <meta name="title" content="Vehicle Gift Undertaking" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Vehicle Gift Undertaking">
        <HeaderTwo />
        <PageHeader title="Vehicle Gift Undertaking" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Vehicle Gift Undertaking</b>
                </h1>

                <p className="mt-10 text-left">
                  New vehicles can be imported by anyone in Pakistan on payment
                  of duty and taxes under applicable rules and regulations.
                </p>
                <p className="mt-10 text-left">
                  Old and used cars, not older than 3 years and other vehicles
                  not older than 5 years can be imported, gifted or brought to
                  Pakistan by Pakistan nationals including dual nationals under
                  three Schemes as explained below. However, students receiving
                  remittance from Pakistan, non-earning members of family of a
                  Pakistan national and persons who have gifted, received or
                  imported a vehicle in immediate past two years do not qualify
                  under these Schemes.
                </p>
                <p className="mt-10 text-left">
                  Transfer of Residence: A person residing abroad for a minimum
                  of 700 days, in immediately preceding 3 years, may bring into
                  Pakistan a vehicle under this scheme.
                </p>
                <p className="mt-10 text-left">
                  Gift Scheme: A person residing abroad for a minimum of 700
                  days, in immediately preceding 3 years, can gift a vehicle to
                  his family members under this scheme.
                </p>
                <p className="mt-10 text-left">
                  Baggage Scheme: A person residing abroad for a minimum period
                  of 180 days in immediately preceding 7 months can import a
                  vehicle into Pakistan under this scheme.
                </p>
                <p className="mt-10 text-left">
                  Duty and taxes are fixed in US $ for Asian make vehicles in
                  terms of engine capacity, which may be confirmed before
                  availing any of the above schemes. For vehicles other than
                  Asian make the duty and taxes are payable on value assessed by
                  Pakistan Customs.
                </p>
                <p className="mt-10 text-left">
                  These fixed duties /taxes for Asian make vehicles and assessed
                  duty/taxes for other vehicles are reduced @ 1% for every month
                  of the age of vehicle to a maximum of 50%.
                </p>
                <div class="alert alert-secondary" role="alert">
                  <h4>Important:</h4>
                  <p>
                    Please carefully calculate the age of old and used vehicles
                    before availing any of the above schemes, as vehicles older
                    than the age stated above are not importable under Import
                    Policy Order of Pakistan and may be confiscated.
                  </p>
                </div>
                <p className="mt-10 text-left">
                  For more information regarding procedure of Gift Undertaking,
                  kindly click the link below:
                  <a target="_blank" href="https://pakistanembassy.se/attestation/">
                    http://pakistanembassy.se/attestation/
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default VehicleGiftUndertaking;
