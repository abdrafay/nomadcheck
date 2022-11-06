// Rafay
import {useContext} from 'react'
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import { erase } from '../utils/cookies';
// import { useNavigate } from 'react-router-dom';

//Zain
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// Hasnain
import { useRef, useState } from "react";
// import { Nav, NavLink } from "react-bootstrap";
// import { FaBars, FaTimes } from "react-icons/fa";
import Image from '../images/logo.jpg'
// import LockIcon from '@mui/icons-material/Lock';
// import AddIcon from '@mui/icons-material/Add';
// import DropDwon from "./dropDown";
import SMbuttons from "./SMbuttons";
// import Modals from "./modal";
import { Route, Routes, useNavigate } from "react-router-dom";
// import Otherlisting from "../screens/navbscreens/otherlisting";
// import SubmitProperty from "../screens/navbscreens/submitproperty";
// import Myproperty from "../screens/navbscreens/myproperty";


// Hasnain
export default function Navbar() {
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)
  const [open, setOpen] = useState(false);
  const [chaange, setChnaage] = useState(false);
  const navigate = useNavigate()
  const navRef = useRef();

  const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
  };

  const LoginUser = () => {
    setOpen(true)
    setChnaage(false)
}

const handleClose = () => {
    setOpen(false);

}

const SgnUpUser = () => {
    setChnaage(true)
    setOpen(true)
}

//Zain
const OtherListings = () => {
    navigate("/otherlisting")
}

const PropertyNext = () => {
    navigate("/submitlisting")
}

const handleLogout = () => {
    navigate('/')
    appDispatch({type: "LOGOUT"})
}


  return (
      <>
          <header id="nav-header">
          <div className="container">
            <div className="row d-none">
                <div className='col'>
                      <img className="logo" src={Image} width={120} height={92} alt="Compnay-logo" />
                    <nav ref={navRef}>
                        
                        <ul>
                            {/* <li>
                                <a>Exclusives</a>
                                <ul>
                                    <li>
                                        <a>Lima</a>
                                    </li>
                                    <li>
                                        <a>Bogota</a>
                                    </li>
                                    <li>
                                        <a>Medellin</a>
                                    </li>
                                    <li>
                                        <a>Quito</a>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                {/* <DropDwon /> */}
                            </li>
                            <li>
                                <a>Talk to an Agent </a>
                            </li>
                            <li>
                                <a>Namadroof Life</a>
                            </li>
                        </ul>
                        {/* <a onClick={OtherListings} id="other-listin-ico" className="active" >Other Listings</a> */}
                    </nav>
                </div>
                <div className='col'>
                        <div className="float-end header-right">
                            
                                <ul>
                                    <li>
                                        <a onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            : 
                            <ul>
                                <li>
                                    <a onClick={LoginUser}>
                                        {/* <LockIcon className="logo" />  */}
                                        
                                        Login</a>
                                </li>
                                <li>
                                    <a onClick={SgnUpUser}>
                                        {/* <AddIcon fontSize="34" className="logo" />  */}
                                        Signup</a>
                                </li>
                            </ul>
                            
                            
                        {/* <SMbuttons onClick={PropertyNext} id="nav-button" label="Submit Property" /> */}
                        </div>
                        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                            {/* <FaTimes /> */}
                        </button>
                    
              </div>
              <button className="nav-btn" onClick={showNavbar}>
                  {/* <FaBars /> */}
              </button>
              </div>
              
          
<nav className="navbar navbar-expand-lg navbar-light bg-lightz">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className="logo" src={Image} width={120} height={92} alt="Compnay-logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
        <NavDropdown title="Exclusives" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Lima</NavDropdown.Item>
              <NavDropdown.Item href="#">Bogota</NavDropdown.Item>
              <NavDropdown.Item href="#">Medellin</NavDropdown.Item>
              <NavDropdown.Item href="#">Quito</NavDropdown.Item>
        </NavDropdown>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Talk to an Agent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Namadroof Life</a>
        </li>
      </ul>
        <ul className="navbar-nav me-autoz my-2 my-lg-0 navbar-nav-scroll">
        {appState.loggedIn ? 
            <li className="nav-item">
            <a className="nav-link" onClick={handleLogout}>
                {/* <LockIcon className="logo" /> */}
                Logout</a>
        </li>
            : 
            <>
            <li className="nav-item">
                <a className="nav-link" onClick={LoginUser}>
                    {/* <LockIcon className="logo" /> */}
                    Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={SgnUpUser}>
                    {/* <AddIcon fontSize="34" className="logo" /> */}
                    Signup</a>
            </li>
            </>
            }
            <SMbuttons onClick={PropertyNext} id="nav-button" label="Submit Property" />
        </ul>
    </div>
  </div>
</nav>


</div></header>
          {/* <Modals open={open} setOpen={setOpen} chaange={chaange} handleClose={handleClose} /> */}
          
      </>
  );
}


// Rafay



// export default Navbar