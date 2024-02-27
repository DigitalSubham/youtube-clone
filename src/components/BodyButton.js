import React from "react";

const BodyButton = ({ name }) => {
  return (
    <div
      className="px-8 py-1 m-2 bg-gray-100 rounded-lg"
      style={{ whiteSpace: "nowrap" }}
    >
      {name}
    </div>
  );
};

export default BodyButton;
