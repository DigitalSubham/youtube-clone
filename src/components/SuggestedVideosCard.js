import React from "react";

const SuggestedVideosCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2  m-2 w-96 shadow flex">
      <div className="pr-2">
        <img
          className="rounded-lg"
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
      </div>

      <ul>
        <li className="font-bold text-xs py-2">{title}</li>
        <li>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SuggestedVideosCard;
