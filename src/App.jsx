import React, { useEffect, useRef } from "react";

const App = () => {
  const myref = useRef(null);
  useEffect(() => {
    myref.current.click();
  }, []);
  return (
    <>
      <h3>this is useref</h3>
      <input type="file" ref={myref} style={{ display: "none" }} />
      <button onClick={() => myref.current.click()}>click me</button>
    </>
  );
};

export default App;
