"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useGlobalState } from "../context/GlobalState";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded">
        <p>{`${payload[0].payload.name} percentile`}</p>
        <p>{`Number of engineers: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ComparisonGraph = () => {
  const { statistics } = useGlobalState();
  const [userPercentile, setUserPercentile] = useState(
    statistics?.percentile || 30
  );
  const data = [
    { name: 0, engineers: 0 },
    { name: 10, engineers: 5 },
    { name: 20, engineers: 15 },
    { name: 30, engineers: 30 },
    { name: 40, engineers: 50 },
    { name: 50, engineers: 90 },
    { name: 60, engineers: 70 },
    { name: 70, engineers: 50 },
    { name: 80, engineers: 20 },
    { name: 90, engineers: 10 },
    { name: 100, engineers: 5 },
  ];

  useEffect(() => {
    const storedPercentile = localStorage.getItem("userPercentile");
    if (storedPercentile) {
      setUserPercentile(Number(storedPercentile));
    }

    if (statistics?.percentile) {
      localStorage.setItem("userPercentile", statistics.percentile);
    }
  }, [statistics]);

  useEffect(() => {
    const checkLocalStorage = () => {
      const storedPercentile = localStorage.getItem("userPercentile");
      if (storedPercentile) {
        const parsedPercentile = Number(storedPercentile);
        if (parsedPercentile !== userPercentile) {
          setUserPercentile(parsedPercentile);
        }
      }
    };

    const intervalId = setInterval(checkLocalStorage, 1000);

    return () => clearInterval(intervalId);
  }, [userPercentile]);

  return (
    <div className="relative bg-white shadow-md p-6 rounded-lg border border-gray-300 ">
      <div className="absolute top-2 right-2 bg-gray-200 rounded-full p-3">
        📉
      </div>

      <h2 className="text-lg font-bold">Comparison Graph</h2>
      <p className="text-sm text-gray-600 mt-2">
        <span className="font-bold">You scored {userPercentile}%</span>{" "}
        percentile which is lower than the average percentile of 72% of all
        engineers who took this assessment
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 40, right: 20, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            type="number"
            domain={[0, 100]}
            label={{
              value: "Percentile",
              position: "insideBottomRight",
              offset: -10,
            }}
          />

          <YAxis
            label={{ value: "Engineers", angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="engineers"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />

          <ReferenceLine
            x={userPercentile}
            stroke="red"
            strokeWidth={2}
            label={{
              position: "top",
              value: `Your Percentile (${userPercentile}%)`,
              fill: "red",
            }}
          />

          <Line
            type="monotone"
            dataKey="engineers"
            stroke="#82ca9d"
            dot={{ stroke: "blue", strokeWidth: 2, r: 5, fill: "blue" }}
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
