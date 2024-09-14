import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Login from './pages/login/Login';


function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;
