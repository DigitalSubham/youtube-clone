import React from "react";
import BodyButton from "./BodyButton";

const list = [
  "All",
  "Mixes",
  "Music",
  "T-Series",
  "React-Routers",
  "Arijit Singh",
  "Live",
  "lofi",
  "jaani",
  "News",
  "Mantras",
  "React-Routers",
  "Arijit Singh",
  "Live",
  "lofi",
  "jaani",
  "News",
  "Mantras",
];

const BodyButtonList = () => {
  return (
    <div className="flex fixed overflow-x-auto w-full pl-40 mt-16">
      <div className="flex bg-white">
        {list.map((item, index) => {
          return <BodyButton className=" " key={index} name={item} />;
        })}
      </div>
    </div>
  );
};

export default BodyButtonList;
