import React from "react";
import styles from "./home.module.css";
const Home = ({ userData: myData, myname }) => {
  //   const { userData: myData, myname } = props;

  return (
    <>
      <div>
        {myData.map((ele) => {
          return (
            <div className={styles.parent} key={ele.id}>
              <div>{ele.id}</div>
              <div>{ele.title}</div>
              <div>{ele.userId}</div>
              <div>{ele.body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
