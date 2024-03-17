import { useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { Link } from "react-router-dom";
import { SHA256 } from "crypto-js";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
      password: SHA256(event.target.password.value).toString(),
    };

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("access_token", res.access_token);
        localStorage.setItem("refresh_token", res.refresh_token);
        window.location.href = "/";
      } else {
        setLoginFailed(res.response.data.detail);
      }
    });
  };
  return (
    <>
      <form onSubmit={handleLogin}>
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
        <div className="my-3">
          <Link
            to="#"
            className="font-bold text-green-700 hover:text-green-800 text-sm"
          >
            Lupa Kata Sandi?
          </Link>
        </div>
        <Button
          classname="text-white bg-green-700 hover:bg-green-800 w-full"
          type="submit"
        >
          Masuk
        </Button>
      </form>
      {loginFailed && (
        <p className="font-bold text-red-700 text-center my-4 text-sm">
          {loginFailed}
        </p>
      )}
    </>
  );
};

export default FormLogin;
