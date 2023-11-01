import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const naviagate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const resetFunc = () => {
    setEmail("");
    setName("");
    setPassword("");
  };
  
  const submitData = (e) => {
    e.preventDefault();
    const payload = {
      name,
      myemail: email,
      password: password,
    };
    console.log(payload);
  };

  return (
    <>
      <form onSubmit={submitData}>
        <h1>Form in progress....</h1>
        <h3>Please enter ur name</h3>
        <input
          type="text"
          placeholder="enter ur name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <h3>enter ur email</h3>
        <input
          type="email"
          placeholder="enter ur email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <h3>ur password</h3>
        <input
          type={!showPassword ? "password" : "text"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>
          {!showPassword ? "Show" : "Hide"}
        </button>

        <button type="submit" onSubmit={submitData}>
          submit details
        </button>
      </form>
      <button type="button" onClick={resetFunc}>
        reset all value
      </button>
      <h1>student getails: {` ${name} ${email} ${password}`}</h1>
    </>
  );
};

export default Home;
