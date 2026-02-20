import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/rootLayout/RootLayout";

// Pages
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
