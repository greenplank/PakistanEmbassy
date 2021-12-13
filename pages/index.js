import React, { useEffect } from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import VideoCards from "../components/header/videoCard";
import StickyHeader from "../components/header/sticky-header";
import MainSliderTwo from "../components/slider/main-slider-2";
import VideoCard from "../components/videos/video-card";
import HemRelatedProducts from "../components/HemRelatedProducts";
import HemGallery from "../components/HemGallery";
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
      <meta name="robots" content="NOINDEX,NOFOLLOW"/>
        <meta name="title" content="Bästa komposittrall | golvplattor | staket och många fler!" />
        <meta name="description" content="Green Plank är det ledande svenska varumärket för hållbara byggprodukter i Sverige. Skandinavisk kvalitets Komposittrall, Fasadbeklädnad, Plankor, Staket." />
      </Head>
      <Layout pageTitle="Bästa komposittrall | golvplattor | staket och många fler!">
        <HeaderTwo />
        <StickyHeader extraClassName="stricky-header-two" />
        <MainSliderTwo />
        <VideoCards />
        <HemGallery />
        <HemRelatedProducts />
        <ServiceTwo />
        <VideoCard />
        <FeaturedCause />
        <HemLastSection />
        <BrandCarousel extraClass="client-carousel__has-border-top" />
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