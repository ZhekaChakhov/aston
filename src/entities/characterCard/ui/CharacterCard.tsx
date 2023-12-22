import { Link } from "react-router-dom";
import { AddToFavorite } from "src/features/Favorites";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const {
    data: favoriteCharacters,
    error,
    isLoading,
  } = favoritesApi.useGetFavoriteCharactersQuery();

  const isFavorite = favoriteCharacters?.find(
    (item) => item?.id === character.id,
  )?.idDB;

  return (
    <div className="p-3 rounded-md bg-white shadow-md h-full text-center">
      {error && <h1>Произошла ошибка при загрузке избранных персонажей</h1>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img
            src={character.image}
            alt={`${character.name} Card`}
            className="w-72 mx-auto my-auto"
          />
          <Link to={`/character/${character.id}`}>
            <p className="font-bold text-green-500 m-1 truncate text-2xl">
              {character.name}
            </p>
          </Link>
          <p className="font-bold text-gray-500 mb-1 truncate text-xl">
            {character.species}
          </p>
          <AddToFavorite id={character.id} isFavorite={!!isFavorite} />
        </>
      )}
    </div>
  );
};
