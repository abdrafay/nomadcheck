import { Box } from '@mui/system'
import Axios from 'axios'
import {useState, useContext, useEffect} from 'react'
import DispatchContext from '../DispatchContext'
import StateContext from '../StateContext'
import SMbuttons from './SMButton'
import { useNavigate } from "react-router-dom";

const Register = ({role, setOpen, setAlert}) => {
    const navigate = useNavigate()
    const appState = useContext(StateContext)
    const appDispatch = useContext(DispatchContext)
    const [signupData, setSignupData] = useState({})
    const handleSubmit = async (e) => {
        console.log({
            ...signupData,
            role_id: role
        })
        e.preventDefault();
        if (signupData.email && signupData.password && signupData.first_name && signupData.last_name) {
        //   if (password === confirmPassword) {
            // setLoading(true);
            try {
              const {data} = await Axios.post(`${appState.apiEndPoint}/api/register`, {
                user: {
                    ...signupData,
                    role_id: parseInt(role)
                }
              });
              if (data.success) {
                appDispatch({ type: "LOGIN", payload: data.user, token: data.token });
                setOpen(false);
                navigate("/profile");
              } else {
                setAlert({
                    open: true,
                    message: data.error,
                    type: "error"
                })
                
              }
              console.log(data);
            } catch (error) {
              console.log(error);
              
            }
            // setLoading(false);
        //   } else {
        //     alert("Passwords do not match");
        //   }
        } else {
          setAlert({
            open: true,
            message: "Please fill in all fields",
            type: "error"
        })
        }
      };
  return (
    <form onSubmit={handleSubmit}>
                            <Box className="row m-0">
                                <div className="col-md-6 px-1">
                                  <input value={signupData.first_name} className="ms-0" required id='model-inp' onChange={(e) => setSignupData({ ...signupData, first_name: e.target.value })} placeholder='First Name' />
                                </div>
                                <div className="col-md-6 px-1">
                                  <input value={signupData.last_name} className="ms-0" required id='model-inp' onChange={(e) => setSignupData({ ...signupData, last_name: e.target.value })} placeholder='Last Name' />
                                </div>
                            </Box>

                            {/* <Box sx={{ textAlign: "center" }}>
                                <input value={signupData.username} className="ms-0" required id='model-inp' onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} placeholder='UserName' />
                            </Box> */}
                            <Box sx={{ textAlign: "center" }}>
                                <input value={signupData.email} className="ms-0" required onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} id='model-2inp' placeholder='Email' />
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <input value={signupData.phone_number} className="ms-0" required onChange={(e) => setSignupData({ ...signupData, phone_number: e.target.value })} id='model-2inp' placeholder='Phone No' />
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <input value={signupData.password} className="ms-0" type="password" onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} required id='model-2inp' placeholder='Password' />
                            </Box>
                            <Box style={{ display: "flex" }}>
                                <input required type="checkbox" style={{ marginRight: "5px", marginLeft: "15px" }} name="Terms" value="I agree withterms & conditions" /> <p style={{ fontFamily: "poppins", fontSize: "11px", marginTop: "14px" }} id="color-issue">  I agree withterms & conditions</p>
                            </Box>
                            <Box sx={{ marginRight: "7px" }}>
                                <SMbuttons type="submit" label="Create an account" id="signin-btan" />
                            </Box>
                        </form>
  )
}

export default Register