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
        <title>Grievance Commissioner Cell for Overseas Pakistanis</title>
        <meta
          name="title"
          content="Grievance Commissioner Cell for Overseas Pakistanis"
        />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Grievance Commissioner Cell for Overseas Pakistanis">
        <HeaderTwo />
        <PageHeader title="Grievance Commissioner Cell for Overseas Pakistanis" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Grievance Commissioner Cell for Overseas Pakistanis</b>
                </h1>
                <div className="text-center">
                  <h3 className="mt-40">
                    For latest Guidelines regarding Air Transport of COVID 19
                    Positive Dead Body{" "}
                    <a href="/pdfs/COMMON-10-new.pdf" target="_blank">
                      click here
                    </a>
                  </h3>
                </div>
                <p className="mb-30 mt-30 text-left">
                  The Honorable Federal Ombudsman of Pakistan, Mr. M. Salman
                  Faruqui NI, has established the Grievance Commissioner Cell
                  for Overseas Pakistanis in Federal Ombudsman Secretariat by
                  appointing Mr. Hafiz Ahsaan Ahmad Khokhar as Grievance
                  Commissioner (GCOP) for Overseas Pakistanis under Section (7)
                  of the Federal Ombudsmen Institutional Reforms Act, 2013.
                </p>
                <p className="mb-30 mt-30 text-left">
                  GCOP will be addressing the individual and systematic issues
                  of the Overseas Pakistanis related to the Federal Government
                  Ministries, Departments, Organizations and Agencies.
                </p>
                <p className="mb-30 mt-30 text-left">
                  The (GCOP) office has been setup in order to facilitate and
                  redress Home Remittance related complaints of outbound workers
                  and overseas Pakistanis.
                </p>
                <h4>Mr. Hafiz Ahsaan Ahmad Khokhar</h4>
                <p className="mb-30 mt-30 text-left">
                  Senior Advisor Law/Registrar Grievance Commissioner for
                  Overseas Pakistanis, Office of the Federal Ombudsman
                </p>
                <p className="mb-10 mt-30 text-left">
                  Website :
                  <a target="_blank" href="http://www.mohtasib.gov.pk/">
                    www.ombudsman.gov.pk
                  </a>{" "}
                </p>
                <p className="mb-10 mt-10 text-left">
                  Emails :
                  <a target="_blank" href="mailto:hafizahsaan1973@gmail.com">
                    hafizahsaan1973@gmail.com
                  </a>{" "}
                  <br />
                  <a
                    target="_blank"
                    href="mailto:advisor.hakhokhar@ombudsman.gov.pk"
                  >
                    advisor.hakhokhar@ombudsman.gov.pk
                  </a>{" "}
                </p>
                <p className="mb-10 mt-30 text-left">
                  Land line number: 0092-51-9217243
                  <br />
                  Fax: 0092-51-9217256
                  <br />
                  Mobile Number: 0092-300-8487161
                </p>
                <div className="text-center">
                  <h3>
                    <a
                      target="_blank"
                      href="/pdfs/FTO_Newsletter_vol_3_Issue_4_2020.pdf"
                    >
                      Newsletter of Federal Tax Ombudsman Secretariat
                    </a>
                  </h3>
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

export default EVisa;
