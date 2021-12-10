import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/staket_system/novofenceprivate.webp";
import proImage2 from "../../assets/images/products/staket_system/novofencetraditional.webp";
import proImage3 from "../../assets/images/products/staket_system/novofencemoder.webp";



const DATA = [
    
      {
        link: "/komposit-staket-private",
        image: proImage1,
        title: "NOVOFENCE™ Private™",
        text:
          "bra grannstaket med stil och styrka – PVC-fri!....."
      },
      {
        link: "/komposit-staket-traditional",
        image: proImage2,
        title: "NOVOFENCE™ Traditional™",
        text:
          "bra grannstaket med stil och styrka – PVC-fri!...."
      },
      {
        link: "/komposit-staket-modern",
        image: proImage3,
        title: "NOVOFENCE™ Modern™",
        text:
          "enkel design och estetisk look – använd.........."
      }
];

const staketSection = () => {
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

export default staketSection;
