import { useSearchParams } from "react-router-dom";
import { CharacterCard } from "src/entities/CharacterCard";
import { useGetByNameQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";

export const Search = () => {
  const [value] = useSearchParams();

  if (!value.get("name")) {
    return <p className="text-2xl">Characters not found</p>;
  }

  const { data: characters } = useGetByNameQuery(value.get("name"));

  const { data: favoriteCharacters } =
    favoritesApi.useGetFavoriteCharactersQuery();

  return (
    characters.results && (
      <div className="grid grid-cols-3 gap-8">
        {characters.results.map((character: Character) => (
          <div className="text-lg" key={character.id}>
            <CharacterCard
              character={character}
              isFavorite={
                !!favoriteCharacters?.find((item) => item?.id === character.id)
                  ?.idDB
              }
            />
          </div>
        ))}
      </div>
    )
  );
};
