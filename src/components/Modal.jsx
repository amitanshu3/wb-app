import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function Modal({ isOpen, onClose, currentStatistics }) {
  const { updateStatistics } = useGlobalState();

  const [rank, setRank] = useState(currentStatistics.rank);
  const [percentile, setPercentile] = useState(currentStatistics.percentile);
  const [currentScore, setCurrentScore] = useState(
    currentStatistics.currentScore
  );

  const [rankError, setRankError] = useState("");
  const [percentileError, setPercentileError] = useState("");
  const [scoreError, setScoreError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setRank(currentStatistics.rank);
      setPercentile(currentStatistics.percentile);
      setCurrentScore(currentStatistics.currentScore);
      setRankError("");
      setPercentileError("");
      setScoreError("");
    }
  }, [isOpen, currentStatistics]);

  useEffect(() => {
    if (rank === "" || rank < 0) {
      setRankError("Required | Rank should be  greater than 0");
    } else {
      setRankError("");
    }

    if (percentile === "" || percentile < 0 || percentile > 100) {
      setPercentileError("Required | Rank 0-100.");
    } else {
      setPercentileError("");
    }

    if (currentScore === "" || currentScore < 1 || currentScore > 15) {
      setScoreError("Required | Current Score 1-15.");
    } else {
      setScoreError("");
    }
  }, [rank, percentile, currentScore]);

  const handleSave = () => {
    if (!rankError && !percentileError && !scoreError) {
      updateStatistics({
        rank,
        percentile,
        currentScore,
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-60">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Update scores</h2>

          <img
            src="/html_icon.png"
            alt="Decorative"
            className="w-12 h-10 rounded-full"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full">
                1
              </div>
              <label className="flex-grow">
                Update your <span className="font-bold text-black">Rank</span>
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="border p-2 w-40 rounded-md border-blue-700 focus:outline-none"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>
            {rankError && <p className="text-red-500 text-sm">{rankError}</p>}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full">
                2
              </div>
              <label className="flex-grow">
                Update your{" "}
                <span className="font-bold text-black">Percentile</span>
              </label>
              <input
                type="number"
                min="0"
                max="100"
                className="border p-2 w-40 rounded-md border-blue-700 focus:outline-none"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
              />
            </div>
            {percentileError && (
              <p className="text-red-500 text-sm">{percentileError}</p>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center rounded-full">
                3
              </div>
              <label className="flex-grow">
                Update your{" "}
                <span className="font-bold text-black">
                  Current Score (out of 15)
                </span>
              </label>
              <input
                type="number"
                min="1"
                max="15"
                className="border p-2 w-40 rounded-md border-blue-700 focus:outline-none"
                value={currentScore}
                onChange={(e) => setCurrentScore(e.target.value)}
              />
            </div>
            {scoreError && <p className="text-red-500 text-sm">{scoreError}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="border border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center"
          >
            Save
            <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
