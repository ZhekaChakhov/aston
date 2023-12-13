// import React from "react";
import { useParams } from "react-router";
import { CharacterDetails } from "src/widgets/characterDetails";

export const CharacterPage = () => {
  const params = useParams();
  return <CharacterDetails id={+params.id!} />;
};
