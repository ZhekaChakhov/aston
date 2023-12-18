import { RootState } from "src/app/providers/store/config/store";

export const getUser = (state: RootState) => state.auth.user;
