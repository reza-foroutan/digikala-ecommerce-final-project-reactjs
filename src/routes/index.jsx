import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout/RootLayout";
import { Suspense } from "react";
import HomePage from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";



const Loading = () => (
  <div className="p-4 box-border text-center">در حال بارگذاری...</div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <div>صفحه ورود</div>,
  },
]);
