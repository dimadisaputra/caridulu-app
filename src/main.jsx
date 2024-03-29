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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="867982525405-q3hac87moqe7782frd9tunssee3f2g12.apps.googleusercontent.com">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
