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
const FAQFOUR = () => {
  return (
    <section className="faq-one">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="faq-one__content">
              <Accordion
                as="ul"
                id="accordion"
                defaultActiveKey="0"
                className="list-unstyled"
              >
                <Card as="li">
                  <ContextAwareToggle eventKey="0">
                    1. Can I carry duty free mobile phones while travelling to
                    Pakistan?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <p>
                      If you do not insert SIM of a Pakistan Mobile Company in
                      your mobile set and continue using foreign SIM with
                      roaming, then there is no issue of duty and taxes or
                      registration of mobile set. However, if you insert SIM of
                      a Pakistan Mobile Company, you will immediately get an SMS
                      from the Pakistan Telecommunication Authority to get your
                      phone registered within 60 days. The duty and taxes are
                      fixed in Pak Rupee (PKR), depending on the value of mobile
                      set. The lowest slab for mobile sets having value up to US
                      dollar 30 is PKR 300 and highest slab for mobile sets
                      having value above US dollar 500 is PKR 31,520. The
                      process of registration and payment of duty taxes can be
                      completed online on this link:{" "}
                      <a href="https://dirbs.pta.gov.pk/" target="_blank">
                        https://dirbs.pta.gov.pk/
                      </a>
                      <br />
                      Important: You can only carry mobile sets for your
                      personal use or gifts, if you carry mobile phones in
                      commercial quantity the same shall be detained and
                      confiscated by authorities at airport.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="1">
                    2. What are allowances available on Transfer of Residence?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <p>
                      Transfer of Residence means return of a Pakistan national
                      from abroad after a period of 02 years or more, or
                      shifting of a foreign national to Pakistan with the
                      purpose of staying in Pakistan for 02 years or more. In
                      order to avail allowances, the luggage/goods under this
                      scheme must be shipped from the country where passenger
                      has resided, must not be in commercial quantity and must
                      reach Pakistan within 60 days of arrival of passenger in
                      Pakistan. The husband and wife have option to club their
                      allowances if they are travelling together. The allowances
                      available under this scheme are given below:
                      <ol>
                        <li>
                          {" "}
                          Personal wearing apparel and clothing accessories
                        </li>
                        <li>
                          {" "}
                          Personal adornments, toilet requisites and electric
                          shaver in use;
                        </li>
                        <li>
                          {" "}
                          Medals, trophies and prizes bestowed upon a passenger;
                        </li>
                        <li>
                          {" "}
                          One electric iron and one hair dryer and one hair
                          dresser;
                        </li>
                        <li>
                          {" "}
                          Two hundred cigarettes or fifty cigars or half
                          kilogram of manufactured tobacco;
                        </li>
                        <li>
                          {" "}
                          Pushcart, toys, and goods of personal use of the child
                          passenger;
                        </li>
                        <li> One-wheel chair for personal use;</li>
                        <li> One mobile phone; and</li>
                        <li> One wrist watch</li>
                        <li>
                          {" "}
                          One radio or one ordinary tape recorder excluding
                          hi-fi systems and home theatres;
                        </li>
                        <li>
                          {" "}
                          One VCP or VCR or VCD or DVD player or a similar
                          appliance having more than one of the playing,
                          recording or display functions;
                        </li>
                        <li> One still and one video camera;</li>
                        <li>ii. Personal jewelry in reasonable quantity;</li>
                        <li>
                          {" "}
                          Professional tools of the value not exceeding five
                          hundred US dollars;
                        </li>
                        <li>
                          {" "}
                          One desktop or laptop computer in personal use;
                        </li>
                        <li>
                          {" "}
                          Old and used furniture, fixtures, crockery, cutlery,
                          kitchen utensils, rugs, carpets, household linen,
                          beddings including blankets and other household goods
                          generally used by a family during stay abroad,
                          excluding the items listed at S. No. xviii below;
                        </li>
                        <li>
                          {" "}
                          One television set, one deep freezer, one
                          refrigerator, one microwave oven, one cooking range,
                          one washing machine and one air conditioner on payment
                          of 50% of the total duty and taxes notified for these
                          rules;
                        </li>
                        <li>
                          Professional tools and equipment of the value not
                          exceeding five thousand US dollars;
                        </li>
                        <li>
                          Second-hand or used medical equipment, including
                          electro medical equipment if in use of a Pakistani
                          national who is a registered medical practitioner
                          recognized by Pakistan Medical and Dental Council;
                        </li>
                        <li>
                          Weapon of non-prohibited bore for the personnel of
                          armed forces, customs, police or any other law
                          enforcement agency.
                        </li>
                        <li>
                          Duty free allowances of the aggregate value up to one
                          thousand US dollars in case the goods are purchased
                          from one of the duty free shops in Pakistan within
                          sixty days of the arrival.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="2">
                    3. Can I carry, gift or send a vehicle to someone in
                    Pakistan?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <p>
                      New vehicles can be imported by anyone in Pakistan on
                      payment of duty and taxes under applicable rules and
                      regulations.
                      <br />
                      Old and used cars, not older than 3 years and other
                      vehicles not older than 5 years can be imported, gifted or
                      brought to Pakistan by Pakistan nationals including dual
                      nationals under three Schemes as explained below. However,
                      students receiving remittance from Pakistan, non-earning
                      members of family of a Pakistan national and persons who
                      have gifted, received or imported a vehicle in immediate
                      past two years do not qualify under these Schemes.
                      <br />
                      Transfer of Residence: A person residing abroad for a
                      minimum of 700 days, in immediately preceding 3 years, may
                      bring into Pakistan a vehicle under this scheme.
                      <br />
                      Gift Scheme: A person residing abroad for a minimum of 700
                      days, in immediately preceding 3 years, can gift a vehicle
                      to his family members under this scheme.
                      <br />
                      Baggage Scheme: A person residing abroad for a minimum
                      period of 180 days in immediately preceding 7 months can
                      import a vehicle into Pakistan under this scheme.
                      <br />
                      Duty and taxes are fixed in US $ for Asian make vehicles
                      in terms of engine capacity, which may be confirmed before
                      availing any of the above schemes. For vehicles other than
                      Asian make the duty and taxes are payable on value
                      assessed by Pakistan Customs.
                      <br />
                      These fixed duties /taxes for Asian make vehicles and
                      assessed duty/taxes for other vehicles are reduced @ 1%
                      for every month of the age of vehicle to a maximum of 50%.
                      <br />
                      <b>Important:</b> Please carefully calculate the age of
                      old and used vehicles before availing any of the above
                      schemes, as vehicles older than the age stated above are
                      not importable under Import Policy Order of Pakistan and
                      may be confiscated.
                    </p>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="3">
                    4. Are there any special allowances for Foreign Exchange
                    Remittance Card Holders?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="3">
                    <>
                      <p className="mt-80 mb-40">
                        A Pakistan national holding Foreign Exchange Remittance
                        Card is entitled to duty credit once in a calendar year
                        as tabulated below. This credit can be utilized for all
                        goods other than vehicles.
                      </p>
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Type of FERC</th>
                            <th>
                              Amount Remitted through Normal Banking Channel{" "}
                            </th>
                            <th>Duty Credit In Pakistani Rupees</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td> </td>
                            <td>(in USD or equivalent foreign currency) </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>1.</td>
                            <td>Silver</td>
                            <td>2500 or more </td>
                            <td>10,000</td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Silver Plus</td>
                            <td>5000 or more</td>
                            <td>20,000</td>
                          </tr>
                          <tr>
                            <td>3.</td>
                            <td>Golden</td>
                            <td>10,000 or more</td>
                            <td>30,000</td>
                          </tr>
                          <tr>
                            <td>4.</td>
                            <td>Golden Plus</td>
                            <td>25,000 or more</td>
                            <td>50,000</td>
                          </tr>
                          <tr>
                            <td>5.</td>
                            <td>Platinum</td>
                            <td>50,000 or more</td>
                            <td>100,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  </Accordion.Collapse>
                </Card>
                <Card as="li">
                  <ContextAwareToggle eventKey="4">
                    5. I am a businessman; can I travel to Pakistan without visa
                    for business purpose?
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="4">
                    <p>
                      A single entry, 30 days Business Visa on arrival is
                      available for the nationals of the countries listed on
                      this link{" "}
                      <a
                        href="https://visa.nadra.gov.pk/business-visa-list-bvl/"
                        target="_blank"
                      >
                        {" "}
                        https://visa.nadra.gov.pk/business-visa-list-bvl/.
                      </a>
                      The intending businessmen are required to get an
                      Electronic Travel Authorization (ETA) at least 48 hours
                      prior to their arrival in Pakistan. This ETA can be
                      applied online at this link{" "}
                      <a
                        href="https://visa.nadra.gov.pk/visa-on-arrival-business/"
                        target="_blank"
                      >
                        {" "}
                        https://visa.nadra.gov.pk/visa-on-arrival-business/.
                      </a>
                      The documents required for ETA are a scanned copy of
                      photograph and passport, recommendation letter from your
                      home Chambers of Commerce and Industry or recommendation
                      letter from Commercial Counselor or invitation letter from
                      a business entity in Pakistan. The processing time of your
                      ETA application is 48 to 72 hours.
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

export default FAQFOUR;
