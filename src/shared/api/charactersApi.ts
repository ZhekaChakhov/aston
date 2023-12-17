import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { Character } from "../models/Character";
import { CharacterData } from "../models/Character";

const baseUrl = "https://rickandmortyapi.com/api";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (build) => ({
    getCharacters: build.query<CharacterData, number | void>({
      query: (page = 1) => ({
        url: `${baseUrl}/character/?page=${page}`,
      }),
    }),
    getById: build.query({
      query: (id) => ({
        url: `${baseUrl}/character/${id}`,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetByIdQuery } = characterApi;
