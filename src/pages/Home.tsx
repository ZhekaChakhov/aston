// import React from "react";
import { loremIpsum } from "lorem-ipsum";
import { Header } from "src/widgets";

export const Home = () => {
  return (
    <>
      <Header />
      <div>{loremIpsum({ count: 5 })}</div>
    </>
  );
};
