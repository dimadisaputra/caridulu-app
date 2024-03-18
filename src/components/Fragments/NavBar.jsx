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
  const isHomePage = location.pathname === "/";
  const isSearchPage = location.pathname === "/search";
  const [isLogin, setIsLogin] = useState();
  const { fullName, email, value } = props;

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    accessToken ? setIsLogin(true) : setIsLogin(false);
  }, []);

  return (
    <>
      <nav className="flex flex-row flex-wrap md:flex-nowrap items-center p-4 md:p-8 justify-between gap-4">
        <div className="flex-none order-1">
          <Link to={"/"}>
            <img
              src="images/caridulu-logo-light.png"
              alt="Logo Caridulu"
              className="h-9 md:h-12"
            />
          </Link>
        </div>

        {isSearchPage && (
          <div className="order-last md:order-2 w-full">
            <FormSearch />
          </div>
        )}

        <div className="order-3">
          {isLogin ? (
            <NavBar.Profile
              fullName={fullName}
              email={email}
              isHomePage={isHomePage}
            />
          ) : (
            <NavBar.Login />
          )}
        </div>
      </nav>
    </>
  );
};

const Login = () => {
  return (
    <Link to="/login">
      <Button className="flex-none">Masuk</Button>
    </Link>
  );
};

const Profile = (props) => {
  const { fullName, email, isHomePage } = props;
  const [openModal, setOpenModal] = useState(false);

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
    <div>
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        desc="Apa kamu yakin mau Keluar?"
        trueAction={handleLogout}
      />
      <Dropdown
        label={
          <FontAwesomeIcon
            icon={faCircleUser}
            className="md:text-4xl text-3xl text-green-500"
          />
        }
        arrowIcon={false}
        inline
      >
        <Dropdown.Header>
          <span className="block text-sm">{fullName}</span>
          <span className="block truncate text-sm font-medium">{email}</span>
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
          className="text-red-700"
        >
          Keluar
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

NavBar.Profile = Profile;
NavBar.Login = Login;

export default NavBar;
