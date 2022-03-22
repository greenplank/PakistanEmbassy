import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SwiftSlider from "react-swift-slider";

const data = [
  { id: "1", src: "/slider/1.jpg" },
  { id: "2", src: "/slider/2.jpg" },
  { id: "3", src: "/slider/3.jpg" },
  { id: "4", src: "/slider/4.jpg" },
  { id: "5", src: "/slider/5.jpg" },
  { id: "6", src: "/slider/6.jpg" },
  { id: "7", src: "/slider/7.jpg" },
  { id: "8", src: "/slider/8.jpg" },
  { id: "9", src: "/slider/9.jpg" },
  { id: "10", src: "/slider/10.jpg" },
  { id: "11", src: "/slider/11.jpg" },
  { id: "12", src: "/slider/12.jpg" },
  { id: "13", src: "/slider/13.jpg" },
  { id: "14", src: "/slider/14.jpg" },
  { id: "15", src: "/slider/15.jpg" },
  { id: "16", src: "/slider/16.jpg" },
  { id: "17", src: "/slider/17.jpg" },
  { id: "18", src: "/slider/18.jpg" },
  { id: "19", src: "/slider/19.jpg" },
  { id: "20", src: "/slider/20.jpg" },
  { id: "21", src: "/slider/21.jpg" },
  { id: "22", src: "/slider/22.jpg" },
  { id: "23", src: "/slider/23.jpg" },
  { id: "24", src: "/slider/24.jpg" },
  { id: "25", src: "/slider/25.jpg" },
];

const AboutThree = () => {
  return (
    <section className="pt-80 pb-10">
      <Container>
        <Row>
          <Col lg={6} md={6} xs={12}>
            <div className="block-title">
              <h2
                style={{
                  marginBottom: "2px",
                  paddingTop: "1em",
                  color: "#035804",
                }}
              >
                <b>Tourism in Pakistan</b>
              </h2>
              <hr
                style={{
                  backgroundColor: "#035804",
                  width: "60%",
                  borderWidth: "3px",
                  marginBottom: "34px",
                  marginRight: "17em",
                }}
              />
              {/* <h4
                style={{
                  marginBottom: "16px",
                  paddingTop: ".1em",
                  color: "#035804",
                }}
              >
                <b>What others think</b>
              </h4> */}

              <h5 style={{ marginBottom: ".5em" }}>
              Pakistan is a cradle of ancient civilizations and has some of
                  the most diverse and fascinating natural beauty in the world.
                  From the stretches of great mountain ranges in the north, to
                  the vast alluvial delta of the Indus River in the south,
                  Pakistan remains a land blessed with nature’s beauty and
                  majestic mountains. With shining deserts and some of the
                  world’s highest peaks, the country has myriad attractions for
                  sightseers, skiers, trekkers and mountaineers....
              </h5>
              <span>
                <a href="/visit-pakistan" style={{ color: "black" }}>
                  More
                </a>{" "}
              </span>
            </div>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <div style={{ width: "100%" }}>
              <SwiftSlider data={data} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutThree;
