import React, { useCallback, useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from 'components/Loading';

import Api from 'services/Api';

import styles from './MovieDetails.module.scss';

import AboutMovie from './components/AboutMovie';
import RatingMovie from './components/RatingMovie';
import ReviewsMovie from './components/ReviewsMovie';
import { IMovieDetails } from 'types';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState<null | IMovieDetails>(null);

  const getMovieDetails = useCallback(async () => {
    if (!id) return;

    const res = await Api.getMovieDetails(id, () => {
      navigate('/');
    });

    if (!res) return;

    const { short } = res;

    setMovie({
      title: short?.name,
      description: short?.description,
      type: short?.['@type'],
      actors: short?.actor,
      aggregateRating: short?.aggregateRating,
      date: short?.datePublished,
      genres: short?.genre,
      image: short?.image,
      keywords: short?.keywords,
      review: {
        author: short?.review?.author?.name,
        date: short?.review?.dateCreated,
        title: short?.review?.name,
        body: short?.review?.reviewBody,
        rating: {
          ratingValue: short?.review?.reviewRating?.ratingValue,
          bestRating: short?.review?.reviewRating?.bestRating,
          worstRating: short?.review?.reviewRating?.worstRating,
        },
      },
    });
  }, [id]);

  useEffect(() => {
    void getMovieDetails();
  }, [getMovieDetails, id]);

  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.backBtn} onClick={() => navigate('/')}>
        <IoArrowBackCircleOutline />
      </div>
      {movie ? (
        <>
          <img className={styles.movieImage} src={movie.image} alt="movieDetails-img" />
          <div className={styles.infoSection}>
            <span className={styles.movieTitle}>
              {movie.title} ({new Date(movie.date).getFullYear()})
            </span>
            <AboutMovie movie={movie} />
            <RatingMovie movie={movie} />
            <ReviewsMovie movie={movie} />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetails;
