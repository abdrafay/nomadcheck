import { Box } from '@mui/material';
import Axios from 'axios';
import { useState, useContext, useEffect } from 'react'
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import SMbuttons from './SMButton'
import { useNavigate } from "react-router-dom";

const Login = ({ setAlert, setOpen }) => {
  const navigate = useNavigate()
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const [loginData, setLoginData] = useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      try {
        const { data } = await Axios.post(`${appState.apiEndPoint}/api/login`, {
          user: {
            email: loginData.email,
            password: loginData.password
          },
        });
        if (data.success) {
          appDispatch({ type: "LOGIN", payload: data.user, token: data.token });
          setOpen(false)
          navigate("/profile");
        } else {
          setAlert({
            open: true,
            message: data.error,
            type: "error"
          })
        }

      } catch (error) {
        console.log(error)
      }
    } else {
      setAlert({
        open: true,
        message: "Please Fill All the fields",
        type: "error"
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ textAlign: "center" }}>
        <input value={loginData.loginEmail} className="ms-0 w-100" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} id='model-inp' placeholder='Email' />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <input value={loginData.loginPassword} className="ms-0 w-100" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} id='model-2inp' type="password" placeholder='Password' />
      </Box>
      <Box >
        <SMbuttons label="Login" type="submit" className="ms-0 w-100" id="Login-btan" />
      </Box>
    </form>
  )
}

export default Login