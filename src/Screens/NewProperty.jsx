import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
// import { MdDescription } from "react- icons/md";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import ProfileLayout from "../Layout/ProfileLayout";

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
      [targetName]: targetValue
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
      <span style={{ color: "red" }}>{error}</span>
      <h1>This is step 1 content</h1>
      <FormGroup>
      <TextField id="first-name" className='w-100' name="title" label="Title" variant="standard" onChange={onInputChanged} />
<FormControl fullWidth>
  <InputLabel id="category">Category</InputLabel>
  <Select
    labelId="category"
    id="category"
    label="category"
  >
    <MenuItem value={'none'}>None</MenuItem>
    <MenuItem value={'Apartment'}>Apartment</MenuItem>
    <MenuItem value={'B & B'}>B & B</MenuItem>
    <MenuItem value={'Cabin'}>Cabin</MenuItem>
    <MenuItem value={'Condos'}>Condos</MenuItem>
    <MenuItem value={'Dorm'}>Dorm</MenuItem>
    <MenuItem value={'Host Family'}>Host Family</MenuItem>
    <MenuItem value={'House'}>House</MenuItem>
    <MenuItem value={'Studio'}>Studio</MenuItem>
    <MenuItem value={'Villa'}>Villa</MenuItem>    
  </Select>
</FormControl>
      <TextField className='w-100' name="title" label="Title" variant="standard" onChange={onInputChanged} />
      
        {/* <Label>Name: </Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          onChange={onInputChanged}
        /> */}
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
      [targetName]: targetValue
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

const NewProperty = () => {
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
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  return (
    <ProfileLayout>
      <div className='content-add-new-property'>
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>Add New Property</h1>
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
      <Stepper activeStep={activeStep}>
        {/* <Step label="Step 1" children={<MdDescription />} /> */}
        <Step label="Personal Detail" />
        <Step label="Confirmation" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
      </div>
    </div>
    </div>
    </div>
    </ProfileLayout>
  );
};

export default NewProperty;
