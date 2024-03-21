import isEqual from 'react-fast-compare';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IReduxState } from 'store';

const useMemoSelector: TypedUseSelectorHook<IReduxState> = (selector, comparator = isEqual) =>
  useSelector(selector, comparator);

export default useMemoSelector;
