import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
