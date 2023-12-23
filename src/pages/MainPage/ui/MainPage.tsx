import React from "react";
import { SearchBar } from "src/features/Search";
import { CharacterContainer } from "src/widgets/CharacterContainer";
import { Pagination } from "src/widgets/Pagination";

const MainPage = () => {
  const [page, setPage] = React.useState(1);
  return (
    <>
      <SearchBar />
      <Pagination page={page} setPage={setPage} />
      <CharacterContainer page={page} />
    </>
  );
};

export default MainPage;
