import { RootState } from "src/app/providers/store/config/store";

export const getUser = (state: RootState) => {
  localStorage.setItem("currentUser", JSON.stringify(state.auth.user));
  return state.auth.user;
};
