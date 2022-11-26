import './App.css';
// sass
import "./sass/App.scss";
// React Functionns
import { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Axios from "axios";

// Cookie utils
import { getCookie, setCookie, erase } from "./utils/cookies";
import Home from './Screens/Home';
import Navbar from './Components/Navbar';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import MyProperties from './Screens/MyProperties';
import MyProfile from './Screens/MyProfile';
import NewProperty from './Screens/NewProperty';
import Otherlisting from './Screens/OtherListing';
import OtherlistingMap from './Screens/OtherListingMap';
import AccountVerification from './Screens/AccountVerification';
import SingleListing from './Screens/SingleListing';
import TenantReservations from './Screens/TenantReservations';
import HostReservations from './Screens/HostReservations';
import MyBookings from './Screens/MyBookings';
import ProfileLayout from './Layout/ProfileLayout';


function App() {
  const initialState = {
    apiEndPoint: "https://nomadrof.herokuapp.com",
    loggedIn: (getCookie("token") !== 'undefined' && getCookie('token') ) ? true : false,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    token: getCookie("token") ? getCookie("token") : null,
    roles: localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles")) : [],
  };
  const ourReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          loggedIn: true,
          user: action.payload,
          token: action.token,
        };
        case "UPDATE_USER":
        return {
          ...state,
          user: action.payload
        }
        case "UPDATE_ROLES":
          return {
            ...state,
            roles: action.payload,
          };
      
      case "LOGOUT":
        return {
          ...state,
          loggedIn: false,
          user: {},
          token: "",
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(ourReducer, initialState);
  
  useEffect(()=> {
    
    const getRoles = async () => {
      try {
        const response = await Axios.get(`${state.apiEndPoint}/api/roles`);
        if (response.status === 200) {
          dispatch({type: "UPDATE_ROLES", payload: response.data.roles});
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRoles();
  },[])
  
  useEffect(()  => {
    if(state.loggedIn) {
      localStorage.setItem("user", JSON.stringify(state.user));
      setCookie("token", state.token, 7);
      return;
    }
    localStorage.removeItem("user");
    erase("token");
  },[state.loggedIn, state.user,state.token])

  useEffect(() => {
    if(state.roles) {
      localStorage.setItem("roles", JSON.stringify(state.roles));
    }
  },[state.role])
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />        
        <Route path="/properties" element={<Otherlisting />} />
        <Route path="/properties/:id" element={<SingleListing />} />
        {state.loggedIn && (
        <>
          <Route path="/profile" element={<ProfileLayout />}>
            <Route path="" element={<MyProfile />} />
            <Route path="my-bookings" element={<MyBookings />} />
            <Route path="reservations" element={<HostReservations />} />
            <Route path="my-reservations" element={<TenantReservations />} />
            <Route path='my-properties' element={<MyProperties />}/>
            <Route path="add-property" element={<NewProperty />} />
          </Route>
          <Route path="/other-listing-map" element={<OtherlistingMap />} />
          <Route path="/account-verification" element={<AccountVerification />} />
              
          </>
        )}
      </Routes>
    </BrowserRouter>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
