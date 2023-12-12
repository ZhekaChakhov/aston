// import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/providers/hooks/redux";
import { Character } from "src/app/providers/models/Character";
import { fetchCharacters } from "src/app/providers/store/reducers/ActionCreators";
import { CharacterCard } from "src/entities/characterCard";
import { Loader } from "src/shared/ui/loader";

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
              <CharacterCard
                id={character.id}
                name={character.name}
                img={character.image}
                species={character.species}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
