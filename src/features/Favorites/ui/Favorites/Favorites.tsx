import { CharacterCard } from "src/entities/CharacterCard";
import { favoritesApi } from "src/shared/api/favoritesApi";

export const Favorites = () => {
  const { data: favoriteCharacters } =
    favoritesApi.useGetFavoriteCharactersQuery();

  return (
    <>
      {favoriteCharacters?.length === 0 ? (
        <div className="text-2xl">No favorite characters yet</div>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {favoriteCharacters?.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      )}
    </>
  );
};
