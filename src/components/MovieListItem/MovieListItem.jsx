import { Link, useLocation  } from 'react-router-dom';

const MovieListItem = ({ movie }) => {
  const { title, id } = movie;
 const location = useLocation();

  return (
    <Link
          to={`/movies/${id}`}
          state={{
        from: location.pathname + location.search,
      }}
      >
      <div>
       
          <p>{title }</p>
      </div>
    </Link>
  );
};

export default MovieListItem