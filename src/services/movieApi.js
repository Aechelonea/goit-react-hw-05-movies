import axios from 'axios';

const API_KEY = 'f2f7a3d782ac6a235f03b18407d4c171';
const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key:API_KEY
};

const fetchApi = async (url, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

export const fetchTrendingMovies = () => {
  return fetchApi('/trending/movie/day');
};

export const searchMovies = query => {
  return fetchApi('/search/movie', { query: encodeURIComponent(query) });
};

export const getMovieDetails = movieId => {
  return fetchApi(`/movie/${movieId}`);
};

export const getMovieCredits = movieId => {
  return fetchApi(`/movie/${movieId}/credits`);
};

export const getMovieReviews = movieId => {
  return fetchApi(`/movie/${movieId}/reviews`);
};

const api = {
  fetchTrendingMovies,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews
};

export default api;