import NumberLayouts from "./NumberLayouts";
import WidgetLayouts from "./WidgetLayouts";
import UserRegBarChart from "../Fragments/UserRegBarChart";
import { FaArrowTrendUp, FaTable } from "react-icons/fa6";
import { BsFillBarChartFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";

function Toolbar() {
  return (
    <div className="font-bold">
      <GridToolbarFilterButton />
    </div>
  );
}

const UserDashboardLayouts = ({ users }) => {
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
  return (
    <>
      <NumberLayouts type="users" users={users} />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <WidgetLayouts>
          <WidgetLayouts.Header title="Pengguna Mendaftar">
            <FaArrowTrendUp className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <UserRegBarChart users={users} />
        </WidgetLayouts>

        <WidgetLayouts>
          <WidgetLayouts.Header title="Aktivitas Terakhir Pengguna">
            <BsFillBarChartFill className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <Box sx={{ height: 400, width: "100%" }}>
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
              disableRowSelectionOnClick
            />
          </Box>
        </WidgetLayouts>

        <WidgetLayouts classname="col-span-2">
          <WidgetLayouts.Header title="Data Pengguna">
            <FaTable className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <Box sx={{ height: 400, width: "100%" }}>
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
              disableRowSelectionOnClick
            />
          </Box>
        </WidgetLayouts>
      </div>
    </>
  );
};

export default UserDashboardLayouts;
