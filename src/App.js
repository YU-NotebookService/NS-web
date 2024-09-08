import React from 'react';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/header/Layout';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout />
      <div className="Content">
        <div>Content</div>
      </div>
    </>
  );
}

export default App;
