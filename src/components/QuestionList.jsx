import React from "react";

const QuestionList = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((item, index) => (
        <div key={index} className="question-item">
          <p>{item["Problem name"]}</p>
          <a href={item["Problem link"]} target="_blank" rel="noopener noreferrer">
            <button>View Problem</button>
          </a>
          <p>Rating: {item["Problem rating"]}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;