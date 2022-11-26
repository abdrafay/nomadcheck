import { styled, alpha } from "@mui/material/styles";
import {
  Button,
  Menu,
  MenuItem
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import Axios from 'axios'
import StateContext from "../StateContext";


import BookingTableCard from "../Components/BookingTableCard";

// Icons
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const MyBookings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState("Today");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    console.log();
    setValue(e.target.innerText);
    setAnchorEl(null);
  };
  const appState = useContext(StateContext)
  const [reservations, setReservations] = useState([])

  const getReservations = async () => {
    try {
        const {data} = await Axios.get(`${appState.apiEndPoint}/api/reservations/my_reservations`, {
            headers: {
                Authorization: `Bearer ${appState.token}`
            }
        })
        console.log(data)
        if(data.success) {
            setReservations(data.reservations)
        }
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    console.log("useEffect");
    getReservations();
  },[])

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1><strong>My Bookings</strong></h1>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            variant="outlined"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {value ? value : "Today"}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="row m-0 justify-content-between align-items-center">
        <div className="w-20">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2">
                <h5>Hotel Name</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <CloseIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2">
                <h5>Hotel Name</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AccessTimeIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2">
                <h5>Hotel Name</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2">
                <h5>Hotel Name</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-20">
          <div className="pr_info_card">
            <div className="row m-0 align-items-center">
              <div className="col-4 p-0">
                <div className="pr_icon_bck">
                  <AttachMoneyIcon />
                </div>
              </div>
              <div className="col-8 p-0 ps-2">
                <h5>Hotel Name</h5>
                <p>Address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="latest_requests" className="mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h5 className="m-0"><strong>Latest Requests</strong></h5>
          </div>
          <div className="src_bar">
            <input type="search" placeholder="search" />
            <SearchIcon />
          </div>
        </div>
        <hr />
        <div className="cst_table">
          <div className="row m-0 m_row">
            <div className="w-35 px-1">
              <h5>Full Information</h5>
            </div>
            <div className="w-30 px-1">
              <h5>Other Details</h5>
            </div>
            <div className="w-15 px-2">
              <h5>Request No.</h5>
            </div>
            <div className="w-20 px-1">
              <h5>Actions</h5>
            </div>
          </div>
          {reservations.map( (reservation, index) => <BookingTableCard key={index} reservation={reservation} />)}
         

          {/* <div className="table-responsive">

        
        <table className="w-100 table">
            <thead>
              <tr>
                <th style={{width: "40%"}}>Full Information</th>
                <th style={{width: "35%"}}>OtherDetails</th>
                <th style={{width: "10%"}}>Request No</th>
                <th style={{width: "15%"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <div className="row m-0 align-items-center">
                <div className="col-4 p-0">
                    <img src={card} alt="" className="img-fluid round-border" />
                </div>
                <div className="col-8">
                  <h4 className="m-0"><strong>Room 2 for rent in nice Apartment for students and young professors</strong></h4>
                </div>
              </div>
                </td>
                <td>
                <table>
                <tr>
                  <th>Request By:</th>
                  <td> Hanna</td>
                </tr>
                <tr>
                  <th>Period</th>
                  <td> Aug 15, 2022 to Oct 15, 2022</td>
                </tr>
                <tr>
                  <th>Pay Amount</th>
                  <td> USD 393.60</td>
                </tr>
                <tr>
                  <th>Guests</th>
                  <td> 1</td>
                </tr>
              </table>
                </td>
                <td>
                <h4>27325</h4>
                </td>
                <td><div className="d-flex align-items-center">
                <Button variant="contained">Accept</Button>
                <Button variant="contained">Reject</Button>
              </div></td>
              </tr>
            </tbody>
        </table>
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default MyBookings;
