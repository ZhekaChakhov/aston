import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../../../../firebase";
import { authActions } from "../slices/authSlice";

interface Credentials {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Credentials, thunkAPI) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response.user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Invalid login or password");
    }
  },
);

export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: Credentials, thunkAPI) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return response.user;
    } catch (err) {
      return thunkAPI.rejectWithValue("This user already exists");
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue("Got problems with logout");
  }
});

export const authCheck = createAsyncThunk(
  "auth/check",

  (_, thunkAPI) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const { uid } = user;
          thunkAPI.dispatch(authActions.setUser({ uid }));
        }
      });
    } catch (err) {
      return thunkAPI.rejectWithValue("Authentication check error");
    }
  },
);
