import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authMiddleware } from "src/features/Auth";
import { authReducer } from "src/features/Auth/model/slices/authSlice";
import { characterApi } from "src/shared/api/charactersApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [characterApi.reducerPath]: characterApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(characterApi.middleware)
        .concat(authMiddleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
