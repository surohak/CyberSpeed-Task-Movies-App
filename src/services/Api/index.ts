import { ApiTypes, IAPIOptions, IMethods } from './types';

class Api {
  // constants
  private baseUrl = 'imdbot.workers.dev';

  public paths = {};

  private methods: IMethods = {
    delete: 'DELETE',
    get: 'GET',
    put: 'PUT',
    post: 'POST',
    patch: 'PATCH',
  };

  // requests

  public getMoviesList = (searchValue?: string) =>
    this.request({ method: this.methods.get, params: { type: ApiTypes.search }, query: `?q=${searchValue}` });

  public getMovieDetails = (id: string) =>
    this.request({ method: this.methods.get, params: { type: ApiTypes.search }, query: `?tt=${id}` });

  private request = async (options: IAPIOptions) => {
    const { method, params, query } = options;
    const { type, url, pathId } = params || {};

    try {
      const res = await fetch(url || `https://${type}.${this.baseUrl}/${pathId || ''}${query || ''}`, {
        method,
        headers: {
          Accept: 'application/json',
        },
        credentials: 'same-origin',
      });

      const data = await res.json();

      if (!res.ok) {
        alert('Error: Something went wrong. Please try again later.');
        return;
      }

      return data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err);

      alert('Error: Something went wrong. Please try again later.');
    }
  };
}

export default new Api();

// export * from './api-utils';
export * from './types';
