import React from "react";

const QuestionCard = ({ question, onAnswer }) => {
  const handleChange = (e) => {
    const value = parseInt(e.target.value); // value from 1 to 5
    onAnswer(value, question.id, question.mbti);
  };

  return (
    <div className="mb-6 p-4 bg-white rounded shadow">
      <p className="text-lg font-medium mb-3">{question.text}</p>

      <div className="flex justify-between text-sm text-gray-600 px-1 mb-1">
        <span>Strongly Disagree</span>
        <span>Disagree</span>
        <span>Neutral</span>
        <span>Agree</span>
        <span>Strongly Agree</span>
      </div>

      <input
        type="range"
        min="-2"
        max="2"
        step="1"
        defaultValue="0"
        onChange={handleChange}
        className="w-full accent-indigo-600"
      />
    </div>
  );
};

export default QuestionCard;
