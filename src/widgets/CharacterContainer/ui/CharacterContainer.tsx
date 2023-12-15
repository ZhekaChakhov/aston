// import React from "react";
import { CharacterCard } from "src/entities/CharacterCard";
import { characterApi } from "src/shared/api/charactersApi";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

export const CharacterContainer = () => {
  const {
    data: characters,
    error,
    isLoading,
  } = characterApi.useGetCharactersQuery(2);

  return (
    <div className="w-full my-8">
      {isLoading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <div className="grid grid-cols-4 gap-5">
        {characters?.results &&
          characters.results.map((character: Character) => (
            <div key={character.id} className="">
              <CharacterCard character={character} />
            </div>
          ))}
      </div>
    </div>
  );
};
