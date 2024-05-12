import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import NavBar from "../components/Fragments/NavBar";
import NumberLayouts from "../components/Layouts/NumberLayouts";
import { getAllHistory, getAllUsers } from "../services/dashboard.service";
import VerticalBarChart from "../components/Fragments/VerticalBarChart";
import "moment/locale/id";
import moment from "moment/moment";
import { FaArrowTrendUp, FaTable } from "react-icons/fa6";
import { BsFillBarChartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import WidgetLayouts from "../components/Layouts/WidgetLayouts";

function Toolbar() {
  return (
    <div className="font-bold">
      <GridToolbarFilterButton />
    </div>
  );
}

const DashboardPage = () => {
  const { fullName, email, role } = useLogin();
  const [users, setUsers] = useState([]);
  const [histories, setHistories] = useState([]);
  const [chartData, setChartData] = useState();
  const lastActUserColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Nama", width: 150 },
    {
      field: "last_login",
      headerName: "Terakhir Masuk",
      width: 180,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
    {
      field: "last_updated",
      headerName: "Terakhir Perbaharui",
      width: 180,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
  ];

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Nama", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 70 },
    {
      field: "created_at",
      headerName: "Dibuat",
      width: 200,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
    {
      field: "last_login",
      headerName: "Terakhir Masuk",
      width: 200,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
    {
      field: "last_updated",
      headerName: "Terakhir Perbaharui",
      width: 200,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
  ];

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
    }
  }, [role]);

  useEffect(() => {
    prepareChartData();
  }, [users]);

  const prepareChartData = () => {
    const months = Array(12).fill(0);
    users.forEach((user) => {
      const month = moment(user.created_at).month();
      months[month]++;
    });

    const monthLabels = moment
      .months()
      .map((month) => moment(month, "MMMM").format("MMM"));

    setChartData({
      labels: monthLabels,
      datasets: [
        {
          label: "Pengguna Mendaftar per Bulan",
          data: months,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    });
  };

  console.log(users);

  return (
    <>
      <NavBar fullName={fullName} email={email} role={role} />

      <div className="p-8 bg-gray-50">
        <p className="text-3xl text-gray-500 font-semibold">Halo Admin</p>
        <p className="text-sm text-gray-400">Semoga harimu menyenangkan!</p>

        <NumberLayouts users={users} />

        <div className="grid grid-cols-2 gap-4">
          {chartData && (
            <WidgetLayouts>
              <WidgetLayouts.Header title="Pengguna Mendaftar">
                <FaArrowTrendUp className="text-2xl text-green-500" />
              </WidgetLayouts.Header>
              <VerticalBarChart chartData={chartData} />
            </WidgetLayouts>
          )}

          <WidgetLayouts>
            <WidgetLayouts.Header title="Aktivitas Terakhir Pengguna">
              <BsFillBarChartFill className="text-2xl text-green-500" />
            </WidgetLayouts.Header>
            <div style={{ height: 360, width: "100%" }}>
              <DataGrid
                rows={users}
                columns={lastActUserColumns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                  sorting: {
                    sortModel: [{ field: "last_login", sort: "desc" }],
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          </WidgetLayouts>

          <WidgetLayouts classname="col-span-2">
            <WidgetLayouts.Header title="Data Pengguna">
              <FaTable className="text-2xl text-green-500" />
            </WidgetLayouts.Header>
            <div style={{ height: 500, width: "100%" }}>
              <DataGrid
                rows={users}
                columns={userColumns}
                slots={{
                  toolbar: Toolbar,
                }}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[10, 20]}
              />
            </div>
          </WidgetLayouts>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
