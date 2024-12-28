import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [handle, setHandle] = useState("");
  const [resourceId, setResourceId] = useState("");
  const [methodNumber, setMethodNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ handle, resourceId, methodNumber: parseInt(methodNumber, 10) });
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
          type="text"
          value={resourceId}
          onChange={(e) => setResourceId(e.target.value)}
          required
        />
      </label>
      <label>
        Method Number:
        <input
          type="number"
          value={methodNumber}
          onChange={(e) => setMethodNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;