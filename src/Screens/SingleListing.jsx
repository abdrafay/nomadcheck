import { Button, IconButton } from "@mui/material";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router";
import CreateReviewForm from "../Components/CreateReviewForm";
import UpdateReviewForm from "../Components/UpdateReviewForm";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const SingleListing = () => {
  const navigate = useNavigate();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");
  const [room, setRoom] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [review, setReview] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);

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
  const getReviews = async () => {
    try {
      const { data } = await Axios.get(
        `${appState.apiEndPoint}/api/reviews?room_id=${id}`,{
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
        
      );
      console.log(data, "reviews");
      setLoading(false)
      if (data.success) {
        setReviews(data.reviews);
        setIsUpdate(false);
        
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
  
  const handleReviewDelete = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await Axios.delete(
        `${appState.apiEndPoint}/api/reviews/${id}`,
        {
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
      );
      if (data.success) {
        alert("Review Deleted");
        getReviews();
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleReviewEdit = (e,review) => {
    console.log(review,"edit");
    e.preventDefault();
    setReview(review);
    setIsUpdate(true);
  }
  useEffect(() => {
    getRoomData();
    getReviews();
  }, []);

  return (
    loading ? <h1>Loading</h1> : (
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

      <div>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="d-flex align-items-center">
            <div>
              <h4>{review.user.first_name} {review.user.last_name}</h4>
            </div>
            <p className="m-0">{review.comment}</p>
            <p className="m-0 ms-4">Rating: {review.star}</p>
            {
              appState.user.id === review.user.id && (
                
                <>
                <IconButton onClick={(e) => handleReviewEdit(e,review)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={(e) => handleReviewDelete(e,review.id)}>
              <DeleteOutlineIcon />
            </IconButton>
            </>
              )
            }
            
          </div>
        ))}
        <div>
          <h4>Add a review</h4>
          {!isUpdate ? (
            <CreateReviewForm getReviews={getReviews} roomId={id} />
          ) : (
            <UpdateReviewForm getReviews={getReviews} roomId={id} review={review} />
          )}

        </div>
      </div>
    </div>
    )
  );
};

export default SingleListing;
