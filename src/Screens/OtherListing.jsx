import React from 'react'
// import {Form, InputGroup} from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SMbuttons from '../Components/SMButton';
// import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
// import card from '../config/images/card-01.jpg'
import BathroomIcon from '@mui/icons-material/Bathroom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputSlider from '../Components/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ManIcon from '@mui/icons-material/Man';
import {Slider, Typography} from '@mui/material';
import {Box} from '@mui/system';
import Cards from '../Components/Cards';
import { Link } from 'react-router-dom';

function valuetext(value) {
  return `${value}°C`;
}

export default function Otherlisting() {

  const chnageColor = (e) => {
    var color = e.value;
    e.style.color = color;
  }

  const [value,
    setValue] = React.useState([0, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='content other-listing'>
    <div className='container'>
      <div className='row content-top'>
        <div className='col-md-5'>
            <div class="search-form-div">
                <SearchIcon id="color-mistake"/>
                <input placeholder='Search listing' id='other-search'/>
                <SMbuttons id="nav-button" label="Search" />
            </div>
        </div>
        <div className='col-md-4'>
          <div>
            <span>Sort by 9 places</span>
            <select
              onChange={(e) => chnageColor(e)}
              style={{
              backgroundColor: "white",
              borderColor: "#b8b6b5",
              width: "9.3rem",
              padding: "9px",
              borderRadius: "30px",
              textAlign: "center",
              marginLeft: "25px"
            }}>
              <option selected value="#F3684A">Best Matches</option>
              <option value="#F3684A">
                Lima</option>
              <option value="#F3684A">Bogota</option>
              <option value="#F3684A">Medellin</option>
            </select>
          </div>
        </div>
        <div className='col-md-3'>
          <div>
            <Link to={"/other-listing"}>
            <FormatListBulletedIcon id="list-ic" color="white"/>
            <SMbuttons label="List" id="seee-all-list"/></Link>
            <Link to={"/other-listing-map"} id="see-map">Map</Link>
          <div id="see-mapz">
            {/* <AirlineStopsIcon id="map-on" /> */}
          </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-8'>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>

        <div className='col-lg-4'>
          <div>
            <div
              className='row'
              style={{
              boxShadow: "0px 0px 3px black",
              borderRadius: "30px",
              margin: "auto"
            }}>
              <div className='row'>
                <h6
                  style={{
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "left",
                  marginLeft: "10px"
                }}>Location</h6>
                <div
                  style={{
                  marginTop: "10px",
                  display: "inline-flex",
                  marginLeft: "30px"
                }}>
                  <LocationOnIcon/>
                  <p
                    style={{
                    marginBottom: "0px",
                    marginLeft: "8px"
                  }}>Where do you want to go?</p>
                </div>
              </div>
              <div className='row'>
                <h6
                  style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  textAlign: "left",
                  marginLeft: "10px"
                }}>Dates</h6>
                <div
                  style={{
                  display: "flex",
                  marginTop: "10px"
                }}>
                  <p style={{
                    margin: "auto"
                  }}>Check In</p>
                  <p style={{
                    margin: "auto"
                  }}>Check Out</p>
                </div>
              </div>
              <div className='row'>
                <div
                  style={{
                  display: "flex",
                  marginTop: "30px"
                }}>
                  <p
                    style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "10px"
                  }}>Guest</p>
                  <p
                    style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "180px"
                  }}>All Types</p>
                </div>
                <p style={{
                  marginLeft: "70px"
                }}>Guest</p>
              </div>
              <div className='row'>
                <div
                  style={{
                  display: "flex",
                  marginTop: "30px"
                }}>
                  <p
                    style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "10px"
                  }}>Bedrooms</p>
                  <p
                    style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "180px"
                  }}>Bath</p>
                </div>

                <div
                  style={{
                  display: "flex",
                  marginTop: "10px"
                }}>
                  <p
                    style={{
                    width: "100%",
                    marginLeft: "17px",
                    display: "inline-flex"
                  }}>
                    <BedroomParentIcon id="bedrooms-im"/>
                    <InputSlider/>
                  </p>
                  <p
                    style={{
                    width: "100%",
                    display: "inline-flex"
                  }}>
                    <BathroomIcon id="bedrooms-im"/>
                    <InputSlider/>

                  </p>
                </div>
              </div>
              <div className='row'>
                <FormControl
                  sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "auto"
                }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel
                      value="Kitchen"
                      sx={{
                      margin: "auto"
                    }}
                      control={< Radio sx = {{ color: "#F3684A" }}/>}
                      label="Kitchen"/>
                    <FormControlLabel
                      value="Washer"
                      sx={{
                      margin: "auto"
                    }}
                      control={< Radio sx = {{ color: "#F3684A" }}/>}
                      label="Washer"/>
                  </RadioGroup>
                </FormControl>
              </div>
              <div
                className='row'
                style={{
                marginTop: "10px"
              }}>
                <FormControl
                  sx={{
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "auto"
                }}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group">
                    <FormControlLabel
                      value="Kitchen"
                      sx={{
                      margin: "auto"
                    }}
                      control={< Radio sx = {{ color: "#F3684A" }}/>}
                      label="Kitchenware"/>
                    <FormControlLabel
                      value="Washer"
                      sx={{
                      margin: "auto"
                    }}
                      control={< Radio sx = {{ color: "#F3684A" }}/>}
                      label="Doorman"/>
                  </RadioGroup>
                </FormControl>
              </div>
              <div
                className='row'
                style={{
                width: "100%",
                textAlign: "center",
                margin: "auto"
              }}>
                <h6
                  style={{
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "left"
                }}>Tenant</h6>
                <p
                  style={{
                  marginLeft: "30px",
                  display: "inline-flex"
                }}>
                  <ManIcon/>
                  <InputSlider id="sliider" action={"+ people"}/>
                </p>

              </div>
              <div className='row'>
                <h6
                  style={{
                  fontWeight: "bold",
                  marginTop: "30px",
                  textAlign: "left",
                  marginLeft: "10px"
                }}>Budget</h6>
                <p
                  style={{
                  marginLeft: "40px",
                  display: "inline-flex"
                }}>

                  {/* <InputSlider id="sliider" /> */}
                  <Box
                    sx={{
                    width: "85%",
                    display: "inline-flex"
                  }}>
                    <Typography
                      sx={{
                      fontSize: "11px",
                      textAlign: "center",
                      marginRight: "13px"
                    }}>Min Price ${value[0]}</Typography>
                    <Slider
                      getAriaLabel={() => 'Temperature range'}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      sx={{
                      color: "#F3684A"
                    }}/>
                    <Typography
                      sx={{
                      fontSize: "11px",
                      textAlign: "center"
                    }}>Max Price ${value[1]}</Typography>
                  </Box>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
