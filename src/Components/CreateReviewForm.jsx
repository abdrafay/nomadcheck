import { Button } from '@mui/material';
import Axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import StateContext from '../StateContext';

const CreateReviewForm = ({getReviews,roomId}) => {

  const appState = useContext(StateContext)
  const [star, setStar] = useState(0)
  const [comment, setComment] = useState('')

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(
        `${appState.apiEndPoint}/api/reviews`,
        {
          review: {
            room_id: roomId,
            star: star,
            comment: comment,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${appState.token}`,
          },
        }
      );
      if (data.success) {
        alert("Review Added");
        getReviews()
        setStar(0);
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleReviewSubmit}>
            <select name="rating" onChange={e => setStar(e.target.value)} value={star} width="" id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <textarea name="comment" value={comment} id="" onChange={e => setComment(e.target.value)} cols="30" rows="3"></textarea>
            <Button type="submit" variant="contained">Submit</Button>
          </form>
  )
}

export default CreateReviewForm