import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('accessToken');

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (!user || JSON.stringify(user) !== JSON.stringify(parsedUser)) {
          setUser(parsedUser);
          console.log('복원된 사용자 정보:', parsedUser);
        }
      } else {
        console.log('저장된 사용자 정보 없음');
      }

      if (storedToken) {
        if (accessToken !== storedToken) {
          setAccessToken(storedToken);
          console.log('복원된 AccessToken:', storedToken);
        }
      } else {
        console.log('저장된 AccessToken 없음');
      }
    } catch (error) {
      console.error('로컬 스토리지 데이터 파싱 중 오류:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    } finally {
      setIsLoading(false);
    }
  }, [user, accessToken]);

  const login = ({ user, token }) => {
    console.log('로그인 처리 - 사용자 정보:', user, 'AccessToken:', token);
    setUser(user);
    setAccessToken(token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    console.log('로그아웃 처리');
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
