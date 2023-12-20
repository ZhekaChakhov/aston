import { Link } from "react-router-dom";
import { useAppSelector } from "src/app/providers/store/config/hooks";
import { CharacterCard } from "src/entities/CharacterCard";
import { getCharacters } from "src/features/Search/model/selector/getCharacters";

export const Search = () => {
  const characters = useAppSelector(getCharacters);

  return characters ? (
    <div className="grid grid-cols-3 gap-8">
      {characters.map((character) => (
        <Link className="text-lg" key={character.id} to={`/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </div>
  ) : (
    <p className="text-2xl">Characters not found</p>
  );
};
