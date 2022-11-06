
import Layout from "components/Layout/Layout"
import HomePage from "pages/HomePage/HomePage"
import {Routes, Route} from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/movieId:" element={<div>moviecard</div> } />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};
