import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const Attestation = () => {
  return (
    <>
      <Head>
        <title>Attestation of Documents</title>
        <meta name="title" content="Attestation of Documents" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Attestation of Documents">
        <HeaderTwo />
        <PageHeader title="Attestation of Documents" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h3 className="mb-30 mt-60 text-left">
                  No.1: Timings / Appointment
                </h3>
                <p>
                  You must have to get an appointment for attestation by sending
                  an email at:{" "}
                  <a href="mailto:consularattache@pakistanembassy.se">
                    consularattache@pakistanembassy.se
                  </a>{" "}
                  (Please mention your desired date to visit and write your
                  phone number and name in the email).
                </p>
                <p>
                  You may also call at{" "}
                  <a href="tel:+46764343315">+46764343315</a> (Call timings 2pm
                  to 4pm on Mon-Thu)
                  <br /> If you find the line busy, please call again after a
                  reasonable interval. Calls are not attended on holidays.{" "}
                  <a href="https://pakistanembassy.se/holiday-days/">
                    Click Here
                  </a>{" "}
                  to check our Holidays schedule before you make a call.
                  <br />
                  Timings: 09:00-12:00hrs (Mon-Thu), 09:00-11:00 (Friday)
                </p>
                <div class="alert alert-secondary" role="alert">
                  <p>
                    <b>NOTE:</b> Power of Attorney/Authority Letter/Affidavit
                    must be written by the applicant OR through a lawyer or
                    advocate.
                  </p>
                  <p>
                    <b>NOTE:</b> Witnesses are only for procedural requirements.
                    For the attestation of document, the executant (person who
                    is giving the authority) is required to visit the Embassy in
                    person.
                  </p>
                </div>

                <h3 className="mb-30 mt-50 text-left">
                  No.2: General or Special Power of Attorney / Affidavit/
                  Undertaking / (Instructions for CNIC/NICOP/POC holders)
                </h3>
                <div className="mb-30">
                  <ol>
                    <li>
                      You have to prepare your Power of Attorney / Affidavit or
                      Undertaking
                    </li>
                    <li>
                      These documents for Pakistani nationals (with
                      NICOP/CNIC/POC) have to be signed by the Executor in the
                      presence of an authorized officer of the Embassy (all
                      pages have to be signed and thumb impression affixed).
                      Therefore, these cases cannot be handled by post and
                      appearance of the Executor is a must.
                    </li>
                    <li>
                      Following information of both Executor and Attorney must
                      be provided in the Power of Attorney:
                      <ul>
                        <li>Name</li>
                        <li>Father’s Name</li>
                        <li>CNIC/NICOP/POC No.</li>
                        <li>Passport No.</li>
                        <li>Contact No.</li>
                        <li>Address</li>
                      </ul>
                    </li>
                    <li>
                      These documents should also be signed by two witnesses,
                      who are not relatives and are resident in Sweden/Finland
                      and known to the person signing the attorney/affidavit.
                      Full names, CNIC Number, complete addresses and telephone
                      numbers of both the witnesses should be clearly indicated
                      under their signatures and copies of their CNICs/NICOP/POC
                      are also provided.
                    </li>
                    <li>
                      Two color photographs of the Executor that are no more
                      than 06 months old. If the photographs are black and white
                      or older than 06 months, they will not be accepted.
                    </li>
                    <li>Original NICOP or CNIC along with photocopies.</li>
                    <li>Passport and residence permit (only photocopies)</li>
                    <li>
                      <b>Fee: SEK 110/- </b>
                    </li>
                  </ol>
                  <p className="alert alert-secondary font-italic" role="alert">
                    <b>NOTE:</b> THE DEADLINE FOR REGISTRATION OF THE POWER OF
                    ATTORNEY BY THE CONCERNED ASSISTANT COMMISSIONER/ADDITIONAL
                    COLLECTOR/SUB REGISTER MEANT FOR ATTORNEY/NOMINEE IN
                    PAKISTAN IS OF FOUR MONTHS.
                  </p>

                  <h3 className="mb-30 mt-50">
                    No.3: General or Special Power of Attorney / Affidavit/
                    Undertaking (Instructions for Swedish/Finnish Citizens who
                    do not hold Pakistani ID)
                  </h3>
                  <p className="mb-30 mt-30">
                    <ol>
                      <li>
                        You have to prepare your Power of Attorney / Affidavit
                        or Undertaking
                      </li>
                      <li>
                        Non-Pakistani citizens (with Swedish & Finnish
                        Passports) have to follow these steps:
                        <ul>
                          <li>
                            Visit Swedish Notary public{" "}
                            <a href="https://www.notariuspublicus.se/">
                              https://www.notariuspublicus.se/
                            </a>
                            for attestation of your document
                          </li>
                          <li>
                            Then visit Swedish Foreign Office{" "}
                            <a href="http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/">
                              http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/
                            </a>
                            for its legalization
                          </li>
                        </ul>
                      </li>
                      <li>
                        After the above two attestations, documents have to be
                        brought to us for attestation
                      </li>
                      <li>Swedish or Finnish passport (only photocopies)</li>
                      <li>
                        <b>Fee: SEK 200/-</b>
                      </li>
                    </ol>
                  </p>
                  <h3 className="mb-30 mt-50">
                    No.4: How to Obtain Unmarried/Single-Status Certificate from
                    Pakistan
                  </h3>
                  <ol>
                    <li>
                      Unmarried certificate or Single Status Certificate can be
                      obtained from the Tehsil Union Council or Metropolitan
                      Corporation of the City of his/her permanent residence in
                      Pakistan. Moreover, one of the parents of the person can
                      also write an Affidavit solemnly affirming that his or her
                      son/daughter is unmarried. The certificate or Affidavit
                      can then be attested from the Ministry of Foreign Affairs
                      of Pakistan and finally from the Embassy.
                    </li>
                    <li>
                      For example: A person living in Finland/Sweden with a
                      permanent residence of Gujrat, Punjab needs an unmarried
                      certificate to present in Finland/Sweden to the
                      Immigration authority. He should first get unmarried
                      certificate from the Union Council in Gujrat and then get
                      this certificate attested from Ministry of Foreign Affairs
                      of Pakistan. The certificate can then by attested at the
                      Embassy of Pakistan Stockholm, Sweden.
                    </li>
                    <li>
                      In case he cannot get unmarried certificate from the Union
                      Council, one of his parents, either father or mother can
                      write an Affidavit regarding the unmarried status of son
                      or daughter and follow the same procedure as mentioned in
                      para 2 above.
                    </li>
                    <li>
                      The unmarried certificate of the person should clearly
                      mention the name of the person, father’s name , CNIC
                      number, and Passport number . It must also be mentioned in
                      the certificate that the person is unmarried according to
                      official record of the local Union Council or Marriage
                      Registrar (which is called Nikah Registrar)
                    </li>
                  </ol>
                  <h3 className="mb-30 mt-50">No.5: Commercial Documents</h3>
                  <ol>
                    <li>
                      The documents presented to the Embassy for attestation
                      should be duly attested beforehand by the Swedish/ Finnish
                      Ministry of Foreign Affairs. For information please visit{" "}
                      <a href="http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/">
                        http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/
                      </a>
                    </li>
                    <li>
                      An authority letter by the Company for the
                      individual/courier company bringing the documents to the
                      Embassy
                    </li>
                    <li>
                      <b>Fee: SEK 510/-</b>
                    </li>
                  </ol>
                  <h3 className="mb-30 mt-50">
                    No.6: Any Documents Originating from Pakistan Such As
                    <br />
                    Marriage Certificate / Unmarried Certificate / Divorce
                    Certificate / Police Character Certificate / Educational
                    Documents etc.
                  </h3>
                  <ol>
                    <li>
                      Any document originating from Pakistan must have to be
                      duly attested by theMinistry of Foreign Affairs in
                      Pakistan.
                    </li>
                    <li>Original NICOP or CNIC along with photocopies.</li>
                    <li>Passport and residence permit (photocopies only)</li>
                    <li>
                      <b>Fee: SEK 110/-</b>
                    </li>
                  </ol>
                  <p className="alert alert-secondary" role="alert">
                    <b>NOTE:</b> FOR DIVORCE DEEDS PLEASE APPROACH THE CONCERNED
                    UNION COUNCIL WHERE THE MARRIAGE WAS REGISTERED AND FOLLOW
                    THE RELEVANT RULES.
                  </p>
                  <h3 className="mb-30 mt-50">
                    No.7: Any Documents Originating from Sweden and Finland Such
                    As
                    <br />
                    Marriage Certificate / Unmarried Certificate / Divorce
                    Certificate / Police Character Certificate / Educational
                    Documents etc.
                  </h3>
                  <ol>
                    <li>
                      Any document originating from Sweden or Finland must have
                      to be duly attested by the Swedish or Finnish Ministry of
                      Foreign Affairs.
                    </li>
                    <li>
                      For information about legalization from Swedish Foreign
                      Office, please visit{" "}
                      <a href="http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/">
                        http://www.government.se/government-of-sweden/ministry-for-foreign-affairs/legalisations/
                      </a>
                    </li>
                    <li>
                      For information about legalization from Finnish Foreign
                      Office, please visit:{" "}
                      <a href=" https://um.fi/legalisation-of-documents-for-use-abroad#Getting_your_document_legalised">
                        {" "}
                        https://um.fi/legalisation-of-documents-for-use-abroad#Getting_your_document_legalised
                      </a>
                    </li>
                    <li>
                      Swedish / Finnish Passport or residence permit
                      (Photocopies only)
                    </li>
                    <li>
                      <b>Fee: SEK 200/-</b>
                    </li>
                  </ol>
                  <p className="alert alert-secondary" role="alert">
                    <b>NOTE:</b> All documents attested by Ministry of Foreign
                    Affairs of Pakistan should not be older than 6 months.
                  </p>
                  <h3 className="mb-30 mt-50">
                    No.8: If cases are sent by post from Sweden
                  </h3>
                  <ul>
                    <li>
                      If documents are sent by post from Sweden then fees should
                      be transferred to SEB bank account 5277 10 109 68
                    </li>
                    <li>
                      Applications sent through post should contain a
                      self-addressed return envelope with SEK 125/- postage
                      stamps on it for the documents to be returned to the
                      applicant as registered mail. If you do not wish to send
                      SEK 125/- postage stamps, your documents will not be sent
                      to you as registered mail and the Embassy will not be held
                      responsible if the documents are lost or undelivered.
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
                    </li>
                    <p>
                    <b>Embassy of Pakistan</b>
                    <br />
                    <b>P. O. Box No. 5872</b>
                    <br />
                    <b>102 40 Stockholm</b>
                    <br />
                    <b>Sweden</b>
                  </p>
                  </ul>
                  
                  <h3 className="mb-30 mt-50">
                    No.9: If cases are sent by post from Finland
                  </h3>
                  <ul>
                    <li>
                      If documents are sent by post from Finland then fees
                      should be transferred in following account: <br />
                      <b>SEB IBAN no:SE80 5000 0000 0527 7101 0968. </b>
                      <br />
                      <b>Swift Address of SEB is: ESSESESS</b>
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
                      <a href="https://verkkokauppa.posti.fi/PublishedService?pageID=9&itemcode=111155">
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
                    </li>
                    <p>
                    <b>Embassy of Pakistan</b>
                    <br />
                    <b>P. O. Box No. 5872</b>
                    <br />
                    <b>102 40 Stockholm</b>
                    <br />
                    <b>Sweden</b>
                  </p>
                  </ul>
                  
                  <h3 className="mb-30 mt-50">
                    No.10: Papers for transfer of dead bodies to Pakistan
                  </h3>
                  <ul>
                    <li>
                      The Embassy can attest the documents in respect of a
                      deceased Pakistani national living in Sweden or Finland.
                      Provided documents must be attested by the respective
                      Foreign Ministries of Sweden/Finland.
                    </li>
                    <li>Death Certificate from the Hospital</li>
                    <li>
                      Clearance Certificate from the concerned
                      Municipality/Commune
                    </li>
                    <li>
                      While forwarding the above papers to the Embassy, the
                      Pakistani Passport/NICOP/CNIC of the deceased should also
                      be enclosed.
                    </li>
                    <li>Fee: Free of Charge</li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    No.11: Vehicle Gift Scheme Undertaking
                  </h3>
                  <ul>
                    <li>
                      For the purpose of gift of motor car/vehicle to a family
                      member in Pakistan. A Pakistani national residing in
                      Sweden/Finland can download the following undertaking form
                      for the purpose of gifting a vehicle to a family member in
                      Pakistan. The undertaking can be attested from the
                      Consular section during the visiting hours.
                    </li>
                    <li>
                      Kindly bring the following documents:Original National ID
                      Card for Overseas Pakistanis/NICOP/POC
                    </li>
                    <li>Proof of permanent residence in Sweden/Finland</li>
                    <li>
                      Passport showing last Entry & Exit stamps to & from
                      Pakistan
                    </li>
                    <li>
                      Proof of purchase of the vehicle / Vehicle ownership
                    </li>
                    <li>
                      Duly filled Gift Undertaking Form{" "}
                      <a target="_blank" href="/pdfs/GIFTUNDERTAKING-1.pdf">
                        (click here to download form)
                      </a>
                    </li>
                    <li>
                      For further information regarding eligibility & procedure
                      for import of vehicles under this scheme, please visit the
                      link below:{" "}
                      <a target="_blank" href="/pdfs/Gift-Undertaking-form.pdf">
                        (click here to download form)
                      </a>
                    </li>
                  </ul>
                  <h3 className="mb-30 mt-50">
                    No.12: For any other query related to attestation
                  </h3>
                  <p>
                    Please email us at:{" "}
                    <a href="mailto:consularattache@pakistanembassy.se">
                      consularattache@pakistanembassy.se
                    </a>{" "}<br/>
                    (Please mention your name and phone number in email)
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

export default Attestation;
