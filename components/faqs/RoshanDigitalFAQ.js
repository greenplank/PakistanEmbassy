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
const RoshanDigitalFAQ = () => {
  return (
    <section className="faq-one">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              <div className=" text-center mt-50 block-title">
                <h3>FAQ’s Roshan Digital Account</h3>
              </div>

              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    1. What is Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      Roshan Digital Account is a unique opportunity for
                      Individual Non-Resident Pakistanis (NRPs) to open a bank
                      account in Pakistan digitally from anywhere across the
                      world. The account can further be used for sending foreign
                      remittances and investments to Pakistan.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    2. In which currencies can one open Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Roshan Digital Account can be opened in PKR & FCY
                      currencies (USD, EUR & GBP)
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    3. Which account types (current/savings) are offered in
                    Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      Both account types (current/savings) are offered in Roshan
                      Digital Account.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    4. While opening an account, do customers have to fill the
                    application form in one session only?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <p>
                      Customers can fill the application form in multiple
                      sessions and can save the form. They can later resume
                      filling up where they left off earlier. However, once
                      application form is submitted, they will only be able to
                      make changes/amendments as per the Bank’s discretion.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    5. How long does it take to open Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      As customers submit their online Account Opening Form
                      (AOF), Bank will contact them within 48 hours for any
                      further details that the Bank may require. Once the
                      account is activated, the Bank will send them a welcome
                      email as a confirmation of their account opening. They may
                      then start using the account.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="5">
                    6. Is it possible to open more than one Roshan Digital
                    Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="5">
                    <p>
                      Yes, customers can open multiple Roshan Digital Accounts;
                      however, only one each of both savings and current
                      accounts may be opened for one currency.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="6">
                    7. What if I already have an account with Bank? Can I open
                    Roshan Digital Account as well?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="6">
                    <p>
                      Yes, customers can open Roshan Digital Account even if
                      they are already maintaining an account with Bank.
                      However, the status of their profile will be updated as
                      NRP in Bank’s records.
                      <br />
                      Individual NRPs having CNIC, NICOP, foreigners having
                      Pakistan Origin Card (POC) and employees or officials of
                      the Federal Government or a Provincial Government posted
                      abroad are eligible to open this account in PKR, USD, EUR
                      & GBP currencies.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="7">
                    8. What is the initial amount/deposit required to open
                    Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="7">
                    <p>
                      There is no initial amount or deposit required to open
                      Roshan Digital Account.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="8">
                    9. Can investments be made in Pakistani market using Roshan
                    Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="8">
                    <p>
                      Once account is activated, customers can make investments
                      in following State Bank of Pakistan (SBP) permissible
                      sectors:
                      <br />
                      a) Naya Pakistan certificates offered by Government of
                      Pakistan
                      <br />
                      b) Residential and commercial real estate investments
                      <br />
                      c) Investment in shares quoted in Pakistan Stock Exchange
                      <br />
                      d) Investment in Bank’s Islamic savings and term
                      certificate products
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="9">
                    10. What transactions can be performed from Roshan Digital
                    Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="9">
                    <p>
                      Roshan Digital Account Credit Transactions:
                      <br />
                      a) Send remittances to the account from abroad
                      <br />
                      b) Send proceeds and profit/gain from permissible
                      investments made through Roshan Digital Account
                      <br />
                      c) Refund of amounts debited incorrectly or over-charged
                      <br />
                      Roshan Digital Account Debit Transactions:
                      <br />
                      a) Send money to own account outside Pakistan
                      <br />
                      b) Invest in SBP’s permissible sectors
                      <br />
                      c) Debit account on basis of applicable Government/Bank
                      charges and reversal of any incorrect/wrong credit entry
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="10">
                    11. Are incoming funds/credit allowed in Roshan Digital
                    Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="10">
                    <p>
                      No local credit other than payments of profit/gain and
                      principal repayments is allowed in the account. The
                      account can be fed through foreign inward remittance only.
                      These may originate from the customer through formal
                      channels (banks or money transfer companies).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="11">
                    12. How can funds be withdrawn, transferred and repatriated
                    from Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="11">
                    <p>
                      Once the account is activated, customers can avail
                      services like internet banking to debit funds from the
                      account.
                      <br />
                      They may also use internet banking facility for bill
                      payments in Pakistan, IBFT in Pakistan, mobile top-ups,
                      donations, etc. Also, they can send/repatriate money
                      outside Pakistan up-to the amount of balance available in
                      the account without any approval from the Bank or SBP
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="12">
                    13. Is Internet Banking available in Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="12">
                    <p>
                      Yes, Internet Banking is available in Roshan Digital
                      Account.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="13">
                    14. How can I request a debit card in Roshan Digital
                    Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="13">
                    <p>
                      Debit card request can be made online through Debit Card
                      request form on the Bank’s official website. The card will
                      be dispatched to your registered international mailing
                      address. International courier charges of Rs. 2,500 and
                      Debit card annual charges as per the Bank’s Schedule of
                      Charges (SOC) shall be applicable.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="14">
                    15. How can I request a cheque book in Roshan Digital
                    Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="14">
                    <p>
                      Cheque book request can be made online through a Cheque
                      Book requisition form on the Bank’s official website.
                      Cheque book will be dispatched at registered international
                      mailing address. International courier charges Rs. 2,500
                      will be payable. Account holder can also request and
                      receive cheque book from a branch in Pakistan (while
                      visiting Pakistan) after performing biometric
                      verification.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="15">
                    16. How can I repatriate funds from Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="15">
                    <p>
                      You can use the ‘Remittance Application Form to send
                      request for funds transfer. Charges will be applicable as
                      per the Bank’s Schedule of Charges (SOC).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="16">
                    17. How can I change my account details?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="16">
                    <p>
                      You can use contact update option in Internet Banking to
                      update your details.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="17">
                    18. Are my details, including the attached documents
                    provided to Bank safe and protected?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="17">
                    <p>
                      All information of customers including the attached
                      documents are safe and protected. However, Bank reserves
                      the right to share the information with Government of
                      Pakistan (GOP), State Bank of Pakistan (SBP) and any law
                      enforcement agency on demand (if required).
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="18">
                    19. Is Zakat applicable on Roshan Digital Savings account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="18">
                    <p>
                      PKR accounts: Zakat is deductible as per the Zakat & Ushr
                      Ordinance of 1980
                      <br />
                      FCY accounts: Zakat is not applicable
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="19">
                    20. How can I send remittance to my Roshan Digital Account?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="19">
                    <p>
                      For Roshan Digital Foreign Currency Account: The
                      remittance may only be sent through the banking channel of
                      SWIFT message.
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

export default RoshanDigitalFAQ;
