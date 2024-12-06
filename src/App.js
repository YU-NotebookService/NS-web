import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from 'GlobalStyles';
import Layout from 'layouts/Layout';
import Main from 'pages/main/Main';
import Login from 'pages/login/Login';
import Register from 'pages/login/Register';
import NotebookList from 'pages/notebook/NotebookList';
import NoticeList from 'pages/notice/NoticeList';
import QuestionList from 'pages/question/QuestionList';
import NotebookInfo from 'pages/notebook/NotebookInfo';
import QuestionInfo from 'pages/question/QuestionInfo';
import NotebookReg from 'pages/notebook/NotebookReg';
import QuestionReg from 'pages/question/QuestionReg';
import MyPage from 'pages/MyPage';
import Error from 'pages/Error';
import NoticeInfo from 'pages/notice/NoticeInfo';
import NoticeReg from 'pages/notice/NoticeReg';
import { useAuth } from 'api/context/AuthProvider';
import NotebookModify from 'pages/notebook/NotebookModify';
import QuestionModify from 'pages/question/QuestionModify';
import { LoadingBar } from './components/common/LoadingBar';
import RentalRequestList from 'pages/admin/RentalRequestList';
import AllUserList from 'pages/admin/AllUserList';
import NoticeModify from 'pages/notice/NoticeModify';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    console.log('사용자 인증 정보 로딩 중...');
    return <LoadingBar />; // 로딩 UI를 표시
  }

  if (!user) {
    console.log('인증되지 않은 사용자. 로그인 페이지로 이동.');
    return <Navigate to="/" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    console.log('권한 부족. 메인 페이지로 이동.');
    return <Navigate to="/main" replace />;
  }

  return children;
};

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route
              path="main"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route path="notebook">
              <Route
                path="list"
                element={
                  <ProtectedRoute>
                    <NotebookList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="info/:notebookId"
                element={
                  <ProtectedRoute>
                    <NotebookInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="reg"
                element={
                  <ProtectedRoute requiredRole="ADMIN">
                    <NotebookReg />
                  </ProtectedRoute>
                }
              />
              <Route
                path="modify/:notebookId"
                element={
                  <ProtectedRoute requiredRole="ADMIN">
                    <NotebookModify />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="notice">
              <Route
                path="list"
                element={
                  <ProtectedRoute>
                    <NoticeList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="info/:noticeId"
                element={
                  <ProtectedRoute>
                    <NoticeInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="reg"
                element={
                  <ProtectedRoute requiredRole="ADMIN">
                    <NoticeReg />
                  </ProtectedRoute>
                }
              />

              <Route
                path="modify/:noticeId"
                element={
                  <ProtectedRoute>
                    <NoticeModify />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="question">
              <Route
                path="list"
                element={
                  <ProtectedRoute>
                    <QuestionList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="info/:questionId"
                element={
                  <ProtectedRoute>
                    <QuestionInfo />
                  </ProtectedRoute>
                }
              />
              <Route
                path="reg"
                element={
                  <ProtectedRoute>
                    <QuestionReg />
                  </ProtectedRoute>
                }
              />
              <Route
                path="modify/:questionId"
                element={
                  <ProtectedRoute>
                    <QuestionModify />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="mypage"
              element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }
            />
            <Route path="adminpage">
              <Route
                path=""
                element={
                  <ProtectedRoute requiredRole="ADMIN">
                    <RentalRequestList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="users"
                element={
                  <ProtectedRoute requiredRole="ADMIN">
                    <AllUserList />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
