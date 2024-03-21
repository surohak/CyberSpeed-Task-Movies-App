import { createSlice } from '@reduxjs/toolkit';

import generalInitState from './initState';

const generalSlice = createSlice({
  name: 'general',
  initialState: generalInitState,
  reducers: {
    resetGeneral: () => ({ ...generalInitState }),
  },
});

export default generalSlice;
