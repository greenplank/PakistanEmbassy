import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import Box from "@material-ui/core/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_2fxp3gxwSYHQUoEcAfrAB");

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
        (() => {
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
        })(() => {
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

  // async function handleOnSubmit(e){
  //   e.preventDefault();
  //   const formData={}
  //   Array.from(e.currentTarget.elements).forEach(field=>{
  //     if(!field.name) return;
  //     formData[field.name]=field.value;
  //   });
  //   fetch('/api/mail',{
  //     method:'post',
  //     body: JSON.stringify(formData)
  //   })
  //   console.log(formData)
  // }

  const [datetime, setDatetime] = useState(new Date());

  const disableWeekends = (date) => {
    return date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6;
  };

  const customDates = ["2022-04-18", "2022-04-25", "2022-04-28"];
  const disableCustomDt = (current) => {
    return !customDates.includes(current.format("YYYY-MM-DD"));
  };

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [selectAppointment, setSelectAppointment] = useState("");

  const handleChange = (event) => {
    setSelectAppointment(event.target.value);
  };

  const [message, setMessage] = useState("");

  const [subject, setSubject] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, steAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  //Change the Email
  const onChangeEmail = (event) => {
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

  const buttonContents = <React.Fragment>Submit</React.Fragment>;
  return (
    <section className="contact-page pb-80">
      <Container>
        <Row>
          <Col lg={8} style={{ paddingTop: "2em" }}>
            <form
              method="post"
              className="contact-form-validated contact-page__form form-one mb-40"
              onSubmit={sendEmail}
            >
              <div className="row">
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
                    onChange={onChangeEmail}
                  />
                </div>
                <div className="col-12 col-md-12 mb-20">
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
                <div className="col-12 col-md-12 mb-20">
                  {/* <TextField
                    id="datetime-local"
                    variant="outlined"
                    label="Appointment"
                    type="datetime-local"
                    name="date-time"
                    defaultValue="2022-01-25T11:30"
                    fullWidth
                  /> */}

                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      renderInput={(params) => <TextField {...params} />}
                      label="Appointment"
                      variant="outlined"
                      name="date-time"
                      fullWidth
                      // selected={value}
                      // onChange={date => setStartDate(date)}
                      // excludeDateIntervals={[{start: (new Date(), 5), end: (new Date(), 5) }]}
                      value={datetime}
                      onChange={setDatetime}
                      shouldDisableDate={disableWeekends}
                     
                      // shouldDisableDate={disableCustomDt}
                      minDate={new Date()}
                      minTime={new Date(0, 0, 0, 10)}
                      maxTime={new Date(0, 0, 0, 12, 10)}
                    />
                  </LocalizationProvider>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormOne;
