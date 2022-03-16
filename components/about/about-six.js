import React, { useState } from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    imageList: {
        width: 500,
        height: 450,
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






const AboutSix = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Head>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="YITXpszc"></script>
            </Head>
            <section className="about-two pt-50 pb-110 faq-one">

                <Container>
                    <Row>
                        <Col md={4} xs={3}>

                            <a
                                className="twitter-timeline"
                                data-height="400"
                                href="https://twitter.com/PakinSweden"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tweets by PakinSweden
                            </a>
                        </Col>
                        <Col md={4} xs={3}>
                        <div class="fb-page" data-href="https://www.facebook.com/PakinSweden" data-tabs="timeline" data-width="" data-height="400" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/PakinSweden" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/PakinSweden">Pakistan Embassy Sweden</a></blockquote></div>

                        </Col>
                        <Col md={4} xs={3}>
                            {/* <a
                                className="twitter-timeline"
                                data-height="400"
                                href="https://twitter.com/PakinSweden"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Tweets by PakinSweden
                            </a> */}

                        </Col>


                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutSix;
