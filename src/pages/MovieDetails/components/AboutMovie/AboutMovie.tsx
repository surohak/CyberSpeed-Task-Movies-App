import React from 'react';

import styles from '../../MovieDetails.module.scss';

import { IMovieDetails } from 'types';

interface IAboutMovieProps {
  movie: IMovieDetails;
}

const AboutMovie = ({ movie }: IAboutMovieProps) => {
  return (
    <>
      <span className={styles.sectionTitle}>About film</span>
      <div className={styles.sectionContainer}>
        <span>Year: </span>
        <span>{new Date(movie.date).getFullYear()}</span>
        <span>Genres</span>
        <span>{movie.genres.join(', ')}</span>
        <span>Type</span>
        <span>{movie.type}</span>
        <span>Keywords</span>
        <span>{movie.keywords}</span>
        <span>Actors</span>
        <div>
          {movie.actors.map((actor, index) => (
            <a key={actor.url} href={actor.url} target="_blank" rel="noreferrer">
              {actor.name} {index !== movie.actors.length - 1 && ', '}
            </a>
          ))}
        </div>
        <span>Description</span>
        <span>{movie.description}</span>
      </div>
    </>
  );
};

export default AboutMovie;
