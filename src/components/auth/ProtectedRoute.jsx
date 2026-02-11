// src/components/auth/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // در اینجا باید منطق تشخیص لاگین بودن کاربر را بنویسید.
  // فعلاً فرض می‌کنیم اگر چیزی به نام 'token' یا 'user' در localStorage باشد، یعنی لاگین است.
  // نکته: بعداً که Context یا Redux راه انداختید، این خط را به‌روز کنید.
  const isAuth = localStorage.getItem("token") || localStorage.getItem("user");

  // اگر لاگین بود: <Outlet /> اجازه می‌دهد که فرزندان (صفحه نوتیفیکیشن) رندر شوند.
  // اگر نبود: <Navigate /> کاربر را به صفحه لاگین می‌فرستد.
  // ویژگی replace باعث می‌شود دکمه Back مرورگر درست کار کند.
  return isAuth ? <Outlet /> : <Navigate to="/users/login" replace />;
};

export default ProtectedRoute;
