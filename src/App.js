import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import FavPage from './Components/FavPage/FavPage.js';
import AdminPage from './Components/AdminPage/AdminPg.js';
let App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavPage" element={<FavPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;
