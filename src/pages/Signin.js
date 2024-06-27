import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './sign.css'
import NavBar from "../components/navbar";
import log from "../assets/log.jpg"

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
    <>
    <NavBar />
    <div className="signup-container">
      <div className="signup-grid">
        <div className="signup-form">
          <form onSubmit={handleLogin}>
            <h2 style={{color: "black"}}>Login</h2>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Sign In</button>
            {error && <span className="error-message">Wrong email or password!</span>} 
          </form>
          <p style={{color: "black"}}>Doesn't have an account? <a onClick={() => navigate('/signup')}>Sign Up</a></p>
        </div>
        <div className="signup-image">
          {/* Replace with your actual image */}
          <img src='https://unsplash.com/photos/the-walking-dead-dvd-movie-wMkaMXTJjlQ' alt="Signup Image" />
        </div>
      </div>
    </div>
    </>
    
    
  );
}

export default SignIn;

//api