import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

const LoginPage = () => {
  const { fullName, email } = useLogin(true);

  useEffect(() => {
    if (fullName) {
      window.location.href = "/";
    }
  }, [fullName]);

  return (
    <AuthLayouts
      title="Masuk Akun"
      desc="Pastiin Email dan Kata Sandi mu bener ya!"
      type="login"
    >
      <FormLogin></FormLogin>
    </AuthLayouts>
  );
};

export default LoginPage;
