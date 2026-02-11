import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout/RootLayout";
import ErrorState from "../components/ui/ErrorState/ErrorState";
import LoginPage from "@/pages/users/login/LoginPage";
import NotificationPage from "@/pages/profile/notification/NotificationPage";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// ایمپورت لیزی (Lazy Load)
// نکته: مطمئن شوید فایل Home.jsx در مسیر pages/Home/Home.jsx وجود دارد
const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: (
      <div className="p-10 flex justify-center">
        <ErrorState />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users/login", // دقت کنید اسلش / اول را نگذارید
        element: <LoginPage />,
      }, // سایر مسیرها مثل سبد خرید و ...
      {
        path: "checkout/cart",
        element: <div>سبد خرید</div>, // موقت
      },
      // ۲. اضافه کردن مسیر جدید برای اعلانات:

      // ۲. ایجاد یک بخش محافظت شده برای تمام صفحات پروفایل
      {
        element: <ProtectedRoute />, // گارد امنیتی
        children: [
          {
            path: "profile/notification",
            element: <NotificationPage />,
          },
          // در آینده بقیه صفحات شخصی مثل "سفارش‌های من" را هم اینجا اضافه کنید
          // { path: "profile/orders", element: <OrdersPage /> },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
