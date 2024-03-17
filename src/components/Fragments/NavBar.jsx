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

const NavBar = (props) => {
  const location = useLocation();
  const isPublic = location.pathname === "/" || "/search";
  const isHomePage = location.pathname === "/";
  const isSearchPage = location.pathname === "/search";
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState();
  const { fullName, email, value } = props;

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    accessToken ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const handleLogout = () => {
    logout((status, res) => {
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
            <div className="flex-none">
              <Link to={"/"}>
                <img
                  src="images/caridulu-logo-light.png"
                  alt="Logo Caridulu"
                  className="h-6"
                />
              </Link>
            </div>
            {isSearchPage && <FormSearch value={value}></FormSearch>}
          </>
        )}

        {!isLogin && (
          <Link to="/login">
            <Button className="flex-none">Masuk</Button>
          </Link>
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
              <span className="block text-sm">{fullName}</span>
              <span className="block truncate text-sm font-medium">
                {email}
              </span>
            </Dropdown.Header>
            {!isHomePage && (
              <Link to={"/"}>
                <Dropdown.Item>Beranda</Dropdown.Item>
              </Link>
            )}
            <Link to={"/account"}>
              <Dropdown.Item>Akun</Dropdown.Item>
            </Link>
            <Link to={"/history"}>
              <Dropdown.Item>Riwayat</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Keluar
            </Dropdown.Item>
          </Dropdown>
        )}
      </nav>
    </>
  );
};

export default NavBar;
