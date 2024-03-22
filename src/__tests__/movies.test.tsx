import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mockedMoviesList } from '__tests__/setup/mocks';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Movies from 'pages/Movies';
import { beforeAll, describe, expect, test, vi } from 'vitest';

const sortedMovies = mockedMoviesList.description.sort((a, b) => b['#RANK'] - a['#RANK']);

const mockedUseNavigate = vi.fn();

describe('Movies', () => {
  beforeAll(() => {
    vi.mock('react-router-dom', async (importOriginal) => {
      const original = await importOriginal();

      return {
        // @ts-ignore
        ...original,
        useNavigate: () => mockedUseNavigate,
      };
    });
  });
  test('Movies renders without crashing', async () => {
    render(
      <BrowserRouter>
        <Movies />
      </BrowserRouter>,
    );

    expect(screen.getByPlaceholderText('Search movie')).toBeTruthy();
    expect(screen.getByTestId('loading')).toBeTruthy();

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).toBeNull();
      expect(screen.getByText(sortedMovies[0]['#AKA'])).toBeTruthy();
      expect(screen.getByText(sortedMovies[0]['#ACTORS'])).toBeTruthy();
      expect(screen.getByText(sortedMovies[0]['#RANK'])).toBeTruthy();
      expect(screen.getAllByRole('link')[0].getAttribute('href')).toBe(sortedMovies[0]['#IMDB_URL']);
    });

    fireEvent.change(screen.getByPlaceholderText('Search movie'), { target: { value: 'The' } });

    await waitFor(() => expect(screen.getByTestId('loading')).toBeTruthy());
    await waitFor(() => expect(screen.queryByTestId('loading')).toBeNull());
  });
  test('click of movie item', async () => {
    render(
      <BrowserRouter>
        <Movies />
      </BrowserRouter>,
    );

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('movie-item-0'));
      expect(mockedUseNavigate).toHaveBeenCalledWith(`/movies/${sortedMovies[0]['#IMDB_ID']}`);
    });
  });
});
