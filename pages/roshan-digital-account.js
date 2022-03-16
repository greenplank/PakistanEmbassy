import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import RoshanDigitalFAQ from "../components/faqs/RoshanDigitalFAQ";
import RoshanDigitalBanking from "../assets/images/backgrounds/RoshanDigitalBanking.jpeg";
import RoshanDigital from "../assets/images/backgrounds/roshan-digital-logo.png";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const RoshanDigitalAccount = () => {
  return (
    <>
      <Head>
        <title>Roshan Digital Account</title>
        <meta name="title" content="Roshan Digital Account" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Roshan Digital Account">
        <HeaderTwo />
        <PageHeader title="Roshan Digital Account" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div className="text-center mt-60">
                  <img
                    style={{ contentAlign: "center" }}
                    src={RoshanDigital}
                    alt="RoshanDigital"
                    width="300px"
                  />
                  <h1 className="mt-80">
                    <b>
                      ROSHAN DIGITAL ACCOUNT INITIATIVE FOR NON-RESIDENT
                      PAKISTANIS (NRPS)
                    </b>
                  </h1>
                </div>
                <div className="text-center">
                  <h1 className="mt-80">
                    <b>
                      Pakistan Exporters Directory{" "}
                      <a
                        href="http://pakistanexportersdirectory.gov.pk/"
                        target="_blank"
                      >
                        (click here)
                      </a>
                    </b>
                  </h1>
                  <h3 className="mb-40">
                    Procedure of Import of Used Car and Mobile phones.
                  </h3>

                  <iframe
                    width="960"
                    height="415"
                    src="https://www.youtube.com/embed/JTtzdPyG3qw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <h3 className="mt-80">
                  <b>A New Era of Banking in Pakistan:</b>
                </h3>
                <p className="mt-10 text-left">
                  The Roshan Digital Account is a major new initiative of the
                  State Bank of Pakistan, in collaboration with commercial banks
                  operating in Pakistan. This account provides innovative
                  banking solutions for millions of Non-Resident Pakistanis
                  (NRPs) seeking to undertake banking, payment and investment
                  activities in Pakistan.
                </p>
                <h3 className="mt-80">
                  <b>Fully Digital Account Opening and Operation:</b>
                </h3>
                <p className="mt-10 text-left">
                  For the first time in Pakistan’s history, NRPs are being
                  provided an opportunity to remotely open an account in
                  Pakistan through an entirely digital and online process
                  without any need to visit a bank branch. Opening the account
                  will require only a basic set of information and documents.
                  Banks have been asked to complete all necessary customer due
                  diligence within 48 hours.
                </p>

                <h3 className="mt-80">
                  <b>Lifestyle Banking:</b>
                </h3>
                <p className="mt-10 text-left">
                  The Roshan Digital Account will integrate the Pakistani
                  diaspora fully into the Pakistani banking and digital payments
                  system:
                </p>
                <ul>
                  <li>
                    It will provide access to all conventional account services,
                    including funds transfer, bill payments for their families,
                    e-commerce and other payments in Pakistan.
                  </li>
                  <li>
                    It will also enable investment in specially designed saving
                    instruments for NRPs called Naya Pakistan certificates,
                    which are being launched soon by Government of Pakistan.
                    These instruments will be available in both US dollars and
                    Pakistani rupees, at short- and long-term tenors, with
                    attractive rates of return and in both conventional and
                    Sharia-compliant forms.
                  </li>
                  <li>
                    It will allow NRPs to invest in fixed deposit products
                    offered by banks.
                  </li>
                  <li>
                    It will enable NRPs to invest in Pakistan’s stock market.
                  </li>
                  <li>
                    Going forward, it will also enable NRPs to undertake
                    residential and commercial real estate related transactions
                    in Pakistan.
                  </li>
                  <li>
                    It will be backed by debit and virtual debit cards for both
                    domestic and overseas use.
                  </li>
                </ul>

                <p className="mt-80 text-left">
                  Accounts available in both Foreign Currency and Pakistani
                  Rupees NRPs can choose either a foreign currency or
                  rupee-denominated account, or both. They would be
                  interoperable and enable real-time online conversion from
                  foreign currency to Pakistani Rupees, and vice versa.
                </p>
                <p>
                  <b>
                    Full Repatriability Funds in the Roshan Digital Account will
                    be fully repatriable
                    <br /> they can be remitted back from Pakistan without any
                    regulatory approval.
                  </b>
                </p>

                <h3 className="mt-80">
                  <b>BANK LINKS</b>
                </h3>
                <ul>
                  <li>
                    <a
                      href="https://www.meezanbank.com/roshan-digital-account/"
                      target="_blank"
                    >
                      Meezan Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hbl.com/personal/remittance/ebanc-roshan-digital-account/ebanc-roshan-digital-account"
                      target="_blank"
                    >
                      HBL
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.bankalfalah.com/alfalah-roshan-digital-account-nrp/"
                      target="_blank"
                    >
                      Alfalah Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.faysalbank.com/en/roshan-digital-accounts-for-overseas-pakistanis/"
                      target="_blank"
                    >
                      Faysal Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mcb.com.pk/personal-product/roshan-digital-account"
                      target="_blank"
                    >
                      MCB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.sc.com/pk/save/roshan-digital-account/"
                      target="_blank"
                    >
                      Standard Chartered Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.ubldigital.com/NRP-Services/ubl-roshan-digital-account"
                      target="_blank"
                    >
                      UBL Bank
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.samba.com.pk/samba/banking-detail/roshan-digital-account-opening-facility"
                      target="_blank"
                    >
                      Samba Bank
                    </a>
                  </li>
                </ul>

                <div className="text-center mt-60">
                  <img
                    style={{ contentAlign: "center" }}
                    src={RoshanDigitalBanking}
                    alt="RoshanDigitalBanking"
                    width="900px"
                  />
                </div>
                <div className="mt-80">
                  <RoshanDigitalFAQ />
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

export default RoshanDigitalAccount;
