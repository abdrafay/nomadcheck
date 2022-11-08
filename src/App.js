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
        {state.loggedIn ? ( 
        <>
              <Route path='/properties' element={<MyProperties />}/>
              {/* <Route  path="/properties/add" element={}/> */}
              <Route path="/profile" element={<MyProfile />}/>
              </>) : ''}
      </Routes>
    </BrowserRouter>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
