import React, { memo } from "react";

const Child = () => {
  console.log("this is child");
  return <div>Child</div>;
};

export default memo(Child);
