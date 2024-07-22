import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { updateScore } = scoreSlice.actions;
export default scoreSlice.reducer;
