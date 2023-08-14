import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_BUTTON":
      return { count: state.count + 1 };
    case "DECREMENT_BUTTON":
      return { count: state.count - 1 };
    case "RESET_BUTTON":
      return { count: 0 };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="font-mono text-5xl flex min-h-screen justify-center items-center flex-col">
      <div className=" shadow-lg bg-zinc-100 p-5">
        <p className="grid place-items-center py-3"> {state.count}</p>
        <div className="space-x-4 p-5 pt-9 ">
          <button
            onClick={() => dispatch({ type: "INCREMENT_BUTTON" })}
            className="shadow p-2 border-2 border-zinc-800 rounded-lg "
          >
            +1
          </button>
          <button
            onClick={() => dispatch({ type: "DECREMENT_BUTTON" })}
            className="shadow p-2 px-4 border-2 border-zinc-800 rounded-lg"
          >
            -1
          </button>
          <button
            onClick={() => dispatch({ type: "RESET_BUTTON" })}
            className="shadow p-2 border-zinc-800 rounded-lg border-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
