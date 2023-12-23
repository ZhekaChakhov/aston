import { useSearchParams } from "react-router-dom";
import { CharacterCard } from "src/entities/CharacterCard";
import { useGetByNameQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

export const Search = () => {
  const [value] = useSearchParams();

  if (!value.get("name")) {
    return <p className="text-2xl">Characters not found</p>;
  }

  const { data: characters, isLoading: isCharactersLoading } =
    useGetByNameQuery(value.get("name"));

  const { data: favoriteCharacters, isLoading: isFavoriteLoading } =
    favoritesApi.useGetFavoriteCharactersQuery();

  if (isCharactersLoading || isFavoriteLoading) {
    return <Loader />;
  }

  return (
    characters.results && (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-8">
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
