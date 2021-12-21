import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BusinessandIT from "../../assets/images/BusinessandIT.png";
import PoliceBadge from "../../assets/images/police-badge.png";
import GovtLogo from "../../assets/images/govtlogo.png";


const AboutThree = () => {
  return (
    <section className="pt-80 pb-40">

      <Container>
        <Row>
          <Col lg={6}>
            <div className="block-title">
              <h2 style={{ marginBottom: "2px", paddingTop: '1em', color: '#035804' }}>
                <b>Tourism in Pakistan</b>
              </h2>
              <hr style={{ backgroundColor: "#035804", width: "60%", borderWidth: "3px", marginBottom: "34px", marginRight: '17em' }} />
              <h4 style={{ marginBottom: "16px", paddingTop: '.1em', color: '#035804' }}>
                <b>What others think</b>
              </h4>
              
              <h5 style={{ marginBottom: ".5em" }}>
              Pakistan is a place frequented by many travelers, bloggers, globe trotters and other individuals with a quest for discovery. There is a possibility that the experience that you are seeking has already been experienced and you could benefit from hearing the first hand narrativ...
              </h5><span><a href="#" style={{ color: 'black' }}>More</a> </span>
            </div>
          </Col>
          <Col lg={6}>
            {/* <img src={BusinessandIT} alt="BusinessandIT" className="img-fluid" /> */}

            <iframe width="560" height="315" src="https://www.youtube.com/embed/PHIuaXMkulE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>

        </Row>
      </Container>

    </section>
  );
};

export default AboutThree;
