import React, { useContext } from "react";
import { GContext } from "./Parent";

const GChild = () => {
  const { name, age, seName, setAge } = useContext(GContext);

  return (
    <>
      <h1>ur name is :---{name} </h1>
      <h3>ur age {age}</h3>
    </>
  );
};

export default GChild;
