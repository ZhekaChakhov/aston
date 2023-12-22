import { Icon } from "@iconify/react";
import { useGetByIdQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Character } from "src/shared/models/Character";

interface Props {
  id: number;
  isFavorite?: boolean;
  size: number;
}

export const AddToFavorite = (props: Props) => {
  const [addCharacterToFavorites] = favoritesApi.useAddCharacterMutation();
  const [removeCharacterFromFavorites] =
    favoritesApi.useRemoveCharacterMutation();

  const { data: favoriteCharacters } =
    favoritesApi.useGetFavoriteCharactersQuery();

  const { data: oneCharacter } = useGetByIdQuery(props.id);

  const character: Character = {
    id: oneCharacter?.id,
    name: oneCharacter?.name,
    image: oneCharacter?.image,
    species: oneCharacter?.species,
  };

  const addCharacter = () => {
    addCharacterToFavorites(character);
  };

  const isFavorite = favoriteCharacters?.find((item) => item?.id === props.id)
    ?.idDB;

  const removeCharacter = () => {
    removeCharacterFromFavorites(isFavorite);
  };

  return (
    <div className="">
      {!isFavorite && !props.isFavorite ? (
        <button type="button" onClick={addCharacter}>
          <Icon
            icon="pepicons-pencil:heart"
            width={props.size}
            height={props.size}
          />
        </button>
      ) : (
        <button type="button" onClick={removeCharacter}>
          <Icon
            icon="pepicons-pencil:heart-off"
            width={props.size}
            height={props.size}
          />
        </button>
      )}
    </div>
  );
};
