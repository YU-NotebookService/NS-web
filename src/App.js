import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/Layout';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
