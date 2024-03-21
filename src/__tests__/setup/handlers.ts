import { mockedMoviesList } from '__tests__/setup/mocks';
import { http as rest, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get('https://search.imdbot.workers.dev/*', () => {
    return HttpResponse.json(mockedMoviesList, { status: 200 });
  }),
];

const server = setupServer(...handlers);

export default server;
