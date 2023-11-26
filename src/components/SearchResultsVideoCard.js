import React from "react";

const SearchResultsVideoCard = ({ info }) => {
  const { channelTitle, title, thumbnails, description } = info.snippet;
  return (
    <div className="flex p-2  ">
      <div className="px-2">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="videoimg"
        />
      </div>
      <div>
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray-400 text-sm">27M Views</p>
        <p className="pt-7">{channelTitle}</p>
        <p className="pt-4">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultsVideoCard;
