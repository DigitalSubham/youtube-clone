import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utilities/appSlice";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import useWatchPageVideo from "../utilities/useWatchPageVideo";
import Comments from "./Comments";
import SuggestedVideos from "./SuggestedVideos";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const watchPageVideo = useWatchPageVideo(videoId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex pt-24">
      <div>
        <div className="px-5 pb-12  ">
          <iframe
            className="rounded-lg"
            width="950"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className="px-5 text-xl font-bold py-3">
          {watchPageVideo?.snippet?.title}
        </h2>

        <div className="px-5">
          <ul className="list-none flex ">
            <li className="">logo</li>
            <li className=" font-bold text-l px-4">
              {watchPageVideo?.snippet?.channelTitle}
            </li>
            <li>
              <button className="px-2 border rounded-full p-1.5 font-bold bg-black text-white mr-[200px]">
                Subscribe
              </button>
            </li>
            <li className=" flex bg-gray-100 border pl-1 pr-3 py-1 rounded-full mx-2">
              <button className="  flex font-bold">
                <AiOutlineLike className=" self-center text-2xl mx-2" />{" "}
                {watchPageVideo?.statistics?.likeCount.slice(0, 1)}
                {"K"}
              </button>
              <button className=" mx-2 ">
                <AiOutlineDislike className=" self-center text-2xl" />
              </button>
            </li>

            <li className="mx-2">
              <button className="flex pl-1 pr-3 py-1 self-center  bg-gray-100 border rounded-full">
                <PiShareFatLight className=" mx-2 text-2xl" /> Share
              </button>
            </li>
            <li className="mx-2">
              <button className="flex pl-2 pr-4 py-1 self-center  font-bold bg-gray-100 border rounded-full">
                <TfiDownload className=" mx-2 text-xl " />
                Download
              </button>
            </li>
            <li className="border text-4xl  mx-2 bg-gray-100 border-b-gray-100 ">
              <button className=" self-center ">...</button>
            </li>
          </ul>
        </div>
        <div>
          <Comments />
        </div>
      </div>
      <div>
        <LiveChat />
        <SuggestedVideos />
      </div>
    </div>
  );
};

export default WatchPage;
