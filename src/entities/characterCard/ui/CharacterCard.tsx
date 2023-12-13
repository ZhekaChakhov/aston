// import React from 'react'
import { NavLink } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  img: string;
  species: string;
}

export const CharacterCard = ({ id, name, img, species }: Props) => {
  return (
    <div className="p-3 rounded-md bg-white shadow-md h-full text-center">
      <img src={img} alt={`${name} Card`} className="w-72 mx-0 my-auto" />
      <NavLink to={`/character/${id}`}>
        <p className="font-bold text-green-500 m-1 truncate text-2xl">{name}</p>
      </NavLink>
      <p className="font-bold text-gray-500 mb-1 truncate text-xl">{species}</p>
    </div>
  );
};
