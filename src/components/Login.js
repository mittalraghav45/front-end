import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect (() => {
      const auth = localStorage.getItem("user");
      if (auth) {
        navigate("/");
      }
    },
    []);
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();

    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("ehh wrong creds !");
    }
  };
  return (
    <div className="login">
      <h3 style={{ marginRight: "30%" }}>Login</h3>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>

      <button className="appButton" type="button" onClick={handleLogin}>
        {" "}
        Login{" "}
      </button>
    </div>
  );
};

export default Login;
