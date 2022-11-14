// Rafay
import { useContext } from "react";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import { erase } from "../utils/cookies";
// import { useNavigate } from 'react-router-dom';

//Zain
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Hasnain
import { useRef, useState } from "react";
// import { Nav, NavLink } from "react-bootstrap";
// import { FaBars, FaTimes } from "react-icons/fa";
import Image from "../images/logo.jpg";
import AddIcon from "@mui/icons-material/Add";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
// import DropDwon from "./dropDown";
import SMbuttons from "./SMButton";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NavModal from "./NavModal";
// import Otherlisting from "../screens/navbscreens/otherlisting";
// import SubmitProperty from "../screens/navbscreens/submitproperty";
// import Myproperty from "../screens/navbscreens/myproperty";

// Hasnain
export default function Navbarz() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [open, setOpen] = useState(false);
  const [chaange, setChnaage] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef();
  console.log(appState);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const LoginUser = () => {
    setOpen(true);
    setChnaage(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SgnUpUser = () => {
    setChnaage(true);
    setOpen(true);
  };

  //Zain
  // const OtherListings = () => {
  //     navigate("/otherlisting")
  // }

  const handleLogout = () => {
    navigate("/");
    appDispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <header id="nav-header">
        <Navbar className="py-2" bg="lightz" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img
                className="logo"
                src={Image}
                width={120}
                height={92}
                alt="Compnay-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Exclusives" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Lima</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bogota</NavDropdown.Item>
                  <NavDropdown.Item href="#">Medellin</NavDropdown.Item>
                  <NavDropdown.Item href="#">Quito</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Talk to an Agent</Nav.Link>
                <Nav.Link href="#link">Namadroof Life</Nav.Link>
              </Nav>
              <ul className="navbar-nav me-autoz my-2 my-lg-0 navbar-nav-scroll">
                {appState.loggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">
                        <PersonIcon className="logoIcon" />
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleLogout}>
                        <LogoutIcon className="logoIcon" />
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" onClick={LoginUser}>
                        <LockOpenIcon className="logoIcon" />
                        Login
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={SgnUpUser}>
                        <AddIcon className="logoIcon" />
                        Signup
                      </a>
                    </li>
                  </>
                )}
                <Link to="/property/add">
                  <SMbuttons id="nav-button" label="Submit Property" />
                </Link>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <NavModal
        open={open}
        setOpen={setOpen}
        chaange={chaange}
        handleClose={handleClose}
      />
    </>
  );
}

// Rafay

// export default Navbar
