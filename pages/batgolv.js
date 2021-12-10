import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import BatgolvSection from "../components/Produkter/BatgolvSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";


const batgolv = () => {
    return (
        <Layout pageTitle="Batgolv">
            <HeaderTwo />
            <PageHeader title="Batgolv" crumbTitle="Batgolv" />
            <StickyHeader />
            <BatgolvSection />
            <BrandCarousel />
            <Footer />
        </Layout>
    );
};

export default batgolv;
