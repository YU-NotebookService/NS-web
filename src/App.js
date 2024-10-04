import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles';
import Layout from 'layouts/Layout';
import Main from 'pages/main/Main';
import Login from 'pages/login/Login';
import Register from 'pages/login/Register';
import NotebookList from 'pages/notebook/NotebookList';
import NoticeList from 'pages/notice/NoticeList';
import QuestionList from 'pages/question/QuestionList';
import NotebookInfo from 'pages/notebook/NotebookInfo';
import QuestionInfo from 'pages/question/QuestionInfo'
import NotebookReg from 'pages/notebook/NotebookReg';
import QuestionReg from 'pages/question/QuestionReg';

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
              <Route path="info" element={<NotebookInfo />} />
              <Route path="reg" element={<NotebookReg />} />
            </Route>
            <Route path="notice">
              <Route path="list" element={<NoticeList />} />
            </Route>
            <Route path="question">
              <Route path="list" element={<QuestionList />} />
              <Route path="info" element={<QuestionInfo />} />
              <Route path="reg" element={<QuestionReg />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
