import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Movies = lazy(() => import(/* webpackChunkName: "MoviesPage" */ 'pages/Movies'));
const MovieDetails = lazy(() => import(/* webpackChunkName: "MovieDetailsPage" */ 'pages/MovieDetails'));

export enum Paths {
  empty = '/',
  movies = '/movies',
  movieDetails = '/movies/:id',
}

export interface IRoute {
  id: number;
  name: string;
  path: Paths;
  Component: LazyExoticComponent<() => JSX.Element> | ComponentType;
  // hide?: boolean;
  // isForMobile?: boolean;
  // hideInMobile?: boolean;
  // browserTabName?: string;
  // pageHeaderName?: string;
  // exact?: boolean;
  // relativeRouteId?: number;
  // universal?: boolean;
}

const routes: IRoute[] = [
  {
    id: 1,
    name: 'Movies',
    path: Paths.movies,
    Component: Movies,
  },
  {
    id: 2,
    name: 'Movie Details',
    path: Paths.movieDetails,
    Component: MovieDetails,
  },
];

export default routes;
