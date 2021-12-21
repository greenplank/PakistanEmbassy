import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import BusinessandIT from "../../assets/images/BusinessandIT.png";
import PoliceBadge from "../../assets/images/police-badge.png";
import GovtLogo from "../../assets/images/govtlogo.png";


const AboutTwo = () => {
  return (
    <section className="pt-80 pb-40">
      <Row>
        <Container>
          <Row>
            <Col lg={6} style={{ padding: '0px' }}>
              <img src={BusinessandIT} alt="BusinessandIT" className="img-fluid" />
            </Col>
            <Col lg={6} style={{ backgroundColor: '#035804' }}>
              <div className="block-title">
                <h2 style={{ marginBottom: "2px", paddingTop: '1em', color: 'white' }}>
                  <b>Business</b>
                </h2>
                <hr style={{ backgroundColor: "white", width: "50%", borderWidth: "3px", marginBottom: "34px", marginRight: '17em' }} />
                <h4 style={{ marginBottom: "16px", paddingTop: '.1em', color: 'white' }}>
                  Information Technology
                </h4>
                <Row>
                  <Col md={4}>
                  <button style={{margin:'2px 0px 24px 15px',padding:'4px 6px 4px 6px'}}>Trade</button>
                  </Col>
                  <Col md={7}>
                  <p style={{margin:'12px 0px 24px -80px',color:'white'}}><b>Investing in Pakistan</b></p>
                  </Col>
                  
                </Row>
                <h5 style={{ marginBottom: ".5em", color: 'white' }}>
                  Pakistan’s Tech industry is growing very fast over the last decade and is currently among the top 3 exporting industries. The growth is fueled by the young and tech savvy people who are creating opportunities for disruptors and entrepreneurs. Increasing local and foreign capita..
                </h5><span><a href="#" style={{ color: 'white' }}>More</a> </span>
                <a href="#"><b style={{ color: '#035804' }}>Read More</b></a>

              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </section>
  );
};

export default AboutTwo;
