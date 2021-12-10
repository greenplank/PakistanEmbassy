import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import BlogCard from "../blog/blog-card";

import proImage1 from "../../assets/images/products/komposittrall/smartclassic.webp";
import proImage2 from "../../assets/images/products/komposittrall/smartregular.webp";
import proImage3 from "../../assets/images/products/komposittrall/smartmarine.webp";
import proImage4 from "../../assets/images/products/komposittrall/smartcap.webp";
import proImage5 from "../../assets/images/products/komposittrall/ultrasmart.webp";
import proImage6 from "../../assets/images/products/komposittrall/marinecap.webp";
import proImage7 from "../../assets/images/products/komposittrall/marine40.webp";
import proImage8 from "../../assets/images/products/komposittrall/marine60.webp";
import proImage9 from "../../assets/images/products/komposittrall/marinejumbo.webp";
import proImage10 from "../../assets/images/products/komposittrall/marineart.webp";
import proImage11 from "../../assets/images/products/komposittrall/entra.png";
import proImage12 from "../../assets/images/products/komposittrall/classic.webp";
import proImage13 from "../../assets/images/products/komposittrall/everdeck.webp";
import proImage14 from "../../assets/images/products/komposittrall/sapphires.webp";
import proImage15 from "../../assets/images/products/komposittrall/komposittillbehör.webp";





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
      },
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
        },
      {
        link: "/entra-komposittrall",
        image: proImage11,
        title: "Entra™ Komposittrall",
        text:
          "Inspirerad av naturen och designad med ett syfte … färg ............"
      },
      {
        link: "/classic-teak-komposittrall",
        image: proImage12,
        title: "CLASSIC™ Teak Komposittrall",
        text:
          "Inspirerad av den skandinaviska designtraditionen som .............."
      },
      {
        link: "/everdeck-komposittrall",
        image:proImage13,
        title: "EVERDECK™ Komposittrall",
        text:
          "Inspirerad av den skandinaviska designtraditionen som..............."
      },
      {
        link: "/sapphire-komposittrall",
        image: proImage14,
        title: "SAPPHIRE™ Komposittrall",
        text:
          "Inspirerad av det traditionella trädäcket som kännetecknas .........."
      },
      {
        link: "/tillbehor-till-komposittrall",
        image: proImage15,
        title: "Tillbehör till Komposittrall",
        text:
          "sista handen med design och säkerhet som gör ditt trall.............."
      }
];

const komposittrallSection = () => {
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

export default komposittrallSection;
