import {useContext, useState, useEffect} from 'react';
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
import PersonIcon from '@mui/icons-material/Person';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Alert, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DispatchContext from '../DispatchContext';
import StateContext from '../StateContext';
import LogoutIcon from "@mui/icons-material/Logout";

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

const ProfileLayout =({children}) => {
  const navigate = useNavigate();
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)
  const handleLogout = () => {
    appDispatch({ type: "LOGOUT" });
    navigate("/");
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const navitems = [{name: 'Profile', route: '/profile'}, {name: 'My Properties', route: '/profile/my-properties'},
  {name: 'Add Property', route: '/property/add'}, {name: "Other Listing", route: '/properties'} 
//   {name: 'Add Property', route: 'properties/add'}
]


  return (
    <Box sx={{ display: 'flex' }}>
      
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Divider />
        <List>
          {/* {navitems.map((item, index) => ( */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon /> 
                </ListItemIcon>
                <Link to="/profile">Profile</Link>
              </ListItemButton>
            </ListItem>
            {appState.user.role === "Host" && (
              <>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon>
                <Link to="/profile/my-properties">My Properties</Link>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon /> 
                </ListItemIcon>
                <Link to="/reservations">Reservations</Link>
              </ListItemButton>
            </ListItem>
            
            
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddHomeIcon /> 
                </ListItemIcon>
                <Link to="/property/add">Add Property</Link>
              </ListItemButton>
            </ListItem>
            </>
              )}
              {appState.user.role === "Tenant" && (
                <ListItem  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon /> 
                  </ListItemIcon>
                  <Link to="/my-reservations">My Reservations</Link>
                </ListItemButton>
              </ListItem>
              )}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <LogoutIcon />
                </ListItemIcon>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
      <Main open={open} className="profilelayout">
      <div className="container profile-container">
      <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            className="DrawerIcon"
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
            {children}
      </div>
      
        </Main>
        </Box>
    );
}

export default ProfileLayout