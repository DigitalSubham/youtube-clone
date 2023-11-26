import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "./Config";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "./SearchSlice";

const useSearchSuggestions = ({ searchQuery }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return searchSuggestions;
};

export default useSearchSuggestions;
