import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, desc = "", type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-green-700 text-4xl font-bold">{title}</h1>
        <p className="text-sm text-slate-600 mb-8">{desc}</p>
        {children}
        <p className="text-center text-sm my-6">
          {type === "login" ? "Belum punya akun? " : "Sudah punya akun? "}

          {type === "login" && (
            <Link
              to="/register"
              className="font-bold text-green-700 hover:text-green-800"
            >
              Daftar Akun
            </Link>
          )}

          {type === "register" && (
            <Link
              to="/login"
              className="font-bold text-green-700 hover:text-green-800"
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
