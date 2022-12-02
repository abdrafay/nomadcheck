import {
  Checkbox,
  FormControl,
  FormControlLabel,
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
import { CheckBox } from "@mui/icons-material";

countries.registerLocale(enLocale);

const countryObj = countries.getNames("en", { select: "official" });

const countryArr = Object.entries(countryObj).map(([key, value]) => {
  return {
    label: value,
    value: key,
  };
});

// const ActionButtons = (props) => {
//   const handleBack = () => {
//     props.previousStep();
//   };

//   const handleNext = () => {
//     props.nextStep();
//   };

//   const handleFinish = () => {
//     props.lastStep();
//   };

//   return (
//     <div>
//       <Row>
//         {props.currentStep > 1 && (
//           <Col>
//             <Button onClick={handleBack}>Back</Button>
//           </Col>
//         )}
//         <Col>
//           {props.currentStep < props.totalSteps && (
//             <Button onClick={handleNext}>Next</Button>
//           )}
//           {props.currentStep === props.totalSteps && (
//             <Button onClick={handleFinish}>Finish</Button>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// };

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
        
        <div className="col-md-12">
          <span style={{ color: "red" }}>{error}</span>
          <TextField
            id="first-name"
            className="w-100"
            name="title"
            label="*Title (mandatory)"
            placeholder="Enter full title here"
            variant="outlined"
            onChange={onInputChanged}
          />
        </div>
        <div className="col-md-4">
        <FormControl fullWidth variant="outlined">
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

        <div className="col-md-4">
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

        <div className="col-md-4">
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

        <div className="col-md-4">
        <TextField
          className="w-100"
          name="property_city_front"
          label="*City (mandatory)"
          placeholder="Type the city name"
          variant="outlined"
          onChange={onInputChanged}
        />
        </div>
        <div className="col-md-4">
        <TextField
          className="w-100"
          name="property_city_front"
          label="District/Area"
          placeholder="Type the District/Area name"
          variant="outlined"
          onChange={onInputChanged}
        />
        </div>

        <div className="col-md-4">
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
          <TextareaAutosize
            aria-label="property_description"
            minRows={3}
            placeholder="Describe your property"
            style={{ padding: "10px" }}
          />
        </FormControl>
        </div>

        <div className="col-md-12">
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



      {/* <FormControlLabel control={<CheckBox />} label="Label" /> */}
       {/* <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        /> */}
        {/* <FormControlLabel control={<CheckBox />} label="Allow instant booking? If checked, you will not have the option to reject a booking request." /> */}
        Allow instant booking? If checked, you will not have the option to reject a booking request.
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
      {/* <ActionButtons {...props} nextStep={validate} /> */}
    </div>
  );
};

const Two = (props) => {
  const [info2, setInfo2] = useState({});
  const [error, setError] = useState("");


  const [inputList, setInputList] = useState([{ exName: "", exValue: "", exsinglefee: "" }]);
// handle input change
const handleInputChange = (e, index) => {
  const { name, value } = e.target;
  const list = [...inputList];
  list[index][name] = value;
  setInputList(list);
};

// handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...inputList];
  list.splice(index, 1);
  setInputList(list);
};

// handle click event of the Add button
const handleAddClick = () => {
  setInputList([...inputList, { exName: "", exValue: "", exsinglefee: "" }]);
};




  const onInputChanged = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    setInfo2((info2) => ({
      ...info2,
      [targetName]: targetValue
    }));
  };

  const validate2 = () => {
    // if (!info2.age) setError("Age is mandatory field");
    // else {
      setError("");
      props.nextStep();
      props.userCallback(info2);
    // }
  };
  

  return (
    <div className="row">
      <span style={{ color: "red" }}>{error}</span>
      {/* <h1>This is step 2 content</h1> */}
      {/* <FormGroup>
        <Label>
          Welcome <b>{props.user.title || ""}</b>
        </Label>
      </FormGroup> */}
      {/* <FormGroup>
        <Label>Price per month in USD<br></br><span>(Monthly price, only numbers)</span> </Label>
        <TextField className='w-100' name="property_city_front" label="Price per month in" variant="outlined" />
      </FormGroup> */}

<div className="col-md-6">
<InputLabel id="p-per-m"><b>Price per month in USD</b> (Monthly price, only numbers)</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="p-per-m"  placeholder="320" variant="outlined" onChange={onInputChanged} />
</FormControl>
</div>


<div className="col-md-6">
<InputLabel id="tax-in-percent"><b>Taxes in %</b> (taxes are considered included in the monthly price)</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="tax-in-percent"  placeholder="0" variant="outlined" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="cleaning-fee">Cleaning Fee</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="cleaning-fee" variant="outlined" placeholder="0" onChange={onInputChanged} />
</FormControl>
</div>



<div className="col-md-6">

<InputLabel id="city-fee-per-m"><b>City Fee per month:USD</b> (only numbers)</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="city-fee-per-m"  variant="outlined" placeholder="320" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="minimum-month-of-booking"><b>Minimum months of booking</b> (only numbers)</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="minimum-month-of-booking"  variant="outlined" placeholder="4.5" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="minimum-month-of-booking"><b>Security Deposit in USD</b> - will be refunded if no complaints are received from the owner</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="security-deposit" variant="outlined" placeholder="0" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="early-bird-discount"><b>Early Bird Discount - in</b> % from the price per night</InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="early-bird-discount"  variant="outlined" placeholder="0" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="extra-price-per-guest-per-month"><b>No of days in advance</b></InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="no-of-days-in-advance"  variant="outlined" placeholder="0" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<InputLabel id="extra-price-per-guest-per-month"><b>Extra Price per guest per month USD</b></InputLabel>
<FormControl fullWidth>
  <TextField className='w-100' name="extra-price-per-guest-per-month"  variant="outlined" placeholder="0" onChange={onInputChanged} />
</FormControl>
</div>

<div className="col-md-6">
<FormGroup>
  <FormControlLabel control={<Checkbox  />} label="Allow guests above capacity?" />
</FormGroup>
{/* <FormGroup>
  <FormControlLabel control={<Checkbox  />} label="City Fee is a % of the Monthly fee" />
</FormGroup> */}
</div>

<div className="extra-option-box">
<InputLabel id="ex-ops"><b>Extra Options</b></InputLabel>
{inputList.map((x, i) => {
        return (
          <div className="box">
            <div class="row m-0">
              <div class="col-4">
            <TextField className='w-100' name="exName" variant="outlined" placeholder="Name" value={x.exName} onChange={e => handleInputChange(e, i)} />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button className="add-extra" onClick={handleAddClick}>Add Option</button>}
            </div>
              </div>
              <div class="col-4">
            <TextField className='w-100' name="exValue" variant="outlined" placeholder="Value" value={x.exValue} onChange={e => handleInputChange(e, i)} />
              </div>
              <div class="col-4">
            <TextField className='w-100' name="exsinglefee" variant="outlined" placeholder="Single Fee" value={x.exsinglefee} onChange={e => handleInputChange(e, i)} />
              </div>
            <div class="col-3">
            
              </div>
            </div>
          </div>
        );
      })}
      </div>
{/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}


<div class="row m-0">
  <div className="col-md-12">
  <h4><b>Listing Media</b></h4>
                    <hr />
  
  </div>
              <div class="col-3">
<FormControl fullWidth>
  <InputLabel id="video-from">Video from</InputLabel>
  <Select
    labelId="video-from"
    id="video-from"
    label="Video from"
  >
    <MenuItem value={'Vimeo'}>Vimeo</MenuItem>
    <MenuItem value={'Youtube'}>Youtube</MenuItem>
  </Select>
</FormControl>
              </div>
              <div class="col-3">
            <TextField className='w-100' name="video-id" variant="outlined" label="Video ID" placeholder="id" />
              </div>
              </div>


        {/* <FormGroup>
          <Label>Age: </Label>
          <Input
            type="text"
            name="age"
            placeholder="Enter your age"
            onChange={onInputChanged}
          />
        </FormGroup> */}
      <br />
      {/* <ActionButtons {...props} nextStep={validate2} /> */}
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
      {/* <p>Name: {props.user.name}</p> */}
      {/* <p>Age: {props.user.age}</p> */}
      <br />
      {/* <ActionButtons {...props} lastStep={handleLastStep} /> */}
    </div>
  );
};

const Frm = () => {
  return (
    <div>Hello</div>
  )
}

const Sample = () => {
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Description', isDone: true, component: One },
    { key: 'secondStep', label: 'Price & Images', isDone: false, component: Two },
    { key: 'thirdStep', label: 'Details & Location', isDone: false, component: Three },
    { key: 'finalStep', label: 'Ameneties & Calendar', isDone: false, component: Three },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }

    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveIndex(index + 1);
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;

    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveIndex(index - 1);
    setActiveStep(steps[index - 1]);
  }

  return (
    <div>
      <div className="content-add-new-property">
        <div className="container">
          
          <h1 style={{color: "#000"}} className="mb-5"><strong>Add New Property</strong></h1>
          
          <div className="row mx-0">
            <div className="col-12 px-0">
              {/* <Stepper activeStep={activeStep}>
               
                <Step label="Personal Detail"/>
                <Step label="Confirmation" />
              </Stepper> */}
              <div className="row m-0">
                {steps.map((step, i) => {
                  return <div key={i} className={`col-md-${12/steps.length} my-1`}>
                      <div className={`wiz-steps ${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                        <h4 className="m-0"><b>Step {i + 1}</b></h4>
                        <p className="m-0">{step.label}</p>
                      </div>
                  </div>
                })}
              </div>
              
              <div className="step-component py-4">
                <div className="p-4 border">
                    <h4><b>{activeStep.label}</b></h4>
                    <hr />
                    {activeIndex === 0 ? <One /> : activeIndex === 1 ? <Two /> : <Three />}
                </div>
          
        </div>

        <div className="btn-component">
          <Button type="button" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key}>Back</Button>
          <Button type="button" onClick={handleNext}>{steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'}</Button>
        </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
