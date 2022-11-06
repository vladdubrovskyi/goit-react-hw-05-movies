import { getMovieById } from "components/api"
import { useState, useEffect } from "react";

const MovieDetails = () => {
const [movie, setMovie] = useState(null);
const { movieId } = useParams();
    useEffect(() => {
    getMovieById(movieId).then(response => setMovie(response)).then(console.log(movie))
},[movieId])    

}