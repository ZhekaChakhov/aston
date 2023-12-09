// import React from "react";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/providers/hooks/redux";
import { Character } from "src/app/providers/models/Character";
import { fetchCharacters } from "src/app/providers/store/reducers/ActionCreators";
import { CharacterCard } from "src/entities/CharacterCard";
import { Loader } from "src/shared/ui/loader";
import { Header } from "src/widgets";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading, error } = useAppSelector(
    (state) => state.characterReducer,
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      <Header />
      <div className="w-full my-8">
        {isLoading && (
          <div className="text-center">
            <Loader />
          </div>
        )}
        {error && <h1>{error}</h1>}
        <div className="grid grid-cols-6 gap-4">
          {characters.data &&
            characters.data.map((item: Character) => (
              <div key={item._id} className="">
                <CharacterCard name={item.name} img={item.imageUrl} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
