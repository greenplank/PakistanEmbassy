import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import VideoCards from "../components/header/videoCard";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import AboutOne from "../components/about/about-one";
import AboutTwo from "../components/about/about-two";
import AboutThree from "../components/about/about-three";
import AboutFour from "../components/about/about-four";
import AboutFive from "../components/about/about-five";
import VideoCard from "../components/videos/video-card";
import HemRelatedProducts from "../components/HemRelatedProducts";
import HomeSection2 from "../components/HomeSection2";
import FeaturedCause from "../components/featured-cause";
import ServiceTwo from "../components/services/service-two";
import HemLastSection from "../components/HemLastSection";
import BrandCarousel from "../components/brand-carousel";
import Head from "next/head";

import Footer from "../components/footer";

const HomeTwo = () => {
  console.log(process.env.authAPIkey);
  return (
    <>
      <Head>
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="title" content="Embassy of Pakistan" />
        <meta name="description" content="Embassy of Pakistan" />
      </Head>
      <Layout pageTitle="Embassy of Pakistan">
        <HeaderTwo />
        <StickyHeader extraClassName="stricky-header-two" />
        <MainSliderTwo />
        <HomeSection2 />
        <AboutOne />
        <AboutTwo/>
        <AboutThree/>
        <AboutFour/>
        <AboutFive/>
        <Footer />
      </Layout>
    </>
  );
};

export default HomeTwo;


// export async function  getServerSideProps(){

//   console.log(process.env.authAPIkey);

//   return{
//     props:{
//       hello:'world'
//     }
//   }
// }