import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnontherCount] = useState(10);

  // useEffect(() => {
  //   console.log("component did mount");
  // }, [count, anotherCount]);

  // useEffect(() => {
  //   console.log("second useeffect");
  // }, [count, anotherCount]);

  // useLayoutEffect(() => {
  //   console.log("use layout effect");
  // }, [count, anotherCount]);

  // const increaseCount = () => {
  //   for (let index = 0; index < 5; index++) {
  //     setCount((pre) => pre + 1);
  //   }
  // };
  // console.log(count, "count value");

  return (
    <>
      {/* <h1>first count {count}</h1>
      <h1>second count {anotherCount}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>click me for 1st cout</button>
      <button onClick={() => setAnontherCount(anotherCount + 1)}>
        second count
      </button> */}
      {/* <button onClick={increaseCount}>update count</button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
