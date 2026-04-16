import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FrndContext";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

const TimeLine = () => {
  const { timeline } = useContext(FriendContext);

  const [filter, setFilter] = useState("");

  const actionIcons = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon,
  };

  const filteredTimeline =
    filter === ""
      ? timeline
      : timeline.filter((item) => item.action === filter);

  return (
    <div className="bg-base-200">
      <div className="p-15 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Timeline</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select"
        >
          <option value="" disabled>
            Filter Timeline
          </option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>

        {filteredTimeline.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
            <h2 className="text-2xl font-bold text-gray-700">
              No {filter} History Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              You don’t have any history yet. Once you start using the app, your
              activity will appear here.
            </p>
          </div>
        ) : (
          filteredTimeline.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-base-100 p-4 mb-3 shadow rounded-lg mt-5"
            >
              <div>
                <img
                  src={actionIcons[item.action]}
                  alt={item.action}
                  className="w-8 h-8"
                />
              </div>

              <div>
                <p>
                  <span className="text-[#244D3F] font-semibold">
                    {item.action}
                  </span>{" "}
                  <span className="text-[#64748B]">with {item.name}</span>
                </p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLine;
