"use client";
import { useGlobalState } from "../context/GlobalState";

const QuestionAnalysis = () => {
  const { statistics } = useGlobalState();
  const totalQuestions = 15;
  const correctAnswers = statistics.currentScore;
  const percentageCorrect = (correctAnswers / totalQuestions) * 100;

  const radius = 15.9155;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (percentageCorrect / 100) * circumference;

  return (
    <div className="bg-white  border border-gray-300  mb-10  shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-bold">Question Analysis</h2>
      <p className="text-gray-600 text-sm">
        <span className="   font-semibold">
          You scored {correctAnswers} question{correctAnswers === 1 ? "" : "s"}{" "}
          correct out of {totalQuestions}
        </span>
        {" However, it still needs some improvements"}
      </p>

      <div className="relative flex items-center justify-center mt-4">
        <svg className="w-40 h-40" viewBox="0 0 36 36">
          <circle
            className="text-gray-300"
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />

          <circle
            className="text-blue-500"
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.35s",
              transform: "rotate(90deg)",
              transformOrigin: "50% 50%",
            }}
          />

          <text
            x="18"
            y="18"
            className="text-base text-center fill-current text-blue-500"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{ fontSize: "10px" }}
          >
            🎯
          </text>
        </svg>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
