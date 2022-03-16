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
                <p className="mt-50">Passport application</p>
                <h5>
                  Please read all the information on this page thoroughly. If
                  there is anything about passport applications that you could
                  not find below then you may write an email at:
                </h5>
                <p>
                  <a href="mailto:passport@pakistanembassy.se">
                    passport@pakistanembassy.se
                  </a>
                </p>
                <h3 className="mb-30 mt-30 text-left">
                  1. Apply for Machine Readable Passport (MRP) Renewal through
                  Online Passport Application System:
                </h3>
                <p>
                  Please visit the following link to apply for passport through
                  e-services portal and all its relevant information:
                </p>
                <p>
                  <a target="_blank" href="https://onlinemrp.dgip.gov.pk">
                    https://onlinemrp.dgip.gov.pk
                  </a>
                </p>
                {/* <div class="alert alert-secondary" role="alert">
                  <p>
                    <b>
                      Please note that Online service is only for renewal of
                      passport.
                    </b>
                  </p>
                  <p>
                    (E-Services Portal is the front door to Directorate General
                    of Immigration and Passports for online service for
                    Pakistani citizens around the world. Embassy is not involved
                    in online passport application system. Your direct link will
                    be established with Directorate General of Immigration &
                    Passports (Headquarters). For any information and queries,
                    you may please contact the helpline of e-services portal.
                    Fees and other requirements may also be checked on the above
                    mentioned link, if you wish to apply online)
                  </p>
                </div> */}

                <h3 className="mb-30 mt-30 text-left">
                  2.Apply for Machine Readable Passport (MRP) in Embassy of
                  Pakistan, Stockholm:
                </h3>
                <div className="mb-30">
                  <h4>Timings/Appointment:</h4>
                  <p className="mb-30 mt-30">
                    You must have to get an appointment for passport application
                    by sending an email at:{" "}
                    <a href="mailto:passport@pakistanembassy.se">
                      passport@pakistanembassy.se
                    </a>
                    <br />
                    (Please mention your desired date to visit and write your
                    phone number and name in the email).
                  </p>
                  <p className="mb-30 mt-30">
                    You may also call at{" "}
                    <a href="tel:0722 942 818">0722 942 818</a> (Call timings
                    2pm to 4pm Monday to Thursday) If you find the line busy,
                    please call again after a reasonable interval. Calls are not
                    attended on holidays. Click Here to check our Holidays
                    schedule before you make a call.
                    <br /> Visiting Hours: 09:00-12:00hrs (Mon-Thu), 09:00-11:00
                    (Friday)
                  </p>
                  <h3 className="mb-30 mt-30">
                    3. Requirements for Adults (18-year & above):
                  </h3>
                  <p className="mb-30 mt-30">
                    <ol>
                      <li>Personal appearance of the applicant</li>
                      <li>
                        Production of one of the following original valid NADRA
                        Card:
                        <ul>
                          <li>Computerized National Identity Card (CNIC) OR</li>
                          <li>
                            National Identity Card for Overseas Pakistanis
                            (NICOP)
                          </li>
                        </ul>
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
                  <p className="mb-30 mt-30">
                    If you do not have VALID original CNIC or NICOP, please
                    apply for one of these and proceed for Passport application
                    after you have received it.
                  </p>
                  <div class="alert alert-secondary" role="alert">
                    <p>
                      Visit the following link to apply for NADRA ID Card
                      (Nicop) online:
                    </p>
                    <p>
                      <a target="_blank" href="http://id.nadra.gov.pk">
                        http://id.nadra.gov.pk
                      </a>
                    </p>
                  </div>
                  <h4 className="mt-30" class="font-italic">
                    Special Instructions:
                  </h4>
                  <ul>
                    <li>
                      Married female/male applicants are required to produce
                      original CNIC / NICOP / Smart National ID Card modified in
                      accordance with their marital status before applying for
                      MRP.
                    </li>
                    <li>
                      Pakistan Government Officers/Employees are required to
                      produce original No Objection Certificate (NOC) issued
                      within last ninety (90) days by their respective
                      Ministries / Divisions / Departments.
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-30">
                    4. Requirements for Children (under-18 years):
                  </h3>
                  <p className="mb-30 mt-30">
                    <ol>
                      <li>Personal appearance of the child applicant</li>
                      <li>
                        Applicants under 18 years of age must be accompanied by
                        either one of the parents
                      </li>
                      <li>
                        Production of any of the following original valid NADRA
                        document:
                        <ul>
                          <li>NADRA Form ‘B’ OR</li>
                          <li>Computerized National Identity Card (CNIC) OR</li>
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
                          (When applying for child’s 1st Passport, parents must
                          also bring the following:)
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
                  <h5 className="mt-30">
                    Instructions for Parents of Newborn Children:
                  </h5>
                  <p className="mb-30 mt-30">
                    <b>1st step</b> towards Passport application of a newborn
                    child is to apply for{" "}
                    <a
                      target="_blank"
                      href="https://pakistanembassy.se/registration-of-newborn/"
                    >
                      Birth Registration (S-1 registration)
                    </a>{" "}
                    at Embassy of Pakistan in Stockholm.
                    <br />
                    <b>2nd step</b> is to apply for child NICOP at{" "}
                    <a target="_blank" href="https://id.nadra.gov.pk/">
                      NADRA website
                    </a>
                    (Scanned copy of Birth Registration certificate has to be
                    submitted at NADRA website during NICOP application)
                    <br />
                    <b>3rd step</b> is to apply for Passport after completion of
                    all requirements mentioned in the above list (1 to 8)
                  </p>
                  <h3 className="mb-30 mt-50">
                    5. Fees Table for Machine Readable Passport:
                  </h3>
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
                      Facility for making payment by Credit/Debit Card is
                      available at the Embassy. MRP Fee is not accepted in cash
                      at the MRP section of the Embassy.
                    </li>
                    <li>
                      Cash can be deposited in Embassy’s SEB Account no 5277 10
                      109 68
                    </li>
                    <li>
                      Full name of the applicant must be written clearly on the
                      Bank slips.
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    6. Application in case of Lost Passport:
                  </h3>
                  <ul>
                    <li>Valid Original Nadra ID card (Original + Photocopy)</li>
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
                  <h3 className="mb-30 mt-50">7. Passport Delivery:</h3>
                  <p>
                    (Delivery of passports may get delayed due to flight
                    cancellations)
                  </p>
                  <ul>
                    <li>Normal Passport = 20-25 Days</li>
                    <li>Urgent Passport = 10-12 Days</li>
                    <li>
                      Applicant has to visit personally (09:00-12:00 Mon-Thu,
                      09:00-11:00 Fri) to collect the passport; however, family
                      member (Parents, Spouse and Sibling) may also collect the
                      passport upon proving identity.
                    </li>
                    <li>
                      Please bring your Original Token and Previous Passport at
                      the time of collection.
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
                      <b className="font-italic">Passport Delivery by Post:</b>{" "}
                      It is not an official policy to deliver new passports by
                      post. However, upon applicant’s personal request, who
                      belongs to Finland or other far-distant city, we can send
                      it by post. In that case applicant has to provide return
                      envelope and postage stamps, which can be used to send
                      passport by priority post.
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
                      service is provided upon applicant’s personal request and
                      Embassy does not take any responsibility if the passport
                      is lost or delayed by the postal courier.
                    </p>
                  </div>
                  <h3 className="mb-30 mt-50">8. How to Reach the Embassy:</h3>
                  <p>
                    Embassy is located at first floor of Karlavägen 65, 114 49
                    Stockholm. Nearest Tunnel-bana (metro station) is “Stadion”
                    located on the red line. Before you exit “Stadion” metro
                    station, follow the direction towards Nybrogatan/Karlavägen.
                  </p>
                  <p>
                    Embassy is located next to metro station at Karlavägen 65.
                    When you reach the building, dial Embassy’s door code B0001
                    (which is also listed next to security system installed at
                    the main entrance of building). The door will be opened in a
                    few seconds, and then you have to come to first floor. Press
                    the ring button next to Embassy’s consular section door.
                  </p>
                  <h5 className="font-italic">
                    <b>MRP Application Flow</b>
                  </h5>
                  <ul>
                    <li>
                      Submission of Fee at Embassy (by Debit/Credit Card) or at
                      Bank
                    </li>
                    <li>• Token issuance and photograph</li>
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
                    (Machine Readable Passport (MRP) services are entirely based
                    on technical system. Sometimes that system can abruptly
                    breakdown due to sudden unforeseen technical reasons. In
                    such situation, MRP services are discontinued without any
                    notice. Therefore, applicants who come on such day to the
                    Embassy for MRP will have to come on another day when the
                    MRP system is restored and functional. Cooperation of the
                    applicants in such extraordinary circumstances is highly
                    appreciated.)
                  </p>
                  <p className="font-italic">
                    For any other information which is not found above about
                    passports, please send email to
                    <a href="mailto:passport@pakistanembassy.se">
                      passport@pakistanembassy.se
                    </a>
                  </p>
                  <p className="font-italic">
                    Status of your Passport can be checked online by <a href="http://pakistanembassy.se/status/" target="_blank">clicking
                    here.</a>
                  </p>
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

export default PassportApplication;