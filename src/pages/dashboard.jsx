import { useLogin } from "../hooks/useLogin";
import { Sidebar, Table } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { RiHistoryFill } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import NavBar from "../components/Fragments/NavBar";
import { useEffect, useState } from "react";
import { getAllHistory, getAllUsers } from "../services/dashboard.service";

const DashboardPage = () => {
  const { fullName, email, role } = useLogin();
  const [selectedItem, setSelectedItem] = useState("users");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    if (role === "u") {
      console.error("Access Restricted!");
      window.location.href = "/";
    } else {
      if (selectedItem === "users") {
        getAllUsers((status, res) => {
          if (status) {
            setUsers(res.data);
          } else {
            console.error(res);
          }
        });
      } else {
        getAllHistory((status, res) => {
          if (status) {
            setHistories(res.data);
          } else {
            console.error(res);
          }
        });
      }
    }
  }, [role, selectedItem]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <NavBar fullName={fullName} email={email} role={role} />
      <div className="flex justify-between gap-2 relative">
        <button
          className={`lg:hidden fixed top-1/2 ${
            sidebarOpen ? "left-52" : "left-0"
          } z-10 bg-green-500 text-white p-2 rounded-r-lg`}
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
        <Sidebar className={`lg:block ${sidebarOpen ? "block" : "hidden"}`}>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#users"
                icon={HiUser}
                label={users.length}
                onClick={() => setSelectedItem("users")}
              >
                Pengguna
              </Sidebar.Item>
              <Sidebar.Item
                href="#histories"
                icon={RiHistoryFill}
                onClick={() => setSelectedItem("histories")}
              >
                Riwayat Pecarian
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>

        {/* User Layout */}
        {selectedItem === "users" && (
          <div className="overflow-x-auto flex-grow px-4 pb-4">
            <p className="text-xl text-gray-500 font-semibold my-4">
              Daftar Pengguna
            </p>
            <Table>
              <Table.Head>
                <Table.HeadCell>ID</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Nama Lengkap</Table.HeadCell>
                <Table.HeadCell>Kata Sandi</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {users.length > 0 &&
                  users.map((user) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={user.id}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {user.id}
                      </Table.Cell>
                      <Table.Cell>{user.email}</Table.Cell>
                      <Table.Cell>{user.fullname}</Table.Cell>
                      <Table.Cell>{user.password}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
        )}

        {/* History Layout */}
        {selectedItem === "histories" && (
          <div className="overflow-x-auto flex-grow px-4 pb-4">
            <p className="text-xl text-gray-500 font-semibold my-4">
              Daftar Riwayat Pencarian
            </p>
            <Table>
              <Table.Head>
                <Table.HeadCell>Kata Kunci</Table.HeadCell>
                <Table.HeadCell>ID Pencarian</Table.HeadCell>
                <Table.HeadCell>ID Pengguna</Table.HeadCell>
                <Table.HeadCell>Tanggal</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {histories.length > 0 &&
                  histories.map((history) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={history.search_id}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {history.keyword}
                      </Table.Cell>
                      <Table.Cell>{history.search_id}</Table.Cell>
                      <Table.Cell>{history.user_id}</Table.Cell>
                      <Table.Cell>{history.search_date}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default DashboardPage;
