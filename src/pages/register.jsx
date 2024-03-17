import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

const RegisterPage = () => {
  const { fullName, email } = useLogin(true);

  useEffect(() => {
    if (fullName) {
      window.location.href = "/";
    }
  }, [fullName]);

  return (
    <AuthLayouts
      title="Daftar Akun"
      desc="Pastiin semua data kamu sudah bener ya!"
      type="register"
    >
      <FormRegister></FormRegister>
    </AuthLayouts>
  );
};

export default RegisterPage;
