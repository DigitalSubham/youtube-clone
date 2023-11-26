import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utilities/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  //   console.log("Rerendering....");

  const prime = useMemo(() => {
    // console.log("Rerendering prime");
    return findNthPrime(text);
  }, [text]);

  return (
    <div
      className={
        "m-4 w-96 h-96 border border-black p-2 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-300"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="w-72 border border-black px-2 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-3xl">nth prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
