import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../layouts/RootLayout/RootLayout";
import ErrorState from "../components/ui/ErrorState/ErrorState";

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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
