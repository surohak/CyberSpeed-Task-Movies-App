export interface IMethods {
  delete: 'DELETE';
  get: 'GET';
  put: 'PUT';
  post: 'POST';
  patch: 'PATCH';
}

export type RequestMethodsType = 'DELETE' | 'GET' | 'PUT' | 'POST' | 'PATCH';

export enum ApiTypes {
  search = 'search',
  media = 'media',
  photo = 'photo',
  justWatch = 'justwatch',
}

export interface IRequestParams {
  type: ApiTypes;
  url?: string;
  pathId?: string;
  handler?: () => void;
}

export interface IAPIOptions {
  method?: RequestMethodsType;
  path?: string;
  body?: { [key: string]: unknown } | unknown[] | File;
  params?: IRequestParams;
  query?: string;
}
