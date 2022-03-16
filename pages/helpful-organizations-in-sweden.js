import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Thumb from "../assets/images/backgrounds/thumb.jpg";
import Thumb2 from "../assets/images/backgrounds/thumb2.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const OrganizationInSweden = () => {
  return (
    <>
      <Head>
        <title>Helpful organizations in Sweden</title>
        <meta name="title" content="Helpful organizations in Sweden" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Helpful organizations in Sweden">
        <HeaderTwo />
        <PageHeader title="Helpful organizations in Sweden" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Helpful organizations in Sweden</b>
                </h1>

                <h3 className="mt-80">
                  <b>
                    <u>Business Sweden</u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  Business Sweden takes a fun, informal approach to helping
                  readers discover things in Sweden. They are the experts on
                  doing business in Sweden and helping overseas business to
                  grow. More information:{" "}
                  <a href="http://www.businesssweden.se/" target="_blank">
                    http://www.businesssweden.se/
                  </a>
                </p>
                <h3 className="mt-80">
                  <b>
                    <u>Chamber Trade Sweden</u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  It enables international trade and investment also builds
                  capacity for the private sector in developing countries with
                  local partners. CTS partners with business organizations and
                  companies in their projects and share networks, knowledge and
                  opportunities. They run programs in Africa, Asia, Latin
                  America and Europe, targeting sustainable industry and green
                  technology, agribusiness and lifestyle. Issues tied to
                  innovation, value addition, leadership and market access are
                  central in CTS work. Special focus on women’s economic
                  empowerment. More information:
                  <a
                    href="https://chambertradesweden.se/#whatwedo"
                    target="_blank"
                  >
                    http://chambertradesweden.se/
                  </a>
                </p>

                <h3 className="mt-80">
                  <b>
                    <u>Swedfund </u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  It is the Development Finance Institution of the Swedish
                  state. The goal is to eliminate poverty by creating
                  sustainable business in some of the world’s toughest and most
                  promising growth markets. More information:
                  <a href="https://www.swedfund.se/en/" target="_blank">
                    http://www.swedfund.se/en/home/
                  </a>
                </p>

                <h3 className="mt-80">
                  <b>
                    <u>Swedish customs. Customs guide</u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  The Customs Guide is intended for people without extensive
                  prior experience with customs. More information:
                  <a
                    href="http://www.tullverket.se/en/startpage/customsguide.4.6edda07011f9252a5a980005.html"
                    target="_blank"
                  >
                    http://www.tullverket.se/en/startpage/customsguide.4.6edda07011f9252a5a980005.html
                  </a>
                </p>

                <h3 className="mt-80">
                  <b>
                    <u>European Commision’s Trade export helpdesk</u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  The European Union is the world’s largest single market and
                  the Export Helpdesk is the online portal to access it.
                  Companies can find the EU tariffs, requirements, preferential
                  arrangements, quotas and statistics relating to imports from
                  trade partner countries. More information:
                  <a href="https://exporthelp.co.za/" target="_blank">
                    http://exporthelp.europa.eu/
                  </a>
                </p>

                <h3 className="mt-80">
                  <b>
                    <u>SEK</u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  SEK lends money to Swedish exporters and their overseas
                  customers. By partnering with Swedish and international banks,
                  the Swedish Export Credits Guarantee Board (EKN) and insurance
                  companies SEK can provide added value, including longer tenors
                  than those offered on the market. SEK can also offer lending
                  in currencies that would otherwise be difficult for a company
                  to access. More information:
                  <a href="https://www.sek.se/" target="_blank">
                    http://www.sek.se/
                  </a>
                </p>
                <h3 className="mt-80">
                  <b>
                    <u>EKN </u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  EKN has been commissioned by the government to promote Swedish
                  exports and the internationalization of Swedish companies. EKN
                  do so by insuring export companies and banks against the risk
                  of non-payment in export transactions, thereby enabling them
                  to conduct more secure export transactions. Their activities
                  are financed by the guarantee holders’ premiums. More
                  information:
                  <a href="http://ekn.se/" target="_blank">
                    http://ekn.se/
                  </a>
                </p>
                <h3 className="mt-80">
                  <b>
                    <u>The National Board of Trade </u>
                  </b>
                </h3>
                <p className="mt-10 text-left">
                  The National Board of Trade is the Swedish governmental agency
                  responsible for issues relating to foreign trade, the Internal
                  Market and trade policy. The mission is to promote an open and
                  free trade with transparent rules. More information:
                  <a href="https://www.kommerskollegium.se/en" target="_blank">
                    http://www.kommers.se/In-English/
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1>
                  <b>Policy Documents (Pakistan)</b>
                </h1>

                <ul>
                  <li>
                    Strategic trade policy framework 2015-18,{" "}
                    <a target="_blank" href="https://www.commerce.gov.pk/strategic-trade-policy-framework/">click here.</a>
                  </li>
                  <li>
                    FDI (Foreign direct investment) strategy 2013-17,{" "}
                    <a target="_blank" href="https://invest.gov.pk/"> click here.</a>
                  </li>
                  <li>
                    Investment Policy in Pakistan 2013,
                    <a target="_blank" href="https://invest.gov.pk/"> click here.</a>
                  </li>
                  <li>
                    Automotive development policy 2016-21,
                    <a target="_blank" href="https://invest.gov.pk/">click here.</a>
                  </li>
                  <li>
                    Textile policy,
                    <a target="_blank" href="/pdfs/TextilePolicy2014-19.pdf">click here.</a>
                  </li>
                  <li>
                    Agriculture and food security policy,
                    <a target="_blank" href="/pdfs/19RevisedFoodSecurityPolicy.pdf">click here.</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default OrganizationInSweden;
