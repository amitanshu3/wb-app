"use client";
import { useGlobalState } from "../context/GlobalState";

const QuickStatistics = () => {
  const { statistics } = useGlobalState();

  return (
    <div className="w-full bg-white border border-gray-300 shadow-md p-6 rounded-sm ">
      <h2 className="text-lg font-bold mb-4">Quick Statistics</h2>
      <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-300 rounded-full">
              <p className="text-xl">🏆</p>
            </div>
            <span className="text-xl font-bold">{statistics.rank}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Your Rank</p>
        </div>

        <div className="flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-300 rounded-full">
              <p className="text-xl">📈</p>
            </div>
            <span className="text-xl font-bold">{statistics.percentile}%</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Percentile</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gray-300 rounded-full">
              <p className="text-xl">✅</p>
            </div>
            <span className="text-xl font-bold">
              {statistics.currentScore}/15
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Correct Answers</p>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
