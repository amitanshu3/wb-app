"use client";
const SkillTestCard = ({ toggleModal }) => {
  return (
    <div className="border border-gray-300   flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 shadow-md p-4">
      <div className="flex-shrink-0">
        <img src="/html_icon.png" alt="HTML Icon" className="w-16 h-16" />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-lg">Hypertext Markup Language</h3>
        <p className="text-gray-600 text-sm">
          Questions: 08 | Duration: 15 mins | Submitted on: 5 June 2021
        </p>
      </div>

      <div className="flex-shrink-0">
        <button
          onClick={toggleModal}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default SkillTestCard;
