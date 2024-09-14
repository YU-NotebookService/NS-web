import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Register from './pages/register/Register';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="" element = {<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
