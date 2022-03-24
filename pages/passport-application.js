import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const PassportApplication = () => {
  return (
    <>
      <Head>
        <title>Application for Passport</title>
        <meta name="title" content="Application for Passport" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Application for Passport">
        <HeaderTwo />
        <PageHeader title="Application for Passport" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h2 className="mt-50">
                  <b>Useful Information for Passport application</b>
                </h2>
                <ol>
                  <li>
                    <h4 className="mb-30 mt-30 text-left">
                      Apply for Machine Readable Passport (MRP) Renewal Online{" "}
                      <a target="_blank" href="https://onlinemrp.dgip.gov.pk">
                        here
                      </a>
                    </h4>
                  </li>
                  <li>
                    {" "}
                    <h4 className="mb-30 mt-30 text-left">
                      To apply for Machine Readable Passport (MRP) in Embassy of
                      Pakistan, Stockholm, book an appointment by sending an
                      email at{" "}
                      <a
                        target="_blank"
                        href="mailto:passport@pakistanembassy.se"
                      >
                        passport@pakistanembassy.se
                      </a>
                    </h4>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-30">
                      Requirements for Adults (18-year & above):
                    </h4>
                    <p className="mb-30 mt-30">
                      <ol>
                        <li>Personal appearance of the applicant</li>
                        <li>
                          Production of one of the following original valid
                          NADRA Card
                        </li>
                        <li>
                          Original previous Passport (for renewal applications)
                        </li>
                        <li>
                          Swedish/Finnish residence permit (Passport in case of
                          Dual citizenship)
                        </li>
                        <li>Photocopies of all documents with the originals</li>
                      </ol>
                    </p>

                    <h4 className="mt-30" class="font-italic">
                      Special Instructions:
                    </h4>
                    <ul>
                      <li>
                        Married female/male applicants are required to produce
                        original CNIC / NICOP / Smart National ID Card modified
                        in accordance with their marital status before applying
                        for MRP.
                      </li>
                      <li>
                        Pakistan Government Officers/Employees are required to
                        produce original No Objection Certificate (NOC) issued
                        within last ninety (90) days by their respective
                        Ministries / Divisions / Departments.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-30">
                      Requirements for Children (under-18 years):
                    </h4>
                    <p className="mb-30 mt-30">
                      <ol>
                        <li>Personal appearance of the child applicant</li>
                        <li>
                          Applicants under 18 years of age must be accompanied
                          by either one of the parents
                        </li>
                        <li>
                          Production of any of the following original valid
                          NADRA document:
                          <ul>
                            <li>NADRA Form ‘B’ OR</li>
                            <li>
                              Computerized National Identity Card (CNIC) OR
                            </li>
                            <li>
                              National Identity Card for Overseas Pakistanis
                              (NICOP)
                            </li>
                          </ul>
                        </li>
                        <li>
                          Original Previous Passport (for renewal applications)
                        </li>
                        <li>
                          Parents’ NADRA IDs, Pakistani Passports and
                          Swedish/Finnish residence permit (or passport).
                          Documents of both parents must have to be brought in
                          original even if one parent visits for passport
                          application with child.
                        </li>
                        <li>
                          Photocopies of all documents with the originals
                          <br />
                          <b>
                            (When applying for child’s 1st Passport, parents
                            must also bring the following:)
                          </b>
                        </li>
                        <li>
                          Extract of population register (Personbevis of the
                          child) from Skatteverket/Maistraatti in English. (in
                          case of first Machine Readable Passport application)
                        </li>
                        <li>
                          Certificate of Birth Registration{" "}
                          <a
                            target="_blank"
                            href="https://pakistanembassy.se/registration-of-newborn/"
                          >
                            (S-1 Registration)
                          </a>
                        </li>
                      </ol>
                    </p>
                    <h4 className="mt-30" class="font-italic">
                      Special Instructions:
                    </h4>
                    <ul>
                      <li>
                        In case parents are separated or divorced, the custodian
                        father or mother is required to produce court orders
                        confirming his/her legal right of custody of the child.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-50">
                      Fees Table for Machine Readable Passport:
                    </h4>
                    <div>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Validity</th>
                            <th>Pages</th>
                            <th>Ordinary (20-25 days) </th>
                            <th>Urgent (10-12 days)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>5 years</td>
                            <td>36-page </td>
                            <td>SEK 200/- </td>
                            <td>SEK 340/-</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>72-page </td>
                            <td>SEK 370/- </td>
                            <td>SEK 600/-</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>100-page </td>
                            <td>SEK 400/- </td>
                            <td>SEK 800/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mb-30 mt-70" class="font-italic">
                      <b>
                        10-Year Validity Passports Issued only to the applicants
                        of age 15 years and above
                      </b>
                    </p>
                    <div>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Validity</th>
                            <th>Pages</th>
                            <th>Ordinary (20-25 days) </th>
                            <th>Urgent (10-12 days)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>10 years </td>
                            <td>36-page </td>
                            <td>SEK 300/- </td>
                            <td>SEK 500/-</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>72-page </td>
                            <td>SEK 550/- </td>
                            <td>SEK 900/-</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>100-page </td>
                            <td>SEK 600/- </td>
                            <td>SEK 1200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <ul className="mt-30">
                      <li>
                        Please note that facility for making payment by
                        Credit/Debit Card is available at the Embassy. MRP Fee
                        is not accepted in cash at the MRP section of the
                        Embassy.
                      </li>
                      <li>
                        Cash can be deposited in Embassy’s SEB Account no 5277
                        10 109 68
                      </li>
                      <li>
                        Full name of the applicant must be written clearly on
                        the Bank slips.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-50">
                      Application Documents in case of Lost Passport:
                    </h4>
                    <ul>
                      <li>
                        Valid Original Nadra ID card (Original + Photocopy)
                      </li>
                      <li>Police Report for the lost passport (Copy)</li>
                      <li>
                        Valid Visa or Residency proof from the Migration
                        Department (photocopy)
                      </li>
                      <li>First Time Lost: Double fee is charged.</li>
                      <li>Second Time Lost: Quadruple fee is charged.</li>
                      <li>
                        Third Time Lost: Case shall be referred to Director
                        General of Immigration & Passports for approval.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-50">Passport Delivery</h4>

                    <ul>
                      <li>
                        Status of your Passport can be checked online by{" "}
                        <a
                          href="https://pakistanembassy.se/status/"
                          target="_blank"
                        >
                          clicking here
                        </a>
                      </li>
                      <li>
                        Applicant has to visit personally during official
                        timings (09:00-12:00 Mon-Thu, 09:00-11:00 Fri) to
                        collect the passport; however, family member (Parents,
                        Spouse and Sibling) may also collect the passport upon
                        proving identity.
                      </li>
                      <li>
                        Please bring your Original Token and Previous Passport
                        at the time of collection.
                      </li>
                      <li>
                        Check status of your passport by clicking{" "}
                        <a
                          href="https://pakistanembassy.se/status/"
                          target="_blank"
                        >
                          HERE
                        </a>
                        before you visit to receive it.
                      </li>
                      <li>
                        <b className="font-italic">
                          Passport Delivery by Post:
                        </b>{" "}
                        It is not an official policy to deliver new passports by
                        post. However, upon applicant’s personal request, who
                        belongs to Finland or other far-distant city, we can
                        send it by post. In that case applicant has to provide
                        return envelope and postage stamps, which can be used to
                        send passport by priority post.
                        <ul>
                          <li>
                            Applicants from Sweden should bring a self-addressed
                            return envelope with SEK 125/- postage stamps on it.
                          </li>
                          <li>
                            Applicants from Finland should bring self-addressed
                            return envelope with 9 international coupons{" "}
                            <a
                              target="_blank"
                              href="https://verkkokauppa.posti.fi/PublishedService?pageID=9&itemcode=111155"
                            >
                              (see information about international coupons by
                              clicking here).
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div class="alert alert-secondary" role="alert">
                      <p>
                        <b className="font-italic">Please Note</b> that this
                        service is provided upon applicant’s personal request
                        and Embassy does not take any responsibility if the
                        passport is lost or delayed by the postal courier.
                      </p>
                    </div>
                  </li>
                  <li>
                    <h4 className="mb-30 mt-50">How to Reach the Embassy:</h4>
                    <p>
                      Embassy is located at first floor of Karlavägen 65, 114 49
                      Stockholm. Nearest Tunnel-bana (metro station) is
                      “Stadion” located on the red line. Before you exit
                      “Stadion” metro station, follow the direction towards
                      Nybrogatan/Karlavägen.
                    </p>
                    <p>
                      Embassy is located next to metro station at Karlavägen 65.
                      When you reach the building, dial Embassy’s door code
                      B0001 (which is also listed next to security system
                      installed at the main entrance of building). The door will
                      be opened in a few seconds, and then you have to come to
                      first floor. Press the ring button next to Embassy’s
                      consular section door.
                    </p>
                    <h5 className="font-italic">
                      <b>MRP Application Flow</b>
                    </h5>
                    <ul>
                      <li>
                        Submission of Fee at Embassy (by Debit/Credit Card) or
                        at Bank
                      </li>
                      <li>Token issuance and photograph</li>
                      <li>Biometric Data Capture</li>
                      <li>Data Entry</li>
                      <li>Interview and Decision</li>
                    </ul>
                    <p>
                      Collection of Passport (on due date after checking{" "}
                      <a
                        href="https://pakistanembassy.se/status/"
                        target="_blank"
                      >
                        status
                      </a>
                      )
                    </p>
                    <p className="font-italic">
                      (Machine Readable Passport (MRP) services are entirely
                      based on technical system. Sometimes that system can
                      abruptly breakdown due to sudden unforeseen technical
                      reasons. In such situation, MRP services are discontinued
                      without any notice. Therefore, applicants who come on such
                      day to the Embassy for MRP will have to come on another
                      day when the MRP system is restored and functional.
                      Cooperation of the applicants in such extraordinary
                      circumstances is highly appreciated.)
                    </p>
                    <p className="font-italic">
                      For any other information which is not found above about
                      passports, please send email to
                      <a href="mailto:passport@pakistanembassy.se">
                        passport@pakistanembassy.se
                      </a>
                    </p>
                    <p className="font-italic">
                      Status of your Passport can be checked online by{" "}
                      <a
                        href="http://pakistanembassy.se/status/"
                        target="_blank"
                      >
                        clicking here.
                      </a>
                    </p>
                  </li>
                </ol>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default PassportApplication;
