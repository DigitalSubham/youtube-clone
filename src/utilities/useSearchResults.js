import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utilities/Config";
import { useSearchParams } from "react-router-dom";

const useSearchResults = () => {
  const [searchResultVideo, setSearchResultVideo] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getsearchResultVideo();
    // eslint-disable-next-line
  }, []);

  const getsearchResultVideo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParams.get(
        "search_query"
      )}` +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchResultVideo(json.items);
  };
  return { searchResultVideo };
};

export default useSearchResults;
