import { getMovieById } from "components/api"
import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation, useNavigate } from "react-router-dom";



const MovieDetails = () => {
const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
      const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };
   
    useEffect(() => {
         async function GetMovie () {
            try {
                const movie = await getMovieById(movieId)
                setMovie(movie)
            } catch (error) { console.log(error) }
        }
        GetMovie()
},[movieId])    
   

 const movieScore = score => {
    return Math.floor(score * 10) + '%';
    };
const movieGanres = genres => {
    if (genres === null) return;
    return genres.map(genre => genre.name).join(', ');
  };
    
    return (
        <>
             <button type="button" onClick = {onGoBack}>
        Back to movies list
      </button>
            {movie && <div> <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title}`} />
                <h2>{movie.title}</h2>
                <p>User score : {`${movieScore(movie.vote_average)}`}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <p>{`${movieGanres(movie.genres)}`}</p>
                <div> Additional infromation</div>
            <Link to={`/movies/${movie.id}/cast`} state={location.state}>
                Cast
                </Link>
             <Link to={`/movies/${movie.id}/reviews`} state={location.state}>
                Reviews
                </Link>   
            </div>}

            <Outlet/>
        </>
    ) 
}

export default MovieDetails