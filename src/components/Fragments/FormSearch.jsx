import Input from "../Elements/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createHistory } from "../../services/history.service";

const FormSearch = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const access_token = localStorage.getItem("access_token");

    if (access_token) {
      createHistory({ keyword }, (status, res) => {
        if (status) {
          console.log(res.data.message);
        } else {
          console.log(res);
        }
      });
    }

    if (location.pathname === "/search") {
      navigate(`?keyword=${keyword}`);
    } else {
      navigate(`search?keyword=${keyword}`);
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="relative grow">
          <Input
            type="text"
            placeholder="Cari Produkmu disini"
            id="search"
            classname="pr-10"
            onChange={handleChange}
          ></Input>
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-gray-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSearch;
