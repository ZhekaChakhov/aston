import { CharacterCard } from "src/entities/CharacterCard";
import { characterApi } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

export const CharacterContainer = (props: { page: number }) => {
  const {
    data: characters,
    error,
    isLoading,
  } = characterApi.useGetCharactersQuery(props.page);

  const { data: favoriteCharacters, isLoading: isFavoriteLoading } =
    favoritesApi.useGetFavoriteCharactersQuery();

  return (
    <div id="character-container" className="w-full my-8">
      {(isLoading || isFavoriteLoading) && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      <div className="grid grid-cols-4 gap-5">
        {characters?.results &&
          characters.results.map((character: Character) => (
            <div key={character.id} className="">
              <CharacterCard
                character={character}
                isFavorite={
                  !!favoriteCharacters?.find(
                    (item) => item?.id === character.id,
                  )?.idDB
                }
              />
            </div>
          ))}
      </div>
    </div>
  );
};
