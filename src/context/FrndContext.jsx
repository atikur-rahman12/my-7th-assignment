import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FrndContext = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const handleAction = (currentAction, friendName) => {
    const newEntry = {
      action: currentAction,
      name: friendName,
      time: new Date().toLocaleString(),
    };

    setTimeline((prev) => [...prev, newEntry]);

    (toast.success(`${currentAction} with ${friendName}`),
      {
        position: "top-center",
        style: {
          textAlign: "center",
          fontWeight: "600",
          fontSize: "16px",
        },
      });
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
