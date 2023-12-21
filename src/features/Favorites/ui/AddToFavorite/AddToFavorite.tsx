import { Icon } from "@iconify/react";
import { useGetByIdQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";

// TODO: при загрузке страницы избранные персонажи не сохраняются

export const AddToFavorite = (prop: { id: number }) => {
  const [addCharacterToFavorites] = favoritesApi.useAddCharacterMutation();
  const [removeCharacterFromFavorites] =
    favoritesApi.useRemoveCharacterMutation();

  const { data: favoriteCharacters } =
    favoritesApi.useGetFavoriteCharactersQuery();

  const { data: oneCharacter } = useGetByIdQuery(prop.id);

  const character: Character = {
    id: oneCharacter?.id,
    name: oneCharacter?.name,
    image: oneCharacter?.image,
    species: oneCharacter?.species,
  };

  const addCharacter = () => {
    addCharacterToFavorites(character);
  };

  const isFavorite = favoriteCharacters?.find((item) => item?.id === prop.id)
    ?.idDB;

  const removeCharacter = () => {
    removeCharacterFromFavorites(isFavorite);
  };

  return (
    <div className="">
      {!isFavorite ? (
        <button type="button" onClick={addCharacter}>
          <Icon icon="pepicons-pencil:heart" width={25} height={25} />
        </button>
      ) : (
        <button type="button" onClick={removeCharacter}>
          <Icon icon="pepicons-pencil:heart-off" width={25} height={25} />
        </button>
      )}
    </div>
  );
};
