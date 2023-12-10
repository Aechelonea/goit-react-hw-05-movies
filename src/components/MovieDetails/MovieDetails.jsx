import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieApi';
import styles from './MovieDetails.module.css';
import Navigation from '../Navigation/Navigation';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const defaultImage =
    'https://dummyimage.com/300x450/ffffff/000000&text=No+image';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <button onClick={() => navigate(-1)} className={styles.goBack}>
          Go back
        </button>
        <div className={styles.movieDetails}>
          <div className={styles.movieHeader}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : defaultImage
              }
              alt={movie.title}
              className={styles.moviePoster}
            />
            <div className={styles.movieSummary}>
              <h1 className={styles.movieTitle}>
                {movie.title} ({new Date(movie.release_date).getFullYear()})
              </h1>
              <p className={styles.userScore}>
                User Score: {Math.round(movie.vote_average * 10)}%
              </p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p className={styles.genres}>
                {movie.genres.map(genre => genre.name).join(' - ')}
              </p>
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <Link to="cast" className={styles.infoLink}>
              Cast
            </Link>
            <Link to="reviews" className={styles.infoLink}>
              Reviews
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
