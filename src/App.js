import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlansPage from './pages/PlansPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/plans" element={<PlansPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
