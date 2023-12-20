import { useAppSelector } from "src/app/providers/store/config/hooks";
import { CharacterCard } from "src/entities/CharacterCard";
import { getCharacters } from "src/features/Search/model/selector/getCharacters";

export const Search = () => {
  const characters = useAppSelector(getCharacters);

  return characters ? (
    <div className="grid grid-cols-3 gap-8">
      {characters.map((character) => (
        <div className="text-lg" key={character.id}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  ) : (
    <p className="text-2xl">Characters not found</p>
  );
};
