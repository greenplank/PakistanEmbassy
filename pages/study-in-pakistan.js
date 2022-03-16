import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const StudyINPakistan = () => {
  return (
    <>
      <Head>
        <title>Study in Pakistan</title>
        <meta name="title" content="Study in Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Study in Pakistan">
        <HeaderTwo />
        <PageHeader title="Study in Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12}>
                <h1 className="mt-80">
                  <b>Study in Pakistan</b>
                </h1>
                <p className="mb-30 mt-30 text-left">
                  Pakistan has 2,45,578 institutions (Primary schools to
                  University) with 3,09,04,000+ students. There are over 150
                  recognized universities and degree-awarding institutes (DAIs)
                  split between private and public sector. In Pakistan, students
                  will have opportunity to experience both modernity and
                  tradition. Students are coming from all over the world to
                  study in Pakistan. The quality of the education and teaching
                  staff at Pakistani Universities offers a world of
                  opportunities to get the skills one will need to compete in
                  the global market. Degrees granted by Pakistani Universities
                  are recognized around the world and offers opportunities to
                  students to continue their education in international
                  universities globally.
                </p>
                <p>
                  After 2001 while University Grants Commission was restructured
                  and renamed as Higher Education Commission (HEC), the higher
                  education in Pakistan experienced a dramatic change and
                  progress. HEC revised previous policies to make the
                  educational system of Pakistan comparable to the international
                  standards. The commission has conceived and implemented a
                  number of programs for promotion and development of higher
                  education in the country.
                </p>

                <div className="mt-30">
                  <h3 className="mt-80">
                    <b>Useful links:</b>
                  </h3>
                  <p className="mb-30 mt-30 text-left">
                    Higher Education Commision, Pakistan
                  </p>
                  <a
                    href="https://www.hec.gov.pk/english/pages/home.aspx"
                    target="_blank"
                  >
                    http://www.hec.gov.pk/Pages/HECMain
                  </a>

                  <p className="mb-30 mt-30 text-left">
                    Socio, Economic development of Pakistan through education
                  </p>
                  <a
                    href="http://www.studyinpakistan.info/"
                    target="_blank"
                  >
                    http://www.studyinpakistan.info/
                  </a>

                  <p className="mb-30 mt-30 text-left">
                  Study in Pakistan
                  </p>
                  <a
                    href="http://www.eduniversal-ranking.com/study-abroad-in-pakistan.html"
                    target="_blank"
                  >
                    http://www.eduniversal-ranking.com/study-abroad-in-pakistan.html
                  </a>
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

export default StudyINPakistan;
