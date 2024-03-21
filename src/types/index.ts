export interface IMovie {
  '#TITLE': string;
  '#YEAR': number;
  '#IMDB_ID': string;
  '#ACTORS': string;
  '#AKA': string;
  '#IMDB_URL': string;
  '#IMDB_IV': string;
  '#IMG_POSTER': string;
  '#RANK': number;
  photo_width: number;
  photo_height: number;
}

export interface IMovieDetails {
  title: string;
  description: string;
  type: string;
  actors: Array<{
    name: string;
    url: string;
  }>;
  aggregateRating: {
    ratingCount: number;
    ratingValue: number;
    bestRating: number;
    worstRating: number;
  };
  date: string;
  genres: string[];
  image: string;
  keywords: string;
  review: {
    author: string;
    date: string;
    title: string;
    body: string;
    rating: {
      ratingValue: number;
      bestRating: number;
      worstRating: number;
    };
  };
}
