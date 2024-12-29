import React, { useState } from "react";
import "./styles.css";
import InputForm from "./components/InputForm";
import QuestionList from "./components/QuestionList";

const App = () => {
  const [data, setData] = useState(null);

  const handleFormSubmit = async (inputData) => {
    console.clear();

    try {
      const response = await fetch(`https://next-problem.vercel.app/${inputData.methodNumber}/?handle=${inputData.handle}&resource_id=${inputData.resourceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "handle": inputData.handle,
          // "resource_id": inputData.resourceId,
        },
      });
      console.log("The response is -",response);
      const result = await response.json();
  
      // Ensure data is an array
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Unexpected response format:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    }
  };
  

  return (
    <div className="app-container">
      <h1>Next-Problem</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {data ? <QuestionList questions={data} /> : <p>No data to display</p>}
    </div>
  );
};

export default App;