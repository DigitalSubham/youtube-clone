import React from "react";
import useHomeVideo from "../utilities/useHomeVideo";
import SuggestedVideosCard from "./SuggestedVideosCard";
import { Link } from "react-router-dom";

const SuggestedVideos = () => {
  const suggestedVideos = useHomeVideo();

  return (
    <div>
      {" "}
      {suggestedVideos.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <SuggestedVideosCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestedVideos;
