import {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SMbuttons from './SMButton'
// import CloseIcon from '@mui/icons-material/Close';
import Icon from '../images/btn-facb.png'
import SecondGoogle from '../images/btn-gogle.png'
import Axios from 'axios'
// import { axios_base } from '../config/axios_base';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import StateContext from '../StateContext';
import DispatchContext from '../DispatchContext';
import { useNavigate } from 'react-router-dom';
import MyAlert from './MyAlert';
import Register from './Register';
import Login from './Login';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: "50%",
    transform: 'translate(-50%, -50%)',
    width: 366,
    bgcolor: 'background.paper',
    boxShadow: 24,
    maxHeight: 600,
    overflow: 'hidden',
    p: 3,
    borderRadius: "20px",
};

export default function NavModal({open, handleClose, setOpen, chaange}) {
    const navigate = useNavigate()
    const appState = useContext(StateContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [value, setValue] = useState(1);
    const [alert, setAlert]= useState({
        open: false,
        message: "",
        type: "success"
    })
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
      
    const setAlertOpen = val => {
    setAlert({...alert, open: val})
    }
    return (
        
        <div>
            <MyAlert open={alert.open} type={alert.type} message={alert.message} setOpen={setAlertOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{ borderRadius: "30px" }}

            >
                {chaange ?

                    <Box sx={style}>
                        {/* <CloseIcon onClick={CloseModal} id="cutIcon" color="black" /> */}

                        <Box sx={{ marginRight: "7px" }}>
                            <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: "7px" }}>Start Listing Properties</h4>
                            <p style={{ textAlign: "center", marginBottom: "0PX" }}>Please fill the login or register forms</p>
                            <h4 style={{ textAlign: "center", marginTop: "10px", marginBottom:"-20px" }}>Sign Up</h4>
                        </Box>
                        
                        <Box sx={{ width: '100%', marginRight: "7px", marginTop: "15px" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{ sx: { backgroundColor: '#F3684A', height: 3, width: "100%" } }}
                                textColor="inherit"
                            >
                                {appState.roles.map((item, ind) => <Tab key={ind} value={item.id} sx={{ color: "black", margin: "auto", textTransform: "capitalize", fontSize: "19px", fontFamily: "poppins" }} label={item.name} /> )}
                            </Tabs>
                        </Box>

                        <Box sx={{ marginRight: "7px", position:"relative" }} >
                            <img id='bt-faccc' src={Icon} alt="facebook-icon" />
                            <SMbuttons label="Login with Facebook" id="modal-faceee" />
                        </Box>

                        <Box style={{ marginTop: "10px", marginRight: "7px",  position:"relative" }}>
                            <img id='bt-goooo' src={SecondGoogle} alt="facebook-icon" />
                            <SMbuttons label="Login with Google" id="modal-facaa" />
                        </Box>
                        <Register setAlert={setAlert} setOpen={setOpen} role={value} />

                        <Box >
                            <h5 style={{ fontFamily: "poppins", fontSize: "10px", textAlign: "center", marginTop: "20px" }} id="color-issue">*A Password will be-e-maled to you</h5>
                        </Box>

                    </Box>

                    :

                    <Box sx={style}>
                        {/* <CloseIcon onClick={CloseModal} id="cutIcon" color="black" /> */}

                        <Box>
                            <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>Start Listing Properties</h4>
                            <p style={{ textAlign: "center" }}>Please fill the login or register forms</p>
                        </Box>

                        <Box >
                            <img id='bt-fac' src={Icon} alt="facebook-icon" />
                            <SMbuttons label="Login with Facebook" id="modal-face" />
                        </Box>

                        <Box style={{ marginTop: "10px" }}>
                            <img id='bt-googl' src={SecondGoogle} alt="facebook-icon" />

                            <SMbuttons label="Login with Google" id="modal-facaa" />
                        </Box>
                        <Login setAlert={setAlert} setOpen={setOpen} />

                        <Box >
                            <h5 style={{ fontFamily: "poppins", fontSize: "10px", textAlign: "center", marginTop: "20px" }} id="color-issue">Dont't have an account? | Forgot Password</h5>
                        </Box>

                    </Box>

                }


            </Modal>
        </div>
    );
}
