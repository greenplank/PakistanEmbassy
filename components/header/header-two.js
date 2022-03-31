import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";
import { alpha, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Marquee from "react-double-marquee";
import Hidden from "@material-ui/core/Hidden";

import Clock from "react-live-clock";

import logo from "../../assets/images/logo.png";

import pkImage from "../../assets/images/pk.png";
import dkImage from "../../assets/images/dk.png";
import FinlandImage from "../../assets/images/finland-logo.png";
import { InvertColors } from "@material-ui/icons";

const HeaderTwo = () => {
  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded");
        e.preventDefault();
      });
    // search toggler
    let searchCloser = document.querySelectorAll(".search-toggler");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.toggle("active");
        e.preventDefault();
      });
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };

  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          {/* <p style={{ color: "white" }}>
            Opening Hours: Mon-Thur 09.00 – 12.00, Fri: 09.00-11.00{" "}
          </p> */}
          <div col={4}></div>
          <div col={4} className="main-header__social">
            <Row>
              <Col md={3}></Col>
              <Col md={3} xs={4}>
                <Row>
                  <Col md={4} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <img src={pkImage} alt="pkImage" width="40px" />
                      </div>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <p style={{ color: "white" }}>
                          {" "}
                          <Clock
                            format={"HH:mm"}
                            ticking={true}
                            timezone={"Asia/Karachi"}
                          />
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={3} xs={4}>
                <Row>
                  <Col md={4} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <img src={dkImage} alt="dkImage" width="40px" />
                      </div>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="ml-1 mt-20 mb-20">
                      <div className="text-center">
                        <p style={{ color: "white" }}>
                          {" "}
                          <Clock
                            format={"HH:mm"}
                            ticking={true}
                            timezone={"CET"}
                          />
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={3} xs={4}>
                <Row>
                  <Col md={4} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <img
                          src={FinlandImage}
                          alt="FinlandImage"
                          width="40px"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md={4} xs={6}>
                    <div className="ml-1 mt-20 mb-20">
                      <div className="text-center">
                        <p style={{ color: "white" }}>
                          {" "}
                          <Clock
                            format={"HH:mm"}
                            ticking={true}
                            timezone={"EET"}
                          />
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div col={4}>
            <div className="container">
              <div className="row">
                {/* <div className="col-2">
                  <i class="fas fa-search"></i>
                </div> */}
                <div className="col-2">
                  <a href="/contact-us">
                    <i class="fas fa-phone"></i>
                  </a>
                </div>
                <div className="col-8">
                  {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" /> */}
                  <i id="search-btn" class="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <Row>
            <Col md={4} xs={4}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logo} alt="logo" />
                  </a>
                </Link>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
            </Col>
            {/* <Hidden smDown mdDown>
            <Col
              md={3}
              xs={4}
              style={{ marginTop: "1em",direction:"right", width: "500px", whiteSpace: "nowrap" }}
            >
              <Marquee>Embassy of Pakistan to Sweden and Finland</Marquee>
            </Col>                                                                                                                                                                                                                                                                                                                                                                                                    
          
            <Col md={3} xs={4}>
              <form
                class="form-inline"
                style={{ marginLeft: "5em", marginTop: "1em" }}
              >
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  width="100px"
                />
              </form>
            </Col>
            </Hidden> */}
          </Row>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks />
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
