import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/error.jsx";
import HomePage from "./pages/home.jsx";
import SearchPage from "./pages/search.jsx";
import AccountPage from "./pages/account.jsx";
import HistoryPage from "./pages/history.jsx";
import ForgotPasswordPage from "./pages/forgotPassword.jsx";
import ChangePasswordPage from "./pages/changePassword.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DashboardPage from "./pages/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/search",
    element: <SearchPage></SearchPage>,
  },
  {
    path: "/account",
    element: <AccountPage></AccountPage>,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/change-password/:token",
    element: <ChangePasswordPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
