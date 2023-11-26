import React from "react";
import useSearchSuggestions from "../utilities/useSearchSuggestions";
import { IoIosSearch } from "react-icons/io";

const SearchSuggestions = ({ searchQuery }) => {
  const SearchSuggestions = useSearchSuggestions({ searchQuery });

  return (
    <div className="fixed top-15 left-[396px] right-0 bg-white py-2 px-2 w-[28rem] shadow-lg rounded-lg border border-gray">
      {SearchSuggestions.map((suggestion) => {
        return (
          <li
            key={suggestion}
            className=" flex  py-3 text-l font-bold shadow-sm hover:bg-gray-100"
          >
            <IoIosSearch className="mt-1" /> {suggestion}
          </li>
        );
      })}
    </div>
  );
};

export default SearchSuggestions;
