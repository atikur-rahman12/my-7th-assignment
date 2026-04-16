import React, { use } from "react";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const AllFriends = () => {
  const statusStyle = (status) => {
    if (status === "Almost Due") {
      return "bg-[#EFAD44]";
    } else if (status === "Overdue") {
      return "bg-[#EF4444]";
    } else if (status === "On-Track") {
      return "bg-[#244D3F]";
    }
  };

  const friends = use(friendsPromise);
  console.log(friends);
  return (
    <div className="bg-base-200">
      <div className="p-15 container mx-auto">
        <h2 className="font-semibold text-3xl">Your Friends</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5">
          {friends.map((friend) => {
            return (
              <div className="card py-10 bg-base-100 card-sm shadow-md">
                <div className="card-body flex justify-center items-center text-center h-full ">
                  <img
                    className="rounded-full"
                    src={friend.picture}
                    alt="Friends"
                  />
                  <h2 className="text-2xl font-semibold">{friend.name}</h2>
                  <p className="text-gray-500 text-lg">{friend.days_since_contact}</p>
                  <div className="flex gap-2 flex-wrap justify-center mt-2">
                    {friend.tags.map((tag, index) => (
                      <div
                        key={index}
                        className="badge bg-[#CBFADB] text-[#244D3F] font-medium text-lg rounded-full p-3.5"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <div
                    className={`badge font-medium text-lg rounded-full p-4 text-white ${statusStyle(friend.status)}`}
                  >
                    {friend.status}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllFriends;
