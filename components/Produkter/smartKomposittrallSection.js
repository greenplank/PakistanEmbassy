import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";



const DATA = [
    {
        link: "/smart-komposittrall-smart-classic",
        image: proImage1,
        title: "Smart Classic™ Komposittrall",
        text:
          "SMART ™ (komposittrall) komposit trall är ett utmärkt val för....."
      },
      {
        link: "/smart-komposittrall-smart-regular",
        image: proImage2,
        title: "Smart Regular™ Komposittrall",
        text:
          "SMART ™ Komposit trall är ett utmärkt val för familjer på grund...."
      },
      {
        link: "/smart-komposittrall-smart-marine",
        image: proImage3,
        title: "Smart Marine™ Komposittrall",
        text:
          "SMART ™ Komposit trall är ett utmärkt val för familjer på.........."
      },
      {
        link: "/smart-komposittrall-smart-cap",
        image: proImage4,
        title: "SMART CAP™ Komposittrall",
        text:
          "SMART CAP™ är täckt med ett skyddande polymer skal och är vår......"
      },
      {
        link: "/ultra-smart",
        image: proImage5,
        title: "Ultra™ SMART Komposittrall",
        text:
          "Med vår nya Smart Ultra får du en terrass som är 50% lättare........"
      }
      
];

const smartKomposittrallSection = () => {
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

export default smartKomposittrallSection;
