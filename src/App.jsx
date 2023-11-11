import React, { useEffect, useRef } from "react";
import MyTable from "./MyTable";

const App = () => {
  const myref = useRef(null);
  useEffect(() => {
    myref.current.click();
  }, []);
  return (
    <>
      <h3>this is useref</h3>
      <input type="file" ref={myref} />
      <button onClick={() => myref.current.click()}>click me</button>
      <MyTable />
    </>
  );
};

export default App;
