
import Layout from "components/Layout/Layout"
import HomePage from "pages/HomePage/HomePage"
import MovieDetails from "pages/MovieDetails/MovieDetails"
import Cast from "components/Cast/Cast"
import Reviews from "components/Reviews/Reviews"
import { Routes, Route, Outlet } from "react-router-dom"



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<><Outlet/></>}>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
       
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};
