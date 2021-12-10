import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/fasadpanel/fasadpanelGP798.webp";
import proImage2 from "../../assets/images/products/fasadpanel/primacapGP801.webp";
import proImage3 from "../../assets/images/products/fasadpanel/primacapGP802.webp";
import proImage4 from "../../assets/images/products/fasadpanel/fasadpaneltillbehör.webp";






const DATA = [
      {
        link: "/novoclad-fasadpanel-gp798",
        image: proImage1,
        title: "NOVOCLAD™ Fasadpanel GP798",
        text:
          "Innovativt fasadbeklädnadssystem för ditt hem – PVC-fri........"
      },
      {
        link: "/primacap-fasadpanel-gp801",
        image: proImage2,
        title: "PRIMACAP™ Fasadpanel GP801",
        text:
          "Det är innovationen bakom skönheten med utmärkt .............."
      },
      {
        link: "/primacap-fasadpanel-gp802",
        image:proImage3,
        title: "PRIMACAP™ Fasadpanel GP802",
        text:
          "Det är innovationen bakom skönheten med utmärkt ............."
      },
      {
        link: "/fasadpanel-tillbehor",
        image: proImage4,
        title: "Fasadpanel tillbehör",
        text:
          "Efterbehandlingen med design och säkerhet som gör ditt hem ......"
      }

];

const fasadpanelSection = () => {
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

export default fasadpanelSection;
