import React from "react";
import Link from "next/link";
import Grid from '@material-ui/core/Grid';
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../assets/images/resources/Det_basta_for-_pooler.webp";
import image2 from "../../assets/images/resources/Bast_for_anvandning_runt_pooler.webp";
import image3 from "../../assets/images/resources/klarar_alla_klimater_och_vader.webp";
const SERVICE_TWO_DATA = [
  {
    extraClassName: "background-primary",
    image: image1,
    title: "Det Bästa för Pooler",
    link: "/bast-for-poolen"
  },
  {
    extraClassName: "background-secondary",
    image: image2,
    title: "Bäst för använding runt pooler",
    link: "/bast-for-utomhusbruk"
  },
  {
    extraClassName: "background-base",
    image: image3,
    title: "Klarar alla klimater och väder",
    link: "/alla-typer-av-vader"
  }
];
const ServiceTwo = () => {
  const sliderOptions = {
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 70
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 70
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 70
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 70
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 70
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 70
      }
    }
  };
  return (
    <section className="service-two">
          <Container>
            <Swiper {...sliderOptions}>
              {SERVICE_TWO_DATA.map(
                ({ extraClassName, image, title, link }, index) => (
                  <SwiperSlide key={`service-two-key-${index}`}>
                    <div
                      className={`service-two__box ${extraClassName}`}
                    >
                      <div className="service-two__box-inner">
                        <h3>
                          <Link href={link}>
                            <a>{title}</a>
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Container>
    </section>
  );
};

export default ServiceTwo;
