import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './sign.css'
import NavBar from "../components/navbar-log";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignUp = () => {

  const [error, setError] = useState(false); // Initialize error state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);


  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user})
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true); // Update error state to true
      });
  }

  return (
    <>
      <NavBar />
      <div className="signup-container">
      <div className="signup-grid">
        <div className="signup-form">
          <form onSubmit={handleSignUp}>
            <h2 style={{"color": "black"}}>Sign Up</h2>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
            {error && <span className="error-message">Wrong email or password!</span>} 
          </form>
          <p style={{"color": "black"}}>Already have an account? <a onClick={(e) => navigate("/signin")}>Sign In</a></p>
        </div>
        <div className="signup-image">
          {/* Replace with your actual image */}
          <img src="https://images.unsplash.com/photo-1503023345541-14a0db4086e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Signup Image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
