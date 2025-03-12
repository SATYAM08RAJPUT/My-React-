import { useReducer } from "react";

let initialValue = {
  count: 0,
};

function CountReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
  }
}

const FirstUseReducer = () => {
  const [state, dispatch] = useReducer(CountReducer, initialValue);

  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <>
      <button onClick={handleDecrement}>Decrement</button>
      <h2>Counter: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};
export default FirstUseReducer;
