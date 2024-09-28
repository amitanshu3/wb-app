import ProgressBar from "./ProgressBar";

const SyllabusWiseAnalysis = () => {
  return (
    <div className="bg-white border border-gray-300  shadow-md p-6 rounded-lg">
      <h2 className="text-lg font-bold">Syllabus Wise Analysis</h2>

      <ProgressBar
        topic="HTML Tools, Forms, History"
        percentage={80}
        barColor="bg-blue-500"
        bgColor="bg-blue-200"
        textColor="text-blue-600"
      />

      <ProgressBar
        topic="Tags & References in HTML"
        percentage={60}
        barColor="bg-orange-500"
        bgColor="bg-orange-200"
        textColor="text-orange-600"
      />

      <ProgressBar
        topic="Tables & References in HTML"
        percentage={24}
        barColor="bg-red-500"
        bgColor="bg-red-200"
        textColor="text-red-600"
      />

      <ProgressBar
        topic="Tables & CSS Basics"
        percentage={96}
        barColor="bg-green-500"
        bgColor="bg-green-200"
        textColor="text-green-600"
      />
    </div>
  );
};

export default SyllabusWiseAnalysis;
