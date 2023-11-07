import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import StudentModal from "../modal/StudentModal";
const mystyle = {
  duration: 4000,
  position: "bottom-left",
  style: {
    backgroundColor: "black",
    color: "white",
  },
};

const Home = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rollNo: "",
  });
  const [studentData, setStudentData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [searchedResult, setSearchedResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({ ...pre, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      rollNo: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const postData = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3000/api/vi/student",
        formData
      );
      console.log(result);
      if (result.status === 201) {
        toast.success("Registration Successful", mystyle);
        resetForm();
        getallData();
      }
    } catch (error) {
      toast.error("some error occured...");
      console.log(error);
    }
  };
  const getallData = async () => {
    try {
      toast.loading("loading data......", mystyle);
      const res = await axios.get(
        "http://localhost:3000/api/vi/student/allstudent"
      );
      setStudentData(res.data.data);
      if (res.status === 200) {
        toast.dismiss();
        toast.success("data fetched", mystyle);
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error in Fetching Data", mystyle);
    } finally {
      // toast.dismiss();
    }
  };
  // useEffect(() => {
  //   getallData();
  // }, []);

  const submitData = (e) => {
    e.preventDefault();
    postData();
  };
  const searchResults = (e) => {
    setSearchInput(e.target.value);
    const tempData = e.target.value.toLowerCase();
    const searchedData = studentData.filter((ele) =>
      ele.name.toLowerCase().includes(tempData)
    );
    setSearchedResult(searchedData);
  };
  return (
    <>
      <form onSubmit={submitData}>
        <h1>Form in progress....</h1>
        <h3>Please enter your name</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />
        <h3>Please enter your roll no</h3>
        <input
          type="number"
          name="rollNo"
          placeholder="Enter your name"
          onChange={handleInputChange}
          value={formData.rollNo}
          required
        />
        <h3>Enter your email</h3>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
          value={formData.email}
          required
        />
        <h3>Your password</h3>
        <input
          type={!showPassword ? "password" : "text"}
          name="password"
          onChange={handleInputChange}
          value={formData.password}
          required
        />
        <button type="button" onClick={togglePasswordVisibility}>
          {!showPassword ? "Show" : "Hide"}
        </button>

        <button type="submit">Submit Details</button>
      </form>
      <button type="button" onClick={resetForm}>
        Reset All Values
      </button>
      <button onClick={() => getallData()}>get all students</button>
      {/* <h1>Student Details: </h1>
      <div>
        {studentData.map((ele, ind) => {
          return (
            <div key={ind}>
              <div>{ele.name}</div>
              <div>{ele.email}</div>
              <div>{ele.rollNO}</div>
              <div>{ele.password}</div>
              <hr />
            </div>
          );
        })}
      </div> */}
      <div>
        <input
          type="text"
          placeholder="search here"
          onChange={searchResults}
          value={searchInput.toUpperCase()}
        />
      </div>
      <div>
        <h1>your searched results:----</h1>
        {searchInput &&
          searchedResult.map((ele, i) => <p key={i}>{ele.name}</p>)}
      </div>
      {studentData.length > 0 && (
        <StudentModal data={studentData} setStudentDatas={setStudentData} />
      )}
      <Toaster />
    </>
  );
};

export default Home;
