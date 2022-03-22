import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";


import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_2fxp3gxwSYHQUoEcAfrAB");

const useStyles = makeStyles((theme) => ({
  background: {
    // backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  message: {
    border: `2px solid green`,
    marginTop: ".5em",
    borderRadius: ".3em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: "#28a745",
    "&:hover": {
      backgroundColor: "#28a745",
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const ContactFormOne = () => {
  function sendEmail(e) {
    debugger;
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wusj3uf",
        "template_r15fryb",
        e.target,
        "user_2fxp3gxwSYHQUoEcAfrAB"
      )
      .then(
        ((res) => {
          setLoading(false);
          setOpen(false);
          setName("");
          setEmail("");

          setMessage("");
          steAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: "#4BB543",
          });
        })((err) => {
          setLoading(false);
          steAlert({
            open: true,
            message: "Something went wrong,please try again!",
            backgroundColor: "#FF3232",
          });
        })
      );
    e.target.reset();
  }

  const classes = useStyles();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [selectAppointment, setSelectAppointment] = useState("");

  const handleChange = (event) => {
    setSelectAppointment(event.target.value);
  };

  const [selectedDate, handleDateChange] = useState(new Date());

  const [message, setMessage] = useState("");

  const [subject, setSubject] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, steAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      default:
        break;
    }
  };

  const buttonContents = (
    <React.Fragment>
      Submit
      {/* <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} /> */}
    </React.Fragment>
  );
  return (
    <section className="contact-page pb-80">
      <Container>
        <Row>
          <Col lg={8} style={{ paddingTop: "2em" }}>
            {/* <h3 className="pt-120 pb-50">
              <b>Book Your own Appointment</b>
            </h3> */}
            {/* <div class="alert alert-secondary mb-30" role="alert">
              <p>
                <b>
                  Import Note: Appointment will be consider in these timings
                </b>
                <br />
                Monday to Thursday: 09:00 to 12:00
                <br />
                Friday: 09:00 to 11:00
                <br />
              </p>
            </div> */}
            <form
              className="contact-form-validated contact-page__form form-one mb-40"
              onSubmit={sendEmail}
            >
              <div className="row row-10">
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Enter your Name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    variant="outlined"
                    helperText={emailHelper}
                    error={emailHelper.length !== 0}
                    name="email"
                    fullWidth
                    label="Enter your Email"
                    id="email"
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className="col-12 col-md-6 mb-20">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Appointment
                      </InputLabel>
                      <Select
                        labelId="appointment"
                        variant="outlined"
                        id="appointment"
                        name="appointment"
                        value={selectAppointment}
                        label="Select Appointment"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Passport"}>Passport</MenuItem>
                        <MenuItem value={"Attestation"}>Attestation</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className="col-12 col-md-6 mb-20">
                  <TextField
                    id="datetime-local"
                    variant="outlined"
                    label="Appointment"
                    type="datetime-local"
                    name="date-time"
                    defaultValue="2022-01-25T11:30"
                    fullWidth
                  />
                  

                </div>
                <div className="col-12 mb-20">
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Subject"
                    name="subject"
                    id="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                </div>
                <div className="col-12 mb-20">
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Type your Message"
                    name="message"
                    InputProps={{ disableUnderline: true }}
                    id="message"
                    multiline
                    rows={10}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>

                <div className="col-md-6 col-12 mb-20">
                  <Button
                    variant="contained"
                    className={classes.sendButton}
                    type="submit"
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0
                    }
                    onClick={() => setOpen(true)}
                  >
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
