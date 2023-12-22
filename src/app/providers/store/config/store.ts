import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "src/features/Auth";
import { authReducer } from "src/features/Auth/model/slices/authSlice";
import { searchReducer } from "src/features/Search/model/slices/searchSlice";
import { characterApi } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { historyApi } from "src/shared/api/historyApi";

const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  [characterApi.reducerPath]: characterApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [historyApi.reducerPath]: historyApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(characterApi.middleware)
        .concat(favoritesApi.middleware)
        .concat(historyApi.middleware)
        .concat(authMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
