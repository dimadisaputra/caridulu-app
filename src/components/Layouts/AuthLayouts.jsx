import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, desc = "", type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md shadow-lg p-8 rounded-lg">
        <h1 className="text-green-500 text-4xl font-bold py-2">{title}</h1>
        <p className="text-sm text-slate-600 mb-8">{desc}</p>
        {children}
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
