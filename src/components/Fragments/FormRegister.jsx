import { useState } from "react";
import { register } from "../../services/auth.service";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { SHA256 } from "crypto-js";

const FormRegister = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    const fullname = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!fullname || !email || !password || !confirmPassword) {
      setErrorMessage("Mohon lengkapi semua kolom.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Kata sandi dan konfirmasi kata sandi kamu gak sama");
      return;
    }

    const data = { fullname: fullname, email: email, password: SHA256(password).toString() };

    register(data, (status, res) => {
      if (status) {
        window.location.href = "/login"
      } else {
        setErrorMessage(res.response.data.detail);
      }
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        title="Nama Lengkap"
        type="text"
        id="fullname"
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
        minLength="8"
      ></Input>
      <Input
        title="Konfirmasi Kata Sandi"
        type="password"
        id="confirmPassword"
        placeholder="katasandikamu123"
        minLength="8"
      ></Input>
      <Button
        classname="text-white bg-green-700 hover:bg-green-800 w-full"
        type="submit"
      >
        Daftar
      </Button>
      {errorMessage && (
        <p className="font-bold text-red-700 text-center my-4 text-sm">
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default FormRegister;
