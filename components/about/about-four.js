import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Media1 from "../../assets/images/media1.png";
import Media2 from "../../assets/images/media2.png";
import Media3 from "../../assets/images/media3.png";
import PoliceBadge from "../../assets/images/police-badge.png";
import GovtLogo from "../../assets/images/govtlogo.png";


const AboutFour = () => {
  return (
    <section className="pt-80 pb-80">
      <Container>
        <Row>
          <Col lg={12}>
            <h2 style={{ marginBottom: "2px", paddingTop: '1em', color: '#035804' }}>
              <b>Embassy's Media Releases And Speeches</b>
            </h2>
            <hr style={{ backgroundColor: "#035804", width: "60%", borderWidth: "3px", marginBottom: "34px", marginRight: '28em' }} />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <img src={Media1} alt="Media1" className="img-fluid" />
            <Card style={{ borderRadius: "0px", backgroundColor: '#F8F8F8', paddingLeft: '20px',paddingBottom:'30px' }}>
              <CardContent >
            
                  <Typography variant="h5" component="h5">
                    <b style={{ color: '#035804' }}>Eid Milad-un-Nabi</b>
                  </Typography>
                  <p>October 11, 2021</p>
               
              </CardContent>

            </Card>
          </Col>
          <Col lg={4}>
            <img src={Media2} alt="Media1" className="img-fluid" />
            <Card style={{ borderRadius: "0px", backgroundColor: '#F8F8F8', paddingLeft: '20px',paddingBottom:'30px' }}>
              <CardContent >
             
                  <Typography variant="h5" component="h5">
                    <b style={{ color: '#035804' }}>Foreign Minister’s Portal</b>
                  </Typography>
                  <p>October 1, 2021</p>
                
              </CardContent>

            </Card>
          </Col>
          <Col lg={4}>
            <img src={Media3} alt="Media1" className="img-fluid" />
            <Card style={{ borderRadius: "0px", backgroundColor: '#F8F8F8', paddingLeft: '20px' }}>
              <CardContent >
             
                  <Typography variant="h5" component="h5">
                    <b style={{ color: '#035804' }}>Webinar on Roshan Digital
                      Account</b>
                  </Typography>
                  <p>September 17, 2021</p>
              </CardContent>

            </Card>
          </Col>
        </Row>
        <Row style={{justifyContent:'center',marginTop:'3em'}}>
          <a target="_blank" href="#" className="thm-btn">View More on Archives </a>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFour;
