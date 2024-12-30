import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [handle, setHandle] = useState("");
  const [resourceId, setResourceId] = useState(1);
  const [methodNumber, setMethodNumber] = useState(101);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ handle, resourceId, methodNumber: parseInt(methodNumber, 10) });
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // alert("Form submitted successfully!");
    }, 2000);
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
      <label>
        Resource ID:
        <input
          type="number"
          value={resourceId}
          onChange={(e) => setResourceId(Number(e.target.value))}
          required
        />
      </label>
      <label>
        Method Number:
        <input
          type="number"
          value={methodNumber}
          onChange={(e) => setMethodNumber(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit">Submit</button>
      {isLoading && <div className="loader" />}
    </form>
  );
};

export default InputForm;