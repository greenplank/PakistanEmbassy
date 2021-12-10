import React from "react";
import Layout from "../components/layout";
import HeaderTwo from "../components/header/header-two";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import EntraTrallSection from "../components/Produkter/entraTrallSection";
import BrandCarousel from "../components/brand-carousel";
import Footer from "../components/footer";
import Head from "next/head";

const Entratrall = () => {
    return (
        <>
            <Head>
                <title>ENTRA Trall</title>
                <meta name="title" content="ENTRA Trall - GreenPlank.se" />
                <meta name="description" content="ENTRA ™ solid komposittrall inspirerad av naturliga färger, struktur, skönhet och prestanda. Kompositvagn med tunga och spår." />
            </Head>
            <Layout pageTitle="Entra trall">
                <HeaderTwo />
                <PageHeader title="Entra trall" crumbTitle="Entratrall" />
                <StickyHeader />
                <EntraTrallSection />
                <BrandCarousel />
                <Footer />
            </Layout>
        </>);
};

export default Entratrall;
