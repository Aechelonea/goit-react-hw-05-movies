import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { getMovieReviews } from '../../services/movieApi';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (!reviews.length) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      <ul className={styles.reviewList}>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewItem}>
            <p className={styles.reviewAuthor}>Author: {review.author}</p>
            <div
              className={styles.reviewContent}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(review.content),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
