import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Login from './layouts/login/Layout';
import Layout from './layouts/Layout';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  );
}

export default App;
