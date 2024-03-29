import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { useState, useEffect } from "react";
import { loginGoogle } from "../../services/auth.service";

const AuthLayouts = (props) => {
  const { children, title, desc = "", type } = props;
  const [user, setUser] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      loginGoogle(user, (status, res) => {
        if (status) {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("refresh_token", res.refresh_token);
          window.location.href = "/";
        } else {
          console.log(res);
        }
      });
    }
  }, [user]);

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md shadow-lg p-8 rounded-lg">
        <Link to={"/"}>
          <img
            src="/images/caridulu-logo-landscape.png"
            alt="Caridulu Logo"
            className="h-8 "
          />
        </Link>
        <h1 className="text-green-500 text-4xl font-bold py-2">{title}</h1>
        <p className="text-sm text-slate-600 mb-8">{desc}</p>
        {children}
        <p className="text-center text-sm my-2">atau</p>
        <Button color="light" className="w-full" onClick={login}>
          <FcGoogle className="mr-2 h-5 w-5" />
          {type === "login" ? "Masuk " : "Daftar "} dengan Google
        </Button>
        <p className="text-center text-sm my-6">
          {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}

          {type === "login" && (
            <Link
              to="/register"
              className="font-bold text-green-500 hover:text-green-700"
            >
              Daftar Akun
            </Link>
          )}

          {type === "register" && (
            <Link
              to="/login"
              className="font-bold text-green-500 hover:text-green-700"
            >
              Masuk Akun
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
