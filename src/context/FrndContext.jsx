import React, { createContext, useState } from "react";

export const FriendContext = createContext();

const FrndContext = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const handleAction = (currentAction, friendName) => {

    const newEntry = {
        action: currentAction,
        name: friendName,
        time: new Date().toLocaleString(),
    };

    setTimeline((prev) => [...prev, newEntry])

    alert("Button Clicked: " + currentAction);
    console.log(newEntry , "newentry");
  };

  const data = {
    text: "demo",
    age: 24,
    handleAction,
    timeline,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FrndContext;
