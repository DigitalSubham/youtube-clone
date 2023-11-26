import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  if (!isSideBarOpen) return null;

  return (
    <div className="pl-4   fixed  mt-24 w-72">
      <div className=" ">
        <ul className="p-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Videos</li>
          <li>Lives</li>
        </ul>
        <h2 className="font-bold">Subscriptions</h2>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <h2 className="font-bold">Watch Later</h2>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
        <ul className="p-5">
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
