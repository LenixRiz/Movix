import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Shows  from './pages/Shows';
import Movies from './pages/Movies';
import Streams from './pages/Streaming';
import NoPage from './pages/NoPage';
import Admin from './pages/admin/Admin';
import List from "././pages/admin/list/List";
import Single from "././pages/admin/single/Single";
import New from "././pages/admin/new/New";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import './App.css';

function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    if(!currentUser) {
      return <Navigate to='/signin' />
    }
    return children;
  }


  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signup' element={<SignUp/>} />
            <Route path='signin' element={<SignIn/>} />
            <Route path='movies' element={<Movies/>} />
            <Route path='shows' element={<Shows/>} />
            <Route path='streams' element={<Streams/>} />
            <Route path='admin' element={<RequireAuth><Admin/></RequireAuth>} />
            <Route path='*' element={<NoPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;