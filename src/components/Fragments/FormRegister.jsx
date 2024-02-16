import Button from "../Elements/Button"
import Input from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <Input
        title="Nama Lengkap"
        type="text"
        id="fullName"
        placeholder="Nama Lengkap Kamu"
      ></Input>
      <Input
        title="Email"
        type="email"
        id="email"
        placeholder="emailkamu@email.com"
      ></Input>
      <Input
        title="Kata Sandi"
        type="password"
        id="password"
        placeholder="katasandikamu123"
      ></Input>
      <Input
        title="Konfirmasi Kata Sandi"
        type="password"
        id="confirmPassword"
        placeholder="katasandikamu123"
      ></Input>
      <Button classname="text-white bg-green-700 hover:bg-green-800 w-full">
        Daftar
      </Button>
    </form>
  );
};

export default FormRegister;
