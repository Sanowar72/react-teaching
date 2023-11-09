import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Parent from "./component/Parent";
import Child from "./component/Child";
import axios from "axios";
const MyContext = createContext(null);
const App = () => {
  const [allData, setAllData] = useState([]);
  const [watchListData, setWatchListData] = useState([]);


  
  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (res.status === 200) {
        setAllData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <MyContext.Provider
        value={{ allData, setAllData, watchListData, setWatchListData }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Parent />} />
            <Route path="/watchlist" element={<Child />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
};

export default App;
export { MyContext };
