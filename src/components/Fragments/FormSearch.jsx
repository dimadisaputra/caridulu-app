import Input from "../Elements/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FormSearch = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (location.pathname === "/search") {
      navigate(`?keyword=${keyword}`);
    } else {
      navigate(`search?keyword=${keyword}`);
    }
  };

  const handleCange = (event) => {
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
            onChange={handleCange}
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
