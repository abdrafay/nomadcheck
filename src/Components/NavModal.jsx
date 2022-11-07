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
            <div>Hello</div>
        </div>
    );
}
