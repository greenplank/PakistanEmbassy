import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";

import PakistanPoliticalMap from "../assets/images/backgrounds/Pakistans-Political-Map.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const BasicFact = () => {
  return (
    <>
      <Head>
        <title>Tourism</title>
        <meta name="title" content="Tourism" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Tourism">
        <HeaderTwo />
        <PageHeader title="Tourism" />
        <StickyHeader />
        <section className="about-one pb-40">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                <h3 className="mb-30 mt-50">Tourism</h3>
                <p>
                  Pakistan is a cradle of ancient civilizations and has some of
                  the most diverse and fascinating natural beauty in the world.
                  From the stretches of great mountain ranges in the north, to
                  the vast alluvial delta of the Indus River in the south,
                  Pakistan remains a land blessed with nature’s beauty and
                  majestic mountains. With shining deserts and some of the
                  world’s highest peaks, the country has myriad attractions for
                  sightseers, skiers, trekkers and mountaineers.{" "}
                </p>
                <p className="mb-30">
                  Pakistan is a land of love and hospitality and ‘melting pot’
                  of religions and cultures. It contains deep religious heritage
                  for pilgrims of various faiths and beliefs. It has a land that
                  holds a reservoir of knowledge for archaeologists, historians,
                  artists and anthropologists. The country has always
                  whole-heartedly worked to preserve its historical sites —
                  whether it’s a Church, Gurdwara, Temple, Mosque, Tomb, Fort or
                  Shrine.
                </p>
                <p className="mb-30">
                  Pakistani cuisines are also rich, exotic, and irresistible and
                  are famous for their aroma and spicy mouth watering flavours.
                  The versatile geography, ranging from deserts to the world’s
                  highest mountain peaks, creates a wide variety of different
                  types of recipes, each with a unique taste.
                </p>
                <p className="mb-30">
                  Pakistan has spectacular and fascinating mountain ranges which
                  include the famous Himalayas, Karakoram and the Hindukush.
                  There are several high peaks in Pakistan, with the tallest
                  being K2 (at 8,611 metres), the second highest in the world.
                  The country is blessed with five out of the 14 highest
                  mountain peaks of the world.
                </p>
                <p className="mb-30">
                  Pakistan was ranked No. 1 on Condé Nast Traveller’s list of 20
                  best holiday destinations for 2020 and Lonely Planet called
                  Pakistan ‘tourism’s next big thing.’ Forbes ranked Pakistan as
                  one of the ‘10 Coolest Places to go in 2019’ and the British
                  Backpacker Society (BBS) declared that ‘Pakistan tops the list
                  of world’s best travel destinations’, describing it as ‘one of
                  the friendliest countries on earth.
                </p>
                <p className="mb-30">
                  The Punjab province comprises rich agricultural lands, an
                  extensive network of rivers and channels, shrines, ancient
                  forts and gardens from the Mughal era. Over 2,000 years ago,
                  the world famous Gandhara Buddhist civilisation flourished in
                  Northern Pakistan, with Taxila as the principal seat of
                  Buddhist learning.
                </p>
                <p className="mb-30">
                  The Balochistan province is the largest in the country in
                  terms of area. Besides being blessed with nature’s bounty of
                  mineral resources, it also has immense natural beauty
                  comprising mountain ranges, mines and a very long coastal
                  belt, including the newly developed Gwadar Port. In
                  Balochistan there are many caves for tourists to visit,
                  including the Juniper Shaft Cave, Shahre-e-Roghan, the
                  Murghagull Gharra cave, Mughall saa cave, and Pakistan’s
                  naturally decorated cave, the Mangocher Cave.
                </p>
                <p className="mb-30">
                  In the South, the province of Sindh also abounds in natural
                  beauty and its culture is rooted in the civilization of the
                  Indus Valley. Sindhi society is dominated by great Sufis, the
                  mystics and the martyrs. It has always been the land of peace,
                  love, romance, and great cultural and artistic values. The
                  province has seaports and beautiful beaches which are spread
                  over hundreds of miles of coastline.
                </p>
                <p className="mb-30">
                  Khyber Pakhtunkhwa is well known for its varying natural
                  beauty, comprising some awe-inspiring valleys and mountains in
                  the north, including the Kaghan and Swat valleys, and the
                  famous Khyber Pass.
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

export default BasicFact;
