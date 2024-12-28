import React from "react";

const QuestionList = ({ questions }) => {
  return (
    <div className="question-list">
      {questions.map((item, index) => (
        <div key={index} className="question-item">
          <p>{item["Problem name"]}</p>
          <p>Rating: {item["Problem rating"]}</p>
          <a href={item["Problem link"]} target="_blank" rel="noopener noreferrer">
            <button>View Problem</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;