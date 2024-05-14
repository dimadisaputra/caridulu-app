import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import NavBar from "../components/Fragments/NavBar";
import { getAllHistory, getAllUsers } from "../services/dashboard.service";
import Divider from "@mui/material/Divider";
import UserDashboardLayouts from "../components/Layouts/UserDashboardLayouts";
import HistoryDashboardLayouts from "../components/Layouts/HistoryDashboardLayouts";

const DashboardPage = () => {
  const { fullName, email, role } = useLogin();
  const [users, setUsers] = useState([]);
  const [histories, setHistories] = useState([]);

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
    }
  }, [role]);

  return (
    <>
      <NavBar fullName={fullName} email={email} role={role} />

      <div className="p-8 ">
        <UserDashboardLayouts users={users} />
        <div className="my-8">
          <Divider />
        </div>
        <HistoryDashboardLayouts histories={histories} />
      </div>
    </>
  );
};

export default DashboardPage;
