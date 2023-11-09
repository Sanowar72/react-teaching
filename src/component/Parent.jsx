import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

const Parent = () => {
  const navigate = useNavigate();
  const { allData, watchListData, setWatchListData } = useContext(MyContext);
  const addwatchList = (ele) => {
    if (!watchListData.some((data) => data.id === ele.id)) {
      setWatchListData((pre) => [...pre, ele]);
    }
  };

  return (
    <>
      <div>
        {allData.length > 0 &&
          allData.map((ele) => {
            return (
              <div key={ele.id} style={{ display: "flex" }}>
                <p>{ele.name}</p>
                <button onClick={() => addwatchList(ele)}>plus</button>
              </div>
            );
          })}
      </div>
      <button
        onClick={() => {
          navigate("/watchlist");
        }}
      >
        go to watchlist
      </button>
    </>
  );
};

export default Parent;
