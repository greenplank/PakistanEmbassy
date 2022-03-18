import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../components/block-title";
import BlogCard from "../components/blog-card";

import Virtualtexpo1 from "../assets/images/image-1.jpg";
import Virtualtexpo2 from "../assets/images/image-2.jpg";
import Virtualtexpo3 from "../assets/images/image-3.jpg";
import Virtualtexpo4 from "../assets/images/image-4.jpg";
import Virtualtexpo5 from "../assets/images/image-5.jpg";
import Virtualtexpo6 from "../assets/images/image-6.jpg";
import Virtualtexpo7 from "../assets/images/image-7.jpg";
import Virtualtexpo8 from "../assets/images/image-8.jpg";
import Virtualtexpo9 from "../assets/images/image-9.jpg";
import Virtualtexpo10 from "../assets/images/image-10.jpg";
import Virtualtexpo11 from "../assets/images/image-11.jpg";
import Virtualtexpo12 from "../assets/images/image-12.jpg";
import Virtualtexpo13 from "../assets/images/image-13.jpg";
import Virtualtexpo14 from "../assets/images/image-14.jpg";
import Virtualtexpo15 from "../assets/images/image-15.jpg";
import Virtualtexpo16 from "../assets/images/image-16.jpg";
import Virtualtexpo17 from "../assets/images/image-17.jpg";
import Virtualtexpo18 from "../assets/images/image-18.jpg";
import Virtualtexpo19 from "../assets/images/image-19.jpg";
import Virtualtexpo20 from "../assets/images/image-20.jpg";
import Virtualtexpo from "../assets/images/image.jpg";
import Covid from "../assets/images/image1.jpg";
import Nordic from "../assets/images/image2.jpg";
import Lithuanian from "../assets/images/image3.jpg";
import STOCKHOLM from "../assets/images/image5.jpg";




const BLOG_DATA = [
  {
    id:1,
    link: "/kashmir-day-webinar",
    image: Virtualtexpo9,
    date: '6th Feb, 2022',
    title: 'Kashmir Day Webinar ',
    text: 'The Embassy of Pakistan in Stockholm Sweden organized a special virtual event.................'
},
  {
    id:2,
    link: "/webinar-Import-procedures",
    image: Virtualtexpo19,
    date: '30th Dec 2021',
    title: 'A webinar on Import Procedures/Taxes/Exemptions',
    text: 'The Embassy of Pakistan in Sweden held a webinar on Import Procedures/Taxes....................'
},
  {
    id:3,
    link: "/urdu-language-teachers-webinar",
    image: Virtualtexpo18,
    date: '22nd Nov, 2021',
    title: 'Urdu Language Teachers webinar',
    text: 'On 22 November 2021, the Embassy of Pakistan organized the first meeting of.....................'
},
  {
    id:4,
    link: "/kashmir-black-day",
    image: Virtualtexpo12,
    date: '28th Oct, 2021',
    title: 'Kashmir Black Day',
    text: 'The Embassy of Pakistan in Stockholm organized a special event to mark ..........................'
},
  {
    id:5,
    link: "#",
    image: Virtualtexpo10,
    date: '26th Oct, 2021',
    title: 'Webinar on Business Opportunity in Leather products',
    text: ''
},
  {
    id:6,
    link: "/webinar-on-roshan-digital-account",
    image: Virtualtexpo20,
    date: '22nd Sep, 2021',
    title: 'Webinar on Roshan Digital Account',
    text: 'The Embassy of Pakistan in Sweden, Denmark, Norway and State Bank of Pakistan........................'
},
  {
    id:7,
    link: "/independence-day-celebration",
    image: Virtualtexpo11,
    date: '14th Aug, 2021',
    title: 'Independence Day Celebration ',
    text: 'The 75th Independence Day of Pakistan was celebrated on 14 August 2021 ..............................'
},
  {
    id:8,
    link: "/webinar-kashmir-youm-e-Istehsal",
    image: Virtualtexpo9,
    date: '5th Aug 2021',
    title: 'Webinar on Kashmir Youm-e-Istehsal',
    text: 'Embassy of Pakistan to Sweden and Finland and Kashmir Committee Sweden Organized ....................'
},
  {
    id:9,
    link: "/ambassador-hosted-sound-quest-pakistan-house",
    image: Virtualtexpo15,
    date: '26th May, 2021',
    title: 'Ambassador hosted Sound Quest at Pakistan House',
    text: 'Ambassador of Pakistan to Stockholm Mr. Zahoor Ahmed hosted Sound Quest ...........................'
},
  {
    id:10,
    link: "#",
    image: Virtualtexpo8,
    date: '28th April, 2021',
    title: 'Virtual Road Show on Special Economic zones of Pakistan Under CPEC',
    text: ''
},
  {
    id:11,
    link: "/national-day-celebration",
    image: Virtualtexpo3,
    date: '23rd March, 2021',
    title: 'National Day Celebration',
    text: 'Pakistan National Day was celebrated on 23rd March 2021 at the Pakistan.................................'
},
  {
    id:12,
    link: "/virtual-textile-exhibition",
    image: Virtualtexpo,
    date: 'FEBRUARY 1-5,2021',
    title: 'Virtual Textile Exhibition',
    text: 'TDAP 1st International Virtual Textile Exhibition is scheduled to be held from.................'
},
{
    id:13,
    link: "/nordic-pakistan-it-summit",
    image: Nordic,
    date: '14-16 Nov, 2017',
    title: 'Nordic Pakistan IT summit',
    text: 'Embassy of Pakistan together with Pakistan Sweden Business Council (PSBC)................'
},
{
    id:14,
    link: "/swedish-lithuanian-delegation-attended-expo-pakistan",
    image: Lithuanian,
    date: 'May 20th',
    title: 'Swedish & Lithuanian delegation EXPO in Pakistan',
    text: 'Embassy of Pakistan brought Swedish & Lithuanian delegation consisting....................',
},
{
    id:15,
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
