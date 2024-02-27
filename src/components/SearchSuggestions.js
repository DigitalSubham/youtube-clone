import React from "react";
import useSearchSuggestions from "../utilities/useSearchSuggestions";
import { IoIosSearch } from "react-icons/io";

const SearchSuggestions = ({ searchQuery }) => {
  const SearchSuggestionsList = useSearchSuggestions({ searchQuery });

  return (
    <div className="fixed  top-15 left-[396px] right-0 bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray">
      {SearchSuggestionsList.map((suggestion, index) => {
        return (
          <button
            key={index}
            className=" flex  py-3 text-l font-bold shadow-sm hover:bg-gray-100"
            // onClick={() => searchValue(index)}
          >
            <IoIosSearch className="mt-1 mr-3" /> {suggestion}
          </button>
        );
      })}
    </div>
  );
};

export default SearchSuggestions;
