import Input from "../components/Elements/Input";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/auth.service";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [isSuccess, setIsSuccess] = useState();
  const [isError, setIsError] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: event.target.email.value,
    };

    forgotPassword(data, (status, res) => {
      if (status) {
        setIsSuccess(true);
      } else {
        setIsError(res.response.data.detail);
      }
    });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-md shadow-lg p-8 rounded-lg">
        {!isSuccess && (
          <>
            <p className="text-green-500 text-4xl font-bold py-2">
              Lupa Kata Sandi?
            </p>
            <p className="text-sm mb-8 text-gray-500">
              Masukkan email akun kamu untuk mengatur ulang kata sandi kamu.
            </p>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                id="email"
                placeholder="emailkamu@email.com"
                title="Email"
              />
              <Button color="success" type="submit" className="w-full">
                Kirim Email
              </Button>
            </form>
            <p className="font-bold text-red-700 text-center my-4 text-sm">
              {isError}
            </p>
            <p className="text-center text-sm my-6">
              Kembali?{" "}
              <Link
                to="/login"
                className="font-bold text-green-500 hover:text-green-700"
              >
                Masuk Akun
              </Link>
            </p>
          </>
        )}

        {isSuccess && (
          <div className="text-center">
            <p className="text-green-500 text-4xl font-bold py-2">
              Email sudah terkirim!
            </p>
            <p className="text-sm my-8 text-gray-500">
              Silahkan cek email kamu untuk melakukan atur ulang kata sandi.
            </p>
            <p className="text-sm my-6">
              Email belum terkirim?{" "}
              <Link
                to="#"
                className="font-bold text-green-500 hover:text-green-700"
                onClick={() => setIsSuccess(false)}
              >
                Kirim Ulang
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
