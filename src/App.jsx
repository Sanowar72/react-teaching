import React, { useState } from "react";
import Parent from "./component/Parent";
import Child from "./component/Child";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>incr</button>
      <Parent />
      <Child />
    </>
  );
};

export default App;
