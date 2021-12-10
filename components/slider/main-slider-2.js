import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import banner1 from "../../assets/images/main-slider/slider1.webp";
import banner2 from "../../assets/images/main-slider/slider2.webp";
import banner3 from "../../assets/images/main-slider/slider3.webp";
import banner4 from "../../assets/images/main-slider/slider4.webp";
import banner5 from "../../assets/images/main-slider/slider5.webp";
import banner6 from "../../assets/images/main-slider/slider6.webp";

import icon1 from "../../assets/images/main-slider/Denmark.png";
import icon2 from "../../assets/images/main-slider/Austria.png";
import icon3 from "../../assets/images/main-slider/Germany.png";
import icon4 from "../../assets/images/main-slider/Norway.png";
import icon5 from "../../assets/images/main-slider/Sweden.png";
import icon6 from "../../assets/images/main-slider/Holland.png";

import { useMediaQuery } from 'react-responsive';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const MainSliderTwo = () => {
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };

 
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isBigSmallScreen = useMediaQuery({ query: '(max-width: 1823px)' })
  const isDesktopSHFile = useMediaQuery({query: '(max-width: 1311px)'})
  const isDesktopnewfile = useMediaQuery({query: '(max-width: 1243px)'})
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isDesktopOrLaptopmin = useMediaQuery({query: '(min-width: 1120px)'})
  const isTabletmode = useMediaQuery({query: '(min-width: 996px)'})
  const isDesktoporLaptopminfile = useMediaQuery({ query: '(max-width: 1172px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <div className="row">

      <Hidden lgUp mdUp>
      <div className="col-lg-3 p-0" >
        <section style={{ padding:isBigScreen? "7em 2em 3em 4em":isDesktopOrLaptop?"5em 2em 4em 4em":isTabletOrMobile?".1em 2em .1em 4em":isTabletOrMobile?"1em 2em .6em 4em":"5em 2em 4em 4em", background: "black"}}>
          <div>
            <div className="block-title text-left">
              <h3>
                <span style={{ color: "white" }}>Green Plank</span>
              </h3>
            </div>
            <h2 style={{ marginBottom: "1em", color: "white", fontSize: "1rem" }}>
              Miljövänlig komposit produkter med lågt underhåll
            </h2>

            <Grid container spacing={3} >
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="smart-komposittrall" className="thm-btn thm-btn2 rounded-pill" ><center>Smart komposittrall</center></a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="http://deckplanner.greenplank.eu/" className="thm-btn thm-btn2 rounded-pill" >Trall Planerare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3} >
              <Grid item xs={6} sm={6} >
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="smart-vs-traditionell" className="thm-btn thm-btn2 rounded-pill" >Smart vs Traditionell</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="http://fenceplanner.greenplank.eu/" className="thm-btn thm-btn2 rounded-pill" >Staket Planerare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="ihalig-vs-massiv" className="thm-btn thm-btn2 rounded-pill" >Ihålig vs Massiv</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="hitta-hantverkare" className="thm-btn thm-btn2 rounded-pill" >Hitta Hantverkare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="galleri" className="thm-btn thm-btn2 rounded-pill" >Inspiration</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="aterfarsaljare" className="thm-btn thm-btn2  rounded-pill">Återförsäljare</a>
              </Grid>

            </Grid>
          </div>
        </section>
      </div>
      <div className="col-lg-9 p-0">
        <section className="main-slider main-slider__two">
          <Swiper {...mainSlideOptions}>
            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${banner1})` }}
              ></div>

              <Container>
                <Row className=" justify-content-start">
                  <Col xl={6} lg={12} className="text-left">

                    <img src={icon1} alt="icon1" width="300px"/>
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
                  <Col xl={6} lg={12} className="text-left">

                    <img src={icon2} alt="icon2" width="300px" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon3} alt="icon3" width="300px" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon4} alt="icon4" width="300px" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon5} alt="icon5" width="300px" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon6} alt="icon6" width="300px" />
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            <div className="swiper-pagination" id="main-slider-pagination"></div>
          </Swiper>
        </section>
      </div>
      </Hidden>


      <Hidden smDown>
      <div className="col-lg-3 p-0" >
        <section id="hero-banner" style={{ padding:isBigScreen? "6em 2em 3em 4em":isBigSmallScreen?"5em 2em 1em 4em":isDesktopSHFile?"5em 2em 2em 4em":isDesktopnewfile?"5em 2em 3em 4em":isDesktopOrLaptop?"5em 2em 4em 4em":isDesktopOrLaptopmin?".1em 2em 4em 4em":isTabletmode?".1em 2em 3em 4em":isDesktoporLaptopminfile?".1em 2em 5em 4em":isTabletmode?".1em 2em 5em 4em":isTabletOrMobile?".1em 2em 3em 4em":isTabletOrMobile?"1em 2em .6em 4em":"5em 2em 4em 4em", background: "black"}}>
          <div style={{fontSize:"12px"}}>
            <div className="block-title text-left">
              <h3>
                <span style={{ color: "white" }}>Green Plank</span>
              </h3>
            </div>
            <h2 style={{ marginBottom: "1em", color: "white", fontSize: "1rem" }}>
              Miljövänlig komposit produkter med lågt underhåll
            </h2>

            <Grid container spacing={3} >
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="smart-komposittrall" className="thm-btn thm-btn3 rounded-pill" ><center>Smart komposittrall</center></a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="http://deckplanner.greenplank.eu/" className="thm-btn thm-btn3 rounded-pill" >Trall Planerare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3} >
              <Grid item xs={6} sm={6} >
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="smart-vs-traditionell" className="thm-btn thm-btn3 rounded-pill" >Smart vs Traditionell</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="http://fenceplanner.greenplank.eu/" className="thm-btn thm-btn3 rounded-pill" >Staket Planerare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="ihalig-vs-massiv" className="thm-btn thm-btn3 rounded-pill" >Ihålig vs Massiv</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="hitta-hantverkare" className="thm-btn thm-btn3 rounded-pill" >Hitta Hantverkare</a>
              </Grid>

            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="galleri" className="thm-btn thm-btn3 rounded-pill" >Inspiration</a>
              </Grid>
              <Grid item xs={6} sm={6}>
                <a style={{ margin: ".4em", justifyContent: "center", display: "flex" }} href="aterfarsaljare" className="thm-btn thm-btn3 rounded-pill">Återförsäljare</a>
              </Grid>

            </Grid>
          </div>
        </section>
      </div>
      <div className="col-lg-9 p-0">
        <section className="main-slider main-slider__two">
          <Swiper {...mainSlideOptions}>
            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${banner1})` }}
              ></div>

              <Container>
                <Row className=" justify-content-start">
                  <Col xl={6} lg={12} className="text-left">

                    <img src={icon1} alt="icon1" />
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
                  <Col xl={6} lg={12} className="text-left">

                    <img src={icon2} alt="icon2" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon3} alt="icon3" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon4} alt="icon4" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon5} alt="icon5" />
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
                  <Col xl={6} lg={12} className="text-left">
                    <img src={icon6} alt="icon6" />
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            <div className="swiper-pagination" id="main-slider-pagination"></div>
          </Swiper>
        </section>
      </div>
      </Hidden>

    </div>

    
  );
};

export default MainSliderTwo;
