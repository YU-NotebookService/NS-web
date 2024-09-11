import React from 'react';
import GlobalStyles from './GlobalStyles';
import FooterLayout from './layouts/FooterLayout';
import HeaderLayout from './layouts/HeaderLayout';

function App() {
  return (
    <>
      <GlobalStyles />

      <HeaderLayout />
      <FooterLayout />
    </>
  );
}

export default App;
