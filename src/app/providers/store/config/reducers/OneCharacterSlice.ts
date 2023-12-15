import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "src/shared/models/Character";

import { fetchCharacterById } from "./ActionCreators";

interface CharacterState {
  character?: Character;
  isLoading: boolean;
  error: string;
}

const initialState: CharacterState = {
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
        fetchCharacterById.fulfilled.type,
        (state, action: PayloadAction<Character>) => {
          state.isLoading = false;
          state.error = "";
          state.character = action.payload;
        },
      )
      .addCase(fetchCharacterById.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacterById.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const oneCharacterReducer = characterSlice.reducer;
