import React, { createContext, useState } from "react";
import Child from "./Child";

const GContext = createContext(null);

const Parent = () => {
  const [name, setName] = useState("sonu");
  const [age, setAge] = useState(10);

  return (
    <>
      <GContext.Provider value={{ age, setAge, name, setName }}>
        <Child name={name} />
      </GContext.Provider>
    </>
  );
};

export default Parent;
export { GContext };
