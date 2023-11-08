import React, { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Parent from "./component/Parent";
import Child from "./component/Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnontherCount] = useState(10);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/about" element={<Child />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
