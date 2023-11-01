import React, { useEffect, useLayoutEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnontherCount] = useState(10);

  useEffect(() => {
    console.log("component did mount");
  }, [count, anotherCount]);

  useEffect(() => {
    console.log("second useeffect");
  }, [count, anotherCount]);

  useLayoutEffect(() => {
    console.log("use layout effect");
  }, [count, anotherCount]);

  return (
    <>
      <h1>first count {count}</h1>
      <h1>second count {anotherCount}</h1>
      <button onClick={() => setCount(count + 1)}>click me for 1st cout</button>
      <button onClick={() => setAnontherCount(anotherCount + 1)}>
        second count
      </button>
    </>
  );
};

export default App;
