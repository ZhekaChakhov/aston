import { Link } from "react-router-dom";
import { useAppSelector } from "src/app/providers/store/config/hooks";
import { getUser } from "src/features/Auth/model/selector/getUser";
import { AddToFavorite } from "src/features/Favorites";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";
import { Loader } from "src/shared/ui/Loader/Loader";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const { data: favoriteCharacters, isLoading } =
    favoritesApi.useGetFavoriteCharactersQuery();

  const isFavorite = favoriteCharacters?.find(
    (item) => item?.id === character.id,
  )?.idDB;

  const { uid } = useAppSelector(getUser);

  return (
    <div className="p-3 rounded-md bg-white shadow-md h-full text-center">
      {uid && isLoading ? (
        <Loader />
      ) : (
        <>
          <img
            src={character.image}
            alt={`${character.name} Card`}
            className="w-72 mx-auto my-auto"
          />
          <Link to={`/${character.id}`}>
            <p className="font-bold text-green-500 m-1 truncate text-2xl">
              {character.name}
            </p>
          </Link>
          <p className="font-bold text-gray-500 mb-1 truncate text-xl">
            {character.species}
          </p>
          {uid && (
            <div>
              <AddToFavorite
                id={character.id}
                isFavorite={!!isFavorite}
                size={25}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
