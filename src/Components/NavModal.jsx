import { useState, useEffect, useContext } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import MyAlert from './MyAlert';
import Register from './Register';
import Login from './Login';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import ForgotPassword from './ForgotPassword';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: "50%",
    transform: 'translate(-50%, -50%)',
    width: 366,
    bgcolor: 'background.paper',
    boxShadow: 24,
    // maxHeight: 600,
    overflow: 'hidden',
    p: 3,
    borderRadius: "20px",
};

export default function NavModal({ open, handleClose, setOpen, modalForm, handleFormOpen }) {
    const navigate = useNavigate()
    const appState = useContext(StateContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [value, setValue] = useState(1);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success"
    })
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const setAlertOpen = val => {
        setAlert({ ...alert, open: val })
    }
    return (

        <div>
            <MyAlert open={alert.open} type={alert.type} message={alert.message} setOpen={setAlertOpen} />
            <Modal open={open}
                className="mdl-cls"
                onClose={handleClose} sx={{ borderRadius: "30px" }}>

                {modalForm === 'signup' ?

                    <Box sx={style}>
                        {/* <CloseIcon onClick={CloseModal} id="cutIcon" color="black" /> */}

                        <Box sx={{ marginRight: "7px" }}>
                            <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: "7px" }}>Sign Up</h4>
                            <p style={{ textAlign: "center", marginBottom: "0PX" }}>Please fill the registeration form</p>
                            {/* <h4 style={{ textAlign: "center", marginTop: "10px", marginBottom:"-20px" }}>Sign Up</h4> */}
                        </Box>

                        <Box sx={{ width: '100%', marginRight: "7px", marginTop: "15px" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{ sx: { backgroundColor: '#F3684A', height: 3, width: "100%" } }}
                                textColor="inherit"
                            >
                                {appState.roles.map((item, ind) => <Tab key={ind} value={item.id} sx={{ color: "black", margin: "auto", textTransform: "capitalize", fontSize: "19px", fontFamily: "poppins" }} label={item.name} />)}
                            </Tabs>
                        </Box>
                        <Box>
                            <Button className="text-center round-border-button w-100 btnFb mt-2 py-4" variant="contained"><i className="fa-brands fa-facebook-f me-2"></i> Login with Facebook</Button>
                            <Button className="text-center round-border-button w-100 btnGoogle mt-2" variant="contained"><i className="fa-brands fa-google me-2"></i> Login with Google</Button>
                        </Box>
                        <Register setAlert={setAlert} setOpen={setOpen} role={value} />

                        <Box >
                            <h5 style={{ fontFamily: "poppins", fontSize: "10px", textAlign: "center", marginTop: "20px" }} id="color-issue">*A Password will be-e-maled to you</h5>
                        </Box>

                    </Box>

                    : modalForm === 'login' ?

                    <Box sx={style}>
                        <Box>
                            <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>Login</h4>
                            <p style={{ textAlign: "center" }}>Please fill the login form</p>
                        </Box>
                        <Box >
                            <Button className="text-center round-border-button w-100 btnFb mt-2 py-4" variant="contained"><i className="fa-brands fa-facebook-f me-2"></i> Login with Facebook</Button>
                            <Button className="text-center round-border-button w-100 btnGoogle mt-2" variant="contained"><i className="fa-brands fa-google me-2"></i> Login with Google</Button>
                        </Box>
                        <Login setAlert={setAlert} setOpen={setOpen} />
                        <Box >
                        <a><h5 style={{ fontFamily: "poppins", fontSize: "10px", textAlign: "center", marginTop: "20px" }} id="color-issue"> <span onClick={e => handleFormOpen('signup') }>Dont't have an account?</span> | <span onClick={e => handleFormOpen('forgot') }>Forgot Password</span></h5></a>
                        </Box>
                    </Box>

                : modalForm === 'forgot' ?
                <Box sx={style}>
                        <Box>
                            <h4 style={{ fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>Forgot Password</h4>
                            <p style={{ textAlign: "center" }}>Please enter the email of your account</p>
                        </Box>
                        <ForgotPassword setAlert={setAlert} setOpen={setOpen} />
                        
                    </Box>
            : ''}

            </Modal>
            {/* <Modal
                
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                

            >
                
            </Modal> */}
        </div>
    );
}
