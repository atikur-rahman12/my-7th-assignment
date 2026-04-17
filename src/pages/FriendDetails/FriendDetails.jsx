import React, { use, useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FiArchive } from "react-icons/fi";
import { LuMessageSquareMore } from "react-icons/lu";
import { PiVideoCameraBold } from "react-icons/pi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useParams } from "react-router";
import { FriendContext } from "../../context/FrndContext";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const FriendDetails = () => {
  const { handleAction } = useContext(FriendContext);

  const statusStyle = (status) => {
    if (status === "Almost Due") {
      return "bg-[#EFAD44]";
    } else if (status === "Overdue") {
      return "bg-[#EF4444]";
    } else if (status === "On-Track") {
      return "bg-[#244D3F]";
    }
  };

  const { friendsId } = useParams();

  const friends = use(friendsPromise);

  const clickedFriendCard = friends.find((friend) => friend.id == friendsId);

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = clickedFriendCard;

  return (
    <div className="bg-base-200">
      <div className="p-4 sm:p-6 lg:p-10 container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-base-200 ">
            <div className="card py-10 bg-base-100 h-90 w-full lg:w-96 shadow-md">
              <div className="card-body flex justify-center items-center text-center h-full ">
                <img
                  className="rounded-full w-35 h-35 sm:w-38 sm:h-38 mx-auto"
                  src={picture}
                  alt="Friends"
                />
                <h2 className="text-2xl font-semibold">{name}</h2>
                <div
                  className={`badge font-medium text-lg rounded-full p-4 text-white ${statusStyle(status)}`}
                >
                  {status}
                </div>
                <div className="flex gap-2 flex-wrap justify-center mt-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="badge bg-[#CBFADB] text-[#244D3F] font-bold text-sm rounded-full p-3.5"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-[#64748B] italic text-[16px]">{bio}</p>
                <p className="text-[#64748B] text-[16px]">E-mail : {email}</p>
              </div>
            </div>

            <div className="w-full lg:w-96 mx-auto mt-5 space-y-3">
              <button className="btn w-full bg-base-100 shadow-md">
                <RiNotificationSnoozeLine className="text-xl" /> Snooze 2 Weeks
              </button>
              <button className="btn w-full bg-base-100 shadow-md">
                <FiArchive className="text-xl" /> Archive
              </button>
              <button className="btn w-full bg-base-100 shadow-md text-red-500">
                <RiDeleteBin6Line className="text-xl" /> Delete
              </button>
            </div>
          </div>
          <div className="bg-base-200 flex-1 grid grid-cols-3 auto-rows-[160px] gap-6">
            <div className="bg-base-100 shadow-md p-15 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl font-semibold">{days_since_contact}</h1>
              <p className="text-[#64748B] text-lg">Days Since Contact</p>
            </div>
            <div className="bg-base-100 shadow-md p-15 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl font-semibold">{goal}</h1>
              <p className="text-[#64748B] text-lg">Goal (Days)</p>
            </div>
            <div className="bg-base-100 shadow-md p-15 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-3xl font-semibold">{next_due_date}</h1>
              <p className="text-[#64748B] text-lg">Next Due</p>
            </div>

            <div className="bg-base-100 col-span-3 shadow-md p-8">
              <div className="flex justify-between">
                <h1 className="text-[#244D3F] text-xl font-medium">
                  Relationship Goal
                </h1>
                <button className="btn">Edit</button>
              </div>
              <p className="mt-6">
                <span className="text-[#64748B] mr-2">Connected Every</span>
                <span className="font-semibold text-[16px]">{goal} Days</span>
              </p>
            </div>

            <div className="bg-base-100 col-span-3 shadow-md p-5">
              <h1 className="text-[#244D3F] text-xl font-semibold">
                Quick Check-In
              </h1>
              <div className="mt-2 flex justify-between gap-6">
                <button
                  className="btn text-xl flex-1 h-22 flex flex-col items-center gap-2"
                  onClick={() => handleAction("Call", name)}
                >
                  <BiPhoneCall className="text-3xl" /> Call
                </button>
                <button
                  className="btn text-xl flex-1 h-22 flex flex-col items-center gap-2"
                  onClick={() => handleAction("Text", name)}
                >
                  <LuMessageSquareMore className="text-3xl" /> Text
                </button>
                <button
                  className="btn text-xl flex-1 h-22 flex flex-col items-center gap-2"
                  onClick={() => handleAction("Video", name)}
                >
                  <PiVideoCameraBold className="text-3xl" /> Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
