import React, { useContext } from "react";
import { Accordion, Container, Row, Col, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <h2
      className="para-title"
      style={{ color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}` }}
    >
      <span onClick={decoratedOnClick}>
        <i
          style={{
            color: `${isCurrentEventKey ? "var(--thm-secondary)" : ""}`,
          }}
          className={`far ${isCurrentEventKey ? "fa-minus" : "fa-plus"}`}
        ></i>
        {children}
      </span>
    </h2>
  );
};
const FaqOne = () => {
  return (
    <section className="faq-one">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              {/* <div className="block-title">
                <h3>
                  Charity for the people you care about.
                </h3>
              </div> */}

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    How can I get Single Marital Status / Unmarried Certificate?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Un-married certificate/single marital status certificate
                      can be obtained from the Union Council or Marriage
                      Registrar Office where you are a permanent resident in
                      Pakistan. This certificate should be attested from the
                      Ministry of Foreign Affairs of Pakistan and then from the
                      Embassy of Pakistan in the country where you want to
                      present it. Keep in mind that the certificate should be in
                      English language or in the language of the country where
                      you want to present it.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    How can I get my Authority Letter attested from the Embassy?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      You need to write your authority letter and come to the
                      Embassy of Pakistan with original valid CNIC/POC/NICOP or
                      Pakistani Passport, sign it in front of the officer and
                      get it attested after payment of a prescribed fee. If you
                      are unable to visit the Embassy, you may send the
                      Authority Letter by post after getting it attested from
                      the Notary Public. If you are sending your documents by
                      post, please do not forget to send a self-addressed
                      envelope with 120 SEK worth of postage stamps and also
                      mention your contact number.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    How can I get a Power of Attorney attested from the Embassy
                    of Pakistan?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Power of Attorney is a very sensitive and legal document
                      and should be given to the most trusted and reliable
                      person like father, brother, son, daughter or sister etc.
                      By power of attorney you are handing over your complete
                      ownership of your movable or immovable property to the
                      next person to handle it in whatever manner you want to
                      authorize that person. You have to write the power of
                      attorney yourself or through a lawyer/advocate and must
                      come in person to the Embassy of Pakistan with valid
                      Pakistani CNIC/NICOP/POC or Passport along with two recent
                      colour pictures and sign the power of attorney before the
                      officer after payment of prescribed fee.
                      <br />
                      In case some one is unable to visit the Embassy in person,
                      particularly from Finland or far flung cities, the
                      alternative is to get the Power of Attorney attested by
                      the Notary Public and from the Ministry of Foreign Affairs
                      in Finland or Sweden and then send it by post with the
                      required fee. The applicant must also send a
                      self-addressed return envelope with{" "}
                      <b>
                        124 SEK postage stamps (for Sweden) OR 10 International
                        coupons{" "}
                      </b>
                      (for Finland). Please make sure that the recipients{" "}
                      <b>complete name, as written on his/her ID</b>, must be
                      written on the return envelope.
                      <br />
                      Kindly check our website on{" "}
                      <a href="/attestation/" target="_blank">
                        Attestations page
                      </a>{" "}
                      for fees and other requirements. The Power of attorney
                      must be clearly typed without any error. It must be then
                      attested within 90 days from the Ministry of Foreign
                      Affairs of Pakistan and then must be registered in the
                      Registrar Office within 120 days.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    If I cannot come in person to the Embassy, is there any
                    other option to get my Power of Attorney attested?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      Power of Attorney and Special Power of Attorney is meant
                      for giving someone the legal rights with regards to
                      valuable movable and immovable property or legal rights.
                      <br />
                      If an applicant is unable to come in person due to any
                      reason or if the applicant is living far from Stockholm,
                      he or she can send Power of Attorney or Special Power of
                      Attorney by post subject to the following conditions:-
                      <br />
                      1. The Power of Attorney or Special Power of Attorney must
                      be attested by Notary Public and Ministry of Foreign
                      Affairs of the applicant’s country of residence. For e.g
                      if the applicant is resident of Finland the Power of
                      Attorney or Special Power of Attorney must be attested by
                      the Notary Public Office & the Ministry of Foreign Affairs
                      of Finland
                      <br />
                      2. The attested authority letter can be sent by Post along
                      with these documents:
                      <br />
                      A. Copy of Applicant’s CNIC /Passport
                      <br />
                      B. Copy of residence permit card
                      <br />
                      C. Required fee receipt which is: SEK 110/- plus bank
                      charges (for Pakistani citizen) whereas SEK 200/- plus
                      bank charges for citizens of other countries.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    What is the difference between Authority Letter and Power of
                    Attorney?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      Authority letter is just giving somebody the authority to
                      receive your documents and certificate or submit your
                      documents on your behalf. Power of Attorney is a legal
                      document whereby you are giving absolute ownership of your
                      property to someone. That person is given authority to
                      exercise your authority on your behalf which is considered
                      legal as if you have done it yourself. Power of Attorney
                      is normally given for valuables like selling /transferring
                      property etc.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    If I cannot come in person to the Embassy, is there any
                    other option to get my Authority Letter / Affidavit
                    attested?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      Authority letter only gives someone the authority to
                      collect or submit documents on behalf of the applicant.
                      <br />
                      If an applicant is unable to come in person due to any
                      reason or if the applicant is living far from Stockholm,
                      he or she can send an Authority Letter or Affidavit by
                      post subject to the following conditions:-
                      <br />
                      1. The authority letter or Affidavit must be attested by
                      the Notary Public
                      <br />
                      2. The attested authority letter can be sent by Post along
                      with these documents:
                      <br />
                      A. Copy of Applicant’s CNIC /Passport
                      <br />
                      B. Copy of residence permit card
                      <br />
                      C. Required fee receipt which is: SEK 110/- plus bank
                      charges for Pakistani citizens, whereas SEK 200/- plus
                      bank charges for citizens of other countries.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    How can I get a Police Character Certificate?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      You should get it yourself or through a family member from
                      District Police Officer (DPO) of your home town where you
                      are permanent resident in Pakistan. Then you have to get
                      that Police Character Certificate attested from the
                      Ministry of Foreign Affairs of Pakistan and then from the
                      Embassy of Pakistan in the country where you want to
                      present it.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    Can we get register our new born baby in the Embassy by
                    post?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      Yes, you can and we encourage guardians to send their
                      children’s/applicants’ documents by post for registration
                      of new born baby. The form which is called S-1 Form can be
                      found on our website. Further details regarding
                      requirements for registration can be found on our website.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    How can I get my CNIC or NICOP?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      CNIC/NICOP and POC can be directly obtained online on the
                      NADRA’s website: id.nadra.gov.pk. If you have any question
                      about it, kindly contact NADRA directly.
                    </p>
                  </Accordion.Collapse>
                </Card>
               
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqOne;
