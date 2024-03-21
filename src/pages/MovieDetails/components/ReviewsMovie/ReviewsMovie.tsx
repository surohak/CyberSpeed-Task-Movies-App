import React from 'react';

import styles from '../../MovieDetails.module.scss';

import { IMovieDetails } from 'types';

interface IReviewsMovieProps {
  movie: IMovieDetails;
}

const ReviewsMovie = ({ movie }: IReviewsMovieProps) => {
  return (
    <>
      <div className={styles.sectionTitle}>Reviews</div>
      <div className={styles.sectionContainer}>
        <span>Author</span>
        <span>{movie.review.author}</span>
        <span>Date</span>
        <span>{movie.review.date}</span>
        <span>Title</span>
        <span>{movie.review.title}</span>
        <span>Body</span>
        <span>{movie.review.body}</span>
        {movie.review.rating.ratingValue && (
          <>
            <span>Rating value</span>
            <span>{movie.review.rating.ratingValue}</span>
          </>
        )}
        {movie.review.rating.bestRating && (
          <>
            <span>Best</span>
            <span>{movie.review.rating.bestRating}</span>
          </>
        )}
        {movie.review.rating.worstRating && (
          <>
            <span>Worst</span>
            <span>{movie.review.rating.worstRating}</span>
          </>
        )}
      </div>
    </>
  );
};

export default ReviewsMovie;
