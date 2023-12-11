import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterData } from "src/app/providers/models/Character";

import { fetchCharacters } from "./ActionCreators";

interface CharacterState {
  characters: CharacterData;
  isLoading: boolean;
  error: string;
}

const initialState: CharacterState = {
  characters: {},
  isLoading: false,
  error: "",
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCharacters.fulfilled.type,
        (state, action: PayloadAction<CharacterData>) => {
          state.isLoading = false;
          state.error = "";
          state.characters = action.payload;
        },
      )
      .addCase(fetchCharacters.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const characterReducer = characterSlice.reducer;
