import React, { createContext, useState, useContext } from "react";
// 1. ایجاد کانتکست
const AuthContext = createContext(null);
// 2. ایجاد Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    // شبیه‌سازی لاگین ساده
    if (username === "admin" && password === "1234") {
      setUser({ username: "admin", role: "admin", token: "fake-jwt-token" });
      return true;
    }
    return false;
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// 3. ایجاد هوک اختصاصی (مشکل شما احتمالا اینجا بود)
// حتما باید کلمه export اول خط باشد
export const useAuth = () => {
  return useContext(AuthContext);
};
