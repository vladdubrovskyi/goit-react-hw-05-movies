import MovieListItem from "components/MovieListItem/MovieListItem"

const MovieList = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MovieList