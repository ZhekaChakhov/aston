import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Character } from "src/app/providers/store/config/models/Character";

export const fetchCharacters = createAsyncThunk(
  "character/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Character[]>(
        "https://rickandmortyapi.com/api/character",
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить персонажей");
    }
  },
);

export const fetchCharacterById = createAsyncThunk(
  "character/fetchCharacterById",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<Character>(
        `https://rickandmortyapi.com/api/character/${id}`,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить персонажей");
    }
  },
);
