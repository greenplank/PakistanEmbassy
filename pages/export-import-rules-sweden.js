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

const ImportExport = () => {
  return (
    <>
      <Head>
        <title>Export Import Rules Sweden</title>
        <meta name="title" content="Export Import Rules Sweden" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Export Import Rules Sweden">
        <HeaderTwo />
        <PageHeader title="Import and Export Process" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h3 className="mt-80">
                  <b>Importing goods to Sweden from countries outside the EU</b>
                </h3>
                <p className="mt-10 text-left">
                  The term ‘import´ means bringing goods into the European Union
                  (EU) from a country outside the EU. Before you can use or sell
                  your goods, you must clear them through customs. This means
                  that you submit an import declaration and pay fees for customs
                  duties, VAT and other applicable tax. If you are registered
                  for VAT in Sweden, you do not have to pay VAT to Swedish
                  Customs. Instead you report it to the Swedish Tax Agency in
                  your VAT return. The import declaration may be submitted
                  electronically or using the SAD form (Single Administrative
                  Document). To make an import declaration, you must first
                  classify the goods, i.e. determine the proper commodity code,
                  and find out whether you need a license or special permit for
                  import. The commodity code can be found in the customs tariff
                  at Taric Query System Online.
                </p>
                <h3 className="mt-80">
                  <b>Customs value</b>
                </h3>
                <p className="mt-10 text-left">
                  When importing, the customs duty to be paid is calculated on
                  the item´s customs value. The customs value is normally based
                  on the price paid to the supplier when they sold the goods to
                  the EU, the cost of transport to the EU border, and the cost
                  of any transport insurance.
                </p>
                <p>
                  If the customs value for your shipment exceed 188 166 SEK and
                  you are liable to pay customs duty you must fill in a customs
                  valuation declaration This is required in order to show all
                  costs and the circumstances that may have affected the price
                  of the imported goods.
                </p>
                <h3 className="mt-80">
                  <b>What happens at the border?</b>
                </h3>
                <p className="mt-10 text-left">
                  When your goods arrive in Sweden you have to take them to a
                  place that we have approved of. These places may be located in
                  the vicinity of the border or somewhere else in the country.
                  You have to present the goods for importation clearance here.
                  If the goods are not presented to us immediately upon their
                  arrival to Sweden, the forwarder must enter them for temporary
                  warehousing or customs warehousing.
                </p>
                <p className="font-italic">Source: Swedish Customs</p>
                <h3 className="mt-80">
                  <b>Exporting goods from Sweden to countries outside the EU</b>
                </h3>
                <p className="mt-10 text-left">
                  The term ‘export´ means sending goods to a country outside the
                  EU. This may be in connection with the sale of goods, but
                  other shipments can also be considered export. No general
                  permit is required to begin exporting. However, permits are
                  required for the export of certain goods, such as agricultural
                  products, cultural objects and endangered species of animals
                  and plants.
                </p>
                <p>
                  Before exporting goods, you must submit an export declaration
                  to Customs. You may submit the declaration yourself, or use an
                  authorized representative. All export declarations must be
                  submitted electronically.
                </p>
                <p>
                  In the export declaration, you must enter a commodity code for
                  your goods, selected from the common nomenclature used in the
                  EU. Determining the proper commodity code for your goods in
                  accordance with the customs tariff, Taric, is called
                  classification.
                </p>
                <p>
                  Before you export, it is also important to check whether the
                  importing country has any regulations that apply to you as an
                  exporter. For more information, contact Business Sweden – the
                  Swedish Trade & Invest Council.
                </p>
                <p>
                  The EU has signed a number of free trade agreements with
                  various countries. If you include a certificate of origin with
                  your export, your goods may be imported duty-free or with a
                  tariff reduction in the importing country.
                </p>
                <h3 className="mt-80">
                  <b>The VAT territory of the EU</b>
                </h3>
                <p className="mt-10 text-left">
                  Certain regions within the EU are part of the customs
                  territory but not of the VAT territory of the EU. When you
                  send goods to these regions you still have to submit an export
                  declaration to Customs, presenting details of the goods
                  removed from the VAT territory.
                </p>
                <p>
                  For example, this is the case for the Åland Islands and the
                  Canary Islands, but also for some other regions belonging to
                  France, Germany, Greece, Italy, Spain and the United Kingdom.
                </p>
                <h3 className="mt-80">
                  <b>Exit summary declaration</b>
                </h3>
                <p className="mt-10 text-left">
                  You have to send pre-departure information to Customs for all
                  goods leaving the EU. The purpose is to protect the EU from
                  dangerous goods and to meet the increased security
                  requirements in world trade.
                </p>
                <div>
                  <p>
                    For further information please check the following link<br/>
                    <a
                      href="https://www.tullverket.se/en/startpage.4.a62602917de14e432714e9.html"
                      target="_blank"
                    >
                     Tullverket (Swedish Custom Agency)
                    </a>
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

export default ImportExport;
