import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import SearchSuggestions from "./SearchSuggestions";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);

  return (
    <>
      <div>
        <input
          className="w-1/2 pt-[10px] p-2 pb-[6px] border border-solid border-gray-300 rounded-l-3xl"
          placeholder="search"
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />

        <button className="cursor-pointer border border-gray-300 px-5 py-3 bg-gray-100 rounded-r-3xl">
          <IoIosSearch />
        </button>
      </div>
      <div>
        {showSuggestion && <SearchSuggestions searchQuery={searchQuery} />}
      </div>
    </>
  );
};

export default SearchBar;
