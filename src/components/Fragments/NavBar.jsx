"use client";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Elements/Button";
import { Dropdown } from "flowbite-react";
import FormSearch from "./FormSearch";
import { ConfirmModal } from "./ConfirmModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../services/auth.service";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    accessToken ? setIsLogin(true) : setIsLogin(false);
  }, []);

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
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        desc="Apa kamu yakin mau Keluar?"
        trueAction={handleLogout}
      />{" "}
      <nav
        className={`flex items-center py-8 px-8 ${
          isHomePage ? "justify-end" : "justify-between"
        } gap-8`}
      >
        {!isHomePage && (
          <>
            <img
              src="images/caridulu-logo-light.png"
              alt="Logo Caridulu"
              className="h-6 flex-none"
            />
            <FormSearch></FormSearch>
          </>
        )}

        {/* Cek apakah user sudah login? */}
        {/* Jika belum yang muncul adalah tombol login */}
        {/* Jika sudah yang muncul adalah UserAvatar */}
        {!isLogin && (
          <Button className="flex-none">
            <Link to="/login">Masuk</Link>
          </Button>
        )}

        {isLogin && (
          <Dropdown
            label={
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-4xl text-green-700"
              />
            }
            arrowIcon={false}
            inline
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item as="a" href="/account">
              Akun
            </Dropdown.Item>
            <Dropdown.Item as="a" href="/history">
              Riwayat
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Logout
            </Dropdown.Item>
          </Dropdown>
        )}
      </nav>
    </>
  );
};

export default NavBar;
