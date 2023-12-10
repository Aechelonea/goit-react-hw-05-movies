import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/movieApi';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const defaultImage = 'https://dummyimage.com/300x450/ffffff/000000&text=No+image';

  if (isLoading) {
    return <div>Loading cast...</div>;
  }

  if (!cast.length) {
    return <div>No cast information available.</div>;
  }

  return (
    <div className={styles.castContainer}>
      {cast.map(member => (
        <div key={member.cast_id} className={styles.card}>
          <img
            src={
              member.profile_path
                ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                : defaultImage
            }
            alt={member.name}
            className={styles.cardImage}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = defaultImage;
            }}
          />
          <div className={styles.cardBody}>
            <h3 className={styles.cardTitle}>{member.name}</h3>
            <p className={styles.cardText}>{member.character}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;