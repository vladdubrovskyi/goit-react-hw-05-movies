import axios from "axios"

const API_KEY = "12ac67bb02e31e1b9995aa611fe26dc2"
const URL_TRENDS = "https://api.themoviedb.org/3/trending/movie/day"
const URL_SEARCH_BY_ID = 'https://api.themoviedb.org/3/movie';
const URL_SEARCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

export async function getTrendingMovies() {
axios.defaults.params = {
    api_key: API_KEY,
    };
    try {
        const { data } = await axios.get(`${URL_TRENDS}`);
    return data.results;
  } catch (error) {console.log(error)} 
}

export async function getMovieById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}`);

    return Promise.resolve(data);
  } catch (error) {console.log(error)}
}


export async function getCastById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/credits`);
    return data.cast;
  } catch (error) {console.log(error)}
}


export async function getReviewsById(id) {
  axios.defaults.params = {
    api_key: API_KEY,
    page: 1,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_ID}/${id}/reviews`);
    return data.results;
  } catch (error) {console.log(error)}
}


export async function getMovieByName(name) {
  axios.defaults.params = {
    api_key: API_KEY,
    query: `${name}`,
  };
  try {
    const { data } = await axios.get(`${URL_SEARCH_BY_NAME}`);
    return data.results;
  } catch (error) {console.log(error)}
}