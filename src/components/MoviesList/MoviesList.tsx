import React from 'react';

import styles from './MoviesList.module.scss';

import { IMovie } from 'types';

interface IMoviesListProps {
  movies: IMovie[];
  onClickMovie?: (movie: IMovie) => void;
}

const MoviesList = ({ movies, onClickMovie }: IMoviesListProps) => {
  return (
    <div className={styles.moviesListContainer}>
      {movies.map((movie, index) => (
        <div
          key={movie['#IMDB_ID']}
          className={styles.movieItemContainer}
          onClick={() => onClickMovie && onClickMovie(movie)}
          data-testid={`movie-item-${index}`}
        >
          <img className={styles.movieItemImg} src={movie['#IMG_POSTER']} alt="movie-img" />
          <div className={styles.movieItemInfo}>
            <span className={styles.movieTitle}>{movie['#AKA']}</span>
            {movie['#ACTORS'] && (
              <div className={styles.movieActors}>
                <span>Actors: </span>
                <span>{movie['#ACTORS']}</span>
              </div>
            )}
            {movie['#IMDB_URL'] && (
              <a
                className={styles.movieImdbLink}
                href={movie['#IMDB_URL']}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                IMDb
              </a>
            )}
          </div>
          {movie['#RANK'] && (
            <div className={styles.movieItemRankContainer}>
              <span className={styles.movieItemRankLabel}>Rank</span>
              <span className={styles.movieItemRank}>{movie['#RANK']}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
