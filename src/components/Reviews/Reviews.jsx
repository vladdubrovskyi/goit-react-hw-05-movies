import { getReviewsById } from "components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams();
   
    useEffect(() => {
        async function GetReviews() {
            try {
                const review = await getReviewsById(movieId)
                setReviews(review)
            } catch (error) { console.log(error) }
        }
        GetReviews()
    }, [movieId])
    
    return (<>
        {reviews  && 
            <ul>
                {reviews.map(({author, id,content}) => {
                    return <li key={id}>
                        <p>Name : {author}</p>
                        <p>Comment : {content }</p>
</li>})}
            </ul>}
    </>)
       
}

export default Reviews