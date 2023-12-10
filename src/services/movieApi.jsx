const API_KEY = 'f2f7a3d782ac6a235f03b18407d4c171';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchApi = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
};

export const fetchTrendingMovies = () => {
  return fetchApi(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const searchMovies = query => {
  return fetchApi(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
};

export const getMovieDetails = movieId => {
  return fetchApi(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const getMovieCredits = movieId => {
  return fetchApi(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = movieId => {
  return fetchApi(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
};
