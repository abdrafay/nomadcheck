import * as React from 'react';
import {useState} from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Alert, Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch, TextField } from '@mui/material';
import ProfileLayout from '../Layout/ProfileLayout';
import { useEffect } from 'react';
import { useContext } from 'react';
import StateContext from '../StateContext';
import Axios from 'axios';
import SMbuttons from '../Components/SMButton';
import MyAlert from '../Components/MyAlert';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const MyProfile =() => {
  const appState = useContext(StateContext)
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [fname, setFName] = useState('')
  const [lname, setlName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [linkedInURL, setLinkedInURL] = useState('')
  const [twitterURL, setTwitterURL] = useState('')
  const [cruniversity, setCRUniversity] = useState('')
  const [abroad_university, setAbroadUniversity] = useState('')
  const [edMajor, setEDMajor] = useState('')
  const [language, setLanguage] = useState('')
  const [timezonez, settimezone] = useState('')
  const [checked, setChecked] = useState(false)
  const [checked1, setChecked1] = useState(false)
  const [alert, setAlert]= useState({
    open: false,
    message: "",
    type: "success"
})
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  
  const handleDrawer = () => {
    setOpen(!open);
  };
  const setAlertOpen = val => {
    setAlert({...alert, open: val})
  }
  useEffect(() => {
    setFName(appState.user.first_name !== null ? appState.user.first_name : '')
    setlName(appState.user.last_name !== null ? appState.user.last_name : '')
    setEmail(appState.user.email !== null ? appState.user.email: "")
    setPhone(appState.user.phone_number !== null ? appState.user.phone_number : '')
    setCRUniversity(appState.user.current_university !== null ? appState.user.current_university : '')
    setAbroadUniversity(appState.user.aborad_unversity !== null ? appState.user.aborad_unversity : '')
    setEDMajor(appState.user.education_major !== null ? appState.user.education_major : '')
    setTwitterURL(appState.user.twitter !== null ? appState.user.twitter : '')
    setLinkedInURL(appState.user.linkedin !== null ? appState.user.linkedin : '')
    setCountry(appState.user.country !== null ? appState.user.country : '')
  },[appState.user])
  const handleUpdateSubmit = async e => {
    e.preventDefault()
    try {
      const {data} = await Axios.put(`${appState.apiEndPoint}/api/profiles/${appState.user.id}`,{
        token: appState.token,
        user: {  
          first_name: fname, 
          last_name: lname, 
          phone_number: phone,
          username: appState.username,
          country: country,
          current_university: cruniversity,
          aborad_unversity: abroad_university,
          education_major: edMajor,
          language: 'en',
          timezone: 'ATC',
          linkedin: linkedInURL,
          twitter: twitterURL
        }
        
      }, {
        headers: {
          Authorization: `Bearer ${appState.token}`
      }
      })
      if(data.success) {
        setAlert({
          open: true,
          message: "Updated Succesfully",
          type: "success"
      })
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
  }

  return (
    <ProfileLayout>
        <MyAlert open={alert.open} type={alert.type} message={alert.message} setOpen={setAlertOpen} />
        <div className='container profile-container'>
        <div>
            <Alert className='mb-2' severity="info"><strong>Fill out Personal Details!</strong> Make sure to enter all your personal details as well as a profile picture, as this would help us confirm you as a Verified Tenant/Host</Alert>
            <Alert className='mb-2' severity="warning"><strong>For Tenants:</strong> Hosts prefer tenants who provide detailed, accurate information. Please, tell as us much as you can in About Me'ection, specially about where you will work or study</Alert>
          </div>
          
        {/* <DrawerHeader /> */}
        <form onSubmit={handleUpdateSubmit}>
        <h2>Your details</h2>
        <div className='border w-80 p-5'>
            <div className="row px-0 mx-0">
                <div className="col-md-8">
                    <div>
                    <TextField id="first-name" value={fname} onChange={e =>  setFName(e.target.value)} className='w-100' label="First Name" variant="standard" />
                    </div>
                    <div>
                    <TextField id="last-name" value={lname} onChange={e =>  setlName(e.target.value)} className='w-100' label="Last Name" variant="standard" />
                    </div>
                    <div>
                    <TextField type="email" disabled value={email} onChange={e =>  setEmail(e.target.value)} className='w-100' id="email" label="Email" variant="standard" />
                    </div>
                    <div className="row px-0 mx-0 align-items-center">
                        <div className="col-md-6 px-1">
                            <TextField type="password" disabled value={password} onChange={e => setPassword(e.target.value)} className='w-100' id="password" label="Password" variant="standard" />
                        </div>
                        <div className="col-md-6 px-1">
                            <Button variant="text">Change Password</Button>
                        </div>
                    </div>
                    <div className='col-md-6 px-1'>
                    <TextField type="number" value={phone} onChange={e=> setPhone(e.target.value)} className='w-100' id="mobile" label="*Mobile (*Add the country code format Ex: +1 232 3322" variant="standard" />
                    </div>
                    
                </div>
                <div className="col-md-4 text-center m-auto">
                    <img src="https://p.kindpng.com/picc/s/105-1055656_account-user-profile-avatar-avatar-user-profile-icon.png" width={100} height={100} alt="" />
                    <div className='mt-2'>
                        <Button variant="contained" component="label">
                        Upload Image
                        <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        {/*  */}
        <div>
        <h2>Social Media Link</h2>
        <div className='border w-80 p-5'>
        <div className="row px-0 mx-0">
                    <div>
                    <TextField id="uni" value={cruniversity} onChange={e => setCRUniversity(e.target.value)} className='w-100' label="Current University" variant="standard" />
                    </div>
                    <div>
                    <TextField id="uni2" value={abroad_university} onChange={e=> setAbroadUniversity(e.target.value)} className='w-100' label="Abroad University" variant="standard" />
                    </div>
                    <div>
                    <TextField id="country" value={country} onChange={e => setCountry(e.target.value)} className='w-100' label="Country" variant="standard" />
                    </div>
                    <div>
                    <TextField id="educationMajor" value={edMajor} onChange={e=> setEDMajor(e.target.value)} className='w-100' label="Education Major" variant="standard" />
                    </div>
                    <div>
                    <TextField type="text" value={twitterURL} onChange={e=> setTwitterURL(e.target.value)} className='w-100' id="Twitter" label="Twitter Url" variant="standard" />
                    </div>
                    <div>
                    <TextField type="text" value={linkedInURL} onChange={e=> setLinkedInURL(e.target.value)} className='w-100' id="linkedIN" label="LinkedIn Url" variant="standard" />
                    </div>
                    {/* <div className='col-md-6 px-1'>
                    <TextField type="number" className='w-100' id="mobile" label="*Mobile (*Add the country code format Ex: +1 232 3322" variant="standard" />
                    </div> */}
                    <SMbuttons type="submit" label={"Save user Profile"}></SMbuttons>
                </div>
            </div>
            </div>
            </form>






            <form>
            <div>
        <h2>Language and time zone</h2>
        <div className='border w-80 p-5'>
        <div className="row px-0 mx-0">
                <div className="col-12">
  <FormControl fullWidth>
  <InputLabel id="language">English</InputLabel>
  <Select
    labelId="language"
    id="language"
    value={language}
    label="language"
    onChange={e => setLanguage(e.target.value)}
  >
    <MenuItem value={'en'}>English</MenuItem>
    <MenuItem value={'ar'}>Arabic</MenuItem>
  </Select>
</FormControl>
                    </div>
                    <div>
  <FormControl fullWidth>
  <InputLabel id="timezone">Time Zone</InputLabel>
  <Select
    labelId="timezone"
    id="timezonez"
    value={timezonez}
    label="timezone"
    onChange={e => settimezone(e.target.value)}
  >
    <MenuItem value={'utc'}>UTC</MenuItem>
    <MenuItem value={'gtm'}>GTM</MenuItem>
  </Select>
</FormControl>
                    </div>

                </div>
            </div>
            </div>


            <div>
        <h2>Notifications</h2>
        <div className='border w-80 p-5'>
        <div className="row px-0 mx-0">
                <div className="col-12">
    <FormGroup>
    <p><b>SMS Notifications</b></p>
    <p className='fontsmall'>Receive booking requests by SMS on your verified phone number.</p>
      {/* <FormControlLabel control={}  /> */}
      <Switch checked={checked1} onChange={() => setChecked1(!checked1)} />
    </FormGroup>
                    </div>
                    <div>
                    <FormGroup>
    <p><b>I want ot receive move-in reminders via email</b></p>
      {/* <FormControlLabel control={}  /> */}
      <Switch checked={checked2} onChange={() => setChecked2(!checked2)} />
    </FormGroup>
                    </div>
                    <Button>Save user Profile</Button>
                </div>
            </div>
            </div>
            </form>






            <form>
            <div>
        <h2>Promotional communications</h2>
        <div className='border w-80 p-5'>
        <div className="row px-0 mx-0">
                <div className="col-12">
                <FormGroup>
    <p><b>Email</b></p>
      {/* <FormControlLabel control={}  /> */}
      <Switch checked={checked3} onChange={() => setChecked3(!checked3)}/>
    </FormGroup>
                    </div>
                    <div>
                    <FormGroup>
    <p><b>SMS</b></p>
      {/* <FormControlLabel control={}  /> */}
      <Switch checked={checked4} onChange={() => setChecked4(!checked4)} />
    </FormGroup>
                    </div>
                    <div>
                    <FormGroup>
    <p><b>Phone Call</b></p>
      {/* <FormControlLabel control={}  /> */}
      <Switch checked={checked5} onChange={() => setChecked5(!checked5)} />
    </FormGroup>
                    </div>

                </div>
            </div>
            </div>
            </form>
            <form>
            <div>
        <h2>Delete account</h2>
        <div className='border w-80 p-5'>
        <div className="row px-0 mx-0">
                <div className="col-12">
    <p className='fontsmall'>Receive booking requests by SMS on your verified phone number.</p>

                    </div>
                    <Button>Delete account</Button>
                </div>
            </div>
            </div>
            </form>
            </div>
    </ProfileLayout>
    );
}

export default MyProfile