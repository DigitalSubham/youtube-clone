import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ChatMessages from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../utilities/helper";

const LiveChat = () => {
  const [liveMessgae, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const ChatData = useSelector((store) => store.chat.messages);

  //Api polling in interval of 2 seconds
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("Api polling");
      //here we can call api and save in redux store using dispatch like below one

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 5000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className=" h-[500px]  p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {ChatData.map((c, i) => {
            return <ChatMessages key={i} name={c.name} message={c.message} />;
          })}
        </div>
      </div>
      <form
        className="w-full p-2 rounded-lg    border border-solid border-black"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(liveMessgae);
          dispatch(
            addMessage({
              name: "subham",
              message: liveMessgae,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-72 px-2 underline  "
          type="text"
          placeholder="Chat..."
          value={liveMessgae}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
