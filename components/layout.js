import React, { useEffect } from "react";
import Head from "next/head";
import MobileNav from "./mobile-nav";
import SearchPopup from "./search-popup";

import AppleTouch from "../assets/images/favicons/180-by-180.png";
import Fevicon32 from "../assets/images/favicons/32-by-32.png";
import Fevicon16 from "../assets/images/favicons/16-by-16.png";

const Layout = ({ pageTitle, children }) => {
  const handleRadius = () => {
    const dynamicRadius = document.querySelectorAll(".dynamic-radius");
    dynamicRadius.forEach(function (btn) {
      let btnHeight = btn.offsetHeight;
      btn.style.borderBottomLeftRadius = btnHeight / 2 + "px";
      btn.style.borderTopLeftRadius = btnHeight / 2 + "px";
    });
  };

  useEffect(() => {
    handleRadius();
    return () => {
      handleRadius();
    };
  });
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400"
          rel="stylesheet"
        />
      </Head>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      <MobileNav />
      {/* <SearchPopup /> */}
    </div>
  );
};

export default Layout;
