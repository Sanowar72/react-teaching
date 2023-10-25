import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>plus</button>
      <button onClick={decrement}>minus</button>
    </>
  );
}

export default App;
