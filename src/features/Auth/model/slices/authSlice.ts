import { createSlice } from "@reduxjs/toolkit";

import { login, logout, signup } from "../actions/authThunk";

type Status = "inactive" | "pending" | "succeeded" | "failed";

export interface User {
  user: {
    uid: string | null;
  };
  success: Status;
}

const initialState: User = {
  success: "inactive",
  user: {
    uid: null,
  },
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.success = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.success = "succeeded";
        state.user.uid = action.payload.uid;
      })
      .addCase(login.rejected, (state) => {
        state.success = "failed";
      })
      .addCase(signup.pending, (state) => {
        state.success = "pending";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.success = "succeeded";
        state.user.uid = action.payload.uid;
      })
      .addCase(signup.rejected, (state) => {
        state.success = "failed";
      })
      .addCase(logout.pending, (state) => {
        state.success = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.success = "succeeded";
        state.user.uid = null;
      })
      .addCase(logout.rejected, (state) => {
        state.success = "failed";
      });
  },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
