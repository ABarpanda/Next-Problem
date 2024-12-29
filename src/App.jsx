import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import InputForm from "./components/InputForm";
import QuestionList from "./components/QuestionList";
import Navbar from "./components/Navbar";
import MethodPage from "./components/MethodPage";

const App = () => {
  const [data, setData] = React.useState(null);

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
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <div className="app-container">
                <h1>Next-Problem</h1>
                <InputForm onSubmit={handleFormSubmit} />
                {data ? <QuestionList questions={data} /> : <p>No data to display</p>}
              </div>
            }
          />

          {/* Method-specific routes */}
          <Route
            path="/:method"
            element={<MethodPage />} // Component to handle method-specific pages
          />
        </Routes>
      </div>
    </Router>
  );
  
};

export default App;