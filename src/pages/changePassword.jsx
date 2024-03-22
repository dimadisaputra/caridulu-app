import Input from "../components/Elements/Input";
import { Button } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { changePassword } from "../services/auth.service";
import { useState } from "react";
import { SHA256 } from "crypto-js";

const ChangePasswordPage = () => {
  const { token } = useParams();
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setIsError("Kata sandi dan konfirmasi kata sandi kamu gak sama");
      return;
    }

    const data = {
      change_pwd_token: token,
      new_password: SHA256(password).toString(),
    };

    changePassword(data, (status, res) => {
      if (status) {
        setIsSuccess(true);
      } else {
        setIsError(res.response.data.detail);
      }
    });
  };

  return (
    <div>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-md shadow-lg p-8 rounded-lg">
          {!isSuccess && (
            <>
              <p className="text-green-500 text-4xl font-bold py-2">
                Ubah Kata Sandi
              </p>
              <p className="text-sm mb-8 text-gray-500">
                Pastikan kata sandi yang kamu masukkan sudah benar.
              </p>
              <form onSubmit={handleSubmit}>
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
                <Button color="success" type="submit" className="w-full">
                  Ubah Kata Sandi
                </Button>
              </form>
              <p className="font-bold text-red-700 text-center my-4 text-sm">
                {isError}
              </p>
            </>
          )}

          {isSuccess && (
            <div className="text-center">
              <p className="text-green-500 text-4xl font-bold py-2">
                Kata Sandi berhasil diubah!
              </p>
              <p className="text-sm my-8 text-gray-500">
                Silahkan masuk menggunakan kata sandi baru.
              </p>
              <p className="text-sm my-6">
                Masuk ke sekarang?{" "}
                <Link
                  to="/login"
                  className="font-bold text-green-500 hover:text-green-700"
                  onClick={() => setIsSuccess(false)}
                >
                  Masuk Akun
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
