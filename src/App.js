import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/Layout';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<Layout />}>
            <Route path="main" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
