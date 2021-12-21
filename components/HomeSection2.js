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




const HomeSection2 = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <section className="about-two pt-50 pb-110 faq-one">

            <Container>
                <Row>
                    <Col xl={12}>
                        <Row>
                            <Col md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardContent >

                                        <Typography variant="p" style={{paddingBottom:'1.2em'}} component="h5">
                                            COVID-19
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </Col>
                            <Col md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardContent >

                                        <Typography variant="p" component="h5">
                                            Roshan Digital Accounts For
                                            Overseas Pakistanis
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </Col>
                            <Col md={4} xs={12}>
                                <Card className={classes.root}>
                                    <CardContent >

                                        <Typography variant="p" style={{paddingBottom:'1.2em'}} component="h5">
                                        Pakistan Citizen’s Portal
                                        </Typography>

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
