import { AddToFavorite } from "src/features/Favorites";
import { useGetByIdQuery } from "src/shared/api/charactersApi";
import { favoritesApi } from "src/shared/api/favoritesApi";
import { Loader } from "src/shared/ui/Loader/Loader";

export const CharacterDetails = (prop: { id: number }) => {
  const { data: character } = useGetByIdQuery(prop.id);

  const { data: favoriteCharacters, isLoading } =
    favoritesApi.useGetFavoriteCharactersQuery();

  const isFavorite = favoriteCharacters?.find((item) => item?.id === prop.id)
    ?.idDB;

  return (
    <div className="w-full my-8">
      {isLoading ? (
        <div className="text-center">
          <Loader />
        </div>
      ) : (
        <div className="p-3 rounded-md bg-white shadow-md h-full;">
          <div className="grid grid-cols-2 gap-10">
            {character && (
              <>
                <div className="p-7">
                  <img
                    src={character.image}
                    className="w-48 lg:w-80 mx-auto my-7"
                  />
                </div>
                <div className="p-7">
                  <h2 className="text-5xl mt-7 mb-16 text-green-500">
                    {character.name}
                  </h2>
                  <p className="text-3xl mb-3 text-blue-600 font-semiboldbold">
                    Species: {character.species}
                  </p>
                  <p className="">
                    <AddToFavorite
                      id={character.id}
                      size={50}
                      isFavorite={!!isFavorite}
                    />
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
