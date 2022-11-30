import { useState, useContext, useEffect } from 'react'
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';


import Axios from 'axios'
import { Box } from '@mui/material';
import SMbuttons from './SMButton';

const ForgotPassword = ({ setAlert, setOpen }) => {
    const [email, setEmail] = useState('')
    const appState = useContext(StateContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email) {
            try {
                const { data } = await Axios.post(`${appState.apiEndPoint}/api/forget_password`, {
                    email
                })
                if (data.success) {
                    setAlert({
                        open: true,
                        message: "Email has been sent",
                        type: "success"
                    })
                    console.log(data)
                    setOpen(false)
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
                message: "Email Field is Empty",
                type: "error"
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ textAlign: "center" }}>
                <input value={email} className="ms-0 w-100" onChange={(e) => setEmail(e.target.value)} id='model-inp' placeholder='Email' />
            </Box>
            <Box >
                <SMbuttons label="Submit" type="submit" className="ms-0 w-100" id="Login-btan" />
            </Box>
        </form>
    )
}

export default ForgotPassword