import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
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