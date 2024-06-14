/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@pages/home/"));
const Product = lazy(() => import("@pages/product"));
const Payment = lazy(() => import("@pages/payment"));

const Layout = lazy(() => import("@container/MainLayout"));
const Login = lazy(() => import("@pages/login"));
const NotFound = lazy(() => import("@components/molecules/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/data-table-product",
        element: <Product />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
