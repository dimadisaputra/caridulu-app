import "moment/locale/id";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import CardNumber from "../Fragments/CardNumber";
import { FaUser, FaUserClock } from "react-icons/fa";
import {
  FaMagnifyingGlassPlus,
  FaMagnifyingGlassArrowRight,
} from "react-icons/fa6";

const NumberLayouts = (props) => {
  const { type, users = [], histories = [] } = props;

  const [usersRegisteredToday, setUserRegisteredToday] = useState(0);
  const [usersLoggedInToday, setUsersLoggedInToday] = useState(0);
  const [searchInToday, setSearchInToday] = useState(0);

  useEffect(() => {
    countSearchInToday(histories);
    countUserRegisteredToday(users);
    countUsersLoggedInToday(users);
  }, [users, histories]);

  const countUserRegisteredToday = (users) => {
    const today = moment().startOf("day");
    const count = users.filter((user) => {
      const userCreationDate = moment(user.created_at);
      return userCreationDate.isSame(today, "day");
    }).length;
    setUserRegisteredToday(count);
  };

  const countUsersLoggedInToday = (users) => {
    const today = moment().startOf("day");
    const count = users.filter((user) => {
      const userLastLoginDate = moment(user.last_login);
      return userLastLoginDate.isSame(today, "day");
    }).length;
    setUsersLoggedInToday(count);
  };

  const countSearchInToday = (histories) => {
    const today = moment().startOf("day");
    const count = histories.filter((history) => {
      const userLastLoginDate = moment(history.created_at);
      return userLastLoginDate.isSame(today, "day");
    }).length;
    setSearchInToday(count);
  };

  if (type === "users") {
    return (
      <div className="md:flex-row flex flex-col gap-4 items-center my-4">
        <CardNumber number={users.length} title="Total Pengguna">
          <FaUser className="text-xl text-green-500" />
        </CardNumber>
        <CardNumber
          number={usersLoggedInToday}
          numberDesc="hari ini"
          title="Pengguna Masuk"
        >
          <FaUserClock className="text-2xl text-green-500" />
        </CardNumber>
        <CardNumber
          number={usersRegisteredToday}
          numberDesc="hari ini"
          title="Pengguna Daftar"
        >
          <FaUserClock className="text-2xl text-green-500" />
        </CardNumber>
      </div>
    );
  } else if (type === "histories") {
    return (
      <div className="md:flex-row flex flex-col gap-4 items-center my-4">
        <CardNumber number={histories.length} title="Total Pencarian">
          <FaMagnifyingGlassPlus className="text-xl text-green-500" />
        </CardNumber>
        <CardNumber
          number={searchInToday}
          numberDesc="hari ini"
          title="Total Pencarian"
        >
          <FaMagnifyingGlassArrowRight className="text-2xl text-green-500" />
        </CardNumber>
      </div>
    );
  }
};

export default NumberLayouts;
