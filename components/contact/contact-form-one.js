import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlockTitle from "../block-title";
import TextField from '@material-ui/core/TextField';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_kyJAJOu2h364lIZrXqPDC");


const useStyles = makeStyles(theme => ({
  background: {
    // backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em"
  },
  message: {
    border: `2px solid green`,
    marginTop: ".5em",
    borderRadius: ".3em"
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225
    }
  }
}))

const ContactFormOne = () => {
  function sendEmail(e) {
    debugger;
    e.preventDefault();

    emailjs.sendForm('service_k2a95b3', 'template_h7s4ask', e.target, 'user_kyJAJOu2h364lIZrXqPDC')
      .then((res => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
      
        setMessage("");
        steAlert({ open: true, message: "Message sent successfully", backgroundColor: "#4BB543" })
      })(err => {
        setLoading(false);
        steAlert({
          open: true,
          message: "Something went wrong,please try again!", backgroundColor: "#FF3232"
        })
      }));
    e.target.reset()
  }


  const classes = useStyles()

  const [name, setName] = useState('')


  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState("")


  const [message, setMessage] = useState('')

  const [subject, setSubject] = useState('')


  const [open, setOpen] = useState(false)

  const [loading, setLoading] = useState(false)

  const [alert, steAlert] = useState({ open: false, message: "", backgroundColor: "" })


  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
        if (!valid) {
          setEmailHelper("Invalid Email")
        }
        else {
          setEmailHelper("")
        }
        break;
     
      default:
        break;
    }
  }
  const buttonContents = (
    <React.Fragment>
      Skicka meddelande
      {/* <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} /> */}
    </React.Fragment>
  )
  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="contact-page__content mb-40">
              <BlockTitle
                title={`Skriv gärna till oss \n ett meddelande.`}
                tagLine="Kontakta oss"
              />
              <p className="block-text mb-30 pr-10">
                Han inspirerades av talet som hölls av en amerikansk professor om hållbara byggprodukter med träliknande egenskaper och utseende av en blandning av återvunnen plast och naturligt avfall som risskal, vetestrå, sågspån, bambuflis, kokosnötskal, sojabönor, jordnötsskal, bomullsstrå etc.{" "}
              </p>
              <div className="footer-social black-hover">

                <a href="https://www.facebook.com/GreenplankSweden" aria-label="facebook">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/greenplank/?hl=en" aria-label="instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com/greenplank" aria-label="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCxWdmtRk1tZ-lbHd0zpcQ6g" aria-label="youtube">
                  <i className="fab fa-youtube"></i>
                </a>

              </div>
            </div>
          </Col>
          <Col lg={7} style={{paddingTop: "2em" }}>
            <form className="contact-form-validated contact-page__form form-one mb-40"  onSubmit={sendEmail}>
              <div className="row row-10">

                <div className="col-md-6 col-12 mb-20">
                  <TextField variant="outlined" fullWidth label="Ange ditt namn" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField variant="outlined" helperText={emailHelper} error={emailHelper.length !== 0} name="email" fullWidth label="Ange din e-postadress" id="email" value={email} onChange={onChange} />
                </div>
                <div className="col-12 mb-20">
                  <TextField variant="outlined" fullWidth label="Subject" name="subject" id="subject" value={subject} onChange={(event) => setSubject(event.target.value)} />
                </div>
                <div className="col-12 mb-20">
                  <TextField variant="outlined" fullWidth label="Ange ditt meddelande " name="message" InputProps={{ disableUnderline: true }} id="message" multiline rows={10} value={message} onChange={(event) => setMessage(event.target.value)} />
                </div>

                <div className="col-md-6 col-12 mb-20">
                  <Button variant="contained"
                    className={classes.sendButton}
                    type="submit"
                    disabled={name.length === 0 || message.length === 0 || email.length === 0}
                    onClick={() => setOpen(true)}>
                    {/* {buttonContents} */}
                    {loading ? <CircularProgress size={30} /> : buttonContents}
                  </Button>
                </div>

              </div>
            </form>
            {/* <div className="result"></div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
