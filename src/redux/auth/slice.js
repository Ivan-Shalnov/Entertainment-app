import { singUp } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(singUp.pending, (state, action) => {
        console.log(action);
      })
      .addCase(singUp.fulfilled, (state, action) => {
        console.log('.addCase ~ action', action);
        state.user = action.payload;
      })
      .addCase(singUp.rejected, (state, action) => {
        console.log(action);
      });
  },
});
export const authReducer = authSlice.reducer;
