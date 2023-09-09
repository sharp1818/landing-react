import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />}  />
    </Routes>
  );
};

export default AppRoutes;