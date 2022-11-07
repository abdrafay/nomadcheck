import { Box } from '@mui/material';
import { Axios } from 'axios';
import {useState, useContext, useEffect} from 'react'
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import SMbuttons from './SMButton'
import { useNavigate } from "react-router-dom";

const Login = ({setAlert, setOpen}) => {
    const navigate = useNavigate()
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)
    const [loginData, setLoginData] = useState({})
    const handleSubmit = async (e) => {
        console.log("submit");
        e.preventDefault();
        if (loginData.email && loginData.password) {
          try {
            const {data} = await Axios.post(`${appState.apiEndPoint}/api/login`, {
              user: {
                email: loginData.email,
                password: loginData.password
              },
            });
            if (data.success) {
              appDispatch({ type: "LOGIN", payload: data.user, token: data.token });
              console.log(data)
              setOpen(false)
              navigate("/profile");
            } else {
                console.log(data)
                setAlert({
                    open: true,
                    message: data.error,
                    type: "error"
                })
            }
            
          } catch (error) {
            alert(error.error)
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
                                <input value={loginData.loginEmail} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} id='model-inp' placeholder='Email' />
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <input value={loginData.loginPassword} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} id='model-2inp' type="password" placeholder='Password' />
                            </Box>

                            <Box >
                                <SMbuttons label="Login" type="submit" id="Login-btan" />
                            </Box>
                        </form>
  )
}

export default Login