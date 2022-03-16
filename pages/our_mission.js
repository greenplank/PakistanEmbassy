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
        <title>Our Mission</title>
        <meta name="title" content="Our Mission" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Our Mission">
        <HeaderTwo />
        <PageHeader title="Our Mission" />
        <StickyHeader />
        <Container>
          <Row style={{ marginBottom: "4em" }}>
            <Col lg={12} md={12} xs={12}>
              <h3 className="mt-40">
                <b>
                  For Attestation / Birth Registration / Consular services
                  Appointment and Information:
                </b>
              </h3>
              <p className="mt-10 text-left">
                <a
                  href="mailto:consularattache@pakistanembassy.se"
                  target="_blank"
                >
                  consularattache@pakistanembassy.se
                </a>
                <br />
                Phone:
                <a
                  href="tel:+46764343315"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <b>+46764343315 </b>
                </a>
                (2pm to 4pm Mon-Thurs)
                <br />
                (Please note that calls at given number are attended only
                between 2pm to 4pm Monday to Thursday. If you find the line
                busy, call again after a reasonable interval. Please check
                holiday schedule{" "}
                <a
                  href="https://pakistanembassy.se/holiday-days/"
                  target="_blank"
                >
                  HERE
                </a>{" "}
                before calling.)
              </p>
              <h3 className="mt-20">
                <b>For Passport Appointment and Information:</b>
              </h3>
              <p className="mt-10 text-left">
                <a href="mailto:passport@pakistanembassy.se" target="_blank">
                  passport@pakistanembassy.se
                </a>
                <br />
                Phone:
                <a
                  href="tel:+46764343315"
                  target="_blank"
                  style={{ color: "black" }}
                >
                  <b>+46764343315 </b>
                </a>
                (2pm to 4pm Mon-Thurs)
                <br />
                (Please note that calls at given number are attended only
                between 2pm to 4pm Monday to Thursday. If you find the line
                busy, call again after a reasonable interval. Please check
                holiday schedule{" "}
                <a
                  href="https://pakistanembassy.se/holiday-days/"
                  target="_blank"
                >
                  HERE
                </a>{" "}
                before calling.)
              </p>
              <h3 className="mt-80">
                <b>For e-Visa related questions</b>
              </h3>
              <p className="mt-10 text-left">
                <b>
                  For questions regarding process of e-visa application /
                  requirements of e-visa / technical issues:{" "}
                </b>
                <br />
                Please contact NADRA via this link:{" "}
                <a href="https://visa.nadra.gov.pk/contact/" target="_blank">
                  https://visa.nadra.gov.pk/contact/
                </a>
              </p>
              <p>
                <b>For questions regarding your e-visa application: </b>
                <br />
                Please write your e-visa application reference number, complete
                name & which Passport you hold and email us on:{" "}
                <a
                  href="mailto:consularattache@pakistanembassy.se"
                  target="_blank"
                >
                  consularattache@pakistanembassy.se
                </a>{" "}
              </p>
              <p>
                The Government of Pakistan has mandated online visa and all visa
                applicants need to apply through the website
                <a href="https://visa.nadra.gov.pk/" target="_blank">
                  visa.nadra.gov.pk
                </a>
              </p>
              <p>
                The Embassy has made special arrangements for issuance of visas
                in cases of emergency visas ONLY for Pakistani or Pakistan
                origin applicants. In such a situation please apply online at{" "}
                <a href="https://visa.nadra.gov.pk/" target="_blank">
                  visa.nadra.gov.pk
                </a>{" "}
                and then send a text message to Embassy of Pakistan Stockholm on{" "}
                <a href="tel:+46 (0) 734 983 201" target="_blank">
                  +46 (0) 734 983 201
                </a>{" "}
                with the following details (Please do not call at this number):
                <ol>
                  <li>reference number of the e-visa application and </li>
                  <li>name of the applicant.</li>
                </ol>
                <br />
                <b>
                  Please note that this facility is only for Pakistani or
                  Pakistan origin applicants and their families.
                </b>
              </p>
              <h3 className="mt-80">
                <b>For Suggestions/Complaints</b>
              </h3>
              <p className="mt-10 text-left">
                If you have any suggestions/complaints related to the Embassy
                including consular services, feel free to send them to the
                following email address:
                <a href="mailto:suggestions@pakistanembassy.se" target="_blank">
                  suggestions@pakistanembassy.se
                </a>
              </p>
              <h4 className="mt-40">
                <b>Ambassador</b>
              </h4>
              <p className="mt-10 text-left">
                You are welcome to send any emails to the Ambassador at:
                <a href="mailto:ambassador@pakistanembassy.se" target="_blank">
                  ambassador@pakistanembassy.se
                </a>
              </p>
              <h4 className="mt-40">
                <b>Commercial Section:</b>
              </h4>
              <p className="mt-10 text-left">
                Open: Mon – Fri: 09:00am-5:00pm
                <br />
                Commercial Counselor: Mr. Ghulam Mustafa
                <br />
                Tel:
                <a href="tel:+46-8-20 33 00" target="_blank">
                  +46-8-20 33 00
                </a>
                (Ext – 4)
                <br />
                Fax: +46-8-22 35 55
                <br />
                Email:
                <a href="mailto:tic.stockholm@commerce.gov.pk" target="_blank">
                  tic.stockholm@commerce.gov.pk
                </a>
                <br />
                NOTE: For queries related to imports & exports only
              </p>
              <h3 className="mt-80">
                <b>How To Reach the Embassy:</b>
              </h3>
              <p className="mt-10 text-left">
                Embassy is located at
                <a
                  target="_blank"
                  href="https://goo.gl/maps/1EMvz58QJ9HojcZq6"
                  style={{ color: "black" }}
                >
                  first floor of Karlavägen 65, 114 49 Stockholm.
                </a>
              </p>
              <p>
                Nearest Tunnel-bana (metro station) is “Stadion” located on the
                red line.
              </p>
              <p>
                Before you exit “Stadion” metro station, follow the direction
                towards Nybrogatan/Karlavägen.
              </p>
              <p>
                Embassy is located next to metro station at Karlavägen 65. When
                you reach the building, dial Embassy’s door code B0001 (which is
                also listed next to security system installed at the main
                entrance of building). The door will be opened in a few seconds,
                and then you have to come to first floor. Press the ring button
                next to Embassy’s consular section door.
              </p>
              Phone:
              <a className="mt-40" href="tel:+46-8-20 33 00" target="_blank">
                +46-8-20 33 00
              </a>
              <p>
                Helpline for emergency matters after Embassy’s regular working
                hours:
                <a href="tel:+46 8 661 73 20" target="_blank">
                  +46 8 661 73 20
                </a>
                ,
                <a href="tel:+46 73 47 65 819" target="_blank">
                  +46 73 47 65 819
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Layout>
    </>
  );
};

export default BasicFact;
