// import React from 'react'

interface Props {
  name: string;
  img: string;
}

export const CharacterCard = ({ name, img }: Props) => {
  return (
    <div className="border-2 border-gray-800 h-full p-4">
      <div className="text-center text-md md:text-lg lg:text-xl">{name}</div>
      <img src={img} alt={`${name} Card`} className="w-48 h-48 mx-auto" />
    </div>
  );
};
