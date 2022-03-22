import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import QuaidAzam from "../assets/images/backgrounds/Quaid-e-Azam.jpg";
import PresidentPK from "../assets/images/backgrounds/presidentofpakistan.jpg";
import PrimeMinisterPK from "../assets/images/backgrounds/imrankhan.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const AboutPakistan = () => {
  return (
    <>
      <Head>
        <title>About Pakistan</title>
        <meta name="title" content="About Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="About Pakistan">
        <HeaderTwo />
        <PageHeader title="About Pakistan" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <h3 className="mb-10 mt-60 text-left">
              <b>History of Pakistan</b>
            </h3>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <p>
                  Pakistan emerged as an independent country on 14th August 1947
                  after getting independence from Britain. The land where the
                  Islamic Republic of Pakistan is situated today had been a seat
                  of world’s leading Civilizations from the time immemorial. The
                  cultural heritage of Pakistan, starting from pre-historic
                  times to the present day can be summarized in the following
                  periods:
                </p>
                <ul>
                  <li>Indus Civilization</li>
                  <li>Gandhara Civilization</li>
                  <li>Islamic Period</li>
                  <li>Sikh Period</li>
                  <li>British Period</li>
                  <li>Post-independence Period</li>
                </ul>
                <p>
                  For further details please click here{" "}
                  <a href="http://www.heritage.gov.pk/)" target="_blank">
                    http://www.heritage.gov.pk/)
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
          <Container>
            <h4 className="mb-10 mt-30 text-left">
              <b>INTRODUCTION</b>
            </h4>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <p>
                  Pakistan emerged on the world map on August 14th, 1947.
                  However, our heritage is rich and ancient.
                </p>
                <h4 className="mb-10 mt-30 text-left">
                  <b>STONE AGE</b>
                </h4>
                <p>
                  Some of the earliest relics of Stone Age man in the
                  subcontinent are found in the Soan Valley of the Potohar
                  region near Rawalpindi, with a probable antiquity of about
                  500,000 years. No human skeleton of such antiquity has yet
                  been discovered in the area, but the crude stone implements
                  recovered from the terraces of the Soan carry the saga of
                  human toil and labor in this part of the world to the
                  inter-glacial period. These Stone Age men fashioned their
                  implements in a sufficiently homogenous way to justify their
                  grouping in terms of a culture called the Soan Culture. About
                  3000 B.C, amidst the rugged wind-swept valleys and foothills
                  of Balochistan, small village communities developed and began
                  to take the first hesitant steps towards civilization. Here,
                  one finds a more continuous story of human activity, though
                  still in the Stone Age.
                </p>
                <p>
                  These pre-historic men established their settlements, both as
                  herdsmen and as farmers, in the valleys or on the outskirts of
                  the plains with their cattle and cultivated barley and other
                  crops.
                </p>
                <h4 className="mb-10 mt-30 text-left">
                  <b>RED AND BUFF WARE CULTURES</b>
                </h4>
                <p>
                  Careful excavations of the pre-historic mounds in these areas
                  and the classification of their contents, layer by layer, have
                  grouped them into two main categories of Red Ware Culture and
                  Buff Ware Culture. The former is popularly known as the Zhob
                  Culture of North Balochistan, while the latter comprises
                  Quetta, Amri Nal and Kulli Cultures of Sindh and South
                  Balochistan. Some Amri Nal villages or towns had stone walls
                  and bastions for defence purposes and their houses had stone
                  foundations. At Nal, an extensive cemetery of this culture
                  consists of about 100 graves. An important feature of this
                  composite culture is that at Amri and certain other sites, it
                  has been found below the very distinctive Indus Valley
                  Culture. On the other hand, the steatite seals of Nal and the
                  copper implements and certain types of pot decoration suggest
                  a partial overlap between the two. It probably represents one
                  of the local societies which constituted the environment for
                  the growth of the Indus Valley Civilization.
                </p>
                <p>
                  The pre-historic site of Kot Diji in the Sindh province has
                  provided information of high significance for the
                  reconstruction of a connected story which pushes back the
                  origin of this civilization by 300 to 500 years, from about
                  2500 B.C. to at least 2800 B.C. Evidence of new cultural
                  elements of pre-Harappan era has been traced here.
                </p>
                <h4 className="mb-10 mt-30 text-left">
                  <b>PRE-HARAPPAN CIVILIZATION</b>
                </h4>
                <p>
                  When the primitive village communities in the Balochistan area
                  were still struggling against a difficult highland
                  environment, a highly cultured people was trying to assert
                  themselves at Kot Diji, one of the most developed urban
                  civilizations of the ancient world which flourished between
                  the years 2500 and 1500 B.C. in the Indus Valley sites of
                  Moenjodaro and Harappa. These Indus Valley people possessed a
                  high standard of art and craftsmanship and a well developed
                  system of quasi pictographic writing, which despite continuing
                  efforts still remains undeciphered. The imposing ruins of the
                  beautifully planned Moenjodaro and Harappa towns present clear
                  evidence of the unity of a people having the same mode of life
                  and using the same kind of tools. Indeed, the brick buildings
                  of the common people, the public baths, the roads and covered
                  drainage system suggest the picture of a happy and contented
                  people.
                </p>
                <h4 className="mb-10 mt-30 text-left">
                  <b>ARYAN CIVILIZATION</b>
                </h4>
                <p>
                  In or about 1500 B.C., the Aryans descended upon the Punjab
                  and settled in the Sapta Sindhu, which signifies the Indus
                  plain. They developed a pastoral society that grew into the
                  Rigvedic Civilization. The Rigveda is replete with hymns of
                  praise for this region, which they describe as "God
                  fashioned". It is also clear that so long as the Sapta Sindhu
                  remained the core of the Aryan Civilization, it remained free
                  from the caste system. The caste institution and the ritual of
                  complex sacrifices took shape in the Gangetic Valley. There
                  can be no doubt that the Indus Civilization contributed much
                  to the development of the Aryan civilization.
                </p>
                <h4 className="mb-10 mt-30 text-left">
                  <b>GANDHARA CULTURE</b>
                </h4>
                <p>
                  The discovery of the Gandhara grave culture in Dir and Swat
                  will go a long way in throwing light on the period of
                  Pakistan's cultural history between the end of the Indus
                  Culture in 1500 B.C. and the beginning of the historic period
                  under the Achaemenians in the sixth century B.C. Hindu
                  mythology and Sanskrit literary traditions seem to attribute
                  the destruction of the Indus civilization to the Aryans, but
                  what really happened, remains a mystery. The Gandhara grave
                  culture has opened up two periods in the cultural heritage of
                  Pakistan: one of the Bronze Age and the other of the Iron Age.
                  It is so named because it presents a peculiar pattern of
                  living in hilly zones of the Gandhara region as evidenced in
                  the graves. This culture is different from the Indus Culture
                  and has little relations with the village culture of
                  Balochistan. Stratigraphy as well as the artifacts discovered
                  from this area suggests that the Aryans moved into this part
                  of the world between 1,500 and 600 B.C. In the sixth century
                  B.C., Buddha began his teachings, which later on spread
                  throughout the northern part of the South-Asian subcontinent.
                  It was towards the end of this century, too, that Darius I of
                  Iran organized Sindh and Punjab as the twentieth satrapy of
                  his empire.
                </p>
                <p>
                  There are remarkable similarities between the organizations of
                  that great empire and the Mauryan empire of the third century
                  B.C., while Kautilya's Arthshastra also shows a strong Persian
                  influence, Alexander of Macedonia after defeating Darius III
                  in 330 B.C. had also marched through the South-Asian
                  subcontinent up to the river Beas, but Greek influence on the
                  region appears to have been limited to contributing a little
                  to the establishment of the Mauryan empire. The great empire
                  that Asoka, the grandson of Chandragupta Maurya, built in the
                  subcontinent included only that part of the Indus basin which
                  is now known as the northern Punjab. The rest of the areas
                  astride the Indus were not subjugated by him. These areas,
                  which now form a substantial part of Pakistan, were virtually
                  independent from the time of the Guptas in the fourth century
                  A.D. until the rise of the Delhi Sultanate in the thirteenth
                  century.
                </p>
                <p>
                  Gandhara Art, one of the most prized possessions of Pakistan,
                  flourished for a period of 500 years (from the first to the
                  fifth century A.D.) in the present valley of Peshawar and the
                  adjacent hilly regions of Swat, Buner and Bajaur. This art
                  represents a separate phase of the cultural renaissance of the
                  region. It was the product of a blending of Indian, Buddhist
                  and Greco-Roman sculpture. Gandhara Art in its early stages
                  received the patronage of Kanishka, the great Kushan ruler,
                  during whose reign the Silk Route ran through Peshawar and the
                  Indus Valley, bringing great prosperity to the whole area.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </Layout>
    </>
  );
};

export default AboutPakistan;
