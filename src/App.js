import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/Layout';
import Main from './pages/main/Main';
import FooterLayout from './layouts/FooterLayout';
import HeaderLayout from './layouts/HeaderLayout';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
          </Route>
          <Route path="" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
