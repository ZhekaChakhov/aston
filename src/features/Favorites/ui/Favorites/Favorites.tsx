import { useEffect, useState } from "react";
import { CharacterCard } from "src/entities/CharacterCard";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Loader } from "src/shared/ui/Loader/Loader";

export const Favorites = () => {
  const {
    data: favoriteCharacters,
    isLoading,
    refetch,
  } = favoritesApi.useGetFavoriteCharactersQuery();
  const [isRefetched, setIsRefetched] = useState(false);

  useEffect(() => {
    if (favoriteCharacters) {
      refetch();
    }
    const timer = setTimeout(() => {
      setIsRefetched(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return !isRefetched || isLoading ? (
    <Loader />
  ) : (
    <div>
      {!favoriteCharacters?.length ? (
        <div className="text-2xl">No favorite characters yet</div>
      ) : (
        <div className="grid grid-cols-5 gap-2">
          {favoriteCharacters?.map((character) => (
            <CharacterCard
              character={character}
              key={character.id}
              isFavorite={
                !!favoriteCharacters?.find((item) => item?.id === character.id)
                  ?.idDB
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};
