import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import './adminStyle/admin.css';
import Anggota from './Anggota';
import MovieInp from './MovieInp';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('anggota');
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/admin/${tab}`);
  };

  return (
    <div className="admin-container">
      <div className="sidebar">
        <h4 style={{color:"black", margin: "16px 0"}}>Admin Dashboard</h4>
        <ul>
          <li
            className={activeTab === 'anggota' ? 'active' : ''}
            onClick={() => handleTabChange('anggota')}
          >
            <Link to="/admin/anggota">Anggota</Link>
          </li>
          <li
            className={activeTab === 'movieinp' ? 'active' : ''}
            onClick={() => handleTabChange('movieinp')}
          >
            <Link to="/admin/movieinp">Movie Input</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="anggota" element={<Anggota />} />
          <Route path="movieinp" element={<MovieInp />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
