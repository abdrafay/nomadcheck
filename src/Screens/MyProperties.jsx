import {useContext, useEffect, useState} from 'react'



import SearchIcon from '@mui/icons-material/Search';
import MyPropertyCard from '../Components/MyPropertyCard';
import StateContext from '../StateContext';
import Axios from 'axios';
import { Button } from '@mui/material';

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
    <div>
        <div className='row'>
              <div className='col-md-7 col-12'>
                  <div className='search-form-div'>
                    <SearchIcon id="color-mistake" />
                    <input placeholder='Search listing' id='other-search' />
                    <Button label="Search" className='ms-3 round-border-button' variant="contained">Search</Button>
                  </div>
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
  )
}

export default MyProperties