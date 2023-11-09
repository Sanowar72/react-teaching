import React, { useContext } from "react";
import { MyContext } from "../App";
const Child = () => {
  const { allData, watchListData, setWatchListData } = useContext(MyContext);
  console.log(watchListData);
  const deletFromWatchList = (ele) => {
    const tempdata = watchListData.filter((data) => data.id !== ele.id);
    setWatchListData(tempdata);
  };
  return (
    <>
      {watchListData.length > 0 &&
        watchListData.map((ele) => {
          return (
            <div key={ele.id}>
              <p>{ele.name}</p>
              <button onClick={() => deletFromWatchList(ele)}>
                delete from watchlist
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Child;
