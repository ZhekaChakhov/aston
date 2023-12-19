import { RootState } from "src/app/providers/store/config/store";

export const setUserToLocalStorage = (state: RootState) => {
  localStorage.setItem("currentUser", JSON.stringify(state.auth.user));
};
