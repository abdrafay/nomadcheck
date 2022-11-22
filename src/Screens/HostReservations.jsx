import {useState, useEffect, useContext} from 'react'
import ProfileLayout from '../Layout/ProfileLayout'
import StateContext from '../StateContext'
import Axios from 'axios'
import MyReservation from '../Components/MyReservation'

const HostReservations = () => {
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
    getReservations();
  },[])
return (
    <ProfileLayout>
        <h1>My Reservations</h1>
        {reservations && reservations.map((item, ind) => <MyReservation item={item} key={ind} />)}
    </ProfileLayout>
  )
}

export default HostReservations