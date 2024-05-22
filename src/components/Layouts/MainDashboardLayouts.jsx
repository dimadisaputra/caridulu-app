import NumberLayouts from "./NumberLayouts";
import UserRegBarChart from "../Fragments/UserRegBarChart";
import CountHistoryLineChart from "../Fragments/CountHistoryLineChart";
import TopKeywordsBarChart from "../Fragments/TopKeywordsBarChart";
import HistoryRolePieChart from "../Fragments/HistoryRolePieChart";
import MarketplaceVisitsPieChart from "../Fragments/MarketplaceVisitsPieChart";

const MainDashboardLayouts = (props) => {
  const { users, histories, productVisits } = props;
  return (
    <div>
      <div className="flex flex-col items-center justify-around gap-8 md:flex-row-reverse">
        <div>
          <p className="text-4xl text-green-500 font-bold">
            Halo Admin &#128075;,
          </p>
          <p className="text-2xl text-gray-600">
            Semoga Harimu Menyenangkan ...
          </p>
        </div>
        <div>
          <NumberLayouts type="users" users={users}></NumberLayouts>
          <NumberLayouts type="histories" histories={histories}></NumberLayouts>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-24 items-center">
        <div className="w-full">
          <UserRegBarChart users={users}></UserRegBarChart>
          <CountHistoryLineChart histories={histories}></CountHistoryLineChart>
          <TopKeywordsBarChart histories={histories}></TopKeywordsBarChart>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center gap-4">
          <HistoryRolePieChart histories={histories}></HistoryRolePieChart>
          <MarketplaceVisitsPieChart
            productVisits={productVisits}
          ></MarketplaceVisitsPieChart>
        </div>
      </div>
    </div>
  );
};

export default MainDashboardLayouts;
