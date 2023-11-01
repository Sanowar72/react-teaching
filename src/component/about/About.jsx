import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  useEffect(() => console.log("About component mounted"));
  return (
    <>
      <div>About</div>
      <button onClick={() => navigate("/")}>go home</button>
    </>
  );
};

export default About;
