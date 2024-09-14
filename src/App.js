import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Register from './layouts/register/Layout';

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
