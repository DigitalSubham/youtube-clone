import SearchResultsVideoCard from "./SearchResultsVideoCard";
import useSearchResults from "../utilities/useSearchResults";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const SearchedResults = () => {
  let { searchResultVideo } = useSearchResults();
  // console.log(searchResultVideo);

  // useEffect(() => {
  //   const onScroll = () => {
  //     // if scrolled to the bottom
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       window.document.body.offsetHeight
  //     ) {
  //       // update the state
  //       searchResultVideo = searchResultVideo.concat(searchResultVideo);
  //     }
  //   };

  //   // scroll event
  //   window.addEventListener("scroll", onScroll);

  //   // memory cleanup, remove listener
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [searchResultVideo]);

  return (
    <div className="ml-52">
      {searchResultVideo?.map((video, index) => {
        return (
          <Link key={index} to={`/watch?v=${video.id.videoId}`}>
            <SearchResultsVideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchedResults;
