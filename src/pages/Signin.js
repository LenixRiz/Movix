import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './sign.css'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {

  const [error, setError] = useState(false); // Initialize error state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type: "LOGIN", payload: user})
        if (email.includes("admin")) {
          navigate('/admin'); // Redirect to admin page
        } else {
          navigate('/'); // Redirect to home page
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true); // Update error state to true
      });
  }

  return (
    <div className="signup-container">
      <div className="signup-grid">
        <div className="signup-form">
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Sign Up</button>
            {error && <span className="error-message">Wrong email or password!</span>} 
          </form>
          <p>Doesn't have an account? <a to="/signin">Sign In</a></p>
        </div>
        <div className="signup-image">
          {/* Replace with your actual image */}
          <img src="https://images.unsplash.com/photo-1503023345541-14a0db4086e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Signup Image" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;

//api