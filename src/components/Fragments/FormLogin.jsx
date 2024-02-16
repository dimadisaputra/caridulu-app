import Button from "../Elements/Button";
import Input from "../Elements/Input";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/";
  };
  return (
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
          to="/forgot"
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
  );
};

export default FormLogin;
