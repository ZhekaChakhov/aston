// import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/providers/hooks/redux";
import { fetchCharacterById } from "src/app/providers/store/reducers/ActionCreators";
import { Loader } from "src/shared/ui/loader";

export const CharacterDetails = (prop: { id: number }) => {
  const dispatch = useAppDispatch();
  const { character, isLoading, error } = useAppSelector(
    (state) => state.oneCharacterReducer,
  );

  useEffect(() => {
    dispatch(fetchCharacterById(prop.id));
  }, []);

  return (
    <div className="w-full my-8">
      {isLoading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      {error && <h1>{error}</h1>}

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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
