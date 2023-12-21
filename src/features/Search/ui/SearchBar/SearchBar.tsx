import React from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "src/app/providers/store/config/hooks";
import { searchActions } from "src/features/Search/model/slices/searchSlice";
import { useGetByNameQuery } from "src/shared/api/charactersApi";
import { useDebounce } from "src/shared/lib/useDebounce";
import { Suggest } from "src/widgets/Suggest";

export const SearchBar = () => {
  const [value] = useSearchParams();
  const [query, setQuery] = React.useState(
    value.get("name") ? value.get("name") : "",
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const debounce = useDebounce(query, 500);
  const { data } = useGetByNameQuery(debounce);

  const [isFocused, setIsFocused] = React.useState(false);
  const showSuggest = !!debounce && isFocused;

  const handleSearch = () => {
    if (debounce) {
      dispatch(searchActions.setResults(data.results));
      setIsFocused(false);
      setQuery("");
      navigate(`/search?name=${debounce}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search"
          autoComplete="off"
          className="
          block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-100
          rounded-lg border-2 border-gray-800 
          focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search characters..."
          required={true}
          value={query as string}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 200);
          }}
        />
        <button
          className="
          text-white absolute right-2.5 bottom-2.5 
          bg-[#12b488] hover:bg-blue-500 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {showSuggest && data.results && (
        <div className="relative">
          <Suggest characters={data.results} />
        </div>
      )}
    </div>
  );
};
