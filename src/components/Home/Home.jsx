import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/movieApi';
import styles from './Home.module.css';
import Navigation from '../Navigation/Navigation';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        <div className={styles.container}>
          <h1>Trending Movies</h1>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul className={styles.movieList}>
              {movies.map(movie => (
                <li key={movie.id} className={styles.movieItem}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
