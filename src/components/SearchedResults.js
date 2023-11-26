import SearchResultsVideoCard from "./SearchResultsVideoCard";
import useSearchResults from "../utilities/useSearchResults";
import { Link } from "react-router-dom";

const SearchedResults = () => {
  const { searchResultVideo } = useSearchResults();

  return (
    <div>
      {searchResultVideo?.map((video) => {
        return (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <SearchResultsVideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchedResults;
