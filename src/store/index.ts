import { combineReducers, configureStore } from '@reduxjs/toolkit';

import generalSlice from './reducers/general';
import IGeneralState from './reducers/general/types';

export interface IReduxState {
  general: IGeneralState;
}

export const reducer = combineReducers({
  general: generalSlice.reducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export const {
  actions: { resetGeneral },
} = generalSlice;

export const { getState, dispatch } = store;
export * from './selectors';

export function getSelectors<T>(processor: (state: IReduxState) => T): T {
  return processor(getState());
}
export type RootState = ReturnType<typeof reducer>;
export type AppStore = typeof store;
export default store;
