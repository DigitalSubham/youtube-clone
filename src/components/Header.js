import React from "react";
import Title from "./Title";
import ToggleMenu from "./ToggleMenu";
import SearchBar from "./SearchBar";
import User from "./user";

const Header = () => {
  return (
    <div className="fixed top-0 w-[100%] grid grid-flow-col p-5 mt-0 m-2 bg-white  cursor-pointer">
      <div className="flex col-span-1 ">
        <ToggleMenu />
        <Title />
      </div>

      <div className="  col-span-10 pl-40">
        <SearchBar />
      </div>

      <div className="col-span-1">
        <User />
      </div>
    </div>
  );
};

export default Header;
