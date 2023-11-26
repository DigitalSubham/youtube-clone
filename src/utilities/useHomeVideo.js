import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./Config";

const useHomeVideo = () => {
  const [homePageVideo, setHomePageVideo] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setHomePageVideo(json.items);
    };

    getVideos();
  }, []);

  return homePageVideo;
};

export default useHomeVideo;
