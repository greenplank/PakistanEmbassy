import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const EVisa = () => {
  return (
    <>
      <Head>
        <title>Federal Tax Ombudsman</title>
        <meta name="title" content="Federal Tax Ombudsman" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Federal Tax Ombudsman">
        <HeaderTwo />
        <PageHeader title="Federal Tax Ombudsman" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Federal Tax Ombudsman</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  The Federal Tax Ombudsman, is assisted by Advisors and
                  Consultants all major tax issues including Income Tax,
                  Customs, Sales Tax and Federal Excise. The FTO institution has
                  seven regional offices located at major business hubs of the
                  country with Headquarter at Islamabad. This institution
                  strives to help improve tax processes and promote good
                  governance in Federal Board of Revenue besides providing
                  prompt relief to aggrieved tax payers.
                </p>
                <h2 className="mb-30 mt-30">Organogram</h2>
                <h3>Legislations</h3>
                <ul>
                  <li>
                    The Establishment of the Office of Federal Tax Ombudsman
                    Ordinance, 2000
                  </li>
                  <li>Federal Ombudsmen Institutional Reforms Act, 2013</li>
                  <li>
                    Investigation and Disposal of Complaints Regulations, 2001
                  </li>
                </ul>
                <h3 className="mb-30 mt-30">Charter and Functions</h3>
                <p>
                  The office of Federal Tax Ombudsman is mandated to
                  investigate, diagnose, redress and rectify maladministration
                  of tax functionaries in the following manner:
                </p>
                <ul>
                  <li>On complaint by an aggrieved person</li>
                  <li>
                    On reference from the President ,Senate National Assembly
                    ,Supreme Court and High Court
                  </li>
                  <li>Own-motion action</li>
                  <li>
                    Inspections of offices ,where Persistent maladministration
                    is reported
                  </li>
                  <li>Special research studies</li>
                  <li>
                    Recommendations to FBR on suggestions of Advisory
                    Committees.
                  </li>
                </ul>
                <p>
                  Complaints are disposed of within 45 days. The Hon’ble FTO
                  also takes own motion cognizance in systemic maladministration
                  also conducts inspections of the offices sounding bad
                  reputation.
                </p>
                <p>
                  For further inquiries please visit the following link
                  <br />
                  <a href="http://fto.gov.pk/Default" target="_blank">
                    http://fto.gov.pk/Default
                  </a>
                </p>
                <h3>Download the Form</h3>
                <a href="/pdfs/computer-proforma-renunciation.pdf" target="_blank">
                    Click Here
                  </a>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default EVisa;
