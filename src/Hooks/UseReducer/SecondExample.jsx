import { useReducer, useState } from "react";
import inputReducer from "./secondFile";
let initialValue = {
  name: "",
  email: "",
};

const SecondExample = () => {
  const [state, dispatch] = useReducer(inputReducer, initialValue);

  const handleInputName = (e) => {
    dispatch({ type: "Name", payload: e.target.value });
  };

  const handleInputEmail = (e) => {
    dispatch({ type: "Email", payload: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: "Reset" });
  };
  return (
    <>
      <h3>Form</h3>
      <input
        type="text"
        value={state.name}
        placeholder="Search a Name"
        onChange={handleInputName}
      />

      <input
        type="email"
        value={state.email}
        placeholder="Search a Email"
        onChange={handleInputEmail}
      />
      <button onClick={handleReset}>Reset Value</button>
      <h3>Preview:</h3>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </>
  );
};
export default SecondExample;
