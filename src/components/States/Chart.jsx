import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/FrndContext";

const Chart = () => {
  const { timeline } = useContext(FriendContext);

  const callCount = timeline.filter((item) => item.action === "Call").length;
  const textCount = timeline.filter((item) => item.action === "Text").length;
  const videoCount = timeline.filter((item) => item.action === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];

  return (
    <div className="my-10 p-10">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "50vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend iconType="circle" />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart;
