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
                    Is it mandatory requirement to produce original Computerized
                    National Identity Card (CNIC) or National Identity Card for
                    Overseas Pakistanis (NICOP) or Smart ID Card for a Machine
                    Readable Passport (MRP) application?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Yes, Machine Readable Passport system uses the data from
                      NADRA's system and application can only processed if
                      applicant has a valid original Computerized National
                      Identity Card (CNIC) or National Identity Card for
                      Overseas Pakistanis (NICOP) or Smart ID Card. Only
                      exception is the children having Computerized Child
                      Registration Certificate (CRC/Form B) issued by NADRA from
                      Pakistan. Children applications can be processed without
                      CNIC or NICOP if they have original CRC/Form B.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    Is it compulsory that one of the parents should accompany
                    the child for processing the machine readable passport
                    application?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Yes, one of the parents (father and mother) should
                      accompany the child for processing the machine readable
                      passport application with identity documents of both the
                      parents.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    Are both mother and father's ID cards required in case of
                    children's passport application?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Yes, both mother and father's Computerized National
                      Identity Card (CNIC) or National Identity Card for
                      Overseas Pakistanis (NICOP) or Smart ID Card are required
                      in case of children's passport application.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    Is it Possible to process child's Machine Readable Passport
                    (MRP) with Computerized Child Registration Certificate
                    (CRC/Form B) issued by NADRA in Pakistan?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      Yes, child's (upto the age of 18 years) Machine Readable
                      Passport (MRP) application can be processed on the basis
                      of Computerized Child Registration Certificate (CRC/Form
                      B) issued by NADRA from Pakistan even if they don't have
                      National Identity Card for Overseas Pakistanis (NICOP).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    I have an old National Identity Card (handwritten Shanakhti
                    card / ) which was issued before the NADRA cards were
                    issued. Can I apply for Machine Readable Passport (MRP)?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      No. Machine Readable Passport system uses the data from
                      NADRA's system and application can only be processed if
                      applicant has a valid original Computerized National
                      Identity Card (CNIC) or National Identity Card for
                      Overseas Pakistanis (NICOP) or Smart ID Card. You need to
                      get a one of these NADRA cards before applying for Machine
                      Readable Passport (MRP).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    Can female applicants having Computerized National Identity
                    Card (CNIC) without their photo on it apply for Machine
                    Readable Passport (MRP) ?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      No. Computerised National Identity Card (CNIC) with photo
                      is required for Machine Readable Passport (MRP)
                      application processing.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    I have dual nationality; do I need to declare it for Machine
                    Readable Passport (MRP) application?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      Yes. Government of Pakistan has dual nationality agreement
                      with Sweden and Finland. Applicants having any other
                      nationality along with Pakistani nationality need to
                      declare it for Machine Readable Passport (MRP) application
                      and must have to bring their Swedish or Finnish passport.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    My child already has National Identity Card for Overseas
                    Pakistanis (NICOP), does he/she still need Computerized
                    Child Registration Certificate (CRC/Form B) issued by NADRA
                    from Pakistan for Machine Readable Passport (MRP)
                    application?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      No. Children who already possess a valid National Identity
                      Card for Overseas Pakistanis (NICOP) can apply for Machine
                      Readable Passport without Computerized Child Registration
                      Certificate (CRC/Form B) issued by NADRA from Pakistan.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    I want to change my name, date of birth, father's name or
                    place of birth on my Machine Readable Passport (MRP), what
                    will be the procedure for this?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      For any of above-mentioned changes you will first need to
                      update your Computerized National Identity Card (CNIC) or
                      National Identity Card for Overseas Pakistanis (NICOP) or
                      Smart ID Card. MRP uses the data from NADRA's system and
                      modification will only be possible when your details are
                      updated in NADRA's system.
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
