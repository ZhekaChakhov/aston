import { RootState } from "src/app/providers/store/config/store";

export const getCharacters = (state: RootState) => state.search.results;
