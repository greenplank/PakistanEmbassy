import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../components/block-title";
import BlogCard from "../components/blog-card";

import Virtualtexpo from "../assets/images/image.jpg";
import Covid from "../assets/images/image1.jpg";
import Nordic from "../assets/images/image2.jpg";
import Lithuanian from "../assets/images/image3.jpg";
import STOCKHOLM from "../assets/images/image5.jpg";




const BLOG_DATA = [
  {
    id:1,
    link: "/virtual-textile-exhibition",
    image: Virtualtexpo,
    date: 'FEBRUARY 1-5,2021',
    title: 'Virtual Textile Exhibition',
    text: 'TDAP 1st International Virtual Textile Exhibition is scheduled to be held from.................'
},
{
    id:3,
    link: "/nordic-pakistan-it-summit",
    image: Nordic,
    date: '14-16 Nov, 2017',
    title: 'Nordic Pakistan IT summit',
    text: 'Embassy of Pakistan together with Pakistan Sweden Business Council (PSBC)................'
},
{
    id:4,
    link: "/swedish-lithuanian-delegation-attended-expo-pakistan",
    image: Lithuanian,
    date: 'May 20th',
    title: 'Swedish & Lithuanian delegation EXPO in Pakistan',
    text: 'Embassy of Pakistan brought Swedish & Lithuanian delegation consisting....................',
},
{
    id:5,
    link: "/exhibition-source-pakistan-in-stockholm",
    image: STOCKHOLM,
    date: 'May 24th',
    title: 'EXHIBITION SOURCE PAKISTAN IN STOCKHOLM',
    text: 'Embassy of Pakistan in Sweden together with Pakistan Sweden Business Council.............'
}
];

const BlogPage = () => {
  return (
    <section className="news-page pt-50 pb-120">
      <Container>
        <Row className="align-items-start align-items-md-center flex-column flex-md-row mb-60">
          <Col lg={12}>
            <BlockTitle
              title={`Media Events`}
              tagLine="Event Blogs"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="news-3-col">
          {BLOG_DATA.map(
            (
              { image, title, date, text, link},
              index
            ) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                date={date}
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

export default BlogPage;
