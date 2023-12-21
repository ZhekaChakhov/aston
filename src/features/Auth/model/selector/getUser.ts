import { RootState } from "src/app/providers/store/config/store";

export const getUser = (state: RootState) => {
  return state.auth.user;
};
