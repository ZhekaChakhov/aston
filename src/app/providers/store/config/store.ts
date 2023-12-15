import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { characterApi } from "src/shared/api/charactersApi";

import { charactersReducer } from "./reducers/CharactersSlice";
import { oneCharacterReducer } from "./reducers/OneCharacterSlice";

const rootReducer = combineReducers({
  charactersReducer,
  oneCharacterReducer,
  [characterApi.reducerPath]: characterApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
