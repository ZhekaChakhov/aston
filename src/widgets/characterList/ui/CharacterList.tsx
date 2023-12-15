// import React from "react";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "src/app/providers/store/config/hooks/redux";
import { fetchCharacters } from "src/app/providers/store/config/reducers/ActionCreators";
import { CharacterCard } from "src/entities/CharacterCard";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

export const CharacterList = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.charactersReducer,
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div className="w-full my-8">
      {isLoading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      {error && <h1>{error}</h1>}
      <div className="grid grid-cols-4 gap-5">
        {characters.results &&
          characters.results.map((character: Character) => (
            <div key={character.id} className="">
              <CharacterCard character={character} />
            </div>
          ))}
      </div>
    </div>
  );
};
