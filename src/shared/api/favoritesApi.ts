import { createApi } from "@reduxjs/toolkit/query/react";

import { dynamicBaseQuery } from "./config/baseApi";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  idDB: string;
}

interface Favorite {
  [key: string]: Character;
}

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: dynamicBaseQuery,
  tagTypes: ["Favorites"],
  endpoints: (build) => ({
    getFavoriteCharacters: build.query<Character[], void>({
      query: () => ({
        url: "favorites.json",
      }),
      transformResponse: (data: Favorite): Character[] => {
        let charactersFromDB: Character[] = [];
        if (data) {
          charactersFromDB = Object.entries(data).map((item) => {
            return {
              ...item[1],
              idDB: item[0],
            };
          });
        }
        return charactersFromDB;
      },
      providesTags: ["Favorites"],
    }),
    addCharacter: build.mutation({
      query: (character) => ({
        url: "favorites.json",
        method: "POST",
        body: character,
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeCharacter: build.mutation({
      query: (id) => ({
        url: `favorites/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeAllFavorites: build.mutation({
      query: () => ({
        url: "favorites.json",
        method: "DELETE",
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});
