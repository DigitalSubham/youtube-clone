import React, { useState, useRef } from "react";

const DemoRef = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);

  let x = 0;
  console.log(ref);

  return (
    <div className="m-4 p-2 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-300 px-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x= ", x);
          }}
        >
          Increase x
        </button>

        <span className="font-bold">let x = {x}</span>
      </div>
      <div>
        <button className="bg-green-300 p-2 m-4" onClick={() => setY(y + 1)}>
          Increase Y
        </button>
        <span className="font-bold p-2 m-4">let y = {y}</span>
      </div>

      <div>
        <button
          className="bg-green-300 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref =", ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="font-bold p-2 m-4">let ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default DemoRef;
