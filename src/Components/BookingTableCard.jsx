import { Button } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import Axios from 'axios'

import card from '../images/card-01.jpg'
import StateContext from '../StateContext'

const BookingTableCard = ({reservation}) => {
  const appState = useContext(StateContext)
  const [room, setRoom] = useState({})
    const getRoom = async () => {
        try {
            const {data} = await Axios.get(`${appState.apiEndPoint}/api/rooms/${reservation.room_id}`,{
              headers: {
                'Authorization': `Bearer ${appState.token}`
              }
            })
              setRoom(data.room);
            
        } catch (error) {
            console.log(error)
        }
    }
    const handleReservation = async (status) => {
      
      try {
        const {data} = await Axios.put(`${appState.apiEndPoint}/api/reservations/${reservation.id}`, {
          reservation: {
            booking_status: status
          }
        }, {
          headers: {
            'Authorization': `Bearer ${appState.token}`
          },
        })
        if(status === 2 )
          alert('Accepted')
        else
          alert('Rejected')
      } catch (error) {
        alert("Error")
        console.log(error)
      }
    }
    useEffect(() => {
        getRoom();
    },[])
  return (
    <div className="row m-0 m_row my-2 brd-down">
          <div className="w-35 px-1">
              <div className="row m-0 align-items-center">
                <div className="col-4 p-0">
                    <img src={card} alt="" className="img-fluid round-border" />
                </div>
                <div className="col-8">
                  <h4 className="m-0"><strong>{room.listing_name}</strong></h4>
                </div>
              </div>
          </div>
          <div className="w-30 px-1">
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
          </div>
          <div className="w-15 px-2">
              <h4>27325</h4>
          </div>
          <div className="w-20 px-1">
              <div className="d-flex align-items-center">
                <Button variant="contained" onClick={() => handleReservation(2)} className="accept-btn status_btns">Accept</Button>
                <Button variant="contained" onClick={() => handleReservation(1)} className="reject-btn status_btns">Reject</Button>
              </div>
          </div>
        </div>
  )
}

export default BookingTableCard