import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/golvplattor/instaclik.webp";
import proImage2 from "../../assets/images/products/golvplattor/evertile.webp";





const DATA = [
      {
        link: "/instaclik-balkongplattor-gp702t",
        image: proImage1,
        title: "INSTACLIK™ Balkongplattor-GP702T",
        text:
          "gör-det-själv betyder verkligen att du kan göra det ......"
      },
      {
        link: "/evertile-balkongplattor-et703t",
        image: proImage2,
        title: "EVERTILE™ Balkongplattor-ET703T",
        text:
          "Prisvärda kompositplattor som passar din stil och din ....."
      }
      
];

const GolvplattorSection = () => {
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

export default GolvplattorSection;
