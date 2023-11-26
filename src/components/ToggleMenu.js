import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";

const ToggleMenu = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <img
      onClick={() => toggleMenuHandler()}
      className="h-9"
      alt="menu"
      src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
    />
  );
};

export default ToggleMenu;
