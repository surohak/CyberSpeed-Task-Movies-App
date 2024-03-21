import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loading from 'components/Loading';
import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';

import { useDebounce, useMount } from 'hooks';
import Api from 'services/Api';
import { getRandomCharacter } from 'utils/helpers';
import { Paths } from 'utils/routes';

import styles from 'pages/Movies/Movies.module.scss';

import { IMovie } from 'types';

const Movies = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async (value = getRandomCharacter()) => {
    setIsLoading(true);

    const res = await Api.getMoviesList(value);

    Array.isArray(res?.description) &&
      setMovies(res.description.sort((a: IMovie, b: IMovie) => b['#RANK'] - a['#RANK']));

    setIsLoading(false);
  };

  const debouncedGetMovies = useDebounce(getMovies, 500);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchValue(value);
    debouncedGetMovies(value);
  };

  useMount(() => {
    void getMovies();
  });

  return (
    <div className={styles.moviesContainer}>
      <SearchBar value={searchValue} onChange={onChangeInput} onBlur={() => debouncedGetMovies(searchValue)} />
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList movies={movies} onClickMovie={(movie) => navigate(`${Paths.movies}/${movie['#IMDB_ID']}`)} />
      )}
    </div>
  );
};

export default Movies;
