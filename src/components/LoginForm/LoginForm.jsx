// import React from "react";
import "./LoginForm.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext.js";
function LoginForm() {
//   const { username, login } = useContext(UserContext); 
  const { login } = useContext(UserContext);
  const [inputUsername, setInputUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(inputUsername); 
    navigate("/Page");
  };

//   const goToPage = () => {
//     navigate("/Page");
//   };

//   const goToSignUp = () => {
//     navigate("/SignUp");
//   };

  return (
    <div className="wrap">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="inputBox">
          <input type="text" placeholder="Username" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} required />
        </div>
        <div className="inputBox">
          <input type="password" placeholder="Password" required />
        </div>
        {/* <button type="submit" onClick={goToPage}>
          Login
        </button>
        <button type="button" onClick={goToSignUp}>
          Sign Up
        </button> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
