import React, { useState } from "react";
import data from "./dummy";
const About = () => {
  const [MyRollNo, setMyRollNo] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [rollNo, setRollNo] = useState();

  const getData = (e) => {
    setMyRollNo(e.target.value);
  };

  const getParticulatStudentData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].rollNo == MyRollNo) {
        return data[i];
      }
    }
    return null;
  };

  const getUserData = () => {
    if (MyRollNo) {
      const stuData = getParticulatStudentData();
      setName(stuData.name);
      setGender(stuData.gender);
      setAge(stuData.age);
      const stuAddress = stuData?.address || "no Address";
      setAddress(stuAddress);
      setRollNo(stuData.rollNo);
    }
  };

  return (
    <>
      <h1>ur roll no is {MyRollNo} </h1>
      <input
        type="number"
        placeholder="please enter roll no"
        onChange={getData}
        value={MyRollNo}
      />
      <button onClick={getUserData} type="button">
        search
      </button>
      <button onClick={getData}>reset roll no</button>
      <div>
        <h1>my student data</h1>

        <h3>{name}</h3>
        <h3>{rollNo}</h3>
        <h3>{gender}</h3>
        <h3>{age}</h3>
        <h3>{address}</h3>
      </div>
    </>
  );
};

export default About;
