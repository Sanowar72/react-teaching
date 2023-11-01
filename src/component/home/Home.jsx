import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagate = useNavigate();
  const myFunc = () => {
    console.log("this is my func");
  };
  useEffect(() => {
    const myinterval = setInterval(myFunc, 1000);
    return () => {
      clearInterval(myinterval);
    };
  }, []);

  return (
    <>
      <div> this is Home</div>
      <button onClick={() => naviagate("/about")}>go about</button>
    </>
  );
};

export default Home;
