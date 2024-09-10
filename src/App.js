import React from 'react';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/header/Layout';
import Login from './layouts/login/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout />
      <Login />
      <div className="Content">
      
      </div>
    </>
  );
}

export default App;
