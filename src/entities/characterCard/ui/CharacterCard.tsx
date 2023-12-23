import { Link } from "react-router-dom";
import { useAppSelector } from "src/app/providers/store/config/hooks";
import { getUser } from "src/features/Auth/model/selector/getUser";
import { AddToFavorite } from "src/features/Favorites";
import { Character } from "src/shared/models/Character";

interface Props {
  character: Character;
  isFavorite: boolean;
}

export const CharacterCard = ({ character, isFavorite }: Props) => {
  const { uid } = useAppSelector(getUser);

  return (
    <div className="p-3 rounded-md bg-white shadow-md h-full text-center">
      <img
        src={character.image}
        alt={`${character.name} Card`}
        className="w-72 mx-auto my-auto"
      />
      <Link to={`/character/${character.id}`}>
        <p className="font-bold text-green-500 m-1 truncate text-md md:text-lg lg:text-2xl">
          {character.name}
        </p>
      </Link>
      <p className="font-bold text-gray-500 mb-1 truncate text-sm md:text-md lg:text-xl">
        {character.species}
      </p>
      {uid && (
        <div>
          <AddToFavorite id={character.id} isFavorite={isFavorite} size={25} />
        </div>
      )}
    </div>
  );
};
