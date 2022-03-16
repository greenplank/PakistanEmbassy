import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const HomeSection2 = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <section className="about-two pt-50 pb-80 faq-one">
      <Container>
        <Row>
          <Col xl={12}>
            <Row>
              <Col md={3} xs={12} style={{ marginBottom: "2px" }}>
                <Card className={classes.root}>
                  <CardContent className="text-center">
                    <a href="/covid_info" target="_blank">
                      <Typography
                        variant="p"
                        style={{ paddingBottom: "1.2em", paddingRight: "7em" }}
                        component="h5"
                      >
                        COVID-19
                      </Typography>
                    </a>
                  </CardContent>
                </Card>
              </Col>
              <Col md={3} xs={12} style={{ marginBottom: "2px" }}>
                <Card className={classes.root}>
                  <CardContent className="text-center">
                    <a href="https://www.sbp.org.pk/rda/index.html" target="_blank">
                      <Typography variant="p" component="h5">
                        Roshan Digital Accounts For Overseas Pakistanis
                      </Typography>
                    </a>
                  </CardContent>
                </Card>
              </Col>
              <Col md={3} xs={12} style={{ marginBottom: "2px" }}>
                <Card className={classes.root}>
                  <CardContent className="text-center">
                    <a href="https://citizenportal.gov.pk/" target="_blank">
                    <Typography
                      variant="p"
                      style={{ paddingBottom: "1.2em" }}
                      component="h5"
                    >
                      Pakistan Citizen’s Portal
                    </Typography>
                    </a>
                  </CardContent>
                </Card>
              </Col>
              <Col md={3} xs={12} style={{ marginBottom: "2px" }}>
                <Card className={classes.root}>
                  <CardContent className="text-center">
                    <a href="\contact-us" target="_blank">
                    <Typography
                      variant="p"
                      style={{ paddingBottom: "1.2em" }}
                      component="h5"
                    >
                     Emergency Contact
                    </Typography>
                    </a>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection2;
