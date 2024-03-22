import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import server from '__tests__/setup/handlers';
import { mockedMovieDetails } from '__tests__/setup/mocks';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { http as rest, HttpResponse } from 'msw';
import MovieDetails from 'pages/MovieDetails';
import { beforeAll, describe, expect, test, vi } from 'vitest';

describe('MovieDetails', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const original = await importOriginal();

      return {
        // @ts-ignore
        ...original,
        useParams: () => ({ id: 'tt1234567' }),
      };
    });

    server.use(
      rest.get('https://search.imdbot.workers.dev/*', () => {
        return HttpResponse.json(mockedMovieDetails, { status: 200 });
      }),
    );
  });
  test('MovieDetails renders without crashing', async () => {
    render(
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>,
    );

    expect(screen.getByTestId('loading')).toBeTruthy();

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();

      expect(screen.getByText('About film')).toBeTruthy();
      expect(screen.getByText('Rating')).toBeTruthy();
      expect(screen.getByText('Reviews')).toBeTruthy();

      expect(
        screen.getByText(
          `${mockedMovieDetails.short.name} (${new Date(mockedMovieDetails.short.datePublished).getFullYear()})`,
        ),
      ).toBeTruthy();

      // about movie
      expect(screen.getByText(mockedMovieDetails.short.genre.join(', '))).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short['@type'])).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.actor[2].name)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.description)).toBeTruthy();

      // rating movie
      expect(screen.getByText(mockedMovieDetails.short.aggregateRating.ratingValue)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.aggregateRating.ratingCount)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.aggregateRating.bestRating)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.aggregateRating.worstRating)).toBeTruthy();

      // reviews movie
      expect(screen.getByText(mockedMovieDetails.short.review.author.name)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.review.name)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.review.reviewBody)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.review.reviewRating.ratingValue)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.review.reviewRating.bestRating)).toBeTruthy();
      expect(screen.getByText(mockedMovieDetails.short.review.reviewRating.worstRating)).toBeTruthy();
    });
  });
});
