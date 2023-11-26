import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utilities/Config";

const useWatchPageVideo = (videoId) => {
  const [watchPageVideo, setWatchPageVideo] = useState({});

  useEffect(() => {
    const getWatchPageVideo = async () => {
      const data = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}` +
          "&key=" +
          GOOGLE_API_KEY
      );
      const json = await data.json();
      setWatchPageVideo(json.items[0]);
    };
    getWatchPageVideo();
  }, [videoId]);
  return watchPageVideo;
};

export default useWatchPageVideo;
