import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Character } from "src/shared/models/Character";

interface Props {
  characters: Character[];
}

export const Suggest = ({ characters }: Props) => {
  return (
    <div
      className="
      w-full rounded-xl absolute mt-1 z-50	
      text-xl bg-white overflow-hidden
      "
    >
      {characters.slice(0, 5).map((character) => (
        <Link
          className="p-2 flex items-center text-black border-2 hover:bg-gray-100"
          key={character.image}
          to={`character/${character.id}`}
        >
          <img
            className="pr-1 w-20 h-24"
            src={character.image}
            alt={character.name}
          />
          <p className="ml-2">{character.name}</p>
        </Link>
      ))}
    </div>
  );
};

Suggest.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
