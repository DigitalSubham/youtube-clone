import React from "react";
import VideoCard from "./VideoCard";
import useHomeVideo from "../utilities/useHomeVideo";
import AdVideoCard from "./AdVideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const homePageVideo = useHomeVideo();

  return (
    <div className=" flex pl-40 pt-40 flex-wrap">
      {homePageVideo?.length > 0 && <AdVideoCard info={homePageVideo[0]} />}

      {homePageVideo?.map((video) => {
        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
