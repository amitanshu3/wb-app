const ProgressBar = ({ topic, percentage, barColor, bgColor, textColor }) => {
  return (
    <div className="my-4 mb-10">
      <p className="flex justify-between">
        <span>{topic}</span>
        <span className={`font-semibold ${textColor}`}>{percentage}%</span>
      </p>
      <div className="relative pt-1">
        <div className={`overflow-hidden h-2 text-xs flex rounded ${bgColor}`}>
          <div
            className={`${barColor} h-2 rounded`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
