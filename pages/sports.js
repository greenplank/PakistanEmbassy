import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import Card from "@material-ui/core/Card";

import Hockey from "../assets/images/img12.jpg";
import Cricket from "../assets/images/img13.jpg";
import Kabbadi from "../assets/images/img14.jpg";
import Tennis from "../assets/images/img15.jpg";
import Squash from "../assets/images/img16.jpg";
import Snooker from "../assets/images/img17.jpg";
import Polo from "../assets/images/img18.jpg";

import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/footer";
import Head from "next/head";

const seaports = () => {
  return (
    <>
      <Head>
        <title>Sports in Pakistan</title>
        <meta name="title" content="Sports in Pakistan" />
        <meta name="description" content="" />
      </Head>
      <Layout pageTitle="Sports in Pakistan">
        <HeaderTwo />
        <PageHeader title="Sports in Pakistan" />
        <StickyHeader />
        <section className="about-one">
          <Container>
            <Row style={{ marginBottom: "4em" }}>
              <Col lg={12} md={12} xs={12}>
                {/* <h3 className="mb-30 mt-50">Tourism</h3> */}
                <p className="mb-30 mt-60">
                  Pakistan is a sports-loving nation and sports are an important
                  part of Pakistan’s culture. This love extends to many popular
                  games in the country. Cricket is the most played and popular
                  sport in Pakistan while field hockey, polo and squash are also
                  popular. Traditional sports include Kabaddi and other popular
                  sports of Pakistan. Hockey is the national game of Pakistan.
                </p>
                <p className="mb-30">
                  The first national game after Pakistan’s independence took
                  place on April 23-25, 1948 at the Polo Ground in Karachi.
                  Muhammad Ali Jinnah, the father of the nation declared the
                  Games open and donated the “Challenge Shield” from his private
                  funds. The trophy is now called the “Quaid-e-Azam Trophy” and
                  is awarded to the winning team in each edition. He loved
                  sports very much and he fully realized the important role
                  played by sports in the development of nations and in creating
                  discipline in the people.
                </p>
                <p className="mb-30">
                  In recent years, there has been an increase in sports
                  activities in Pakistan, with Pakistani athletes and women
                  participating in many national and international competitions.
                  More international tournaments are played in the country. The
                  size of the teams hosted by Pakistan and in which they
                  participate, such as the Olympic Games, the Asian Games, the
                  World Games, and the Commonwealth Games increased by the end
                  of the century.
                </p>
                <p className="mb-10">
                  The following is a list of the most popular Sports games in
                  Pakistan.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Hockey</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    Hockey is the national game of Pakistan and was the most
                    popular sport in the 70’s and 80’s. Pakistan’s national
                    hockey team has set a world record four times in the Hockey
                    World Cup by winning three gold medals in the Olympic Games.
                    It has also won the most Asian gold medals and is the only
                    Asian team to have won the Distinguished Champions Trophy
                    with 3 titles. Notable players include world record holders
                    Wasim Ahmed, Mohammad Thaqleen and Sohail Abbas. The hockey
                    team has been a factor in the last few years as a result of
                    the poor performance of the Federation.
                  </h5>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Hockey} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Cricket} width="500px" />
                    </Card>
                  </div>
                </Row>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Cricket</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />
                  <h5 style={{ marginBottom: ".5em" }}>
                    Cricket is a popular sport in Pakistan. Pakistan is a fond
                    country and the sport is played in every corner. Javed
                    Miandad, Inzamam-ul-Haq, Shahid Afridi, Wasim Akram, and
                    Imran Khan have been the world-class players of Pakistan
                    cricket team. Pakistan has won international cricket
                    competitions, including the 1992 Cricket World Cup, the 2009
                    ICC World Twenty20 and the 2017 ICC Champions Trophy.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Kabbadi</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    Kabaddi is a popular traditional sport in Pakistan been
                    played for many years and is considered a traditional sport.
                    Pakistan Kabaddi Federation was established in 1964 and
                    manages the team. It has organized the first Pakistan style
                    Kabaddi League, Super Kabaddi League. Pakistan won its first
                    Kabaddi World Cup on February 16, 2020, at the National
                    Stadium, Lahore after a close match against India. Kabaddi
                    Federation organizes tournaments between Pakistan and other
                    countries like Iran and India.
                  </h5>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Kabbadi} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Tennis} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Tennis</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    Pakistanis Tennis players participate in various
                    international Tennis competitions. The Pakistan Tennis
                    Federation (PTF) organizes the game in the country. Khawaja
                    Saeed was the first Pakistani to reach the Grand Slam
                    tournament. Haroon Rahim was a very successful player, he
                    was going to win several singles and double titles. Most
                    recently, Aisam-ul-Haq made history in Pakistani tennis when
                    he reached the finals of the 2010 US Open – Men’s Doubles
                    and the 2010 US Open – Mixed Doubles. The Pakistan Davis Cup
                    team has already reached the World Group playoffs with the
                    help of Pakistan’s number one Aisam-ul-Haq
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Squash</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    Squash is a popular sport that has a huge following in
                    Pakistan, with Pakistan dominating the game from time to
                    time. Janshar Khan won the World Open eight times and the
                    British Open six times. He was number one in the world for
                    six years. Jahangir Khan is the biggest squash player ever
                    with a record of easily winning 555 games. Together they
                    have won 14 World Open, making Pakistan the most played
                    squash nation in the world. Pakistani squash players have
                    won 17 times at the World Open and 12 times at the British
                    Open, the most by any country.
                  </h5>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Squash} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Snooker} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Snooker</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    The various snooker clubs are a testament to the fact that
                    it is one of the most popular sports in Pakistan. Most
                    players start out as a hobby. The raw talent of snooker can
                    be found in small snooker clubs spread across the country,
                    and sometimes in talent like Muhammad Asif. There was a
                    great success at the international level. Muhammad Yousaf
                    was the IBSF World Snooker Champion in 1994 and the IBSF
                    World Masters Champion in 2006. Ahsan Ramzan has won World
                    Snooker Championship title for 2021. The Pakistan Billiards
                    Snooker Association (PBSA) was formed in 1958.
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={6} md={6} xs={12}>
                <div className="block-title">
                  <h2
                    style={{
                      marginBottom: "2px",
                      color: "#035804",
                    }}
                  >
                    <b>Polo</b>
                  </h2>
                  <hr
                    style={{
                      backgroundColor: "#035804",
                      width: "60%",
                      borderWidth: "3px",
                      marginBottom: "20px",
                      marginRight: "17em",
                    }}
                  />

                  <h5 style={{ marginBottom: ".5em" }}>
                    The Shandur Polo Tournament played every June at the world’s
                    highest polo ground, is one of the biggest attractions to
                    Chitral and Gilgit in northern Pakistan. Raza Bangash has
                    been Pakistan’s number one player since June 2009, playing
                    for the President’s bodyguard team. The Pakistan Polo
                    Association (PPA) organizes the game, and the national team
                    participates in the Polo World Cup. Polo is played
                    professionally in which several Argentine players play in
                    Pakistan.
                  </h5>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12}>
                <Row>
                  <div style={{ width: "inherit" }}>
                    <Card>
                      <img src={Polo} width="550px" />
                    </Card>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="pb-10 pt-60">
          <Container>
            <Row>
              <Col lg={12} md={12} xs={12}>
                <div className="block-title">
                  <h2>
                    <b>Other National Sports</b>
                  </h2>
                  <h6>
                    In addition to the above sports, the following sports are
                    being played as the main features of many large and colorful
                    festivals held in rural Pakistan.
                  </h6>
                  <ul type="circle">
                    <li>Wrestling</li>
                    <li>Weightlifting</li>
                    <li>Horse-racing/riding</li>
                    <li>Tent-Pegging</li>
                    <li>Shooting</li>
                    <li>Scuba Diving</li>
                    <li>Trekking/Mountain climbing</li>
                    <li>Rope skipping</li>
                    <li>Motorsport</li>
                    <li>Golf</li>
                    <li>Gymnastics</li>
                    <li>Cycling</li>
                    <li>Caving</li>
                    <li>Chess</li>
                    <li>Skiing</li>
                    <li>Paragliding</li>
                  </ul>

                  <h5 style={{ marginBottom: ".5em" }}>
                    The Shandur Polo Tournament played every June at the world’s
                    highest polo ground, is one of the biggest attractions to
                    Chitral and Gilgit in northern Pakistan. Raza Bangash has
                    been Pakistan’s number one player since June 2009, playing
                    for the President’s bodyguard team. The Pakistan Polo
                    Association (PPA) organizes the game, and the national team
                    participates in the Polo World Cup. Polo is played
                    professionally in which several Argentine players play in
                    Pakistan.
                  </h5>
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

export default seaports;
