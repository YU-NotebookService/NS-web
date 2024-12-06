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
        setUser(parsedUser);
      }

      if (storedToken) {
        setAccessToken(storedToken);
      }
    } catch (error) {
      console.error('로컬 스토리지 데이터 파싱 중 오류:', error);
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = ({ user, token }) => {
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
