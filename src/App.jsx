import { useEffect, useState } from "react";
import React from "react";
import styles from "./app.module.css";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Career from "./component/career/Career";
import Reviews from "./component/reviews/Reviews";
import axios from "axios";

function App() {
  const [activeLink, setActiveLink] = useState("home");
  const [data, setData] = useState([]);

  const getApiData = async () => {
    try {
      const myData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(myData.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  return (
    <>
      <div className={styles.flex}>
        <h4
          onClick={() => setActiveLink("home")}
          className={
            activeLink === "home" ? styles.activeLink : styles.nonActiveLink
          }
        >
          Home
        </h4>
        <h4
          onClick={() => setActiveLink("about")}
          className={
            activeLink === "about" ? styles.activeLink : styles.nonActiveLink
          }
        >
          About
        </h4>
        <h4
          onClick={() => setActiveLink("career")}
          className={
            activeLink === "career" ? styles.activeLink : styles.nonActiveLink
          }
        >
          Career
        </h4>
        <h4
          onClick={() => setActiveLink("reviews")}
          className={
            activeLink === "reviews" ? styles.activeLink : styles.nonActiveLink
          }
        >
          Reviews
        </h4>
      </div>
      {activeLink === "home" && <Home userData={data} myname="sonu" />}
      {activeLink === "about" && <About />}
      {activeLink === "career" && <Career />}
      {activeLink === "reviews" && <Reviews />}
    </>
  );
}

export default App;
