import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
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
