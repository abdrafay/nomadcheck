import {useState, useContext, useEffect} from 'react'
import Axios from 'axios'
import StateContext from '../StateContext'

const MyReservation = ({item}) => {
    const appState = useContext(StateContext)
    const [room, setRoom] = useState({})
    const getRoom = async () => {
        try {
            const {data} = await Axios.get(`${appState.apiEndPoint}/api/rooms/${item.room_id}`,{
              headers: {
                'Authorization': `Bearer ${appState.token}`
              }
            })
            console.log(data, 'data')
              setRoom(data.room);
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getRoom();
    },[])
  return (
    <div>
      <h1>{room.listing_name}</h1>

    </div>
  )
}

export default MyReservation