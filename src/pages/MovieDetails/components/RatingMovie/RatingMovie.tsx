import React from 'react';

import styles from '../..//MovieDetails.module.scss';

import { IMovieDetails } from 'types';

interface IRatingMovieProps {
  movie: IMovieDetails;
}

const RatingMovie = ({ movie }: IRatingMovieProps) => {
  return movie.aggregateRating ? (
    <>
      <div className={styles.sectionTitle}>Rating</div>
      <div className={styles.sectionContainer}>
        <span className={styles.ratingValue}>Rating value</span>
        <span className={styles.ratingValue}>{movie.aggregateRating.ratingValue}</span>
        <span>Rating count</span>
        <span>{movie.aggregateRating.ratingCount}</span>
        <span>Best</span>
        <span>{movie.aggregateRating.bestRating}</span>
        <span>Worst</span>
        <span>{movie.aggregateRating.worstRating}</span>
      </div>
    </>
  ) : null;
};

export default RatingMovie;
