import { Button } from "@mui/material";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

const SingleListing = () => {
  const navigate = useNavigate();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [room, setRoom] = useState({});
  let { id } = useParams();
  const getRoomData = async () => {
    try {
      const { data } = await Axios.get(
        `${appState.apiEndPoint}/api/rooms/${id}`,
        {
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
      );
      if (data.success) {
        setRoom(data.room);
        console.log(data.room);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const reserve = async () => {
    let d1 = new Date(sDate);
    let d2 = new Date(eDate);
    let monthDiff = (d2.getDate() - d1.getDate()) / 30 +
      d2.getMonth() - d1.getMonth() +
      (12 * (d2.getFullYear() - d1.getFullYear()));
    try {
      const { data } = await Axios.post(
        `${appState.apiEndPoint}/api/reservations`,
        {
          reservation: {
            room_id: id,
            start_date: `${d1.getFullYear()}-${d1.getMonth()}-${d1.getDate()}`,
            end_date: `${d2.getFullYear()}-${d2.getMonth()}-${d2.getDate()}`,
            price: 12.12,
            total: 12.12,
            status: 1,
            booking_status: 0,
            total_months: monthDiff,
            service_fee: 10.9,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
      );
      console.log(data);
      if (data.success) {
        alert("Reservation Made");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (room.start_date) {
      const d = new Date(room.start_date);
      console.log(d);
      console.log(d.getMonth());
      
    }
  }, [room]);

  useEffect(() => {
    getRoomData();
  }, []);

  return (
    <div>
      <h1 className="title">{room.listing_name}</h1>

      {appState.user.role === "Tenant" && (
        <form action="">
          <input
            type="date"
            value={sDate}
            onChange={(e) => setSDate(e.target.value)}
          />
          <input
            type="date"
            value={eDate}
            onChange={(e) => setEDate(e.target.value)}
          />

          <Button variant="contained" onClick={reserve}>Reserve</Button>
        </form>
      )}
    </div>
  );
};

export default SingleListing;
