import "moment/locale/id";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import CardNumber from "../Fragments/CardNumber";
import { FaUser, FaUserClock } from "react-icons/fa";

const NumberLayouts = (props) => {
  const { users } = props;
  const [usersRegisteredToday, setUserRegisteredToday] = useState(0);
  const [usersLoggedInToday, setUsersLoggedInToday] = useState(0);

  useEffect(() => {
    countUserRegisteredToday(users);
    countUsersLoggedInToday(users);
  }, [users]);

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

  return (
    <div className="flex gap-4 items-center my-4">
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
};

export default NumberLayouts;
