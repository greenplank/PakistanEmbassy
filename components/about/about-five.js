import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});




const AboutFive = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <section className="about-two pt-50 pb-110 faq-one">

            <Container>
                <Row className="footer-social">
                    <Col md={3} xs={12}>


                    </Col>
                    <Col md={1} xs={12}>
                        <a href="#" aria-label="facebook">
                            <i className="fab fa-facebook"></i>
                        </a>

                    </Col>
                    <Col md={1} xs={12}>
                        <a href="#" aria-label="instagram">
                            <i className="fab fa-instagram"></i>
                        </a>

                    </Col>
                    <Col md={1} xs={12}>
                        <a href="#" aria-label="twitter">
                            <i className="fab fa-twitter"></i>
                        </a>

                    </Col>
                    <Col md={1} xs={12}>
                        <a href="#" aria-label="youtube">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </Col>
                    <Col md={1} xs={12}>
                        <a href="#" aria-label="linkedin">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </Col>
                    <Col md={3} xs={12}>
                        
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default AboutFive;
