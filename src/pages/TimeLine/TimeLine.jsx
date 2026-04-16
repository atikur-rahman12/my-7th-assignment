import React, { useContext } from "react";
import { FriendContext } from "../../context/FrndContext";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";

const TimeLine = () => {
  const { timeline } = useContext(FriendContext);

  const actionIcons = {
    Call: callIcon,
    Text: textIcon,
    Video: videoIcon,
  };

  return (
    <div className="bg-base-200">
      <div className="p-15 container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Timeline</h1>
        <select defaultValue="Filter Timeline" className="select">
          <option disabled={true}>Filter Timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>

        {timeline.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
            
            <h2 className="text-2xl font-bold text-gray-700">
              No History Found
            </h2>

            {/* Subtitle */}
            <p className="text-gray-500 mt-2 max-w-md">
              You don’t have any history yet. Once you start using the app, your
              activity will appear here.
            </p>
          </div>
        ) : (
          timeline.map((item, index) => (
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
