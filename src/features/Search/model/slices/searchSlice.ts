import { createSlice } from "@reduxjs/toolkit";
import { CharacterData } from "src/shared/models/Character";

const initialState: CharacterData = {
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { actions: searchActions } = searchSlice;
export const { reducer: searchReducer } = searchSlice;
