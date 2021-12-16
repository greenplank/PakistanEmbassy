import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles'
// import airplane from '../assets/send.svg'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from "@material-ui/core/Checkbox";
import { Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

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

export default function ContactFormTwo() {

  function sendEmail(e) {
    debugger;
    e.preventDefault();

    emailjs.sendForm('service_k2a95b3', 'template_39rxzhi', e.target, 'user_kyJAJOu2h364lIZrXqPDC')
      .then((res => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
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

  const [selected, setSelected] = React.useState("");

  const [colorselected, setColorselected] = React.useState("");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };

  const changeSelectOption = (event) => {
    setColorselected(event.target.value);
  };

  const classes = useStyles()

  const [name, setName] = useState('')

  const [lastname, setLastName] = useState('')

  const [product, setProduct] = useState('')

  const [adress, setAdress] = useState('')
  const [adressHelper, setAdressHelper] = useState("")

  const [postnumber, setPostnumber] = useState('')
  const [postnumberHelper, setPostnumberHelper] = useState("")

  const [country, setCountry] = useState('')

  const [city, setCity] = useState('')

  const [subject, setSubject] = useState('')


  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState("")

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState("")

  const [message, setMessage] = useState('')


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
      case "phone":
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
        if (!valid) {
          setPhoneHelper("Invalid Phone")
        }
        else {
          setPhoneHelper("")
        }
        break;
      default:
        break;
    }
  }
  const buttonContents = (
    <React.Fragment>
      SKICKA IN
      {/* <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} /> */}
    </React.Fragment>
  )

  const SmartClassic = [
    "Cloudy Grey",
    "American Walnut",
    "Antique Oak",
    "Sandy Oak"
  ];
  const SmartRegular = [
    "Beach Grey",
    "Chocolate"
  ];
  const SmartMarine = [
    "Teak",
    "Beach Grey"
  ];
  const SmartCap = [
    "Baltic Brown"
  ];
  const Marine60 = [
    "Ipé",
    "Stone Grey"
  ];
  const Marine40 = [
    "Beach Grey",
    "Charcoal",
    "Chocolate",
    "Brazilian Oak",
    "Teak"
  ];
  const MarineJumbo = [
    "Cherry Red",
    "Beach Grey",
    "Teak"
  ];
  const MarineCap = [
    "Baltic Grey",
    "Brown"
  ];
  const MarineArt = [
    "Rustic Grey",
    "Rustic Grey"
  ];
  const Classic = [
    "Grey",
    "Charcoal",
    "Chocolate",
    "Teak"
  ];
  const EVERDECK = [
    "Beach Grey",
    "Charcoal"
  ];
  const PrimacapGp802 = [
    "Snow white",
    "Charcoal",
    "Beach Grey"
  ];
  const PrimacapGp801 = [
    "Charcoal"
  ];
  const NOVOCLADGP798 = [
    "Falu Red",
    "Beach Grey",
    "Charcoal"
  ];
  const NOVOCLADPrivate = [
    "Beach Grey",
    "Charcoal",
    "Walnut",
    "Ipé",
    "Stone Grey"
  ];
  const NOVOCLADTraditional = [
    "White Grey",
    "Beach Grey"
  ];
  const NOVOCLADModern = [
    "Beach Grey",
    "Charcoal"
  ];
  const NaturplankGP7129 = [
    "Charcoal",
    "Walnut"
  ];
  const NaturplankGP7121 = [
    "Grey",
    "White Grey",
    "Teak"
  ];
  const NaturplankGP7241 = [
    "Beach Grey"
  ];
  const NaturplankWideBoardGP729 = [
    "Charcoal"
  ];
  const NaturplankGP7117 = [
    "Walnut"
  ];
  const NaturplankGP7118 = [
    "Grey",
    "Charcoal",
    "Teak"
  ];
  const NaturplankGP7119 = [
    "Charcoal"
  ];
  const NaturplankGP7120 = [
    "Charcoal"
  ];
  const NaturplankGP7165 = [
    "Glossy Charcoal"
  ];
  const NaturplankGP709 = [
    "Charcoal"
  ];
  const NaturplankGP733 = [
    "Charcoal"
  ];
  const NaturplankGP734 = [
    "Charcoal"
  ];
  /** Type variable to store different array for different dropdown */
  let type = null;

  /** This will be used to create set of options that user will see */
  let options = null;
  /** Setting Type variable according to dropdown */
  if (selected === "Green Plank SMART™ Decking System – Smart Classic™") {
    type = SmartClassic;
  } else if (selected === "Green Plank SMART™ Decking System – Smart Regular™") {
    type = SmartRegular;
  } else if (selected === "Green Plank SMART™ Decking System – Smart Marine™") {
    type = SmartMarine;
  }
  else if (selected === "Green Plank SMART™ Decking System – Smart Plus™") {
    type = null;
  }
  else if (selected === "Green Plank SMART CAP™ Decking System") {
    type = SmartCap;
  }
  else if (selected === "Green Plank MARINE 60™ Decking") {
    type = Marine60;
  }
  else if (selected === "Green Plank ENTRA™ Decking") {
    type = null;
  }
  else if (selected === "Green Plank MARINE 40™ Decking") {
    type = Marine40;
  }
  else if (selected === "Green Plank MARINE JUMBO™ Heavy Duty Decking") {
    type = MarineJumbo;
  }
  else if (selected === "Green Plank MARINE CAP™ Decking") {
    type = MarineCap;
  }
  else if (selected === "Green Plank SAPPHIRE™ Decking") {
    type = null;
  }
  else if (selected === "Green Plank CLASSIC™ Decking") {
    type = Classic;
  }
  else if (selected === "Green Plank EVERDECK™ Decking") {
    type = EVERDECK;
  }
  else if (selected === "Green Plank MARINE ART™ Decking") {
    type = MarineArt;
  }
  else if (selected === "Green Plank PRIMACAP™ Facade Cladding – GP802") {
    type = PrimacapGp802;
  }
  else if (selected === "Green Plank PRIMACAP™ Facade Cladding – GP801") {
    type = PrimacapGp801;
  }
  else if (selected === "Green Plank NOVOCLAD™ Facade Cladding – GP798") {
    type = NOVOCLADGP798;
  }
  else if (selected === "Green Plank NOVOFENCE™ Private™") {
    type = NOVOCLADPrivate;
  }
  else if (selected === "Green Plank NOVOFENCE™ Traditional™") {
    type = NOVOCLADTraditional;
  }
  else if (selected === "Green Plank NOVOFENCE™ Modern™") {
    type = NOVOCLADModern;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7129 (40*140mm)") {
    type = NaturplankGP7129;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7121 (24*140mm)") {
    type = NaturplankGP7121;
  }
  else if (selected === "NATURTEAK™ Composite Plank – GP7241 (7*236mm)") {
    type = NaturplankGP7241;
  }
  else if (selected === "NATURPLANK™ Wide Board – GP729 (20*305mm)") {
    type = NaturplankWideBoardGP729;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7117 (17*68mm)") {
    type = NaturplankGP7117;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7118 (27*49mm)") {
    type = NaturplankGP7118;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7165 (40*70mm)") {
    type = NaturplankGP7119;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7119 (40*90mm)") {
    type = NaturplankGP7120;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP7120 (34*72mm)") {
    type = NaturplankGP7165;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP709 (10*80mm)") {
    type = NaturplankGP709;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP733 (10*130mm)") {
    type = NaturplankGP733;
  }
  else if (selected === "NATURPLANK™ Composite Plank – GP734 (10*230mm)") {
    type = NaturplankGP734;
  }


  /** If "Type" is null or undefined then options will be null,
   * otherwise it will create a options iterable based on our array
   */
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }

  return (
    <section className="contact-page pt-120 pb-80">
      <Container>
        <Row>
          <Col lg={12}>
            <form className="contact-form" onSubmit={sendEmail} >
              <div className="row row-10">

                <div>
                  <h3 className="mt-10">Företag och Byggare:
                  </h3>
                  <p className="mt-10 mb-40">Vänligen skicka oss ett Email på <a href="mailto:info@greenplank.se">info@greenplank.se</a> med er begäran på prover så löser vi det med er.
                  </p>
                </div>
                <div className="mb-40">
                  <h3 className="mt-10">Privatpersoner:
                  </h3>
                  <p className="mb-40">Skicka en betalning på 100 kr till följande Gankgiro – 5902-1543: För att beställa ett prov. (Priset på provbiten är gratis. detta är endast för att täcka fraktkostnaden.)
                  </p>
                </div>
                <div className="col-12 mb-20">
                  <select id='product' name='product' value={selected} onChange={changeSelectOptionHandler}>
                    <option>
                      välj produkter..........................................</option>
                    <option>Green Plank SMART™ Decking System – Smart Classic™</option>
                    <option>Green Plank SMART™ Decking System – Smart Regular™</option>
                    <option>Green Plank SMART™ Decking System – Smart Marine™</option>
                    <option>Green Plank SMART™ Decking System - Smart Plus™</option>
                    <option>Green Plank SMART CAP™ Decking System</option>
                    <option>Green Plank MARINE 60™ Decking</option>
                    <option>Green Plank ENTRA™ Decking</option>
                    <option>Green Plank MARINE 40™ Decking</option>
                    <option>Green Plank MARINE JUMBO™ Heavy Duty Decking</option>
                    <option>Green Plank MARINE CAP™ Decking</option>
                    <option>Green Plank MARINE ART™ Decking</option>
                    <option>Green Plank CLASSIC™ Decking</option>
                    <option>Green Plank SAPPHIRE™ Decking</option>
                    <option>Green Plank EVERDECK™ Decking</option>
                    <option>Green Plank PRIMACAP™ Facade Cladding – GP802</option>
                    <option>Green Plank PRIMACAP™ Facade Cladding – GP801</option>
                    <option>Green Plank NOVOCLAD™ Facade Cladding – GP798</option>
                    <option>Green Plank NOVOFENCE™ Private™</option>
                    <option>Green Plank NOVOFENCE™ Traditional™</option>
                    <option>Green Plank NOVOFENCE™ Modern™</option>
                    <option>NATURPLANK™ Composite Plank – GP7129 (40*140mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7121 (24*140mm)</option>
                    <option>NATURTEAK™ Composite Plank – GP7241 (7*236mm)</option>
                    <option>NATURPLANK™ Wide Board – GP729 (20*305mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7117 (17*68mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7118 (27*49mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7165 (40*70mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7119 (40*90mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP7120 (34*72mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP709 (10*80mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP733 (10*130mm)</option>
                    <option>NATURPLANK™ Composite Plank – GP734 (10*230mm)</option>
                  </select>
                </div>

                <div className="col-12 mb-20">

                  <select id='color' name='color' value={colorselected} fullWidth label="Color" onChange={changeSelectOption}>

                    {options}
                  </select>
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="name"
                    fullWidth
                    name="name"
                    label="FÖRNAMN"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    variant="filled"

                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="lastname"
                    fullWidth
                    name="lastname"
                    label="EFTERNAMN"
                    value={lastname}
                    onChange={(event) => setLastName(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="email"
                    fullWidth
                    name="email"
                    label="E-POSTADRESS"
                    helperText={emailHelper}
                    error={emailHelper.length !== 0}
                    value={email}
                    onChange={onChange}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="phone"
                    fullWidth
                    name="phone"
                    label="TELEFONNUMMER"
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    value={phone}
                    onChange={onChange}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="adress"
                    fullWidth
                    name="address"
                    label="Adress"
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    value={adress}
                    onChange={(event) => setAdress(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="postnumber"
                    fullWidth
                    name="postnumber"
                    label="Postnummer"
                    helperText={phoneHelper}
                    error={phoneHelper.length !== 0}
                    value={postnumber}
                    onChange={(event) => setPostnumber(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="country"
                    fullWidth
                    name="country"
                    controlId="formGridState"
                    label="Land"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <TextField
                    id="city"
                    fullWidth
                    name="city"
                    controlId="formGridCity"
                    label="Stad"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-12 mb-20">
                  <TextField
                    id="subject"
                    fullWidth
                    name="subject"
                    controlId="formGridCity"
                    label="Subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-12 mb-20">
                  <TextField
                    id="message"
                    fullWidth
                    name="message"
                    controlId="formGridCity"
                    label="Meddelande "
                    InputProps={{ disableUnderline: true }}
                    multiline rows={10}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    variant="filled"
                  />
                </div>
                <div className="col-12 mb-20">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        value="checkedI"
                        classes={{
                          root: classes.root,
                          checked: classes.checked,
                        }}
                      />
                    }
                    label="Jag godkänner villkoren"
                  />
                </div>
                <div className="col-12 mb-20">
                  <ReCAPTCHA
                    sitekey="6LeQSqcdAAAAAGysd35FQNq7e8_WPtj6QroHtXVY"
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-6 col-12 mb-20">
                  <Button variant="contained"
                    className={classes.sendButton}
                    type="submit"
                    disabled={name.length === 0 || message.length === 0 || email.length === 0 || phone.length === 0}
                    onClick={() => setOpen(true)}>
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
}