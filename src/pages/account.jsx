import NavBar from "../components/Fragments/NavBar";
import Button from "../components/Elements/Button";
import { useState } from "react";
import { logout } from "../services/auth.service";
import { ConfirmModal } from "../components/Fragments/ConfirmModal";
import { useLogin } from "../hooks/useLogin";

const AccountPage = () => {
  const { fullName, email } = useLogin();
  const [openModal, setOpenModal] = useState(false);

  const handleLogout = () => {
    const accessToken = localStorage.getItem("access_token");

    logout(accessToken, (status, res) => {
      if (status) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
      } else {
        console.log(res.response.data.detail);
        setOpenModal(false);
      }
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        desc="Apa kamu yakin mau Keluar?"
        trueAction={handleLogout}
      />
      <div className="flex flex-col gap-8 min-h-screen items-center m-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-semibold text-green-600 mb-4">
            Selamat Datang, {fullName}!
          </h1>
          <p className="mb-20">
            Kamu terdaftar dengan email <b>{email}</b>
          </p>
          <div className="flex justify-end items-center gap-2">
            {/* <Button>Ubah Akun</Button> */}
            <Button
              classname="bg-red-700 text-white"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Keluar
            </Button>
            {/* <Button classname="bg-gray-800 text-white">Hapus Akun</Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
