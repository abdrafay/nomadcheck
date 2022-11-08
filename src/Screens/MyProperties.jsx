import {useContext, useEffect, useState} from 'react'


import { Form, InputGroup } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SMbuttons from '../Components/SMButton';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import card from '../images/card-01.jpg'
import BathroomIcon from '@mui/icons-material/Bathroom';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InputSlider from '../components/slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ManIcon from '@mui/icons-material/Man';
import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system'; 
// import Cards from '../components/cards';
// import property1 from '../images/property1.jpg'
import MyPropertyCard from '../Components/MyPropertyCard';
import ProfileLayout from '../Layout/ProfileLayout';
import StateContext from '../StateContext';
import Axios from 'axios';

const MyProperties = () => {
  const appState = useContext(StateContext);
  const [properties, setProperties] = useState([]);
    const getProperties = async () => {
        try {
            const {data} = await Axios.get(`${appState.apiEndPoint}/api/rooms`, {
                headers: {
                    Authorization: `Bearer ${appState.token}`
                }
            });
            console.log(data)
            if (data.success) {
                setProperties(data.rooms);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProperties();
    }, []);
  return (
      <ProfileLayout>
        <div className='content'>
        <div className='container'>
          <div className='row'>
              <div className='col-12'>
                  <SearchIcon id="color-mistake" />
                  <input placeholder='Search listing' id='other-search' />
                  <SMbuttons id="nav-button" label="Search" />
              </div>
          </div>    


          <div className='row'>
              {properties.length > 0 ? properties.map((property, ind) => (
                <div className='col-12' key={ind}>
                  <MyPropertyCard property={property} />
                </div>
              )) : <div className='text-center'>
                  <h2>You have no property available</h2>
                </div>}
              
          </div>
        </div>
      </div>
      </ProfileLayout>
  )
}

export default MyProperties