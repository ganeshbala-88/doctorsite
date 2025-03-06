import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Payment from './pages/Payment';
import Finddocter from './pages/Finddocter';
import Home from './pages/Home';
// import Login from './pages/Login/Login';
import Login from './pages/Login';
import SymptomAnalyzer from './pages/SymptonAnalyzer';


const Allroutes = () => {
  return (
  
      <Routes>
        <Route path='/' exact={true} element={<Home/>}/>
        <Route path="/payments" element={<Payment />} />
        <Route path="/doctors" element={<Finddocter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<SymptomAnalyzer />} />
      
      </Routes>
   
  );
};

export default Allroutes;