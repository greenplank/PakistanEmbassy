import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/slider/1.jpg" },
  { url: "/slider/2.jpg" },
  { url: "/slider/3.jpg" },
  { url: "/slider/4.jpg" },
  { url: "/slider/5.jpg" },
  { url: "/slider/6.jpg" },
  { url: "/slider/7.jpg" },
  { url: "/slider/8.jpg" },
  { url: "/slider/9.jpg" },
  { url: "/slider/10.jpg" },
  { url: "/slider/11.jpg" },
  { url: "/slider/12.jpg" },
  { url: "/slider/13.jpg" },
  { url: "/slider/14.jpg" },
  { url: "/slider/15.jpg" },
  { url: "/slider/16.jpg" },
  { url: "/slider/17.jpg" },
  { url: "/slider/18.jpg" },
  { url: "/slider/19.jpg" },
  { url: "/slider/20.jpg" },
  { url: "/slider/21.jpg" },
  { url: "/slider/22.jpg" },
  { url: "/slider/23.jpg" },
  { url: "/slider/24.jpg" },
  { url: "/slider/25.jpg" },
];

const VisitPakistan = () => {
  return (
    <>
      <section className="about-one pb-40">
        <Container>
          <Row style={{ marginBottom: "4em" }}>
            <Col lg={12}>
              <div className="mt-30">
                <SimpleImageSlider
                  width={896}
                  height={504}
                  images={images}
                  showBullets={true}
                  showNavs={true}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default VisitPakistan;
