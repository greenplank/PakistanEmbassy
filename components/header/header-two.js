import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import logoDark from "../../assets/images/logo.png";

import pkImage from "../../assets/images/pk.png";
import dkImage from "../../assets/images/dk.png";

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
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
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
          <p style={{ color: "white" }}>Office Hours:    Mon-Thu:  09:00 hrs to 12:00 hrs</p>
          <div className="main-header__social">
            <Row>
              <Col>
                <Row>
                  <Col md={3} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="mr-5 text-center">
                        <img src={pkImage} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col md={3} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <p style={{ color: "white" }}>12:02pm</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col md={3} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="mr-5 text-center">
                        <img src={dkImage} alt="" />
                      </div>
                    </div>
                  </Col>
                  <Col md={3} xs={6}>
                    <div className="mt-20 mb-20">
                      <div className="text-center">
                        <p style={{ color: "white" }}>09:02pm</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} alt="" />
              </a>
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="header-info">
            {/* <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@greenplank.se">info@greenplank.se</a>
                </p>
              </div>
            </div> */}
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+46 40 450 560">+0080 123456</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i class="far fa-user"></i>
              <div className="header-info__box-content">
                <Container>
                  <Row>
                    <Col md={3} xs={6}>
                      <div className="mt-20 mb-20">
                        <div className="mr-5 text-center">
                        <a href="#"><b style={{color:"black"}}>LOGIN|</b></a>
                        </div>
                      </div>
                    </Col>
                    <Col md={3} xs={6}>
                      <div className="mt-20 mb-20">
                        <div className="text-center">
                        <a href="#"><b style={{color:"black"}}>REGISTER</b></a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
                
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks />
          {/* <Link href="/bestall-prov">
            <a className="thm-btn rounded-pill">Beställ prov</a>
          </Link> */}
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
