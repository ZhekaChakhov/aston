import { Icon } from "@iconify/react";
import { useGetByIdQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";

interface Props {
  id: number;
  isFavorite: boolean;
  size: number;
}

export const AddToFavorite = ({ id, isFavorite, size }: Props) => {
  const [addCharacterToFavorites] = favoritesApi.useAddCharacterMutation();
  const [removeCharacterFromFavorites] =
    favoritesApi.useRemoveCharacterMutation();

  const { data: oneCharacter } = useGetByIdQuery(id);

  const { data: favoriteCharacters } =
    favoritesApi.useGetFavoriteCharactersQuery();

  const character: Character = {
    id: oneCharacter?.id,
    name: oneCharacter?.name,
    image: oneCharacter?.image,
    species: oneCharacter?.species,
  };

  const favoriteId = favoriteCharacters?.find(
    (item) => item?.id === character.id,
  )?.idDB;

  const addCharacter = () => {
    addCharacterToFavorites(character);
  };

  const removeCharacter = () => {
    removeCharacterFromFavorites(favoriteId);
  };

  return (
    <div className="">
      {!isFavorite ? (
        <button type="button" onClick={addCharacter}>
          <Icon icon="pepicons-pencil:heart" width={size} height={size} />
        </button>
      ) : (
        <button type="button" onClick={removeCharacter}>
          <Icon icon="pepicons-pencil:heart-off" width={size} height={size} />
        </button>
      )}
    </div>
  );
};
