import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterData } from "src/app/providers/store/config/models/Character";

import { fetchCharacters } from "./ActionCreators";

interface CharactersState {
  characters: CharacterData;
  isLoading: boolean;
  error: string;
}

const initialState: CharactersState = {
  characters: {},
  isLoading: false,
  error: "",
};

export const charactersSlice = createSlice({
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

export const charactersReducer = charactersSlice.reducer;
