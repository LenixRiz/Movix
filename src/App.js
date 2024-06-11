import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Shows  from './pages/Shows';
import Movies from './pages/Movies';
import NoPage from './pages/NoPage';
// import Admin from './pages/Admin';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='signup' element={<SignUp/>} />
            <Route path='signin' element={<SignIn/>} />
            <Route path='movies' element={<Movies/>} />
            <Route path='shows' element={<Shows/>} />
            {/* <Route path='shows' element={<Admin/>} /> */}
            <Route path='*' element={<NoPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;