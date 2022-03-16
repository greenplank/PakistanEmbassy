import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Hidden from "@material-ui/core/Hidden";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/main-slider/BadshahiMosque.jpg";
import banner2 from "../../assets/images/main-slider/Azad_kashmir.jpg";
import banner3 from "../../assets/images/main-slider/karachi.jpg";
import banner4 from "../../assets/images/main-slider/Shangrila_Lower_Kachura_Lake.jpg";
import banner5 from "../../assets/images/main-slider/IslamiaCollegePeshawar.jpg";
import banner6 from "../../assets/images/main-slider/SANTAURAS-ISLAMABAD.jpg";
import banner7 from "../../assets/images/main-slider/let-Kashmir-Speak-space.jpg";

import { useMediaQuery } from "react-responsive";

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
  };

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isBigSmallScreen = useMediaQuery({ query: "(max-width: 1823px)" });
  const isDesktopSHFile = useMediaQuery({ query: "(max-width: 1311px)" });
  const isDesktopnewfile = useMediaQuery({ query: "(max-width: 1243px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isDesktopOrLaptopmin = useMediaQuery({ query: "(min-width: 1120px)" });
  const isTabletmode = useMediaQuery({ query: "(min-width: 996px)" });
  const isDesktoporLaptopminfile = useMediaQuery({
    query: "(max-width: 1172px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="row">
      <Hidden lgUp mdUp>
        <div className="col-lg-12 p-0">
          <section className="main-slider main-slider__two">
            <Swiper {...mainSlideOptions}>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner1})` }}
                ></div>

                <Container>
                  <Row className=" justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Badshahi Mosque,Lahore
                          </h2>
                        </div>
                      </section>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner2})` }}
                ></div>
                <Container>
                  <Row className=" justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Azad Kashmir
                          </h2>
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      {/* <img src={icon2} alt="icon2" /> */}
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner3})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Port Side, Karachi
                          </h2>
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      {/* <img src={icon3} alt="icon3" /> */}
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner4})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Skardu, Gilgit Baltistan
                          </h2>
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      {/* <img src={icon4} alt="icon4" /> */}
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner5})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Islamia College, Peshawar
                          </h2>
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      {/* <img src={icon5} alt="icon5" /> */}
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner6})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            Islamabad
                          </h2>
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      {/* <img src={icon6} alt="icon6" /> */}
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>

              <div
                className="swiper-pagination"
                id="main-slider-pagination"
              ></div>
            </Swiper>
          </section>
        </div>
      </Hidden>

      <Hidden smDown>
        <div className="col-lg-12 p-0">
          <section className="main-slider main-slider__two">
            <Swiper {...mainSlideOptions}>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner1})` }}
                ></div>

                <Container>
                  <Row>
                    <section>
                      <div>
                        <h2 class="textSlider">Badshahi Mosque,Lahore</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner2})` }}
                ></div>
                <Container>
                  <Row className=" justify-content-start">
                    <section>
                      <div>
                        <h2 class="textSlider">Azad Kashmir</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner3})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <section>
                      <div>
                        <h2 class="textSlider">Port Side, Karachi</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner4})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <section>
                      <div>
                        <h2 class="textSlider">Skardu, Gilgit Baltistan</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner5})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <section>
                      <div>
                        <h2 class="textSlider">Islamia College, Peshawar</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner6})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <section>
                      <div>
                        <h2 class="textSlider">Islamabad</h2>
                      </div>
                    </section>
                  </Row>
                </Container>
              </SwiperSlide>

              {/* <SwiperSlide>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${banner7})` }}
                ></div>

                <Container>
                  <Row className="justify-content-start">
                    <Col lg={6} className="text-left">
                      <section>
                        <div>
                          
                          <h2
                            style={{
                              paddingBottom: "4em",
                              color: "white",
                              fontSize: "2rem",
                            }}
                          >
                            let-Kashmir-Speak-space
                          </h2>

                        
                        </div>
                      </section>
                    </Col>
                    <Col lg={3} className="text-left">
                      
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide> */}

              <div
                className="swiper-pagination"
                id="main-slider-pagination"
              ></div>
            </Swiper>
          </section>
        </div>
      </Hidden>
    </div>
  );
};

export default MainSliderTwo;
