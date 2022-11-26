import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

const countryObj = countries.getNames("en", { select: "official" });

const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <Row>
        {props.currentStep > 1 && (
          <Col>
            <Button onClick={handleBack}>Back</Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && (
            <Button onClick={handleNext}>Next</Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button onClick={handleFinish}>Finish</Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo1((info1) => ({
      ...info1,
      [targetName]: targetValue,
    }));
  };

  const validate = () => {
    if (!info1.title) setError("Title is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info1);
    }
  };

  return (
    <div>
      
      {/* <h1>This is step 1 content</h1> */}
      
      <FormGroup>
      <div className="row m-0">
        
        <div className="col-md-6">
          <span style={{ color: "red" }}>{error}</span>
          <TextField
            id="first-name"
            className="w-100"
            name="title"
            label="*Title (mandatory)"
            variant="standard"
            onChange={onInputChanged}
          />
        </div>
        <div className="col-md-6">
        <FormControl fullWidth variant="standard">
          <InputLabel id="category">*Category (mandatory)</InputLabel>
          <Select labelId="category" id="category" label="category">
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"Apartment"}>Apartment</MenuItem>
            <MenuItem value={"B & B"}>B & B</MenuItem>
            <MenuItem value={"Cabin"}>Cabin</MenuItem>
            <MenuItem value={"Condos"}>Condos</MenuItem>
            <MenuItem value={"Dorm"}>Dorm</MenuItem>
            <MenuItem value={"Host Family"}>Host Family</MenuItem>
            <MenuItem value={"House"}>House</MenuItem>
            <MenuItem value={"Studio"}>Studio</MenuItem>
            <MenuItem value={"Villa"}>Villa</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div className="col-md-6">
        <FormControl fullWidth>
          <InputLabel id="prop_action_category">
            *Listed In/Room Type (mandatory)
          </InputLabel>
          <Select
            labelId="prop_action_category"
            id="prop_action_category"
            label="prop_action_category"
          >
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"Entire home"}>Entire home</MenuItem>
            <MenuItem value={"Private room"}>Private room</MenuItem>
            <MenuItem value={"Shared room"}>Shared room</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div className="col-md-6">
        <FormControl fullWidth>
          <InputLabel id="guest_no">*Guest No (mandatory)</InputLabel>
          <Select labelId="guest_no" id="guest_no" label="guest_no">
            <MenuItem value={"0"}>0</MenuItem>
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
            <MenuItem value={"9"}>9</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
            <MenuItem value={"13"}>13</MenuItem>
            <MenuItem value={"14"}>14</MenuItem>
          </Select>
        </FormControl>
        </div>

        <div className="col-md-6">
        <TextField
          className="w-100"
          name="property_city_front"
          label="*City (mandatory)"
          placeholder="Type the city name"
          variant="standard"
          onChange={onInputChanged}
        />
        </div>
        <div className="col-md-6">
        <TextField
          className="w-100"
          name="property_city_front"
          label="District/Area"
          placeholder="Type the District/Area name"
          variant="standard"
          onChange={onInputChanged}
        />
        </div>

        <div className="col-md-6">
        <FormControl fullWidth>
          <InputLabel id="property_country">Country</InputLabel>
          <Select
            labelId="property_country"
            id="property_country"
            label="property_country"
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem value={value}>{label}</MenuItem>
              ))}
          </Select>
        </FormControl>
        </div>

        <div className="col-md-6">
        <FormControl fullWidth>
          <TextareaAutosize
            aria-label="property_description"
            minRows={3}
            placeholder="Describe your property"
            style={{ padding: "10px" }}
          />
        </FormControl>
        </div>

        <div className="col-md-6">
        <FormControl fullWidth>
          <InputLabel id="cancellation_policy">Cancellation Policy</InputLabel>
          <Select
            labelId="cancellation_policy"
            id="cancellation_policy"
            label="cancellation_policy"
          >
            <MenuItem value={"Strict"}>Strict</MenuItem>
            <MenuItem value={"Moderate"}>Moderate</MenuItem>
            <MenuItem value={"Flexible"}>Flexible</MenuItem>
          </Select>
        </FormControl>
        </div>

        {/* <Label>Name: </Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={onInputChanged}
        /> */}
        
        </div>
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");

  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue,
    }));
  };

  const validate2 = () => {
    if (!info2.age) setError("Age is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 2 content</h1>
      <FormGroup>
        <Label>
          Welcome <b>{props.user.title || ""}</b>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Age: </Label>
        <Input
          type="text"
          name="age"
          placeholder="Enter your age"
          onChange={onInputChanged}
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate2} />
    </div>
  );
};

const Three = (props) => {
  console.log("step3 receive user object");
  console.log(props.user);

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Summary user detail</h2>
      <p>Name: {props.user.name}</p>
      <p>Age: {props.user.age}</p>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done.");
  };

  return (
    <div>
      <div className="content-add-new-property">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Add New Property</h1>
            </div>
          </div>
          <div className="row ">
            <div className="col-12">
              <Stepper activeStep={activeStep}>
                {/* <Step label="Step 1" children={<MdDescription />} /> */}
                <Step label="Personal Detail" />
                <Step label="Confirmation" />
              </Stepper>
              {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
              <StepWizard
                className="bg-fff p-5 border"
                instance={assignStepWizard}
                onStepChange={handleStepChange}
              >
                <One userCallback={assignUser} />
                <Two user={user} userCallback={assignUser} />
                <Three user={user} completeCallback={handleComplete} />
              </StepWizard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
