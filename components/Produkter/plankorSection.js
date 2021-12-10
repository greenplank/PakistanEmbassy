import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/plankor/KompositrallGP7129.webp";
import proImage2 from "../../assets/images/products/plankor/KompositrallGP7121.webp";
import proImage3 from "../../assets/images/products/plankor/KompositrallGP7241.webp";
import proImage4 from "../../assets/images/products/plankor/KompositrallGP729.webp";
import proImage5 from "../../assets/images/products/plankor/KompositrallGP7117.webp";
import proImage6 from "../../assets/images/products/plankor/KompositrallGP7118.webp";
import proImage7 from "../../assets/images/products/plankor/KompositrallGP7119.webp";
import proImage8 from "../../assets/images/products/plankor/KompositrallGP7120.webp";
import proImage9 from "../../assets/images/products/plankor/KompositrallGP7165.webp";






const DATA = [
      {
        link: "/naturplank-komposit-plank-gp7129-40140mm",
        image: proImage1,
        title: "NATURPLANK™ Kompositplank – GP7129 (40*140mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7121-24140mm",
        image: proImage2,
        title: "NATURPLANK™ Kompositplank – GP7121 (24*140mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturteak-kompositplank-gp7241-7236mm",
        image: proImage3,
        title: "NATURTEAK™ Kompositplank – GP7241 (7*236mm)",
        text:
          "det gröna alternativet för teakträ med oändliga ......."
      },
      {
        link: "/naturplank-bred-kompositplanka-gp729-20305mm",
        image: proImage4,
        title: "NATURPLANK™ Kompositplank – GP729 (20*305mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7117-1768mm",
        image: proImage5,
        title: "NATURPLANK™ Kompositplank – GP7117 (17*68mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7118-2749mm",
        image: proImage6,
        title: "NATURPLANK™ Kompositplank – GP7118 (27*49mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7119-4090mm",
        image: proImage7,
        title: "NATURPLANK™ Kompositplank – GP7119 (40*90mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7120-3472mm",
        image: proImage8,
        title: "NATURPLANK™ Kompositplank – GP7120 (34*72mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......."
      },
      {
        link: "/naturplank-kompositplank-gp7165-4070mm",
        image: proImage9,
        title: "NATURPLANK™ Kompositplank – GP7165 (40*70mm)",
        text:
          "hållbart träalternativ med oändliga kreativa och......"
      }
];

const plankorSection = () => {
  return (
    <section className="news-page pt-120 pb-120">
      {/* <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={12}>
            <BlockTitle
              title={`Populära artiklar inom GreenPlank & hållbart bygghandel`}
              tagLine="Blogginlägg"
            />
          </Col>
        </Row>
      </Container> */}
      <Container>
        <div className="news-3-col">
          {DATA.map(
            (
              { image, title, text, link},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                text={text}
                link={link}
              />
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default plankorSection;
