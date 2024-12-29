import React from "react";
import { useParams } from "react-router-dom";

const MethodPage = () => {
  const { method } = useParams();

  return (
    <div className="method-page">
      <h2>Selected Method: {method}</h2>
      {/* Add logic to handle the method-specific functionality */}
    </div>
  );
};

export default MethodPage;
