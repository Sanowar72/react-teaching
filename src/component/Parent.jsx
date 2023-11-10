import React, { memo, useState } from "react";

const Parent = () => {
  console.log("this is parent");
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Parent{count}</div>
      <button onClick={() => setCount(count + 1)}>increase parent count</button>
    </>
  );
};

export default memo(Parent);
