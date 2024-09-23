import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Layout from './layouts/Layout';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import NotebookList from './pages/notebook/NotebookList';
import QuestionList from './pages/question/QuestionList';
import QuestionListDetail from './pages/question/QuestionListDetail'; 

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="main" element={<Main />} />
            <Route path="notebook">
              <Route path="list" element={<NotebookList />} />
            </Route>
            <Route path = "question">
              <Route path='list' element={<QuestionList />} />
              <Route path='detail' element={<QuestionListDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
