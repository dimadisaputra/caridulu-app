import { FaTable, FaMagnifyingGlassChart } from "react-icons/fa6";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarFilterButton } from "@mui/x-data-grid";
import WidgetLayouts from "./WidgetLayouts";
import CountHistoryLineChart from "../Fragments/CountHistoryLineChart";
import HistoryRolePieChart from "../Fragments/HistoryRolePieChart";
import DeviceUsagePieChart from "../Fragments/DeviceUsagePieChart";
import BrowserUsagePieChart from "../Fragments/BrowserUsagePieChart";
import TopKeywordsBarChart from "../Fragments/TopKeywordsBarChart";
import NumberLayouts from "./NumberLayouts";

function Toolbar() {
  return (
    <div className="font-bold">
      <GridToolbarFilterButton />
    </div>
  );
}

const HistoryDashboardLayouts = ({ histories }) => {
  const historiesColumns = [
    { field: "history_id", headerName: "ID", width: 200 },
    { field: "user_id", headerName: "isUser", type: "boolean", width: 70 },
    { field: "ip_add", headerName: "IP Address", width: 100 },
    { field: "keyword", headerName: "Query", width: 200 },
    {
      field: "result_count",
      headerName: "Result Count",
      type: "number",
      width: 100,
    },
    {
      field: "created_at",
      headerName: "Dibuat",
      width: 200,
      type: "dateTime",
      valueGetter: (value) => value && new Date(value),
    },
    { field: "user_agent", headerName: "User Agent", width: 200 },
  ];

  return (
    <>
      <NumberLayouts type="histories" histories={histories} />

      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        <WidgetLayouts>
          <WidgetLayouts.Header title="Jumlah Pencarian per Hari">
            <FaMagnifyingGlassChart className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <CountHistoryLineChart histories={histories}></CountHistoryLineChart>
        </WidgetLayouts>
        <WidgetLayouts>
          <WidgetLayouts.Header title="Kata Kunci Paling Sering di Cari">
            <FaMagnifyingGlassChart className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <TopKeywordsBarChart histories={histories}></TopKeywordsBarChart>
        </WidgetLayouts>
        <WidgetLayouts classname="col-span-2">
          <WidgetLayouts.Header title="Rasio Pencarian Pengguna">
            <FaMagnifyingGlassChart className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <div className="flex md:flex-row flex-col items-center justify-around">
            <HistoryRolePieChart histories={histories}></HistoryRolePieChart>
            <DeviceUsagePieChart histories={histories}></DeviceUsagePieChart>
            <BrowserUsagePieChart histories={histories}></BrowserUsagePieChart>
          </div>
        </WidgetLayouts>
        <WidgetLayouts classname="col-span-2">
          <WidgetLayouts.Header title="Data Pencarian">
            <FaTable className="text-2xl text-green-500" />
          </WidgetLayouts.Header>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={histories}
              getRowId={(row) => row.history_id}
              columns={historiesColumns}
              slots={{
                toolbar: Toolbar,
              }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
                sorting: {
                  sortModel: [{ field: "created_at", sort: "desc" }],
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

export default HistoryDashboardLayouts;
