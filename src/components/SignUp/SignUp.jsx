import React from "react";
import "./SignUp.css"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

 function SignUp() {
    const navigate = useNavigate(); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    // const [passwordVisible, setPasswordVisible] = useState(false); 
    // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const handleUsernameChange = (event) => setUsername(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
    const validatePassword = (password) => {
      if (password.length < 6) {
        return "Password must be at least 6 characters.";
      }
      if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
      }
      if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number.";
      }
      return "";
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError); 
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSubmitted(true);
  };
      const goToLogin = () => navigate("/");

  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <div className="inputBox">
          <input type="text" placeholder="Username" required onChange={handleUsernameChange} maxLength={30}/>
        </div>
        <div className="inputBox">
          <input type="numbers" placeholder="age" required/>
        </div>
        <div className="inputBox">
          <input type="email" placeholder="Email id" required/>
        </div>
        <div className="inputBox">
          <select name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
          </select>
          </div>
        <div className="inputBox">
          <input type="password" placeholder=" Create Password" id="create" name="create" required onChange={handlePasswordChange} maxLength={30}/>
        </div>
        <div className="inputBox">
          <input type="password" placeholder=" Confirm Password" id="confirm" name="confirm" required onChange={handleConfirmPasswordChange} maxLength={30}/>
        </div>
        {error && <div className="error">{error}</div>} 
        {/* <div className="inputBox">
        <input type={passwordVisible ? "text" : "password"} placeholder="Create Password" required onChange={handlePasswordChange} maxLength={30} />
        <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}> {passwordVisible ? "Hide" : "Show"}
        </button>
        </div>
        <div className="inputBox">
        <input type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" required onChange={handleConfirmPasswordChange} maxLength={30} />
        <button type="button"onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} > {confirmPasswordVisible ? "Hide" : "Show"}
        </button>
        </div> */}
        <button type="submit">Sign Up</button>
        <button onClick={goToLogin}>Login</button>
      </form>
      {submitted && (
        <div>
          <h3>Entered Information:</h3>
          <p>Username: {username}</p>
          <p>Password: {password}</p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
