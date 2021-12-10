import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import brandImage1 from "../assets/images/resources/1.png";
import brandImage2 from "../assets/images/resources/2.png";
import brandImage3 from "../assets/images/resources/3.png";
import brandImage4 from "../assets/images/resources/4.png";
import brandImage5 from "../assets/images/resources/5.png";
import brandImage6 from "../assets/images/resources/6.png";
import brandImage7 from "../assets/images/resources/7.png";
import brandImage8 from "../assets/images/resources/8.png";

const BrandCarousel = ({ extraClass }) => {
  const brandCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div className={`client-carousel pt-120 pb-120  ${extraClass}`}>
      <Container>
        <Swiper {...brandCarouselOptions}>
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img src={brandImage1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage8} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default BrandCarousel;
