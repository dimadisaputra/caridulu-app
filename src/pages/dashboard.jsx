import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import NavBar from "../components/Fragments/NavBar";
import {
  getAllHistory,
  getAllUsers,
  getAllProductVisits,
} from "../services/dashboard.service";
import UserDashboardLayouts from "../components/Layouts/UserDashboardLayouts";
import HistoryDashboardLayouts from "../components/Layouts/HistoryDashboardLayouts";
import MainDashboardLayouts from "../components/Layouts/MainDashboardLayouts";
import TemporaryDrawer from "../components/Fragments/TemporaryDrawer";

const DashboardPage = () => {
  const { fullName, email, role } = useLogin();
  const [users, setUsers] = useState([]);
  const [histories, setHistories] = useState([]);
  const [productVisits, setProductVisits] = useState([]);
  const [listOpen, setListOpen] = useState("Utama");

  useEffect(() => {
    if (role === "u") {
      console.error("Access Restricted!");
      window.location.href = "/";
    } else {
      getAllUsers((status, res) => {
        if (status) {
          setUsers(res.data);
        } else {
          console.error(res);
        }
      });

      getAllHistory((status, res) => {
        if (status) {
          setHistories(res.data);
        } else {
          console.error(res);
        }
      });

      getAllProductVisits((status, res) => {
        if (status) {
          setProductVisits(res.data);
        } else {
          console.error(res);
        }
      });
    }
  }, [role]);

  return (
    <>
      <NavBar fullName={fullName} email={email} role={role}>
        <TemporaryDrawer setListOpen={setListOpen}></TemporaryDrawer>
      </NavBar>

      <div className="p-8 ">
        {listOpen === "Utama" && (
          <MainDashboardLayouts
            users={users}
            histories={histories}
            productVisits={productVisits}
          />
        )}
        {listOpen === "Pengguna" && <UserDashboardLayouts users={users} />}
        {listOpen === "Riwayat Pencarian" && (
          <HistoryDashboardLayouts histories={histories} />
        )}
      </div>
    </>
  );
};

export default DashboardPage;
