import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import "./styles.css";
import InputForm from "./components/InputForm";
import QuestionList from "./components/QuestionList";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resourceId, setResourceId] = useState(1); // Default to Codeforces

  const handleFormSubmit = async (inputData) => {
    console.clear();
    setLoading(true);
  
    try {
      const response = await fetch(`https://next-problem-api.vercel.app/${inputData.methodNumber}/?handle=${inputData.handle}&resource_id=${inputData.resourceId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "handle": inputData.handle,
          // "resource_id": inputData.resourceId,
        },
      });
      console.log("The response is -",response);
      const result = await response.json();
  
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Unexpected response format:", result);
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="app-container">
      <h1>Next-Problem</h1>
      <InputForm
        resourceId={resourceId}
        setResourceId={setResourceId}
        onSubmit={handleFormSubmit}
        isLoading={loading}
      />
      {loading && <div className="loader"></div>}
      {!loading && data ? (
        <QuestionList questions={data} />
      ) : (
        !loading && <p>No data to display</p>
      )}
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;