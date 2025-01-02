import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [handle, setHandle] = useState("");
  const [resourceId, setResourceId] = useState(1);
  const [methodNumber, setMethodNumber] = useState(101);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSubmit({ 
      handle, 
      resourceId, 
      methodNumber: parseInt(methodNumber, 10) 
    });
  
    setIsLoading(true);
  
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };
  
  const handleButtonClick = (id) => {
    setResourceId(id); // Update the resource ID
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <label>
        Handle/Username:
        <input
          type="text"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          required
        />
      </label>
      <div className="resource-selector">
        <p>Select Resource:</p>
        <button
          type="button"
          className={`resource-button ${resourceId === 1 ? "selected" : ""}`}
          onClick={() => handleButtonClick(1)}
        >
          Codeforces
        </button>
        <button
          type="button"
          className={`resource-button ${resourceId === 2 ? "selected" : ""}`}
          onClick={() => handleButtonClick(2)}
        >
          Codechef
        </button>
        <button
          type="button"
          className={`resource-button ${resourceId === 102 ? "selected" : ""}`}
          onClick={() => handleButtonClick(102)}
        >
          Leetcode
        </button>
        <button
          type="button"
          className={`resource-button ${resourceId === 93 ? "selected" : ""}`}
          onClick={() => handleButtonClick(93)}
        >
          Atcoder
        </button>
      </div>
      {/* <label>
        Method Number:
        <input
          type="number"
          value={methodNumber}
          onChange={(e) => setMethodNumber(Number(e.target.value))}
          required
        />
      </label> */}
      <button type="submit" disabled={isLoading} className="submit-button">
        {isLoading ? "Submitting..." : "Submit"}
      </button>
      {isLoading && <div className="loader"></div>}
    </form>
  );
};

export default InputForm;