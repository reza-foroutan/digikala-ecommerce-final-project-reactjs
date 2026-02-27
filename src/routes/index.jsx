// src/routes/AppRouter.jsx  (یا src/routes/index.jsx)

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../layouts/rootLayout/RootLayout";
import Home from "../pages/home/Home";
import ShopLayout from "../layouts/shopLayout/ShopLayout";
import ShopPage from "../pages/Shop/Shop";
import MagLayout from "../layouts/magLayout/MagLayout";
import MagPage from "../pages/Mag/Mag";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import LoginPage from "../pages/auth/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../components/common/ProtectedRoute";
import { AuthProvider } from "../context/AuthContext";
import Terms from "../pages/terms/Terms";
import Privacy from "../pages/privacy/privacy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // صفحه اصلی
      {
        index: true,
        element: <Home />,
      },
      {
        path: "page/terms",
        element: <Terms />,
      }, {
        path: "page/privacy",
        element: <Privacy />,
      },
    ],
  },
  {
    path: "shop",
    element: <ShopLayout />,
    children: [{ index: true, element: <ShopPage /> }],
  },
  {
    path: "mag",
    element: <MagLayout />,
    children: [{ index: true, element: <MagPage /> }],
  }, // auth
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      // صفحات بعدی داشبورد:
      // { path: "users",    element: <UsersPage /> },
      // { path: "orders",   element: <OrdersPage /> },
      // { path: "products", element: <ProductsPage /> },
    ],
  },
]);

const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default AppRouter;
