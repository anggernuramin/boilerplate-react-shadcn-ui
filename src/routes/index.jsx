import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("@pages/dashboard"));
const Layout = lazy(() => import("@container/MainLayout"));
const Login = lazy(() => import("@pages/login"));
const NotFound = lazy(() => import("@components/molecules/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
