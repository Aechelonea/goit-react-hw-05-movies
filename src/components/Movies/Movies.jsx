import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/movieApi';
import styles from './Movies.module.css';
import Navigation from '../Navigation/Navigation';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // Hook to read and write the query string
  const navigate = useNavigate();

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      setQuery(searchQuery);
      fetchMovies(searchQuery);
    }
  }, [searchParams]);

  const fetchMovies = async (query) => {
    setIsLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async event => {
    event.preventDefault();
    if (!query) return;
    setSearchParams({ query }); // Update the URL with the search query
    await fetchMovies(query);
  };

  return (
    <>
      <Navigation />
      <div className={styles.container}>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for movies"
          />
          <button type="submit">Search</button>
        </form>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul className={styles.movieList}>
            {movies.map(movie => (
              <li key={movie.id} className={styles.movieItem}>
                <span
                  className={styles.movieLink}
                  onClick={() => navigate(`/movies/${movie.id}`)}
                >
                  {movie.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Movies;
