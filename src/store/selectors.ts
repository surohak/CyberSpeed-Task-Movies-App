import { IReduxState } from './index';
import IGeneralState from './reducers/general/types';

// main
export const getStore = (state: IReduxState): IReduxState => state;
export const getGeneral = (state: IReduxState): IGeneralState => getStore(state).general;
