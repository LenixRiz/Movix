import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>} {/* Display error message */}
      </form>
    </div>
  );
}

export default SignIn;
