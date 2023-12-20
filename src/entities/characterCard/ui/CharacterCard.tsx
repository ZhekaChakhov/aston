import { NavLink } from "react-router-dom";
import { Character } from "src/shared/models/Character";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className="p-3 rounded-md bg-white shadow-md h-full text-center">
      <img
        src={character.image}
        alt={`${character.name} Card`}
        className="w-72 mx-auto my-auto"
      />
      <NavLink to={`/character/${character.id}`}>
        <p className="font-bold text-green-500 m-1 truncate text-2xl">
          {character.name}
        </p>
      </NavLink>
      <p className="font-bold text-gray-500 mb-1 truncate text-xl">
        {character.species}
      </p>
    </div>
  );
};
