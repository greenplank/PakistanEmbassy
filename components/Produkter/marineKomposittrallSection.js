import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage6 from "../../assets/images/products/komposittrall/marinecap.webp";
import proImage7 from "../../assets/images/products/komposittrall/marine40.webp";
import proImage8 from "../../assets/images/products/komposittrall/marine60.webp";
import proImage9 from "../../assets/images/products/komposittrall/marinejumbo.webp";
import proImage10 from "../../assets/images/products/komposittrall/marineart.webp";






const DATA = [
   
      {
        link: "/marine-cap-komposittrall",
        image: proImage6,
        title: "MARINE CAP™ Komposittrall",
        text:
          "MARINE CAP™ inkapslade komposittrall står ovanför konkurrensen...."
      },
      {
        link: "/marine-40-komposittrall",
        image: proImage7,
        title: "MARINE 40™ Komposittrall",
        text:
          "MARINE 40™ komposittrall gör skönheten praktiskt – PVC-fri......"
      },
      {
        link: "/marine-60-komposittrall",
        image: proImage8,
        title: "MARINE 60™ Komposittrall",
        text:
          "Inspirerad av naturen och designad för friluftsliv hittar........"
      },
      {
        link: "/marine-jumbo-komposittrall",
        image: proImage9,
        title: "MARINE JUMBO™ Komposittrall",
        text:
          "Green Plank MARINE JUMBO ™ är inspirerad av naturens styrka........"
      },
        {
          link: "/marine-art-komposittrall",
          image: proImage10,
          title: "MARINE ART™ Komposittrall",
          text:
            "MARINE ART™ komposittrall av naturfiber erbjuder 3D-utseende........"
        }
];

const marineKomposittrallSection = () => {
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

export default marineKomposittrallSection;
