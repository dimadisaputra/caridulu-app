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
    logout((status, res) => {
      if (status) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/";
      } else {
        console.log(res.response.data.detail);
        setOpenModal(false);
      }
    });
  };

  return (
    <>
      <NavBar fullName={fullName} email={email}></NavBar>
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        desc="Apa kamu yakin mau Keluar?"
        trueAction={handleLogout}
      />
      <div className="flex flex-col gap-8 min-h-screen items-center m-4">
        <div className="w-full max-w-4xl md:text-left text-center">
          <div className="text-3xl font-semibold mb-4">
            <span className="text-gray-700">Halo, </span>
            <span className="text-green-500">{fullName}!</span>
          </div>
          <p className="mb-4 md:mb-20 text-gray-700">
            Kamu terdaftar dengan email <b>{email}</b>
          </p>
          <div className="flex justify-center md:justify-end items-center gap-2">
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
