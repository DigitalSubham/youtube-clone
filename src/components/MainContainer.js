import React, { useEffect } from "react";
import BodyButtonList from "./BodyButtonList";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utilities/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, [dispatch]);
  return (
    <div className="overflow-x-auto mt-20">
      <BodyButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;
