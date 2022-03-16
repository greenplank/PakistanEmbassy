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
                    How can I apply for online visa?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Kindly visit NADRA website:{" "}
                      <a href="https://visa.nadra.gov.pk/" target="_blank">
                        visa.nadra.gov.pk
                      </a>{" "}
                      and see the help section and follow the instructions. If
                      there is any technical problem, kindly directly contact
                      NADRA by clicking on their Contact Us option..
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Do I need to send my Passport for online visa?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      No, online visa is issued online and you will get a Visa
                      Grant Notice by email that you have to print out. The Visa
                      Grant Notice is your visa. You do not need to send any
                      documents to the Embassy.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    How will I pay for online visa?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Please follow the instructions in the e-visa application
                      platform for fee payment. You will pay online by credit
                      card while applying for online visa.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    I want to apply e-visa for a child, which documents are
                    required.
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      For each child irrespective of age , a separate
                      application must be submitted.
                      <br />
                      Guardians must submit No Object Certificate (NoC) for each
                      child/applicant below the age of 18 years. The NoC must be
                      signed by both parents and must also have contact phone
                      numbers of both parents. The NOC can be downloaded from
                      this link:{" "}
                      <a href="/pdfs/NOC.pdf" target="_blank">
                        {" "}
                        NOC-Form
                      </a>
                      <br />
                      Do not upload irrelevant documents.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    I made a mistake in the name, can I correct it?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      Please make sure that before submitting your application,
                      your name and Passport number is the same as written on
                      your Passport as you only have once chance of application.
                      If the application comes back to you for review in case
                      your application is incomplete and some more additional
                      documents or requirements need to be fulfilled, then you
                      have the chance to carefully again check your particulars,
                      that is, name and Passport number etc. Once the visa is
                      issued, it cannot be corrected later on and the applicant
                      has to re-apply for a fresh visa.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    I am of Afghan origin and have Swedish Passport, which
                    category of e-visa should I apply for?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      You can apply for both categories that is tourist and
                      family if you fulfill the requirements. Every Afghan
                      national or Afghan origin having Swedish or Finnish or
                      another country’s Passport, must submit a proper
                      invitation letter from Pakistan duly attested by Notary
                      Public along with colour copies of both sides of
                      CNIC/NICOP of the person who sent the invitation letter
                      (inviter). The signature of the sponsor on the CNIC must
                      be clearly visible. The invitation must have contact phone
                      number of the sponsor/inviter in Pakistan. The application
                      must be complete having address in Sweden or Finland,
                      whatever the case may be, and the address in Pakistan
                      where the person is going. Incomplete application will not
                      be accepted. You can also get a sponsor letter from
                      approved tourist operator in Pakistan who can sponsor your
                      visit.
                      <br />
                      Please note that incomplete application, fake or
                      unverifiable invitation letter will not be accepted.
                      <br />
                      Providing fake invitation letter will not only lead to
                      rejection of visa but may also lead to blacklisting of the
                      applicant for future visa.
                      <br />
                      <b>For family:</b>
                      <br />
                      In case an Afghan national or Afghan origin applicant has
                      a Pakistani spouse, he or she can apply for family visa.
                      In order to apply, he or she must provide admissible proof
                      i.e. the wife must have the Afghan national name on her
                      CNIC as spouse or must present a Family Registration
                      Certificate (FRC) issued by NADRA Pakistan duly attested
                      by Ministry of Foreign Affairs of Pakistan. Irrelevant
                      documents will not be accepted.
                      <br />
                      Similarly marriage with a Pakistani spouse in Sweden like
                      cohabitant and partner is not acceptable in Pakistan
                      Family Law. Only lawful and legal marriage duly registered
                      in Pakistan NADRA system or in Swedish Population Register
                      is considered a legal marriage acceding to Pakistan Family
                      Law.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    I want to apply for e-visa, what should I write/select for
                    “type of Passport”?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      All common people and citizens of a country have ordinary
                      Passports; and should write/select “ordinary”.
                      <br />
                      However, diplomatic/Official and UNLP passports are with
                      special categories of people who are working as diplomat n
                      Foreign Embassies/Consulate General/United National
                      Organization High Ranking Officials like Presidents, Prime
                      Ministers, , Governors, ,Ministers, Members of Parliament,
                      Senators etc. of the country. Every country has different
                      color of these special categories of Passports
                      distinguishing it from the common citizen passports. For
                      Example in Sweden, common people have Red Colour passports
                      while diplomats have blue color passports.
                      <br />
                      The rest of the people and common citizens have Ordinary
                      passports even if someone is a businessperson, still he or
                      she holds ordinary passport. UN Travel Documents and Alien
                      Passports are issued to people who seek asylum and thus
                      are considered ordinary passports.
                      <br />
                      By selecting wrong category of passport will lead to the
                      rejection of visa.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    I am of Pakistani origin and want urgent visa due to the
                    serious illness of my mother, can I get it urgently please?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      Yes, in case of emergency and death of relatives, you can
                      get very quick visa. First you need to upload your
                      application, and also upload a hand written or type a few
                      lines mentioning your urgency that you need an urgent visa
                      due to the illness or death (God forbid) of a relative.
                      Your visa will be issued on top priority keeping in view
                      your travelling plan. You can even get it on the same day.
                      <br />
                      This urgent visa service facility is only available to
                      Overseas Pakistani and Pakistan origin people.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    I am off Pakistani Origin, can I get long term one year
                    Multiple Entries visa?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      Yes, you must provide a proof by uploading copy of one of
                      the following documents:-
                      <br />
                      1. Pakistani Passport (valid or expired or old)
                      <br />
                      2. NICOP (valid or old)
                      <br />
                      3. Pakistan Origin Card (POC) (valid or old). You are
                      advised to apply for POC instead of long term visa at this
                      link:{" "}
                      <a
                        href="https://www.nadra.gov.pk/identity/identity-poc/"
                        target="_blank"
                      >
                        https://www.nadra.gov.pk/identity/identity-poc/
                      </a>{" "}
                      . POC is issued up to 7 years validity if you fulfill the
                      requirements, which you can see at the NADRA link. Any
                      question relating to NICOP and POC must be directly asked
                      from NADRA.
                      <br />
                      4. If your spouse from a foreign country wants to apply
                      for long term family visa: then following documents are
                      required:
                      <br />
                      5. Family Registration Certificate (FRC) issued by NADRA
                      and duly attested by Ministry of Foreign Affairs.
                      <br />
                      6. Copy of your spouse POC (valid or expired)
                      <br />
                      7. If your wife is Pakistani and you are a foreigner, then
                      your wife's CNIC or Passport copy having your name on her
                      passport or CNIC as spouse is required.
                      <br />
                      8. Familjbevis in English duly attested by Swedish
                      Ministry of Foreign Affairs or Finnish Ministry of Foreign
                      Affairs showing your name as legally married spouse.
                      <br />
                      Cohabitant and partner are not acceptable in Pakistan
                      Family Law as spouse.
                      <br />
                      Please do not upload irrelevant and inadmissible documents
                      while apply for visa.
                      <br />
                      Only upload passport copy of the applicant and the
                      applicant picture and one of the above relevant documents.
                      <br />
                      Swedish driving license or other irrelevant documents are
                      not acceptable.
                      <br />
                      Only Documents in English or Urdu languages are
                      acceptable.
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
