import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Registration = () => {
  return (
    <>
      <Head>
        <title>Registration of Birth</title>
        <meta name="title" content="Registration of Birth" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Registration of Birth">
        <HeaderTwo />
        <PageHeader title="Registration of Birth" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <div class="alert alert-secondary mt-50 mb-30" role="alert">
                  <p>
                    <b>Please note</b> that Registration of Newborn can only be
                    done within one year of the date of birth of the child. If
                    your child is older than 01 year, you can directly apply for
                    NICOP / POC on Nadra’s website by submitting local birth
                    certificate of the child.
                  </p>
                </div>
                <h3 className="mb-30 mt-60 text-left">1. Timings</h3>
                <ul>
                  <li>
                    It is preferred that required documents should be sent by
                    post to avoid.. Please see instructions below at heading no.
                    4 & 5. However, you may also bring the required documents
                    during visiting hours.
                  </li>
                  <li>
                    {" "}
                    For any information regarding birth registration, write an
                    email at{" "}
                    <a href="mailto:consularattache@pakistanembassy.se">
                      consularattache@pakistanembassy.se
                    </a>{" "}
                    or call at{" "}
                    <a
                      href="tel:+46764343315"
                    >
                      +46764343315
                    </a>{" "}
                    (Call timings 2pm to 4pm Mon-Thu).
                    <br />
                    <p>
                      If you find the line busy, please call again after a
                      reasonable interval. Calls are not attended on holidays.
                      <a href="https://pakistanembassy.se/holiday-days/">
                        Click Here
                      </a>{" "}
                      to check our Holidays schedule before you make a call.
                    </p>
                  </li>
                  <li>Visiting hours: 09:00-12:00 hrs (Mon-Thu)</li>
                </ul>

                <h3 className="mb-30 mt-50 text-left">
                  2. Registration Requirements:
                </h3>
                <div className="mb-30">
                  <ul>
                    <li>
                      New born babies born to Pakistani citizens/dual citizens
                      of Sweden and Finland must be registered as Pakistani
                      nationals in the Embassy of Pakistan Stockholm (Sweden),
                      by their parents within one year of the date of birth. The
                      following documents are required for birth registration:
                    </li>
                    <li>
                      <a target="_blank" href="/pdfs/Form-S_1-1.pdf">
                        Form S_1-1
                      </a>{" "}
                      (duly completed){" "}
                      <span className="font-italic">
                        (DOB should be written in <b>DD-MM-YYYY </b>format and
                        do not enter any other date on the form).
                      </span>
                    </li>
                    <li>
                      Extract of Population Register (Familjbevis) showing the
                      name of the newborn and his/her guardians, in English from
                      Skatteverket / Maistraatti (Original).
                    </li>
                    <li>
                      Both parents’ NICOP/CNICs (Original+ Photocopy) If
                      original IDs of parents are not sent then the case will
                      not be processed.
                    </li>
                    <li>
                      Both parents’ passports (Photocopy only), and if parents
                      have dual citizenship then submit photocopy of the other
                      passports as well.
                    </li>
                    <li>
                      Mother’s NICOP/CNIC must have husband’s name on it. If it
                      is not so then copy of Nikahnama has to be submitted.
                    </li>
                    <li>
                      In case of foreign mother or father, an affidavit
                      declaring “No Objection” for registration of his/her child
                      as a Pakistani national.
                      <a href="/pdfs/NOC-for-child-registration-fillable.pdf">
                        Click here
                      </a>{" "}
                      for No Objection Certificate.
                    </li>
                    <li>
                      The nikkahnama must be attested by Ministry of Foreign
                      Affairs in Pakistan. In case the Marriage ceritficate has
                      been issued in Sweden it needs to be attested by Swedish
                      Ministry of Foreign Affairs & likewise for Finland i.e.
                      Marriage ceritficates issued in Finland need to be
                      attested by Finnish Ministry of Foreign Affairs before
                      submission of documents.
                    </li>
                    <li>
                      Two passport-size colour photographs of the child (on
                      photographic paper preferably with white background).
                    </li>
                    <li>
                      Fee SEK 110/- (Fee is charged at Embassy by Debit/Credit
                      card)
                    </li>
                  </ul>
                  <p className="alert alert-secondary font-italic" role="alert">
                    <b>NOTE:</b> THE DEADLINE FOR REGISTRATION OF THE POWER OF
                    ATTORNEY BY THE CONCERNED ASSISTANT COMMISSIONER/ADDITIONAL
                    COLLECTOR/SUB REGISTER MEANT FOR ATTORNEY/NOMINEE IN
                    PAKISTAN IS OF FOUR MONTHS.
                  </p>

                  <h3 className="mb-30 mt-50">3. Fees Instructions:</h3>
                  <ul>
                    <li>
                      Facility for making payment by Credit/Debit Card is
                      available at the Embassy. Consular Fee is not accepted in
                      cash at the Embassy.
                    </li>
                    <li>
                      Cash can be deposited in Embassy’s SEB Account no: 5277 10
                      109 68
                    </li>
                    <li>
                      Full name of the applicant must be written clearly on the
                      Bank slip
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    4. If cases are sent by post from Sweden:
                  </h3>
                  <ul>
                    <li>
                      If documents are sent by post from Sweden then fees should
                      be transferred to SEB bank account 5277 10 109 68
                    </li>
                    <li>
                      Applications sent through post should contain a
                      self-addressed return envelope with SEK 125/- postage
                      stamps on it.
                    </li>
                    <li>
                      The deposit slip must be attached to the application form
                      before submission, otherwise the case would be kept
                      pending.
                    </li>
                    <li>
                      Cash is not accepted through post. Envelopes containing
                      cash are returned without consideration.
                    </li>
                    <li>
                      Please don’t forget to write your phone number on return
                      envelope.
                    </li>
                    <li>
                      This service is provided upon applicants’ personal request
                      and Embassy does not take any responsibility if the
                      documents are lost, damaged or delayed by the postal
                      courier.
                    </li>
                    <li>
                      Please sent your Documents at the following address by
                      priority post:
                      <p>
                        <b>Embassy of Pakistan</b>
                        <br />
                        <b>P. O. Box No. 5872</b>
                        <br />
                        <b>102 40 Stockholm</b>
                        <br />
                        <b>Sweden</b>
                      </p>
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    5. If cases are sent by post from Finland:
                  </h3>
                  <ul>
                    <li>
                      If cases are sent by post from Finland then fees should
                      transfer the fees in following account:
                      <br />{" "}
                      <b>
                        SEB IBAN no: SE80 5000 0000 0527 7101 0968.
                        <br /> Swift Address of SEB is: ESSESESS
                      </b>
                    </li>
                    <li>
                      Please note that applicants from Finland must add SEK 60/-
                      to the total fee on account of Bank charges, which is
                      ultimately paid by the Embassy to the concerned Bank. Such
                      cases, where the Bank Transfer Charges are not paid
                      separately by the applicant to the Embassy.
                    </li>
                    <li>
                      The deposit slip must be attached to the application form
                      before submission, otherwise the case would be kept
                      pending.
                    </li>
                    <li>
                      Cash is not accepted through post. Envelopes containing
                      cash are returned without consideration.
                    </li>
                    <li>
                      Applicants from Finland should send self-addressed return
                      envelope with 9 international coupons{" "}
                      <a
                        href="https://verkkokauppa.posti.fi/PublishedService?pageID=9&itemcode=111155"
                        target="_blank"
                      >
                        (see information about international coupons by clicking
                        here)
                      </a>
                    </li>
                    <li>
                      Please don’t forget to write your phone number on return
                      envelope.
                    </li>
                    <li>
                      This service is provided upon applicants’ personal request
                      and Embassy does not take any responsibility if the
                      documents are lost, damaged or delayed by the postal
                      courier.
                    </li>
                    <li>
                      Please sent your Documents at the following address by
                      priority post:
                      <p>
                        <b>Embassy of Pakistan</b>
                        <br />
                        <b>P. O. Box No. 5872</b>
                        <br />
                        <b>102 40 Stockholm</b>
                        <br />
                        <b>Sweden</b>
                      </p>
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    6. Apply for Nadra ID card (NICOP) of your child from home:
                  </h3>
                  <ul>
                    <li>
                      After you obtain S-1 birth registration certificate from
                      the Embassy, please visit Nadra website
                      <br />
                      <p>
                        <a href="http://id.nadra.gov.pk/" target="_blank">
                          http://id.nadra.gov.pk/{" "}
                        </a>{" "}
                        to apply for Nadra ID card (NICOP) of your child. This
                        process can only be done through Nadra online
                        application system and Embassy is not involved in ID
                        card issuance at any stage. You may also find brief
                        information about Nadra system at our webiste:{" "}
                        <a
                          href="https://pakistanembassy.se/nicop-cnic-poc/"
                          target="_blank"
                        >
                          https://pakistanembassy.se/nicop-cnic-poc/
                        </a>
                      </p>
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    7. Requirements for issuance of passports for New born
                    children:
                  </h3>
                  <ul>
                    <li>
                      Machine Readable Passports (MRPs) are issued at Embassy of
                      Pakistan, Stockholm. For more information please follow
                      the link{" "}
                      <a href="/passport-application" target="_blank">
                        Passport Information
                      </a>
                    </li>
                    <li>
                      For any other query related to birth registration, please
                      email us on <a href="mailto:consularattache@pakistanembassy.se">consularattache@pakistanembassy.se</a> Please
                      mention your name and phone number in email
                    </li>
                  </ul>
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

export default Registration;
