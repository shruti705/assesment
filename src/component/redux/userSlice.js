import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  contact : '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setContact: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const {setName,setContact} = userSlice.actions;
export default userSlice.reducer;
