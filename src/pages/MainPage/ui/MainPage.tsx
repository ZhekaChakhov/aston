import React from "react";
import { CharacterContainer } from "src/widgets/CharacterContainer";
import { Pagination } from "src/widgets/Pagination";

export const MainPage = () => {
  const [page, setPage] = React.useState(1);
  return (
    <>
      <Pagination page={page} setPage={setPage} />
      <CharacterContainer page={page} />
    </>
  );
};
