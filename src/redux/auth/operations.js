import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from 'api/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
export const singUp = createAsyncThunk(
  'auth/singUp',
  async ({ email, password }, thunkApi) => {
    try {
      const res = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );
      const user = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
        refreshToken: res.user.refreshToken,
      };
      return user;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
