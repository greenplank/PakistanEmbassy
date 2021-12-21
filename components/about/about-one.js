import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Ambassador from "../../assets/images/Ambassador.png";
import PoliceBadge from "../../assets/images/police-badge.png";
import GovtLogo from "../../assets/images/govtlogo.png";


const AboutOne = () => {
  return (
    <section className="pt-120 pb-40">
      <Container>
        <Row>
          <Col lg={3}>
            <img src={Ambassador} width="300px" alt="Ambassador" className="img-fluid" />
            <Card style={{ borderRadius: "0px", backgroundColor: '#F8F8F8' }}>
              <CardContent >
                <Row style={{justifyContent:'center'}}>
                  <img src={PoliceBadge} width="25px" alt="PoliceBadge" className="img-fluid" />
                  <Typography variant="p" component="h5">
                    <b style={{color:'#035804'}}>Since 1985</b>
                  </Typography>
                </Row>
              </CardContent>

            </Card>
          </Col>
          <Col lg={8}>
            <div className="block-title">
              <h3 style={{ marginBottom: ".5em" }}>
                Ambassador's Message
              </h3>
              <h5>
                Welcome to the new website of the Embassy of Pakistan in Denmark. Pakistan and Denmark have enjoyed cordial and friendly bilateral relations over the decades. There are several avenues for both countries to collaborate and strengthen our relations through economic cooperation, leveraging sectors like information
              </h5>
              <a href="#"><b style={{color:'#035804'}}>Read More</b></a>
              <img src={GovtLogo}  alt="GotvLogo" className="img-fluid" />
              <p className="pt-20"><b>Mr. Ahmad Farooq</b></p>
              <p>Ambassador</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;
